import MovieCard from '@components/MovieCard';
import ScreenWrapper from '@layouts/ScreenWrapper';
import {NavigationProps} from '@screens/FavoritesScreen/FavoritesScreen';
import {SMALL} from '@styles/spacing';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

type HomeScreenProps = {};

const HomeScreen: NavigationFunctionComponent<NavigationProps> =
  ({}: HomeScreenProps) => {
    return (
      <ScreenWrapper>
        <View style={styles.container}>
          {[1, 2, 3, 23, 1, 3, 13, 311, 3].map(() => {
            return <MovieCard />;
          })}
        </View>
      </ScreenWrapper>
    );
  };

const styles = StyleSheet.create({
  container: {
    marginVertical: SMALL,
  },
});

export default HomeScreen;
