import { StyleSheet, View, ImageBackground } from 'react-native';
import { ThemedText } from './themed-text';

interface HeaderProps {
  title: string;
  subtitle?: string;
  image: any;
}

export function Header({ title, subtitle, image }: HeaderProps) {
  return (
    <ImageBackground source={image} style={styles.container} imageStyle={styles.image}>
      <View style={styles.overlay} />
      <View style={styles.content}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        {subtitle && <ThemedText style={styles.subtitle}>{subtitle}</ThemedText>}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 240,
    justifyContent: 'flex-end',
  },
  image: {
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  content: {
    padding: 24,
  },
  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    color: '#E0E0E0',
    fontSize: 16,
  },
});
