import AsyncStorage from '@react-native-async-storage/async-storage';

export const FAVORITES_MOVIES = '@favorites_movies';

export const storeFavoriteMovies = async (value: string[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(FAVORITES_MOVIES, jsonValue);
  } catch (e) {
    console.error('Ошибка при записи данных в AsyncStorage');
  }
};

export const getFavoriteMovies = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(FAVORITES_MOVIES);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Ошибка при получении данных из AsyncStorage');
  }
};
