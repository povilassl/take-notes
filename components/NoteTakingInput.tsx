import React, { useEffect, useLayoutEffect, useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { getNote } from "../services/noteStoreService";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";
import { SaveNote } from "./SaveNote";

type Props = {
  noteId: string | undefined;
};

export const NoteTakingInput: React.FC<Props> = ({ noteId }) => {
  const [text, setText] = useState<string>("");
  const navigation = useNavigation<ScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <SaveNote text={text} id={noteId ?? ""} />,
    });
  }, [navigation, text, noteId]);

  useEffect(() => {
    if (noteId) {
      getNote(noteId).then((result) => setText(result?.text ?? ""));
    }
  }, []);

  return (
    <>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        multiline
        autoFocus
      />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#ffb70342",
    width: "100%",
    textAlignVertical: "top",
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
});
