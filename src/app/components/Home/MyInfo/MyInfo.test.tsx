import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyInfo from './MyInfo';

describe('<MyInfo />', () => {
  test('it should mount', () => {
    render(<MyInfo />);
    
    const myInfo = screen.getByTestId('MyInfo');

    expect(myInfo).toBeInTheDocument();
  });
});