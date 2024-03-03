import user from '../data/user.json';
import uploadStats from "../data/statistics.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import Profile from './Profile/Profile';
import Section from './Section/Section';
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/Friendlist";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <div> 
  
     <Section title={"1 - Social network profile"}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
 
      <Section title={"2 - Statistics section"}>
        <Statistics title="Upload stats" stats={uploadStats} />
      </Section>
     

      <Section title={"3 - Friends list"}>
        <FriendList friends={friends} />
      </Section>

      <Section title={"4 - Transaction history "}>
        <TransactionHistory transactions={transactions} />
      </Section>
     
    </div>
  );
}