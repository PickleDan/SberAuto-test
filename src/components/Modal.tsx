import {Movie} from '@api/getMovies';
import {retry} from '@reduxjs/toolkit/query';
import {WHITE} from '@styles/colors';
import {LARGE, MEDIUM, TINY} from '@styles/spacing';
import {typography} from '@styles/typography';
import {HEIGHT, WIDTH} from '@utils/deviceSizes';
import React, {RefObject} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

type ModalProps = {
  bottomSheetRef: RefObject<BottomSheet>;
  currentMovie?: Movie;
};

const Modal = ({bottomSheetRef, currentMovie}: ModalProps) => {
  console.log('currentMovie', currentMovie);

  const renderContent = () => {
    if (!currentMovie) {
      return;
    }
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: currentMovie.image}} />
        <View style={styles.content}>
          <Text style={styles.description}>{currentMovie.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['80%', '50%', '0%']}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={2}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    height: HEIGHT,
  },
  image: {
    height: 300,
    width: WIDTH,
    resizeMode: 'cover',
  },
  content: {},
  description: {
    ...typography.normalText,
    padding: MEDIUM,
    textAlign: 'justify',
  },
});

export default Modal;
