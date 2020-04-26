import React from "react";
import { View, ScrollView, StatusBar } from "react-native";

import spaceQuestions from "../data/space";
import westernsQuestions from "../data/westerns";
import computerQuestions from "../data/computers";

import { RowItem } from "../components/RowItems";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Space"
      color="#1f1d1b"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Space",
          questions: spaceQuestions,
          color: "#1f1d1b",
        })
      }
    />
    <RowItem
      name="Westerns"
      color="#e69d20"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Westerns",
          questions: westernsQuestions,
          color: "#e69d20",
        })
      }
    />
    <RowItem
      name="Computers"
      color="#3b94cc"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Computers",
          questions: computerQuestions,
          color: "#3b94cc",
        })
      }
    />
  </ScrollView>
);
