import {MEDIUM} from '@styles/spacing';
import React, {ReactChild, ReactChildren} from 'react';
import {StyleSheet, View} from 'react-native';

type ScreenWrapperProps = {
  children: ReactChild | ReactChildren;
  horizontalInsets?: boolean;
};

const ScreenWrapper = ({
  children,
  horizontalInsets = false,
}: ScreenWrapperProps) => {
  return <View style={horizontalInsets && styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: MEDIUM,
  },
});

export default ScreenWrapper;
