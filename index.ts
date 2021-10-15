/**
 * @format
 */
import {Icons} from '@constants/icons';
import FavoritesScreen from '@screens/FavoritesScreen/FavoritesScreen';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';

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
      text: 'Фильмы',
    },
  },
  bottomTab: {
    text: 'Фильмы',
    icon: Icons.movieTabOff,
    selectedIcon: Icons.movieTabOn,
  },
};

Navigation.registerComponent('Home', () => gestureHandlerRootHOC(HomeScreen));
Navigation.registerComponent('Favorites', () =>
  gestureHandlerRootHOC(FavoritesScreen),
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
