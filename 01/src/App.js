import React from 'react';
import Profile from './components/Profile/Profile';
import user from './user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';

export default function App() {
  return (
    <>
      <h3>Task 01 - Profile</h3>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h3>Task 02 - Statistical Data</h3>
      <Statistics title="Upload stats" stats={statisticalData} />
      <h3>Task 03 - Friend List</h3>
      <FriendList friends={friends} />
      <h3>Task 04 - Transactions</h3>
      <TransactionHistory items={transactions} />
    </>
  );
}
