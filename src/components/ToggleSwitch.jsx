import { useEffect, useState } from 'react';
import {
  Animated,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { colors } from '../constants/colors';

const SWITCH_WIDTH = 92;
const SWITCH_HEIGHT = 48;
const PADDING = 4;
const THUMB_SIZE = 40;
const MOVE_DISTANCE = SWITCH_WIDTH - THUMB_SIZE - PADDING * 2;

export default function ToggleSwitch({ defaultValue = false, onChange }) {
  const [isOn, setIsOn] = useState(defaultValue);

  const [translateX] = useState(
    () => new Animated.Value(defaultValue ? MOVE_DISTANCE : 0)
  );

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: isOn ? MOVE_DISTANCE : 0,
      friction: 7,
      tension: 90,
      useNativeDriver: true,
    }).start();
  }, [isOn, translateX]);

  function handlePress() {
    const nextValue = !isOn;
    setIsOn(nextValue);

    if (onChange) {
      onChange(nextValue);
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={handlePress}>
      <Animated.View
        style={[
          styles.track,
          isOn ? styles.trackOn : styles.trackOff,
        ]}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              transform: [{ translateX }],
            },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  track: {
    width: SWITCH_WIDTH,
    height: SWITCH_HEIGHT,
    padding: PADDING,
    borderRadius: 50,
    justifyContent: 'center',
  },

  trackOn: {
    backgroundImage: 'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)',
  },

  trackOff: {
    backgroundColor: colors.blueDark,
  },

  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
    backgroundColor: colors.textPrimary,
  },
});