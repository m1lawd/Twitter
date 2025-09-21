
export type User = {
  id: String;
  name: String;
  username: String;
  image?: String;
}


export type TweetType={
  id: String;
  content: String;
  user: User;
  createdAt: String;
  image?: String;
  numbberOfComments?: number;
  numerOfRetweets?: number;
  numberOfLikes?: number;
  impressions?: number;
}
