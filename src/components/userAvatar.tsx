import React from 'react';
import { Author } from '../interfaces/issueList.interface';

export const UserWithAvatar = ({
  user,
  orientation = 'vertical',
}: {
  user: Author;
  orientation: string;
}): React.ReactElement => {
  return (
    <span className={`issue__user ${orientation}`} role="user">
      <img className="issue__user__avatar" src={user?.avatarUrl} alt="" role="userImg" />
      <div className="issue__user__name" role="userLogin">
        {user?.login}
      </div>
    </span>
  );
};
