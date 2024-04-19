import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, ScrollView, View } from "react-native";

import exercises from "./assets/data/exercises.json";
import ExerciseListItem from "./src/components/ExerciseListItem";
export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.contentContainer}
        data={exercises}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <ExerciseListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    gap: 5,
  },
});
