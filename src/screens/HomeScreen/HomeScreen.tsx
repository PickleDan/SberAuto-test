import Modal from '@components/Modal';
import MovieCard from '@components/MovieCard';
import ScreenWrapper from '@layouts/ScreenWrapper';
import {NavigationProps} from '@screens/FavoritesScreen/FavoritesScreen';
import {MEDIUM, SMALL} from '@styles/spacing';
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import BottomSheet from 'reanimated-bottom-sheet';

type HomeScreenProps = {};

const HomeScreen: NavigationFunctionComponent<NavigationProps> =
  ({}: HomeScreenProps) => {
    const bottomSheetRef = React.createRef<BottomSheet>();

    const onCardPress = () => {
      bottomSheetRef.current?.snapTo(0);
    };

    return (
      <ScreenWrapper>
        <>
          <FlatList
            data={[1, 2, 3, 23, 4, 5, 13, 311, 9]}
            renderItem={({item}) => (
              <MovieCard onCardPress={onCardPress} key={item} />
            )}
            keyExtractor={item => item.toString()}
            contentContainerStyle={styles.contentContainerStyle}
          />
          <Modal bottomSheetRef={bottomSheetRef} />
        </>
      </ScreenWrapper>
    );
  };

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginHorizontal: MEDIUM,
    paddingVertical: SMALL,
  },
});

export default HomeScreen;
