import { View, StyleSheet } from 'react-native';

import ResponsiveCard from './components/ResponsiveCard';
import MainButton from './components/MainButton';
import FilterButtonGroup from './components/FilterButtonGroup';
import ToggleSwitch from './components/ToggleSwitch';
import SearchInput from './components/SearchInput';

import { colors } from './constants/colors';
import { spacing } from './constants/spacing';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ResponsiveCard
          title="Warframe"
          subtitle="Shooter"
          imageUrl="https://picsum.photos/100"
        />

        <MainButton title="Create Build" />

        <FilterButtonGroup options={['Builds', 'Guides', 'Characters']} />

        <View style={styles.switches}>
          <ToggleSwitch defaultValue={true} />
          <ToggleSwitch defaultValue={false} />
        </View>

        <SearchInput placeholder="Search builds, guides, games..." />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xl,
    alignItems: 'center',
    backgroundColor: colors.bg,
  },

  content: {
    width: '100%',
    maxWidth: 992,
    gap: spacing.xl,
  },

  switches: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
});