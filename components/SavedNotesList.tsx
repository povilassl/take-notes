import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { getAllNotes, Note } from "../services/noteStoreService";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export const SavedNotesList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const navigation = useNavigation();

  useFocusEffect(() => {
    getAllNotes().then((result) => setNotes(result.notes));
  });

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          {notes.map((note) => (
            <Pressable
              key={note.id}
              onPress={() =>
                navigation.navigate("EditNote", { noteId: note.id })
              }
            >
              <View style={styles.row}>
                <Text style={styles.note} key={note.id}>
                  {note.text.length === 0 ? "Blank note" : note.text}
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    alignSelf: "center",
    height: 90,
    justifyContent: "center",
  },
  note: { paddingVertical: 20, paddingLeft: 20, width: "100%", fontSize: 16 },
  container: { width: "100%", flex: 1 },
});
