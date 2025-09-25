import { View, StyleSheet, Text, Image, TextInput } from "react-native";

const user = {
  id: "u1",
  username: "VadimNotJustDev",
  name: "Vadim",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
};

export default function NewTweet() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainor}>
        <Image source={{ uri: user.image }} style={styles.image} />
        <TextInput
          placeholder="Whats Happening?"
          multiline
          numberOfLines={5}
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    flex: 1,
  },
  inputContainor: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50, // half of width → perfect circle
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
