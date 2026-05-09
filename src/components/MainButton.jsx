import {
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import { colors } from '../constants/colors';

export default function MainButton({ title = 'Create Build', onPress }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[styles.button, isMobile ? styles.mobile : styles.desktop]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundImage: 'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)',
  },

  desktop: {
    width: '100%',
    maxWidth: 992,
    paddingTop: 10,
    paddingBottom: 14,
  },

  mobile: {
    width: '100%',
    maxWidth: 327,
    paddingVertical: 10,
  },

  text: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '700',
  },
});