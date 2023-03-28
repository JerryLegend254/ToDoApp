import React from "react";
import { Text, View, StyleSheet} from "react-native"

export const Task = ({task}) => {

    return (
        <View style={styles.taskWrapper}>
            <View style={styles.leftView}></View>

            <Text style={styles.taskText}>{task}</Text>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
  taskText: {
    fontSize: 20,
    marginLeft: 30,
    width: "80%",
  },
  taskWrapper: {
    backgroundColor: "#fff",
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 8,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  leftView: {
    width: 20,
    height: 20,
    backgroundColor: "#457b9d",
    borderRadius: 5,
  },
  circular: {
    width: 12,
    height: 12,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#e63946",
  },
});