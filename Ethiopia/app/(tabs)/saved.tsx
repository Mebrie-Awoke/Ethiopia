import { ScrollView, StyleSheet, View } from 'react-native';

import { ArticleCard } from '@/components/cards';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const SAVED_ARTICLES = [
  {
    id: 1,
    title: 'Ethiopian Coffee Ceremony',
    time: '5 min read',
    image: require('@/assets/images/partial-react-logo.png'),
  },
  {
    id: 2,
    title: 'Lalibela Churches',
    time: '8 min read',
    image: require('@/assets/images/partial-react-logo.png'),
  },
];

export default function SavedScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.title}>Saved</ThemedText>
      </View>
      {SAVED_ARTICLES.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {SAVED_ARTICLES.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              time={article.time}
              image={article.image}
            />
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyContainer}>
          <ThemedText style={styles.emptyText}>No saved articles yet</ThemedText>
        </View>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});
