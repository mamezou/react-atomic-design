import React from 'react';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organims/user/UserCard';
import { BrowserRouter } from 'react-router-dom';
import { DefaultLayout } from './components/templates/DefaultLayout';

const user = {
  name: 'まめぞう',
  image: 'https://source.unsplash.com/TD4DBagg2wE',
  email: '12345@gmail.com',
  phone: '090-1111-2222',
  company: {
    name: 'test-company',
  },
  website: 'https://google.com',
};

const App = () => (
  <BrowserRouter>
    <DefaultLayout>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <SearchInput></SearchInput>
      <UserCard user={user} />
    </DefaultLayout>
  </BrowserRouter>
);

export default App;
