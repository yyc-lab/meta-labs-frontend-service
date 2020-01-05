import React from 'react';
import { useGlobal } from '../../state';
import { Button } from '../Button';

export const Header = () => {
  const [user] = useGlobal('user');
  if (!user) return null;
  return (
    <header className="App-header">
      <Button />
    </header>
  )
}