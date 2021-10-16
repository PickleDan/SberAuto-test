import {useFetchMovieByIdQuery} from '@api/getMovies';
import Card from '@components/UI/Card';
import {Icons} from '@constants/icons';
import {removedFromFavorites} from '@store/favoritesSlice';
import {MEDIUM} from '@styles/spacing';
import {typography} from '@styles/typography';
import React, {useCallback} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';

type FavoriteCardProps = {
  id: string;
};

const FavoriteCard = ({id}: FavoriteCardProps) => {
  const {data} = useFetchMovieByIdQuery(id);
  const dispatch = useDispatch();

  const removeMovie = useCallback(
    movieId => {
      dispatch(removedFromFavorites(movieId));
    },
    [dispatch],
  );

  return (
    <Card>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{data?.title}</Text>
        <TouchableOpacity onPress={() => removeMovie(id)}>
          <Image source={Icons.remove} style={styles.remove} />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    padding: MEDIUM,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    ...typography.normalText,
    fontWeight: '600',
  },
  remove: {
    width: 30,
    height: 30,
  },
});

export default FavoriteCard;
