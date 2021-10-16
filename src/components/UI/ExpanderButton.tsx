import {PRIMARY_SATURATED} from '@styles/colors';
import {MEDIUM, TINY} from '@styles/spacing';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type ExpanderButtonProps = {
  isOpened: boolean;
  onPress: () => void;
  textToClose?: string;
  textToOpen?: string;
};

const ExpanderButton = ({
  isOpened,
  onPress,
  textToClose = 'Скрыть',
  textToOpen = 'Показать полностью',
}: ExpanderButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {isOpened ? (
        <Text style={styles.text}>{textToClose}</Text>
      ) : (
        <Text style={styles.text}>{textToOpen}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: MEDIUM,
    paddingVertical: TINY,
  },
  text: {
    fontWeight: '600',
    color: PRIMARY_SATURATED,
  },
});

export default ExpanderButton;
