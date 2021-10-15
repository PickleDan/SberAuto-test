import ScreenWrapper from '@layouts/ScreenWrapper';
import React from 'react';
import {Text} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

type FavoritesScreenProps = {};

export interface NavigationProps {
  name: string;
}

const FavoritesScreen: NavigationFunctionComponent<NavigationProps> =
  ({}: FavoritesScreenProps) => {
    return (
      <ScreenWrapper>
        <Text>Favorites</Text>
      </ScreenWrapper>
    );
  };

export default FavoritesScreen;
