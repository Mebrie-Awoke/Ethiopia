import { StyleSheet, View, Image } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HistoryScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText style={styles.title}>Ethiopian History</ThemedText>
        <Image source={require('@/assets/images/adwa.jpg')} style={styles.headerImage} />
        <ThemedText style={styles.body}>
          Ethiopia is one of the oldest countries in the world, with a rich history from the Kingdom of Aksum to the present day.
        </ThemedText>
        <ThemedText style={styles.body}>
          Explore stories of powerful emperors, ancient monuments, and the traditions that shaped the nation.
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 28,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1B5E5E',
    marginBottom: 16,
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 12,
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4A4A4A',
    marginBottom: 14,
  },
});
