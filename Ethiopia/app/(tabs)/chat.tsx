import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
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

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    text: 'Who was Emperor Menelik II?',
    sender: 'user',
    timestamp: '9:41 AM',
  },
  {
    id: '2',
    text: 'Emperor Menelik II was the Emperor of Ethiopia from 1889 to 1913. He is renowned for modernizing Ethiopia and defeating the Italian invasion at the Battle of Adwa in 1896, a significant event that preserved Ethiopia\'s independence.',
    sender: 'ai',
    timestamp: '9:41 AM',
  },
];

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      const newUserMessage: Message = {
        id: String(messages.length + 1),
        text: inputText,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newUserMessage]);
      setInputText('');

      // Simulate AI response
      setTimeout(() => {
        const aiMessage: Message = {
          id: String(messages.length + 2),
          text: 'This is a great question! Let me provide you with detailed information about this topic...',
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, aiMessage]);
      }, 1000);
    }
  };

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <ThemedText style={styles.headerTitle}>Ask Ethiopian</ThemedText>
          <ThemedText style={styles.headerSubtitle}>Your smart guide to Ethiopia</ThemedText>
        </View>
        <TouchableOpacity>
          <IconSymbol name="clock.badge.checkmark.fill" size={24} color="#1B5E5E" />
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
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
        contentContainerStyle={styles.messagesList}
        scrollEnabled={false}
      />

      {/* Input Area */}
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 2,
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#999',
  },
  messagesList: {
    padding: 16,
  },
  messageContainer: {
    marginVertical: 8,
    alignItems: 'flex-start',
  },
  userMessageContainer: {
    alignItems: 'flex-end',
  },
  aiMessageContainer: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    maxWidth: '80%',
  },
  userBubble: {
    backgroundColor: '#1B5E5E',
  },
  aiBubble: {
    backgroundColor: '#F0F0F0',
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
  },
  userText: {
    color: '#FFF',
  },
  aiText: {
    color: '#1F1F1F',
  },
  timestamp: {
    fontSize: 11,
    color: '#999',
    marginTop: 4,
    marginHorizontal: 12,
  },
  inputArea: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#F5F5F5',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    color: '#1F1F1F',
    maxHeight: 100,
    paddingVertical: 8,
    fontSize: 14,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1B5E5E',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});
