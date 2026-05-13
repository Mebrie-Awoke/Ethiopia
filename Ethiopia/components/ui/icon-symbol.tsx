// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;
export type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'magnifyingglass': 'search',
  'bookmark.fill': 'bookmark',
  'bubble.right.fill': 'chat_bubble',
  'bubble.right': 'chat_bubble_outline',
  'gear': 'settings',
  'clock.badge.checkmark.fill': 'check_circle',
  'arrow.backward': 'arrow_back',
  'square.and.arrow.up': 'share',
  'bookmark': 'bookmark',
  'heart.fill': 'favorite',
  'heart': 'favorite_border',
  'checkmark': 'check',
  'speaker.wave.2.circle.fill': 'volume_up',
  'arrow.up.fill': 'arrow_upward',
  'leaf.fill': 'eco',
  'music.note': 'music_note',
  'fork.knife': 'restaurant',
  'cup.and.saucer.fill': 'local_cafe',
  'globe.europe.africa.fill': 'public',
  'sparkles': 'stars',
  'book.fill': 'menu_book',
  'history': 'history',
  'code': 'code',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron_right',
} as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
