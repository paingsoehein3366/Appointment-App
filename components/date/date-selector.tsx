// DateSelector.tsx (unchanged, just for reference)
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

type DateItem = {
  id: string;
  day: string;
  date: number;
};

type Props = {
  month: string;
  dates: DateItem[];
  onSelect?: (item: DateItem) => void;
};

export function DateSelector({ month, dates, onSelect }: Props) {
  const [selectedId, setSelectedId] = useState(dates[0]?.id);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.month}>{month}</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dates}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 12 }}
        renderItem={({ item }) => {
          const isSelected = item.id === selectedId;

          return (
            <Pressable
              onPress={() => {
                setSelectedId(item.id);
                onSelect?.(item);
              }}
              style={[
                styles.card,
                isSelected && styles.selectedCard,
              ]}
            >
              <Text
                style={[
                  styles.day,
                  isSelected && styles.selectedDay,
                ]}
              >
                {item.day}
              </Text>

              <Text
                style={[
                  styles.date,
                  isSelected && styles.selectedDate,
                ]}
              >
                {item.date}
              </Text>

              {isSelected && <View style={styles.dot} />}
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  month: {
    fontSize: 18,
    fontWeight: "700",
    color: "#3B1F14",
  },
  viewAll: {
    fontSize: 14,
    fontWeight: "600",
    color: "#E76F51",
  },
  card: {
    width: 64,
    height: 90,
    backgroundColor: "#fff",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
  },
  selectedCard: {
    backgroundColor: "#4F7C5C",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  day: {
    fontSize: 12,
    color: "#9CA3AF",
    marginBottom: 4,
  },
  selectedDay: {
    color: "#D1FAE5",
  },
  date: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },
  selectedDate: {
    color: "#fff",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#FACC15",
    marginTop: 6,
  },
});