import {MEDIUM} from '@styles/spacing';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type ErrorMessageProps = {
  text: string;
};

const ErrorMessage = ({text}: ErrorMessageProps) => {
  return (
    <View style={styles.wrapper}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fadadd',
    paddingHorizontal: MEDIUM,
    paddingVertical: MEDIUM,
  },
});

export default ErrorMessage;
