import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import { colors } from '../constants/colors';

export default function ResponsiveCard({ imageUrl, title, subtitle }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={[styles.card, isMobile ? styles.mobile : styles.desktop]}>
      <View style={styles.content}>
        <Image source={{ uri: imageUrl }} style={styles.image} />

        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 17,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surfaceTransparent,
  },

  desktop: {
    width: '100%',
    maxWidth: 992,
  },

  mobile: {
    width: '100%',
    maxWidth: 327,
    minHeight: 82,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  image: {
    width: 48,
    height: 48,
    borderRadius: 12,
  },

  title: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '600',
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 4,
  },
});