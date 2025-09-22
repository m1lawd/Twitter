import { Text } from "react-native";
import Tweet from "@/components/Tweet";
import tweets from "@/assets/data/tweets";
import { useSearchParams } from "expo-router/build/hooks";

export default function TweetScreen() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const tweet = tweets.find((t) => t.id === id);

  if (!tweet) {
    return <Text>Tweet {id} Not Found! </Text>;
  }

  return <Tweet tweet={tweet} />;
}
