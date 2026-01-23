import { StatItem } from '@/components';
import * as React from 'react';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Divider,
  List,
  Switch,
  Text,
  useTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const theme = useTheme();
  const [ isDark, setIsDark ] = useState(false);
  const [notifications, setNotifications] = useState(true);
  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Avatar.Image
          size={90}
          source={{ uri: 'https://i.pravatar.cc/300' }}
        />
        <Text variant="titleLarge" style={styles.name}>
          Thandar Hlaing
        </Text>
        <Text variant="bodyMedium" style={styles.phone}>
          +95 9 123 456 789
        </Text>

        <View style={styles.statsRow}>
          <StatItem label="Bookings" value="12" />
          <StatItem label="Points" value="450" />
          <StatItem label="Member" value="Gold" />
        </View>
      </View>
      <Card style={styles.membershipCard}>
        <Card.Content>
          <Text variant="labelMedium">Current Tier</Text>
          <Text variant="titleMedium" style={{ color: '#FFD700' }}>
            Gold Member
          </Text>
          <View style={styles.progressBar} />
          <Text variant="bodySmall">50 more points to Platinum</Text>
        </Card.Content>
      </Card>
      <Card style={styles.menuCard}>
        <List.Item
          title="My Bookings"
          description="2 Active"
          left={(props) => <List.Icon {...props} icon="calendar" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <Divider />
        <List.Item
          title="Saved Services"
          left={(props) => <List.Icon {...props} icon="heart-outline" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <Divider />
        <List.Item
          title="Payment Methods"
          left={(props) => <List.Icon {...props} icon="credit-card-outline" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <Divider />
        <List.Item
          title="Notifications"
          left={(props) => <List.Icon {...props} icon="bell-outline" />}
          right={() => (
            <Switch
              value={notifications}
              onValueChange={setNotifications}
            />
          )}
        />
        <Divider />
        <List.Item
          title="Settings"
          left={(props) => <List.Icon {...props} icon="cog-outline" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <Divider />
        <List.Item
          title="Help & Support"
          left={(props) => <List.Icon {...props} icon="help-circle-outline" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />
          <List.Item
            title="Dark Mode"
            left={(props) => <List.Icon {...props} icon="weather-night" />}
            right={() => (
              <Switch value={isDark} onValueChange={setIsDark} />
            )}
          />
      </Card>
          <Button
          mode="contained"
          buttonColor="#000"
          style={styles.logout}
          icon="logout"
        >
        Log Out
      </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF7ED',
  },
  container: {
    backgroundColor: '#FFF7ED',
  },
  content: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
  },
  name: {
    marginTop: 8,
    fontWeight: '600',
  },
  phone: {
    color: '#777',
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 24,
  },
  membershipCard: {
    marginBottom: 16,
    backgroundColor: '#2A1A0A',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#FFD700',
    borderRadius: 3,
    marginVertical: 8,
    width: '80%',
  },
  menuCard: {
    marginBottom: 20,
    borderRadius: 16,
  },
  logout: {
    marginTop: 24,
    borderRadius: 12,
  },
});
