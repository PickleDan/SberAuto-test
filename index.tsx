/**
 * @format
 */
import {Icons} from '@constants/icons';
import FavoritesScreen from '@screens/FavoritesScreen/FavoritesScreen';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import React from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

FavoritesScreen.options = {
  statusBar: {
    backgroundColor: 'white',
  },
  topBar: {
    title: {
      text: 'Избранное',
    },
  },
  bottomTab: {
    text: 'Избранное',
    icon: Icons.favoritesTabOff,
    selectedIcon: Icons.favoritesTabOn,
  },
};

HomeScreen.options = {
  statusBar: {
    backgroundColor: 'white',
  },
  topBar: {
    title: {
      text: 'Фильмы студии “Ghibli”',
    },
  },
  bottomTab: {
    text: 'Фильмы',
    icon: Icons.movieTabOff,
    selectedIcon: Icons.movieTabOn,
  },
};

Navigation.registerComponent(
  'Home',
  () =>
    gestureHandlerRootHOC(props => (
      <Provider store={store}>
        <HomeScreen {...props} />
      </Provider>
    )),
  () => HomeScreen,
);

Navigation.registerComponent(
  'Favorites',
  () =>
    gestureHandlerRootHOC(props => (
      <Provider store={store}>
        <FavoritesScreen {...props} />
      </Provider>
    )),
  () => FavoritesScreen,
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              id: 'HOME_TAB',
              children: [
                {
                  component: {
                    id: 'HOME_SCREEN',
                    name: 'Home',
                  },
                },
              ],
            },
          },
          {
            stack: {
              id: 'FAVORITES_TAB',
              children: [
                {
                  component: {
                    id: 'FAVORITES_SCREEN',
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
