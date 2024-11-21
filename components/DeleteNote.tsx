import { useNavigation } from "@react-navigation/native";
import { deleteNote } from "../services/noteStoreService";
import { Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { ScreenNavigationProp } from "../types";

type Props = {
  noteId: string;
};

export const DeleteNote: React.FC<Props> = ({ noteId }) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const deleteNoteHandler = async () => {
    deleteNote(noteId);
    navigation.navigate("Home");
  };

  return (
    <Pressable onPress={deleteNoteHandler}>
      <FontAwesome name="trash-o" size={30} color="#ffb703" />
    </Pressable>
  );
};
