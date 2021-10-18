import {useFetchMoviesQuery} from '@api/getMovies';
import Modal from '@components/Modal';
import MovieCard from '@components/MovieCard';
import ErrorMessage from '@components/UI/ErrorMessage';
import Loader from '@components/UI/Loader';
import {useAppDispatch} from '@hooks/storeHooks';
import {useRefreshControl} from '@hooks/useRefreshControl';
import ScreenWrapper from '@layouts/ScreenWrapper';
import {NavigationProps} from '@screens/FavoritesScreen/FavoritesScreen';
import {getFavoriteMovies} from '@store/asyncStorage';
import {favoritesInitialized} from '@store/favoritesSlice';
import {PRIMARY} from '@styles/colors';
import {MEDIUM, SMALL} from '@styles/spacing';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, RefreshControl, StyleSheet} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import BottomSheet from 'reanimated-bottom-sheet';

const REQUEST_STEP = 10;

type HomeScreenProps = {};

const HomeScreen: NavigationFunctionComponent<NavigationProps> =
  ({}: HomeScreenProps) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const dispatch = useAppDispatch();

    const [limit, setLimit] = useState<number>(REQUEST_STEP);
    const [currentMovieId, setCurrentMovieId] = useState<string>();
    const {
      data = [],
      isFetching,
      isLoading,
      error,
      refetch,
    } = useFetchMoviesQuery(limit);

    const {refreshing, onRefresh} = useRefreshControl(isFetching, () =>
      refetch(),
    );

    const onCardPress = useCallback(
      (id: string) => {
        bottomSheetRef.current?.snapTo(0);
        setCurrentMovieId(id);
      },
      [bottomSheetRef],
    );

    useEffect(() => {
      getFavoriteMovies()
        .then(storedMovies => {
          dispatch(favoritesInitialized(storedMovies));
        })
        .catch(() =>
          console.error('Не удалось получить Избранное из AsyncStorage'),
        );
    }, [dispatch]);

    return (
      <ScreenWrapper>
        <>
          {isLoading && <Loader size={40} stylesProp={styles.loader} />}

          {error && (
            <ErrorMessage
              text={`Произошла ошибка при получении данных: ${error}`}
            />
          )}

          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[PRIMARY]}
              />
            }
            data={data}
            renderItem={({item}) => (
              <MovieCard
                key={item.id}
                id={item.id}
                title={item.title}
                banner={item.movie_banner}
                release_date={item.release_date}
                score={item.rt_score}
                onCardPress={onCardPress}
              />
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.contentContainerStyle}
            onEndReachedThreshold={1}
            onEndReached={() => setLimit(limit + REQUEST_STEP)}
          />
          {currentMovieId && (
            <Modal bottomSheetRef={bottomSheetRef} movieId={currentMovieId} />
          )}
        </>
      </ScreenWrapper>
    );
  };

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginHorizontal: MEDIUM,
    paddingVertical: SMALL,
  },
  loader: {
    height: '100%',
    justifyContent: 'center',
  },
});

export default HomeScreen;
