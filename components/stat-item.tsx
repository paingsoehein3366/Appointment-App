import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.statItem}>
      <Text variant="titleMedium">{value}</Text>
      <Text variant="labelSmall">{label}</Text>
    </View>
  );
}
const styles =StyleSheet.create({
  statItem: {
    alignItems: 'center',
  },
});    