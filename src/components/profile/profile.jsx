import { Description } from '../description/description';
import css from './profile.module.css';

export const Profile = ({ profile }) => {
  return (
    <div className={css.profileCard}>
      <Description
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        followers={profile.stats.followers}
        views={profile.stats.views}
        likes={profile.stats.likes}
      />
    </div>
  );
};
