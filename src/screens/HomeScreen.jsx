import { View, StyleSheet, ScrollView } from 'react-native';

import FilterButtonGroup from '../components/FilterButtonGroup';
import ToggleSwitch from '../components/ToggleSwitch';
import SearchInput from '../components/SearchInput';

import { colors } from '../constants/colors';
import { spacing } from '../constants/spacing';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
    >
      {/* Filters */}
      <FilterButtonGroup
        options={['Builds', 'Guides', 'Characters']}
      />

      {/* Toggle */}
      <View style={styles.row}>
        <ToggleSwitch defaultValue={true} />
        <ToggleSwitch defaultValue={false} />
      </View>

      {/* Search */}
      <SearchInput placeholder="Search builds, guides, games..." />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },

  container: {
    padding: spacing.xl,
    gap: spacing.xl,
  },

  row: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
});