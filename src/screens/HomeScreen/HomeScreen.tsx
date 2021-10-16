import {useFetchMoviesQuery} from '@api/getMovies';
import Modal from '@components/Modal';
import MovieCard from '@components/MovieCard';
import ScreenWrapper from '@layouts/ScreenWrapper';
import {NavigationProps} from '@screens/FavoritesScreen/FavoritesScreen';
import {MEDIUM, SMALL} from '@styles/spacing';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import BottomSheet from 'reanimated-bottom-sheet';

type HomeScreenProps = {};

const HomeScreen: NavigationFunctionComponent<NavigationProps> =
  ({}: HomeScreenProps) => {
    const bottomSheetRef = React.createRef<BottomSheet>();

    const onCardPress = () => {
      bottomSheetRef.current?.snapTo(0);
    };

    const {data = [], isFetching} = useFetchMoviesQuery();

    console.log('data', data);

    return (
      <ScreenWrapper>
        <>
          <FlatList
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
          />
          <View>
            <Text>Number: {data.length}</Text>
          </View>
          {isFetching && (
            <View>
              <Text>Loading...</Text>
            </View>
          )}
          <Modal bottomSheetRef={bottomSheetRef} />
        </>
      </ScreenWrapper>
    );
  };

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginHorizontal: MEDIUM,
    paddingVertical: SMALL,
  },
});

export default HomeScreen;
