import { Text } from "react-native";
import Tweet from "@/components/Tweet";
import tweets from "@/assets/data/tweets";
import { useSearchParams } from "expo-router/build/hooks";
import { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";

export default function TweetScreen() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const navigation = useNavigation();

  const tweet = tweets.find((t) => t.id === id);

  useLayoutEffect(() => {
    if (tweet) {
      navigation.setOptions({
        title: tweet.user.name, // 👈 change to tweet.user.username if you prefer
      });
    }
  }, [tweet]);

  if (!tweet) {
    return <Text>Tweet {id} Not Found! </Text>;
  }

  return <Tweet tweet={tweet} />;
}
