import { ScrollView, StyleSheet, Switch, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.title}>Settings</ThemedText>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Preferences */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Preferences</ThemedText>

          <TouchableOpacity style={styles.settingItem}>
            <View>
              <ThemedText style={styles.settingLabel}>Notifications</ThemedText>
              <ThemedText style={styles.settingDescription}>Receive article updates</ThemedText>
            </View>
            <Switch value={notifications} onValueChange={setNotifications} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View>
              <ThemedText style={styles.settingLabel}>Dark Mode</ThemedText>
              <ThemedText style={styles.settingDescription}>Use dark theme</ThemedText>
            </View>
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </TouchableOpacity>
        </View>

        {/* About */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>About</ThemedText>

          <TouchableOpacity style={styles.settingItem}>
            <ThemedText style={styles.settingLabel}>Version 1.0.0</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <ThemedText style={styles.settingLabel}>About Ethiopia App</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <ThemedText style={styles.settingLabel}>Privacy Policy</ThemedText>
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
  section: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#999',
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 13,
    color: '#999',
  },
});
