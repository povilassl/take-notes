import { useEffect, useState } from "react";
import { Text, Button, StatusBar, View, StyleSheet } from "react-native";
import { NoteTakingInput } from "../components/NoteTakingInput";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllNotes, getNote, Note } from "../services/noteStoreService";
import { SavedNotesList } from "../components/SavedNotesList";

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <SavedNotesList />
    </>
  );
};

const styles = StyleSheet.create({});
