import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  image: any;
  title: string;
  duration: string;
  price: string;
};

export function ServiceCard({
  image,
  title,
  duration,
  price,
}: Props) {
  return (
    <View style={styles.card}>
      {/* Image */}
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} />

        {/* Duration badge */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{duration}</Text>
        </View>
      </View>

      {/* Content */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 14,
  },
  badge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#111827",
  },
  title: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  price: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: "600",
    color: "#F97316",
  },
});
