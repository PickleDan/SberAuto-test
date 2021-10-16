import {Movie, useFetchMoviesQuery} from '@api/getMovies';
import Modal from '@components/Modal';
import MovieCard from '@components/MovieCard';
import ErrorMessage from '@components/UI/ErrorMessage';
import {useRefreshControl} from '@hooks/useRefreshControl';
import ScreenWrapper from '@layouts/ScreenWrapper';
import {NavigationProps} from '@screens/FavoritesScreen/FavoritesScreen';
import {PRIMARY} from '@styles/colors';
import {GIANT, MEDIUM, SMALL} from '@styles/spacing';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import BottomSheet from 'reanimated-bottom-sheet';

type HomeScreenProps = {};

const HomeScreen: NavigationFunctionComponent<NavigationProps> =
  ({}: HomeScreenProps) => {
    const bottomSheetRef = React.createRef<BottomSheet>();

    const REQUEST_STEP = 10;

    const [limit, setLimit] = useState<number>(10);
    const [currentMovie, setCurrentMovie] = useState<Movie>();
    const {data = [], isFetching, error} = useFetchMoviesQuery(limit);

    const {refreshing, onRefresh} = useRefreshControl(isFetching, () =>
      setLimit(limit),
    );

    const onCardPress = (id: string) => {
      bottomSheetRef.current?.snapTo(0);
      const movie = data.find(movieItem => movieItem.id === id);
      if (!movie) {
        return;
      }
      setCurrentMovie(movie);
    };

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
              currentMovie={currentMovie}
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
