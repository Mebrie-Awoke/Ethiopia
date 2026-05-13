import { ScrollView, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { useRouter } from 'expo-router';

import { Section } from '@/components/section';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

import type { IconSymbolName } from '@/components/ui/icon-symbol';

const CATEGORIES: { id: string; title: string; description: string; icon: IconSymbolName; route: string }[] = [
  {
    id: 'culture',
    title: 'Culture',
    description: 'Explore traditional Ethiopian customs',
    icon: 'leaf.fill',
    route: '/culture',
  },
  {
    id: 'history',
    title: 'History',
    description: 'Learn about Ethiopia’s past',
    icon: 'book.fill',
    route: '/history',
  },
  {
    id: 'beliefs',
    title: 'Beliefs',
    description: 'Ask questions about faith and values',
    icon: 'bubble.right.fill',
    route: '/chat',
  },
];

const FEATURES: { id: string; title: string; description: string; icon: IconSymbolName }[] = [
  {
    id: 'coffee-ceremony',
    title: 'Coffee Ceremony',
    description: 'A ritual of hospitality and community',
    icon: 'cup.and.saucer.fill',
  },
  {
    id: 'traditional-music-and-dance',
    title: 'Traditional Music & Dance',
    description: 'The rhythm of Ethiopian celebration',
    icon: 'music.note',
  },
  {
    id: 'ethiopian-cuisine',
    title: 'Ethiopian Cuisine',
    description: 'Discover the flavors of Ethiopian food',
    icon: 'fork.knife',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <ThemedText style={styles.title}>Welcome to Ethiopia Knowledge App</ThemedText>
          <ThemedText style={styles.subtitle}>Learn about culture, history, and traditions in a modern guide.</ThemedText>
          <Image source={require('@/assets/images/flag.png')} style={styles.headerImage} />
        </View>

        <Section title="Quick Paths">
          <View style={styles.categoryGrid}>
            {CATEGORIES.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.categoryCard}
                onPress={() => router.push(item.route as any)}
              >
                <View style={styles.categoryIcon}>
                  <IconSymbol name={item.icon} size={24} color="#FFF" />
                </View>
                <ThemedText style={styles.categoryTitle}>{item.title}</ThemedText>
                <ThemedText style={styles.categoryDescription}>{item.description}</ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </Section>

        <Section title="Featured Stories">
          {FEATURES.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.featureCard}
              onPress={() => router.push(`/detail/${item.id}`)}
            >
              <View style={styles.featureIcon}>
                <IconSymbol name={item.icon} size={26} color="#1B5E5E" />
              </View>
              <View style={styles.featureText}>
                <ThemedText style={styles.featureTitle}>{item.title}</ThemedText>
                <ThemedText style={styles.featureDescription}>{item.description}</ThemedText>
              </View>
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
  content: {
    paddingBottom: 32,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    color: '#1B5E5E',
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#4A4A4A',
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 12,
    marginTop: 16,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#F7F4E9',
    borderRadius: 20,
    padding: 18,
    marginBottom: 12,
  },
  categoryIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#1B5E5E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  categoryDescription: {
    fontSize: 13,
    lineHeight: 18,
    color: '#5D5D5D',
  },
  featureCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  featureIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#F4EDD6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureText: {
    flex: 1,
    justifyContent: 'center',
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 19,
  },
});
