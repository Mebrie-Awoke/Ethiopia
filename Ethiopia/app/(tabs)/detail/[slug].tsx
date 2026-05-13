import { ScrollView, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

const DETAILS: Record<string, { title: string; content: string; image: any }> = {
  'coffee-ceremony': {
    title: 'Coffee Ceremony',
    content:
      'The traditional Ethiopian coffee ceremony is an integral part of Ethiopian culture. This ritual involves roasting green coffee beans, grinding them, and brewing the coffee in a jebena (clay pot). It is a symbol of hospitality and community.',
    image: require('@/assets/images/Culture.jpg'),
  },
  'traditional-music-and-dance': {
    title: 'Traditional Music & Dance',
    content: 'The vibrant music and dances of Ethiopia.',
    image: require('@/assets/images/gojjamGirl.jpg'),
  },
  'ethiopian-cuisine': {
    title: 'Ethiopian Cuisine',
    content: 'Discover the flavors of Ethiopian food.',
    image: require('@/assets/images/images.jpg'),
  },
};

export default function DetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const router = useRouter();
  const item = slug ? DETAILS[slug] : undefined;

  return (
    <ThemedView style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <IconSymbol name="arrow.backward" size={24} color="#1B5E5E" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Image source={item?.image} style={styles.detailImage} />
        <ThemedText style={styles.title}>{item?.title ?? 'Detail'}</ThemedText>
        <ThemedText style={styles.body}>{item?.content ?? 'This topic is not available yet.'}</ThemedText>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRow: {
    paddingTop: 20,
    paddingHorizontal: 18,
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  detailImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 12,
    marginBottom: 20,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1B5E5E',
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4A4A4A',
  },
});
