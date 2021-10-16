import Button from '@components/UI/Button';
import {PRIMARY, PRIMARY_PALE, WHITE} from '@styles/colors';
import {LARGE, MEDIUM, TINY} from '@styles/spacing';
import {typography} from '@styles/typography';
import {WIDTH} from '@utils/deviceSizes';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type MovieCardProps = {
  id: string;
  onCardPress: (id: string) => void;
  title: string;
  banner: string;
  release_date: number;
  score: number;
};

const MovieCard = ({
  id,
  onCardPress,
  title,
  banner,
  release_date,
  score,
}: MovieCardProps) => {
  return (
    <TouchableOpacity
      onPress={() => onCardPress(id)}
      activeOpacity={0.5}
      style={styles.card}>
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

        {/*<Text>{description}</Text>*/}
      </View>

      <Button
        text={'Добавить в избранное'}
        styleWrapper={styles.button}
        styleText={{color: WHITE}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: WIDTH - MEDIUM * 2,
    borderWidth: 1,
    borderColor: PRIMARY,
    borderRadius: TINY,
    marginVertical: TINY,
    backgroundColor: PRIMARY_PALE,
    paddingVertical: MEDIUM,
    paddingHorizontal: MEDIUM,
  },

  button: {
    marginTop: MEDIUM,
    maxWidth: 200,
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
});

export default React.memo(MovieCard);
