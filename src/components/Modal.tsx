import {HEIGHT} from '@utils/deviceSizes';
import React, {Ref} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

type ModalProps = {
  bottomSheetRef: Ref<BottomSheet>;
};

const Modal = ({bottomSheetRef}: ModalProps) => {
  const renderContent = () => (
    <View style={styles.container}>
      <Text>Swipe down to close</Text>
    </View>
  );

  return (
    <>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[HEIGHT - 200, HEIGHT / 2, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    padding: 16,
    height: HEIGHT,
  },
});

export default Modal;