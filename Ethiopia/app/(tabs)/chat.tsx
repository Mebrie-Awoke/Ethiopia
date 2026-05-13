import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

const BOT_AUTHORITATIVE_RESPONSE =
  'Emperor Menelik II was the Emperor of Ethiopia from 1889 to 1913. He is known for modernizing Ethiopia and leading the country to victory at the Battle of Adwa against Italian forces in 1896.';
const FALLBACK_RESPONSE = 'I only know about Emperor Menelik II for now. Please ask that.';

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  const resolveReply = (text: string) => {
    const normalized = text.trim().toLowerCase();
    if (normalized.includes('emperor menelik ii') || normalized.includes('menelik ii')) {
      return BOT_AUTHORITATIVE_RESPONSE;
    }
    return FALLBACK_RESPONSE;
  };

  const sendMessage = () => {
    if (!inputText.trim()) {
      return;
    }

    const userMessage: Message = {
      id: String(Date.now()),
      text: inputText.trim(),
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');

    const aiMessage: Message = {
      id: String(Date.now() + 1),
      text: resolveReply(inputText),
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, aiMessage]);
    }, 300);
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <View>
          <ThemedText style={styles.headerTitle}>Ask Ethiopia</ThemedText>
          <ThemedText style={styles.headerSubtitle}>Chat with us about Ethiopia</ThemedText>
        </View>
        <IconSymbol name="globe.europe.africa.fill" size={28} color="#1B5E5E" />
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === 'user' ? styles.userMessageContainer : styles.aiMessageContainer,
            ]}
          >
            <View
              style={[
                styles.messageBubble,
                item.sender === 'user' ? styles.userBubble : styles.aiBubble,
              ]}
            >
              <ThemedText
                style={[
                  styles.messageText,
                  item.sender === 'user' ? styles.userText : styles.aiText,
                ]}
              >
                {item.text}
              </ThemedText>
            </View>
            <ThemedText style={styles.timestamp}>{item.timestamp}</ThemedText>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyState}>
            <ThemedText style={styles.emptyTitle}>Welcome to Ask Ethiopia</ThemedText>
            <ThemedText style={styles.emptySubtitle}>Ask a question about Ethiopian history, culture, or traditions.</ThemedText>
          </View>
        )}
      />

      <View style={styles.inputArea}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ask about Ethiopia..."
            placeholderTextColor="#999"
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <IconSymbol name="arrow.up.fill" size={18} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAF8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1B5E5E',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#5A5A5A',
    marginTop: 4,
  },
  messagesList: {
    padding: 20,
    flexGrow: 1,
  },
  messageContainer: {
    marginBottom: 14,
    alignItems: 'flex-start',
  },
  userMessageContainer: {
    alignItems: 'flex-end',
  },
  aiMessageContainer: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    maxWidth: '80%',
  },
  userBubble: {
    backgroundColor: '#1B5E5E',
  },
  aiBubble: {
    backgroundColor: '#F1F4F2',
  },
  messageText: {
    fontSize: 15,
    lineHeight: 22,
  },
  userText: {
    color: '#FFFFFF',
  },
  aiText: {
    color: '#1B1B1B',
  },
  timestamp: {
    fontSize: 11,
    color: '#8A8A8A',
    marginTop: 6,
  },
  emptyState: {
    marginTop: 32,
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1B5E5E',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#5A5A5A',
    lineHeight: 20,
  },
  inputArea: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E6E6E6',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#F5F5F5',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    minHeight: 44,
    maxHeight: 120,
    fontSize: 15,
    color: '#1B1B1B',
  },
  sendButton: {
    marginLeft: 12,
    backgroundColor: '#1B5E5E',
    borderRadius: 20,
    padding: 12,
  },
});
