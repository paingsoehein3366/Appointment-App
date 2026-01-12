import { useAuthStore } from "@/features/auth/auth.store";
import { Redirect } from "expo-router";

export default function ProtectedRoute() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  console.log('isAuthenticated: ', isAuthenticated);
  if (!isAuthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  return null;
}
