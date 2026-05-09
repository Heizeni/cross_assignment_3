import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import FilterButton from './FilterButton';
import { spacing } from '../constants/spacing';

export default function FilterButtonGroup({ options }) {
  const [active, setActive] = useState(options[0]);

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <FilterButton
          key={option}
          label={option}
          isActive={active === option}
          onPress={() => setActive(option)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
});