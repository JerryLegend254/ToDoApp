import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput , TouchableOpacity, Keyboard} from "react-native";
import { Task } from "./src/components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const onhandleClick = () => {
    Keyboard.dismiss()
    setTaskList([...taskList, task]);
    setTask(null);
  }

  const handleDelete = (idx) => {

    const taskListCopy = [...taskList];
    taskListCopy.splice(idx, 1)
    setTaskList(taskListCopy);

  }
  const mappedTasks = taskList.map((t, i) => (
    <TouchableOpacity key={i } onPress={() => handleDelete(i)}>
      <Task key={i} task={t} />
    </TouchableOpacity>
  ));
  return (
    <>
      <View style={styles.screen}>
        <View style={styles.appTitle}>
          <Text style={styles.title}>Need to Do</Text>
        </View>
        <View style={styles.taskWrapper}>
          {mappedTasks}
          
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.addTaskWrapper}
        >
          <TextInput style={styles.textInput}
            value={task}
            onChangeText={(text) => setTask(text)}
            placeholder="Add new Task" />
          <TouchableOpacity onPress={onhandleClick}>
            <View style={styles.addBtnWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#a8dadc",
  },
  appTitle: {
    paddingTop: 100,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  taskWrapper: {
    marginTop: 20,
  },
  addTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#023047",
    backgroundColor: "#fff",
    width: 250,
  },
  addBtnWrapper: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#023047",
    alignItems: "center",
    justifyContent: "center",
  },
  addText: {
    fontSize: 30,
  },
});
