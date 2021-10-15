/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import FavoritesScreen from './src/screens/FavoritesScreen/FavoritesScreen';

FavoritesScreen.options = {
  topBar: {
    title: {
      text: 'Избранное',
    },
  },
  bottomTab: {
    text: 'Избранное',
  },
};
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Фильмы',
    },
  },
  bottomTab: {
    text: 'Фильмы',
  },
};

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Favorites', () => FavoritesScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Favorites',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
});
