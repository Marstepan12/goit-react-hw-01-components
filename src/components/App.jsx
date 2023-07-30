import { Profile }  from './Profile/Profile';
import { Statistics }  from './Statistics/Statistics';
import  FriendList   from './FriendList/FriendList';
import  FriendListItem  from './FriendListItem/FriendListItem';
import  TransactionHistory  from './Transactions/TransactionHistory';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      
      <FriendList>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
        ))}
      </FriendList>
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;

