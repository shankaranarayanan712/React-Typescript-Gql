import React from 'react';

export const UserWithAvatar = ({
  user,
  orientation = 'vertical',
}: {
  user: any;
  orientation: string;
}): React.ReactElement => {
  return (
    <span className={`issue__user ${orientation}`}>
      <img className="issue__user__avatar" src={user?.avatarUrl} alt="" />
      <div className="issue__user__name">{user?.login}</div>
    </span>
  );
};
