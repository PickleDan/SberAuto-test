import {useFetchMoviesQuery} from '@api/getMovies';
import Modal from '@components/Modal';
import MovieCard from '@components/MovieCard';
import ErrorMessage from '@components/UI/ErrorMessage';
import {useRefreshControl} from '@hooks/useRefreshControl';
import ScreenWrapper from '@layouts/ScreenWrapper';
import {NavigationProps} from '@screens/FavoritesScreen/FavoritesScreen';
import {PRIMARY} from '@styles/colors';
import {LARGE, MEDIUM, SMALL} from '@styles/spacing';
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

    const onCardPress = () => {
      bottomSheetRef.current?.snapTo(0);
    };

    const LIMIT_STEP = 10;

    const [limit, setLimit] = useState(10);
    const {data = [], isFetching, error} = useFetchMoviesQuery(limit);

    const {refreshing, onRefresh} = useRefreshControl(isFetching, () =>
      setLimit(limit),
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
                onCardPress={onCardPress}
                title={item.title}
                banner={item.movie_banner}
                description={item.description}
                release_date={item.release_date}
                score={item.score}
              />
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.contentContainerStyle}
            onEndReachedThreshold={1}
            onEndReached={() => setLimit(limit + LIMIT_STEP)}
          />

          {isFetching ? (
            <View>
              <ActivityIndicator size="large" color={PRIMARY} />
            </View>
          ) : (
            <Modal bottomSheetRef={bottomSheetRef} />
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
    marginTop: LARGE,
  },
});

export default HomeScreen;
