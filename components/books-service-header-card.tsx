import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Searchbar, Surface, Text, useTheme } from 'react-native-paper';

const { width } = Dimensions.get('window');

export const SimpleBookServiceHeaderCard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();

  return (
    <Surface style={styles.simpleContainer}>
      <View style={styles.simpleHeader}>
        <Text variant="labelLarge" style={styles.simpleGreeting}>
          Mingalarbar
        </Text>
        <Text variant="headlineSmall" style={styles.simpleTitle}>
          Book Service
        </Text>
      </View>
      <Searchbar
        placeholder="Find a service..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.simpleSearchbar}
        icon={() => <MaterialIcons name="search" size={24} color="#666" />}
        clearIcon={() => <MaterialIcons name="close" size={20} color="#666" />}
        theme={{
          ...theme,
          roundness: 16,
          colors: {
            ...theme.colors,
            primary: '#4A6FA5',
            background: '#FFFFFF',
          },
        }}
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  simpleContainer: {
    width: width * 0.9,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    marginVertical: 5,
  },
  simpleHeader: {
    marginBottom: 24,
  },
  simpleGreeting: {
    color: '#666',
    marginBottom: 8,
    fontWeight: '500',
  },
  simpleTitle: {
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  simpleSearchbar: {
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    elevation: 0,
    shadowColor: 'transparent',
  },
});