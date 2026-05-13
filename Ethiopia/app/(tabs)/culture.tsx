import { FlatList, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { useRouter } from 'expo-router';

import { Section } from '@/components/section';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

import type { IconSymbolName } from '@/components/ui/icon-symbol';

const CULTURE_ITEMS: { id: string; title: string; description: string; icon: IconSymbolName }[] = [
  {
    id: 'coffee-ceremony',
    title: 'Coffee Ceremony',
    description: 'A ritual that celebrates hospitality and community.',
    icon: 'cup.and.saucer.fill',
  },
  {
    id: 'traditional-music-and-dance',
    title: 'Traditional Music & Dance',
    description: 'The vibrant music and dance of Ethiopia.',
    icon: 'music.note',
  },
  {
    id: 'ethiopian-cuisine',
    title: 'Ethiopian Cuisine',
    description: 'Flavors, injera, and shared meals.',
    icon: 'fork.knife',
  },
];

export default function CultureScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.title}>Ethiopian Culture</ThemedText>
        <ThemedText style={styles.subtitle}>Explore cultural highlights with a simple tap.</ThemedText>
        <Image source={require('@/assets/images/Culture.jpg')} style={styles.headerImage} />
      </View>

      <Section title="Culture Topics">
        <FlatList
          data={CULTURE_ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemCard}
              onPress={() => router.push(`/detail/${item.id}`)}
            >
              <View style={styles.iconWrapper}>
                <IconSymbol name={item.icon} size={24} color="#1B5E5E" />
              </View>
              <View style={styles.itemText}>
                <ThemedText style={styles.itemTitle}>{item.title}</ThemedText>
                <ThemedText style={styles.itemDescription}>{item.description}</ThemedText>
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.list}
        />
      </Section>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1B5E5E',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#5A5A5A',
    lineHeight: 22,
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 12,
    marginTop: 16,
  },
  list: {
    paddingHorizontal: 12,
    paddingBottom: 24,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  iconWrapper: {
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: '#F6F2DF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  itemText: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
