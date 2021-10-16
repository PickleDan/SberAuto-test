import {PRIMARY, PRIMARY_PALE} from '@styles/colors';
import {MEDIUM, TINY} from '@styles/spacing';
import {WIDTH} from '@utils/deviceSizes';
import React, {ReactChild, ReactChildren} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

type CardProps = {
  children: ReactChild | ReactChildren;
  isTouchable?: boolean;
  onPress?: () => void;
};

const Card = ({children, isTouchable = false, onPress}: CardProps) => {
  return isTouchable ? (
    <TouchableOpacity activeOpacity={0.5} style={styles.card} onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={styles.card}>{children}</View>
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
  },
});

export default Card;
