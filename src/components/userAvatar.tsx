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
    <span className={`issue__user ${orientation}`}>
      <img className="issue__user__avatar" src={user?.avatarURL} alt="" />
      <div className="issue__user__name">{user?.login}</div>
    </span>
  );
};
