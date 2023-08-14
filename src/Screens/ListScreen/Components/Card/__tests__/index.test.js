import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Card} from '../card';

describe('Card', () => {
  const mockData = {
    name: 'Sample Repo',
    owner: {
      login: 'sample-owner',
      avatar_url: 'https://example.com/avatar.jpg',
    },
    stargazers_count: 42,
  };

  it('renders card data correctly', () => {
    const {getByText, getByTestId} = render(<Card data={mockData} />);

    const title = getByText('Sample Repo');
    const owner = getByText('sample-owner');
    const stars = getByText('42 stars');
    const avatar = getByTestId('avatar');

    expect(title).toBeDefined();
    expect(owner).toBeDefined();
    expect(stars).toBeDefined();
    expect(avatar).toBeDefined();
  });

  it('calls onPress when card is pressed', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <Card data={mockData} onPress={onPressMock} />,
    );

    const cardContainer = getByTestId('card-container');
    fireEvent.press(cardContainer);

    expect(onPressMock).toHaveBeenCalled();
  });
});
