import {NavigationProps} from '@screens/FavoritesScreen/FavoritesScreen';
import React from 'react';
import {Text, View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

type HomeScreenProps = {};

const HomeScreen: NavigationFunctionComponent<NavigationProps> =
  ({}: HomeScreenProps) => {
    return (
      <View>
        <Text>HomeScreen</Text>
      </View>
    );
  };

export default HomeScreen;
