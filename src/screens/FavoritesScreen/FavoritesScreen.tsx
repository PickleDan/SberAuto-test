import FavoriteCard from '@components/FavoriteCard';
import {useAppSelector} from '@hooks/storeHooks';
import ScreenWrapper from '@layouts/ScreenWrapper';
import {MEDIUM, SMALL} from '@styles/spacing';
import {typography} from '@styles/typography';
import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {shallowEqual} from 'react-redux';

type FavoritesScreenProps = {};

export interface NavigationProps {
  name: string;
}

const FavoritesScreen: NavigationFunctionComponent<NavigationProps> =
  ({}: FavoritesScreenProps) => {
    const {movieIds} = useAppSelector(state => state.favorites, shallowEqual);
    const isListEmpty = movieIds.length === 0;

    return (
      <ScreenWrapper stylesProps={styles.wrapper}>
        {isListEmpty ? (
          <Text style={styles.text}>
            Добавляйте фильмы в избранное и они появятся здесь
          </Text>
        ) : (
          <FlatList
            data={movieIds}
            renderItem={({item}) => <FavoriteCard id={item} />}
            contentContainerStyle={styles.contentContainerStyle}
          />
        )}
      </ScreenWrapper>
    );
  };

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  contentContainerStyle: {
    marginHorizontal: MEDIUM,
    paddingVertical: SMALL,
  },
  text: {
    ...typography.normalText,
    textAlign: 'center',
    maxWidth: 260,
    marginTop: MEDIUM,
  },
});

export default FavoritesScreen;
