import Button from '@components/UI/Button';
import {PRIMARY, PRIMARY_PALE, WHITE} from '@styles/colors';
import {LARGE, MEDIUM, TINY} from '@styles/spacing';
import {WIDTH} from '@utils/deviceSizes';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type MovieCardProps = {
  onCardPress: () => void;
  title: string;
  banner: string;
  description: string;
  release_date: number;
  score: number;
};

const MovieCard = ({
  onCardPress,
  title,
  banner,
  description,
  release_date,
  score,
}: MovieCardProps) => {
  return (
    <TouchableOpacity
      onPress={onCardPress}
      activeOpacity={0.5}
      style={styles.card}>
      <View>
        <Text>{title}</Text>
        <Text>{release_date}</Text>
        <Text>{score}</Text>

        <Image
          style={styles.image}
          source={{
            uri: banner,
          }}
        />

        <Text>{description}</Text>
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
  image: {
    height: 200,
    width: WIDTH - LARGE * 2,
    borderRadius: TINY,
  },
});

export default MovieCard;
