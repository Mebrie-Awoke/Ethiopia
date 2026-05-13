import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

interface Article {
  id: string;
  title: string;
  category: string;
  image: any;
  content: string;
  highlights: string[];
  readTime: string;
  likes: number;
}

const ARTICLES: { [key: string]: Article } = {
  '1': {
    id: '1',
    title: 'Ethiopian Coffee Ceremony',
    category: 'CULTURE',
    image: require('@/assets/images/partial-react-logo.png'),
    content: 'The Ethiopian coffee ceremony is more than a ritual-it is a way of life. It represents respect, friendship, and community. Green coffee beans are roasted, ground, and brewed in a jebena, filling the air with rich aroma and stories shared among guests.',
    highlights: [
      'Symbol of hospitality',
      'Performed in three rounds',
      'Dates back centuries',
    ],
    readTime: '8 min read',
    likes: 1200,
  },
};

export default function ArticleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [fontSize, setFontSize] = useState(16);
  const [isLiked, setIsLiked] = useState(false);

  const article = id ? ARTICLES[id] : ARTICLES['1'];

  return (
    <ThemedView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <IconSymbol name="arrow.backward" size={24} color="#1B5E5E" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Article Image */}
        <Image source={article.image} style={styles.articleImage} />

        {/* Article Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity
              style={styles.shareButton}
              onPress={() => alert('Share functionality')}
            >
              <IconSymbol name="square.and.arrow.up" size={20} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.shareButton}
              onPress={() => alert('Save functionality')}
            >
              <IconSymbol name="bookmark" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          <View style={styles.titleSection}>
            <ThemedText style={styles.category}>{article.category}</ThemedText>
            <ThemedText style={styles.title}>{article.title}</ThemedText>
          </View>

          <View style={styles.metadataRow}>
            <ThemedText style={styles.metadata}>⏱ {article.readTime}</ThemedText>
            <TouchableOpacity
              style={styles.likeButton}
              onPress={() => setIsLiked(!isLiked)}
            >
              <IconSymbol name={isLiked ? 'heart.fill' : 'heart'} size={16} color="#E84855" />
              <ThemedText style={styles.likeCount}>{article.likes + (isLiked ? 1 : 0)}</ThemedText>
            </TouchableOpacity>
          </View>
        </View>

        {/* Content */}
        <View style={styles.contentSection}>
          <ThemedText style={{ fontSize }}>
            {article.content}
          </ThemedText>
        </View>

        {/* Key Highlights */}
        <View style={styles.highlightsSection}>
          <ThemedText style={styles.highlightsTitle}>Key Highlights</ThemedText>
          {article.highlights.map((highlight, index) => (
            <View key={index} style={styles.highlightItem}>
              <IconSymbol name="checkmark" size={16} color="#1B5E5E" />
              <ThemedText style={styles.highlightText}>{highlight}</ThemedText>
            </View>
          ))}
        </View>

        {/* Listen Button */}
        <TouchableOpacity style={styles.listenButton}>
          <IconSymbol name="speaker.wave.2.circle.fill" size={20} color="#1B5E5E" />
          <ThemedText style={styles.listenText}>Listen</ThemedText>
        </TouchableOpacity>

        {/* Font Size Controls */}
        <View style={styles.fontControls}>
          <TouchableOpacity
            onPress={() => setFontSize(Math.max(12, fontSize - 2))}
            style={styles.fontButton}
          >
            <ThemedText style={styles.fontButtonText}>A−</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFontSize(Math.min(24, fontSize + 2))}
            style={styles.fontButton}
          >
            <ThemedText style={styles.fontButtonText}>A+</ThemedText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 12,
    left: 16,
    zIndex: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8,
  },
  articleImage: {
    width: '100%',
    height: 280,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16,
    gap: 12,
  },
  shareButton: {
    padding: 8,
  },
  titleSection: {
    marginBottom: 12,
  },
  category: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1B5E5E',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
  },
  metadataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  metadata: {
    fontSize: 12,
    color: '#999',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  likeCount: {
    fontSize: 13,
    color: '#E84855',
    fontWeight: '500',
  },
  contentSection: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  highlightsSection: {
    backgroundColor: '#F0F8F7',
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 12,
    padding: 16,
  },
  highlightsTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
    color: '#1F1F1F',
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  highlightText: {
    fontSize: 13,
    color: '#555',
    flex: 1,
  },
  listenButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderColor: '#1B5E5E',
    borderWidth: 1.5,
    marginHorizontal: 16,
    marginBottom: 20,
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  listenText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1B5E5E',
  },
  fontControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  fontButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  fontButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F1F1F',
  },
});
