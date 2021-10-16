import Button from '@components/UI/Button';
import {Icons} from '@constants/icons';
import {useAppDispatch, useAppSelector} from '@hooks/storeHooks';
import {favoriteHandled} from '@store/favoritesSlice';
import {WHITE} from '@styles/colors';
import {MEDIUM} from '@styles/spacing';
import React, {useCallback} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {shallowEqual} from 'react-redux';

type FavoriteButtonProps = {
  movieId: string;
};

const FavoriteButton = ({movieId}: FavoriteButtonProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorites, shallowEqual);
  const onFavoritePress = useCallback(
    (id: string) => {
      dispatch(favoriteHandled(id));
    },
    [dispatch],
  );

  const checkIsMovieFavorite = useCallback(
    (id: string): boolean => favorites.movieIds.some(itemId => itemId === id),
    [favorites.movieIds],
  );

  const isFavorite = checkIsMovieFavorite(movieId);
  const buttonText = isFavorite
    ? 'Убрать из избранного'
    : 'Добавить в избранное';

  return (
    <View style={styles.buttonWrapper}>
      <Button
        text={buttonText}
        onPress={() => onFavoritePress(movieId)}
        styleWrapper={styles.button}
        styleText={{color: WHITE}}
      />
      {isFavorite && <Image source={Icons.star} style={styles.star} />}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: MEDIUM,
  },
  button: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  star: {
    width: 30,
    height: 30,
    marginLeft: MEDIUM,
  },
});

export default FavoriteButton;
