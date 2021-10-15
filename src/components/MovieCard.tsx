import Button from '@components/UI/Button';
import {PRIMARY, PRIMARY_PALE, WHITE} from '@styles/colors';
import {MEDIUM, TINY} from '@styles/spacing';
import {WIDTH} from '@utils/deviceSizes';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type MovieCardProps = {};

const MovieCard = ({}: MovieCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.card}>
      <Text>Movie name</Text>
      <Text>Year</Text>
      <Text>Esteem</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
        assumenda, cum exercitationem explicabo fugit magnam omnis ullam. Fuga
        ipsam nesciunt quod reiciendis rem. Dolorem eos eum fugit necessitatibus
        ratione sit.
      </Text>

      <Button
        text={'Оценить'}
        styleWrapper={{marginTop: MEDIUM}}
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
});

export default MovieCard;
