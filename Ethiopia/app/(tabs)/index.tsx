import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

import { Header } from '@/components/header';
import { SearchBar } from '@/components/search-bar';
import { CategoryCard } from '@/components/cards';
import { Section } from '@/components/section';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

const CATEGORIES = [
  { id: 1, title: 'Culture', count: 52, image: require('@/assets/images/partial-react-logo.png') },
  { id: 2, title: 'History', count: 38, image: require('@/assets/images/partial-react-logo.png') },
  { id: 3, title: 'Traditions', count: 27, image: require('@/assets/images/partial-react-logo.png') },
  { id: 4, title: 'Beliefs', count: 19, image: require('@/assets/images/partial-react-logo.png') },
];

const ARTICLES = [
  { id: 1, title: 'The Coffee Ceremony', time: 'A symbol of hospitality', image: require('@/assets/images/partial-react-logo.png') },
];
me
export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header
          title="Welcome to Ethiopian"
          image={require('@/assets/images/react-logo.png')}
        />

        {/* Search Bar */}
        <SearchBar placeholder="Search topics, ask or explore..." />

        {/* Explore Categories */}
        <Section title="Explore Categories" onViewAll={() => router.push('/explore')}>
          <View style={styles.categoriesGrid}>
            {CATEGORIES.map((cat) => (
              <CategoryCard
                key={cat.id}
                title={cat.title}
                count={cat.count}
                image={cat.image}
                onPress={() => router.push(`/explore?category=${cat.title.toLowerCase()}`)}
              />
            ))}
          </View>
        </Section>

        {/* Ask Ethiopian AI */}
        <TouchableOpacity
          style={styles.aiCard}
          onPress={() => router.push('/chat')}
        >
          <View style={styles.aiContent}>
            <ThemedText style={styles.aiTitle}>Ask Ethiopian AI</ThemedText>
            <ThemedText style={styles.aiSubtitle}>Get smart answers about Ethiopia</ThemedText>
            <View style={styles.aiButton}>
              <ThemedText style={styles.aiButtonText}>Start Chat</ThemedText>
            </View>
          </View>
          <View style={styles.aiIcon}>
            <IconSymbol name="bubble.right" size={48} color="#1B5E5E" />
          </View>
        </TouchableOpacity>

        {/* Continue Learning */}
        <Section title="Continue Learning" onViewAll={() => {}}>
          {ARTICLES.map((article) => (
            <TouchableOpacity
              key={article.id}
              onPress={() => router.push(`/article/${article.id}`)}
              style={styles.articleItem}
            >
              <ThemedText style={styles.articleTitle}>{article.title}</ThemedText>
              <ThemedText style={styles.articleSubtitle}>{article.time}</ThemedText>
            </TouchableOpacity>
          ))}
        </Section>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  aiCard: {
    flexDirection: 'row',
    backgroundColor: '#1B5E5E',
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  aiContent: {
    flex: 1,
    marginRight: 12,
  },
  aiTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  aiSubtitle: {
    color: '#D0D0D0',
    fontSize: 13,
    marginBottom: 12,
  },
  aiButton: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },
  aiButtonText: {
    color: '#1B5E5E',
    fontWeight: '600',
    fontSize: 13,
  },
  aiIcon: {
    opacity: 0.3,
  },
  articleItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  articleTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  articleSubtitle: {
    fontSize: 12,
    color: '#999',
  },
});
