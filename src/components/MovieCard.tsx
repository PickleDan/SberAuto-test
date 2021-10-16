import FavoriteButton from '@components/FavoriteButton';
import Card from '@components/UI/Card';
import {LARGE, MEDIUM, TINY} from '@styles/spacing';
import {typography} from '@styles/typography';
import {WIDTH} from '@utils/deviceSizes';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type MovieCardProps = {
  id: string;

  title: string;
  banner: string;
  release_date: number;
  score: number;
  onCardPress: (id: string) => void;
  // onFavoritePress: (id: string) => void;
  // checkIsMovieFavorite: (id: string) => boolean;
};

const MovieCard = ({
  id,
  title,
  banner,
  release_date,
  score,
  onCardPress,
}: MovieCardProps) => {
  return (
    <Card isTouchable onPress={() => onCardPress(id)}>
      <View style={styles.contentWrapper}>
        <View>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.textsWrapper}>
            <Text style={styles.text}>Год выпуска: {release_date}</Text>
            <Text style={styles.text}>Рейтинг пользователей: {score}</Text>
          </View>

          <Image
            style={styles.image}
            source={{
              uri: banner,
            }}
          />
        </View>
        <FavoriteButton movieId={id} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    paddingTop: MEDIUM,
    paddingHorizontal: MEDIUM,
  },
  title: {
    ...typography.mediumTitle,
    fontWeight: '600',
  },
  textsWrapper: {
    marginTop: TINY - 2,
  },
  text: {
    ...typography.normalText,
  },
  image: {
    height: 200,
    width: WIDTH - LARGE * 2,
    borderRadius: TINY,
    marginTop: MEDIUM - 2,
  },
});

export default React.memo(MovieCard);
