import Button from '@components/UI/Button';
import Card from '@components/UI/Card';
import {Icons} from '@constants/icons';
import {WHITE} from '@styles/colors';
import {LARGE, MEDIUM, TINY} from '@styles/spacing';
import {typography} from '@styles/typography';
import {WIDTH} from '@utils/deviceSizes';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type MovieCardProps = {
  id: string;
  onCardPress: (id: string) => void;
  title: string;
  banner: string;
  release_date: number;
  score: number;
  onFavoritePress: (id: string) => void;
  checkIsMovieFavorite: (id: string) => boolean;
};

const MovieCard = ({
  id,
  onCardPress,
  title,
  banner,
  release_date,
  score,
  onFavoritePress,
  checkIsMovieFavorite,
}: MovieCardProps) => {
  const isFavorite = checkIsMovieFavorite(id);
  const buttonText = isFavorite
    ? 'Убрать из избранного'
    : 'Добавить в избранное';

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
        <View style={styles.buttonWrapper}>
          <Button
            text={buttonText}
            onPress={() => onFavoritePress(id)}
            styleWrapper={styles.button}
            styleText={{color: WHITE}}
          />
          {isFavorite && <Image source={Icons.star} style={styles.star} />}
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    paddingTop: MEDIUM,
    paddingHorizontal: MEDIUM,
  },
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
  star: {
    width: 30,
    height: 30,
    marginLeft: MEDIUM,
  },
});

export default React.memo(MovieCard);
