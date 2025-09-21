
export type User = {
  id: String;
  name: String;
  username: String;
  image?: String;
}


export type TweetType={
  content: String;
  user: User;
}
