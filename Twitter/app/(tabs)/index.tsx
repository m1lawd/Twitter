import { StyleSheet , Image } from 'react-native';

import { Text, View } from '@/components/Themed';
import tweets from '@/assets/data/tweets';

const tweet = tweets[1];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage}/>
      <Text>
        {tweet.content}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  }
});
