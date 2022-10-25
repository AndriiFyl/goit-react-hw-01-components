import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory'; 
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';




export const App = () => {
  return (
    <div>
      <Profile
  username = {user.username}
  tag = {user.tag}
  location = {user.location}
  avatar = {user.avatar}
  followers = {user.stats.followers}
  views = {user.stats.views}
  likes = {user.stats.likes}
      />
      

   <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions}/> 
    </div>
    
  );
};





