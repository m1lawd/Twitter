import { StyleSheet, View } from 'react-native';
import Tweet from '@/components/Tweet';
import tweets from '@/assets/data/tweets';


export default function TabOneScreen() {
  return (
    <>
      <Tweet tweet={tweets[0]}/>
      <Tweet tweet={tweets[1]}/>
      <Tweet tweet={tweets[2]}/>
    </>
    
  );
}


const styles = StyleSheet.create({


});

