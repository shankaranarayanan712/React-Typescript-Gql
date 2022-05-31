import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserWithAvatar } from '../components/userAvatar';
import { AuthorTypename } from '../interfaces/issueList.interface';

describe('User Component Test', () => {
  test('Should get the user component and match the class', () => {
    const userDetail = {
      avatarUrl: 'https://avatars.githubusercontent.com/u/6662917?u=9f1952577652d5df84f74e3e73428c7691659904&v=4',
      login: 'reducio',
      typename: 'User' as AuthorTypename,
    };
    render(<UserWithAvatar user={userDetail} orientation={''} />);
    const divElement = screen.getByRole('user');
    expect(divElement).toHaveClass(`issue__user`);
  });

  test('Should validate different elements of the user component', () => {
    const userDetail = {
      avatarUrl: 'https://avatars.githubusercontent.com/u/6662917?u=9f1952577652d5df84f74e3e73428c7691659904&v=4',
      login: 'reducio',
      typename: 'User' as AuthorTypename,
    };
    render(<UserWithAvatar user={userDetail} orientation={''} />);
    const imageElement = screen.getByRole('userImg');
    const loginElement = screen.getByRole('userLogin');
    expect(imageElement).toContainHTML('img');
    expect(loginElement).toHaveTextContent('reducio');
  });
});
