import { ScrollView, StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

import { TopicCard, ArticleCard } from '@/components/cards';
import { Section } from '@/components/section';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const CATEGORIES = ['All', 'Culture', 'History', 'Traditions', 'Beliefs'];

const TOPICS = [
  { id: 1, title: 'Ethiopian Calendar', image: require('@/assets/images/partial-react-logo.png') },
  { id: 2, title: 'Festivals', image: require('@/assets/images/partial-react-logo.png') },
  { id: 3, title: 'Ge\'ez Language', image: require('@/assets/images/partial-react-logo.png') },
  { id: 4, title: 'Ethiopian Food', image: require('@/assets/images/partial-react-logo.png') },
];

const QUICK_FACTS = [
  {
    id: 1,
    title: 'Did You Know?',
    description: 'Ethiopia is the only African country that was never colonized.',
  },
];

const NEW_ADDITIONS = [
  {
    id: 1,
    title: 'Rock-Hewn Churches',
    time: '11 min read',
    image: require('@/assets/images/partial-react-logo.png'),
  },
  {
    id: 2,
    title: 'Ethiopian Clothing',
    time: '8 min read',
    image: require('@/assets/images/partial-react-logo.png'),
  },
];

export default function ExploreScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Category Filters */}
        <View style={styles.categoriesContainer}>
          <FlatList
            data={CATEGORIES}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  selectedCategory === item && styles.categoryButtonActive,
                ]}
                onPress={() => setSelectedCategory(item)}
              >
                <ThemedText
                  style={[
                    styles.categoryButtonText,
                    selectedCategory === item && styles.categoryButtonTextActive,
                  ]}
                >
                  {item}
                </ThemedText>
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Popular Topics */}
        <Section title="Popular Topics" onViewAll={() => {}}>
          <View style={styles.topicsGrid}>
            {TOPICS.map((topic) => (
              <TopicCard
                key={topic.id}
                title={topic.title}
                image={topic.image}
                onPress={() => router.push(`/article/${topic.id}`)}
              />
            ))}
          </View>
        </Section>

        {/* Quick Facts */}
        <Section title="Quick Facts" onViewAll={() => {}}>
          {QUICK_FACTS.map((fact) => (
            <TouchableOpacity key={fact.id} style={styles.factCard}>
              <View style={styles.factContent}>
                <ThemedText style={styles.factTitle}>{fact.title}</ThemedText>
                <ThemedText style={styles.factDescription}>{fact.description}</ThemedText>
              </View>
            </TouchableOpacity>
          ))}
        </Section>

        {/* New Additions */}
        <Section title="New Additions" onViewAll={() => {}}>
          {NEW_ADDITIONS.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              time={article.time}
              image={article.image}
              onPress={() => router.push(`/article/${article.id}`)}
            />
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
  categoriesContainer: {
    paddingVertical: 12,
  },
  categoriesList: {
    paddingHorizontal: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  categoryButtonActive: {
    backgroundColor: '#1B5E5E',
    borderColor: '#1B5E5E',
  },
  categoryButtonText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#666',
  },
  categoryButtonTextActive: {
    color: '#FFF',
  },
  topicsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
  },
  factCard: {
    backgroundColor: '#F0F8F7',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 16,
  },
  factContent: {
    flex: 1,
  },
  factTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1B5E5E',
  },
  factDescription: {
    fontSize: 13,
    color: '#555',
    lineHeight: 20,
  },
});
