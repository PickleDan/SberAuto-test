import React, {ReactChild, ReactChildren} from 'react';
import {View, ViewStyle} from 'react-native';

type ScreenWrapperProps = {
  children: ReactChild | ReactChildren;
  stylesProps?: ViewStyle;
};

const ScreenWrapper = ({children, stylesProps}: ScreenWrapperProps) => {
  return <View style={[stylesProps]}>{children}</View>;
};

export default ScreenWrapper;
