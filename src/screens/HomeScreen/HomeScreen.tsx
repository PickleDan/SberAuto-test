import {Movie, useFetchMoviesQuery} from '@api/getMovies';
import Modal from '@components/Modal';
import MovieCard from '@components/MovieCard';
import ErrorMessage from '@components/UI/ErrorMessage';
import {useAppDispatch, useAppSelector} from '@hooks/storeHooks';
import {useRefreshControl} from '@hooks/useRefreshControl';
import ScreenWrapper from '@layouts/ScreenWrapper';
import {NavigationProps} from '@screens/FavoritesScreen/FavoritesScreen';
import {addedToFavorites, removedFromFavorites} from '@store/favoritesSlice';
import {PRIMARY} from '@styles/colors';
import {GIANT, MEDIUM, SMALL} from '@styles/spacing';
import React, {useCallback, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {shallowEqual} from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';

type HomeScreenProps = {};

const HomeScreen: NavigationFunctionComponent<NavigationProps> =
  ({}: HomeScreenProps) => {
    const bottomSheetRef = React.createRef<BottomSheet>();
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(state => state.favorites, shallowEqual);

    const REQUEST_STEP = 10;

    const [limit, setLimit] = useState<number>(10);
    const [currentMovie, setCurrentMovie] = useState<Movie>();
    const {data = [], isFetching, error} = useFetchMoviesQuery(limit);

    const {refreshing, onRefresh} = useRefreshControl(isFetching, () =>
      setLimit(limit),
    );

    const onCardPress = useCallback(
      (id: string) => {
        bottomSheetRef.current?.snapTo(0);
        const movie = data.find(movieItem => movieItem.id === id);
        if (!movie) {
          return;
        }
        setCurrentMovie(movie);
      },
      [bottomSheetRef, data],
    );

    const onFavoritePress = useCallback(
      (id: string) => {
        if (favorites.movieIds.some(movieId => movieId === id)) {
          dispatch(removedFromFavorites(id));
        } else {
          dispatch(addedToFavorites(id));
        }
      },
      [dispatch, favorites],
    );

    const checkIsMovieFavorite = useCallback(
      (id: string): boolean =>
        favorites.movieIds.some(movieId => movieId === id),
      [favorites.movieIds],
    );

    return (
      <ScreenWrapper>
        <>
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
                onCardPress={onCardPress}
                title={item.title}
                banner={item.movie_banner}
                release_date={item.release_date}
                score={item.rt_score}
                onFavoritePress={onFavoritePress}
                checkIsMovieFavorite={checkIsMovieFavorite}
              />
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.contentContainerStyle}
            onEndReachedThreshold={1}
            onEndReached={() => setLimit(limit + REQUEST_STEP)}
          />

          {isFetching ? (
            <View>
              <ActivityIndicator size="large" color={PRIMARY} />
            </View>
          ) : (
            <Modal
              bottomSheetRef={bottomSheetRef}
              description={currentMovie?.description}
              image={currentMovie?.image}
            />
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
    marginTop: GIANT,
  },
});

export default HomeScreen;
