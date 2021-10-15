import Button from '@components/UI/Button';
import {PRIMARY, PRIMARY_PALE, WHITE} from '@styles/colors';
import {MEDIUM, TINY} from '@styles/spacing';
import {WIDTH} from '@utils/deviceSizes';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type MovieCardProps = {
  onCardPress: () => void;
};

const MovieCard = ({onCardPress}: MovieCardProps) => {
  return (
    <TouchableOpacity
      onPress={onCardPress}
      activeOpacity={0.5}
      style={styles.card}>
      <View>
        <Text>Movie name</Text>
        <Text>Year</Text>
        <Text>Esteem</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          assumenda, cum exercitationem explicabo fugit magnam omnis ullam. Fuga
          ipsam nesciunt quod reiciendis rem. Dolorem eos eum fugit
          necessitatibus ratione sit.
        </Text>
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
});

export default MovieCard;
