import { StyleSheet, TextInput, View } from 'react-native';
import { IconSymbol } from './ui/icon-symbol';

interface SearchBarProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
}

export function SearchBar({ placeholder = 'Search...', onChangeText }: SearchBarProps) {
  return (
    <View style={styles.container}>
      <IconSymbol name="magnifyingglass" size={20} color="#999" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#CCC"
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: '#1F1F1F',
  },
});
