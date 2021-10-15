import {MEDIUM} from '@styles/spacing';
import React, {ReactChild, ReactChildren} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

type ScreenWrapperProps = {
  children: ReactChild | ReactChildren;
};

const ScreenWrapper = ({children}: ScreenWrapperProps) => {
  return (
    <ScrollView>
      <View style={styles.wrapper}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: MEDIUM,
  },
});

export default ScreenWrapper;
