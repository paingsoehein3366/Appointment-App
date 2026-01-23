// HomeScreen.tsx
import { AvailableTimeSlots, DateSelector, ExpandableAddress, PrimaryButton, SimpleBookServiceHeaderCard } from "@/components";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const dates = [
    { id: "1", day: "Su", date: 1 },
    { id: "2", day: "Mo", date: 2 },
    { id: "3", day: "Tu", date: 3 },
    { id: "4", day: "We", date: 4 },
    { id: "5", day: "Th", date: 5 },
    { id: "6", day: "Fr", date: 6 },
    { id: "7", day: "Sa", date: 7 },
    { id: "8", day: "Su", date: 8 },
    { id: "9", day: "Mo", date: 9 },
    { id: "10", day: "Tu", date: 10 },
    { id: "11", day: "We", date: 11 },
    { id: "12", day: "Th", date: 12 },
    { id: "13", day: "Fr", date: 13 },
    { id: "14", day: "Sa", date: 14 },
  ];

  // Only 4 services for home screen as requested
  const services = [
    {
      id: "1",
      title: "Traditional Massage",
      duration: "60 min",
      price: "25,000 Ks",
      image: require("@/assets/images/icon.png")
    },
    {
      id: "2",
      title: "Thanaka Facial",
      duration: "45 min",
      price: "18,000 Ks",
      image: require("@/assets/images/icon.png")
    },
    {
      id: "3",
      title: "Hair Treatment",
      duration: "90 min",
      price: "35,000 Ks",
      image: require("@/assets/images/icon.png")
    },
    {
      id: "4",
      title: "Nail Art & Spa",
      duration: "60 min",
      price: "20,000 Ks",
      image: require("@/assets/images/icon.png")
    },
  ];

  // Calculate card width based on screen size
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth - 40 - 36) / 2; // 40 for padding, 36 for gap

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SimpleBookServiceHeaderCard/>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <DateSelector
          month="October 2023"
          dates={dates}
          onSelect={(d) => console.log(d)}
        />

        <View style={styles.header}>
          <Text style={styles.title}>Popular Services</Text>
          <TouchableOpacity onPress={() => router.replace('/services/services')}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.servicesGrid}>
          {services.map((item) => (
            <Card key={item.id} style={[styles.serviceCard, { width: cardWidth }]}>
              <Card.Content style={styles.serviceCardContent}>
                <View style={styles.serviceImageContainer}>
                  <View style={styles.serviceImage} />
                  <View style={styles.durationBadge}>
                    <Text style={styles.durationText}>{item.duration}</Text>
                  </View>
                </View>
                <Text style={styles.serviceTitle} numberOfLines={2}>
                  {item.title}
                </Text>

                <Text style={styles.servicePrice}>{item.price}</Text>
              </Card.Content>
            </Card>
          ))}
        </View>
        <AvailableTimeSlots />
        <Card style={styles.addressCard}>
          <Card.Title
            title="Shwe Beauty Salon"
            titleStyle={styles.cardTitle}
            left={() => (
              <View style={styles.locationIcon}>
                <Ionicons name="location-outline" size={18} color="#E76F51" />
              </View>
            )}
          />
          <Card.Content>
            <ExpandableAddress
              text="123 Pyay Road, Kamayut Township, Yangon, Myanmar 11041"
            />
          </Card.Content>
        </Card>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <PrimaryButton text="Confirm Booking" onPress={() => { }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#3B1F14",
  },
  viewAll: {
    fontSize: 14,
    fontWeight: "600",
    color: "#E76F51",
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    gap: 12,
    marginBottom: 20,
  },
  serviceCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 12,
  },
  serviceCardContent: {
    padding: 12,
    alignItems: "center",
  },
  serviceImageContainer: {
    position: 'relative',
    marginBottom: 12,
    width: '100%',
    alignItems: 'center',
  },
  serviceImage: {
    width: '100%',
    height: 100,
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
  },
  durationBadge: {
    position: 'absolute',
    bottom: -8,
    backgroundColor: '#E76F51',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  durationText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
    minHeight: 40,
    width: '100%',
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#3B1F14",
  },
  addressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 10,
    marginBottom: 80,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  locationIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFF1EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    paddingHorizontal: 18,
  },
});