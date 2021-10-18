import {useFetchMovieByIdQuery} from '@api/getMovies';
import ExpanderButton from '@components/UI/ExpanderButton';
import Loader from '@components/UI/Loader';
import {MEDIUM} from '@styles/spacing';
import {typography} from '@styles/typography';
import {HEIGHT, WIDTH} from '@utils/deviceSizes';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

type ModalProps = {
  bottomSheetRef: React.MutableRefObject<BottomSheet | null>;
  movieId: string;
};

const LINE_HEIGHT = 20;
const PREVIEW_HEIGHT = LINE_HEIGHT * 3 + MEDIUM;
const SNAP_POINTS = ['80%', '52%', '0%'];

const Modal = ({bottomSheetRef, movieId}: ModalProps) => {
  const {data, isFetching} = useFetchMovieByIdQuery(movieId);
  const image = data?.image;
  const description = data?.description;

  const [descriptionHeight, setDescriptionHeight] = useState<number>(0);
  const [isFullDescriptionOpen, setIsFullDescriptionOpen] =
    useState<boolean>(false);

  const isExpanderNeeded = descriptionHeight > PREVIEW_HEIGHT;
  const clearExpander = () => {
    setIsFullDescriptionOpen(false);
  };

  const renderContent = () => {
    return (
      <View style={styles.container}>
        {isFetching ? (
          <Loader size={40} stylesProp={styles.loader} />
        ) : (
          <View>
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
        )}
      </View>
    );
  };

  return (
    <>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={SNAP_POINTS}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={2}
        onCloseEnd={clearExpander}
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
  loader: {
    height: SNAP_POINTS[0],
    justifyContent: 'center',
  },
});

export default React.memo(Modal);
