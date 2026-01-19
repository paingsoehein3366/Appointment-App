import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
interface Props {
  onPress: () => void,
  text: string,
}
export const PrimaryButton = ({onPress,text}:Props) => {
  return (
    <TouchableOpacity style={styles.signInButton} onPress={onPress}>
      <Text style={styles.signInText}>{text}</Text>
      <Ionicons name="arrow-forward" size={18} color="#fff" />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  signInButton: {
    backgroundColor: "#D97757",
    height: 56,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  signInText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});