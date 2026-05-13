import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemedText } from './themed-text';

interface SectionProps {
  title: string;
  onViewAll?: () => void;
  children: React.ReactNode;
}

export function Section({ title, onViewAll, children }: SectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        {onViewAll && (
          <TouchableOpacity onPress={onViewAll}>
            <ThemedText style={styles.viewAll}>View All</ThemedText>
          </TouchableOpacity>
        )}
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F1F1F',
  },
  viewAll: {
    fontSize: 14,
    color: '#1B5E5E',
    fontWeight: '500',
  },
});
