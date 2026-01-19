import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

 export const AvailableTimeSlots = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = ['09:00', '10:00', '11:00', '13:00', '14:30', '16:00', '17:30'];

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <View style={styles.timeSlotsContainer}>
      <Text style={styles.sectionTitle}>Available Time</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.timeSlotsScroll}
      >
        {timeSlots.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.timeSlot,
              selectedTime === time && styles.selectedTimeSlot
            ]}
            onPress={() => handleTimeSelect(time)}
            activeOpacity={0.7}
          >
            <Text style={[
              styles.timeText,
              selectedTime === time && styles.selectedTimeText
            ]}>
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  timeSlotsContainer: {
    flex: 1,
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#3B1F14",
    marginLeft:10,
  },
  timeSlotsScroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  timeSlot: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    margin: 6,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    minWidth: 100,
    alignItems: 'center',
  },
  selectedTimeSlot: {
    backgroundColor: '#4a90e2',
    borderColor: '#4a90e2',
  },
  timeText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  selectedTimeText: {
    color: '#fff',
  },
});