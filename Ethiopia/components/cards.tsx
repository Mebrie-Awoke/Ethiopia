import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from './themed-text';

interface CategoryCardProps {
  title: string;
  count: number;
  image: any;
  onPress?: () => void;
}

export function CategoryCard({ title, count, image, onPress }: CategoryCardProps) {
  return (
    <TouchableOpacity style={styles.categoryCard} onPress={onPress}>
      <Image source={image} style={styles.categoryImage} />
      <View style={styles.categoryOverlay} />
      <View style={styles.categoryContent}>
        <ThemedText style={styles.categoryTitle}>{title}</ThemedText>
        <ThemedText style={styles.categoryCount}>{count} Articles</ThemedText>
      </View>
    </TouchableOpacity>
  );
}

interface TopicCardProps {
  title: string;
  image: any;
  onPress?: () => void;
}

export function TopicCard({ title, image, onPress }: TopicCardProps) {
  return (
    <TouchableOpacity style={styles.topicCard} onPress={onPress}>
      <Image source={image} style={styles.topicImage} />
      <View style={styles.topicOverlay} />
      <ThemedText style={styles.topicTitle}>{title}</ThemedText>
    </TouchableOpacity>
  );
}

interface ArticleCardProps {
  title: string;
  time: string;
  image: any;
  onPress?: () => void;
}

export function ArticleCard({ title, time, image, onPress }: ArticleCardProps) {
  return (
    <TouchableOpacity style={styles.articleCard} onPress={onPress}>
      <Image source={image} style={styles.articleImage} />
      <View style={styles.articleContent}>
        <ThemedText numberOfLines={2} style={styles.articleTitle}>
          {title}
        </ThemedText>
        <ThemedText style={styles.articleTime}>{time}</ThemedText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryCard: {
    flex: 1,
    height: 140,
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  categoryImage: {
    ...StyleSheet.absoluteFillObject,
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  categoryContent: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: 12,
  },
  categoryTitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  categoryCount: {
    color: '#e0e0e0',
    fontSize: 12,
    marginTop: 4,
  },
  topicCard: {
    height: 120,
    width: '48%',
    marginHorizontal: '1%',
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  topicImage: {
    ...StyleSheet.absoluteFillObject,
  },
  topicOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  topicTitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    position: 'absolute',
    bottom: 12,
    left: 12,
    right: 12,
  },
  articleCard: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  articleImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  articleContent: {
    flex: 1,
    justifyContent: 'center',
  },
  articleTitle: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 6,
  },
  articleTime: {
    fontSize: 12,
    color: '#999',
  },
});
