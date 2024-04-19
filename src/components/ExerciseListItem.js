import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import React from "react";

const ExerciseListItem = ({ item }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{item.name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ExerciseListItem;

const styles = StyleSheet.create({});
