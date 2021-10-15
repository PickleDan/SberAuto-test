/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import {Icons} from 'src/constants/icons';
import FavoritesScreen from 'src/screens/FavoritesScreen/FavoritesScreen';
import HomeScreen from 'src/screens/HomeScreen/HomeScreen';

FavoritesScreen.options = {
  topBar: {
    title: {
      text: '1',
    },
  },
  bottomTab: {
    text: 'Избранное',
    icon: Icons.favoritesTab,
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
    icon: Icons.movieTab,
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
