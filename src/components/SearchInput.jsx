import { View, TextInput, StyleSheet, useWindowDimensions } from 'react-native';
import { colors } from '../constants/colors';
import { spacing } from '../constants/spacing';

export default function SearchInput({ value, onChangeText, placeholder = 'Search...' }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View
      style={[
        styles.container,
        isMobile ? styles.mobile : styles.desktop,
      ]}
    >
      {/* 🔍 SVG БЕЗ БІБЛІОТЕК */}
      <View style={styles.iconWrapper}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M12.6666 12.6665L9.79996 9.79984M11.3333 5.99984C11.3333 8.94536 8.94548 11.3332 5.99996 11.3332C3.05444 11.3332 0.666626 8.94536 0.666626 5.99984C0.666626 3.05432 3.05444 0.666504 5.99996 0.666504C8.94548 0.666504 11.3333 3.05432 11.3333 5.99984Z"
            stroke="#EC4899"
            strokeWidth="1.333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </View>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 12,

    borderWidth: 1,
    borderColor: 'rgba(140,160,255,0.10)',
    backgroundColor: 'rgba(7,9,28,0.60)',
  },

  mobile: {
    width: '100%',
    maxWidth: 328,
  },

  desktop: {
    width: '100%',
    maxWidth: 992,
  },

  input: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 14,
  },

  iconWrapper: {
    marginRight: spacing.sm,
    width: 16,
    height: 16,
    justifyContent: 'center',
  },
});