import { Profile } from 'components/profile/profile';
import { Statistics } from 'components/statistics/statistics';
import { FriendList } from 'components/friendList/friendList';
import { TransactionHistory } from 'components/transactionHistory/transactionHistory';
import profileData from 'data/user.json';
import stats from 'data/data.json';
import friends from 'data/friends.json';
import items from 'data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Profile profile={profileData} />
      <Statistics tittle="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};
