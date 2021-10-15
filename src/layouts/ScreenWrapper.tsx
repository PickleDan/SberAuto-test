import {MEDIUM} from '@styles/spacing';
import React, {ReactChild, ReactChildren} from 'react';
import {StyleSheet, View} from 'react-native';

type ScreenWrapperProps = {
  children: ReactChild | ReactChildren;
};

const ScreenWrapper = ({children}: ScreenWrapperProps) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: MEDIUM,
  },
});

export default ScreenWrapper;
