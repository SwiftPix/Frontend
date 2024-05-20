import React from 'react';
import {
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from 'react-native';

const KeyboardAvoidingWrapper = ({ children }) => {
  const windowHeight = useWindowDimensions().height;
  return (
    <SafeAreaView style={[{ minHeight: Math.round(windowHeight) }]}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default KeyboardAvoidingWrapper;
