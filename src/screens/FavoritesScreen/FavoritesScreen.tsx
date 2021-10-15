import React from 'react';
import {Text, View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

type FavoritesScreenProps = {};

export interface NavigationProps {
  name: string;
}

const FavoritesScreen: NavigationFunctionComponent<NavigationProps> =
  ({}: FavoritesScreenProps) => {
    return (
      <View>
        <Text>Favorites</Text>
      </View>
    );
  };

export default FavoritesScreen;
