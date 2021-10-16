import {PRIMARY_SATURATED, WHITE} from '@styles/colors';
import {SMALL} from '@styles/spacing';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type ButtonProps = {
  text: string;
  onPress: () => void;
  styleWrapper?: ViewStyle;
  styleText?: TextStyle;
};

const Button = ({
  text = 'Button',
  onPress,
  styleWrapper,
  styleText,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonWrapper, styleWrapper]}
      activeOpacity={0.3}>
      <Text style={styleText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    padding: SMALL,
    backgroundColor: PRIMARY_SATURATED,
    borderRadius: SMALL,
    color: WHITE,
  },
});

export default Button;
