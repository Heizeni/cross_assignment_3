import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { colors } from '../constants/colors';
import { spacing } from '../constants/spacing';

export default function FilterButton({ label, isActive, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
      <View style={[styles.button, isActive ? styles.active : styles.inactive]}>
        <Text style={[styles.text, isActive ? styles.activeText : styles.inactiveText]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.lg,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  active: {
    backgroundImage: 'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)',
  },

  inactive: {
    backgroundColor: colors.blueDark,
  },

  text: {
    fontSize: 14,
    fontWeight: '700',
  },

  activeText: {
    color: colors.black,
  },

  inactiveText: {
    color: colors.textSecondary,
  },
});