import { Profile } from 'components/profile/profile';
import { Statistics } from 'components/statistics/statistics';
import { FriendList } from 'components/friendList/friendList';
import profileData from 'user.json';
import stats from 'data.json';
import friends from 'friends.json';

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
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
    </div>
  );
};
