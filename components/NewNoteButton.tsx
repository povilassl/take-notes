import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { ScreenNavigationProp } from "../types";
import { useNavigation } from "@react-navigation/native";

export const NewNoteButton: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <Pressable
      onPress={() => navigation.navigate("EditNote", { noteId: undefined })}
    >
      <FontAwesome name="pencil-square-o" size={30} color="#ffb703" />
    </Pressable>
  );
};
