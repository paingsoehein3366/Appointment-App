// app/_layout.tsx
import { darkTheme, lightTheme } from "@/theme";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const scheme = useColorScheme();

  return (
    <PaperProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(auth)" />

        <Stack.Screen name="(tabs)" />

        {/* Modal screens */}
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal" }}
        />
      </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
