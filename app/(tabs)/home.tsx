import { ServiceCard } from "@/components";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <ScrollView>
        <ServiceCard
          image={require("@/assets/images/icon.png")}
          title="Traditional Massage"
          duration="60 min"
          price="25,000 Ks"
        />
     </ScrollView>
    </SafeAreaView>
  );
}
