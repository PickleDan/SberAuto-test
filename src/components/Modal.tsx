import ExpanderButton from '@components/UI/ExpanderButton';
import {MEDIUM} from '@styles/spacing';
import {typography} from '@styles/typography';
import {HEIGHT, WIDTH} from '@utils/deviceSizes';
import React, {RefObject, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

type ModalProps = {
  bottomSheetRef: RefObject<BottomSheet>;
  description?: string;
  image?: string;
};

const LINE_HEIGHT = 20;
const PREVIEW_HEIGHT = LINE_HEIGHT * 3 + MEDIUM;

const Modal = ({bottomSheetRef, description, image}: ModalProps) => {
  const [descriptionHeight, setDescriptionHeight] = useState<number>(0);
  const [isFullDescriptionOpen, setIsFullDescriptionOpen] =
    useState<boolean>(false);

  const isExpanderNeeded = descriptionHeight > PREVIEW_HEIGHT;

  const renderContent = () => {
    return (
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={{uri: image}} />
        </View>

        <Text
          style={[styles.description, styles.hiddenText]}
          onLayout={e => {
            setDescriptionHeight(Math.ceil(e.nativeEvent.layout.height));
          }}>
          {description}
        </Text>

        <>
          <Text
            style={[
              styles.description,
              isFullDescriptionOpen
                ? styles.descriptionOn
                : styles.descriptionOff,
            ]}>
            {description}
          </Text>
          {isExpanderNeeded && (
            <ExpanderButton
              onPress={() => {
                setIsFullDescriptionOpen(!isFullDescriptionOpen);
              }}
              isOpened={isFullDescriptionOpen}
            />
          )}
        </>
      </View>
    );
  };

  return (
    <>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['80%', '52%', '0%']}
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
  imageWrapper: {
    height: 300,
    width: WIDTH,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    height: 600,
    width: WIDTH,
    position: 'absolute',
    top: 0,
  },
  hiddenText: {
    opacity: 0,
    position: 'absolute',
  },
  description: {
    ...typography.normalText,
    paddingHorizontal: MEDIUM,
    paddingTop: MEDIUM,
    textAlign: 'auto',
  },
  descriptionOff: {
    height: PREVIEW_HEIGHT,
  },
  descriptionOn: {height: 'auto'},
});

export default React.memo(Modal);
