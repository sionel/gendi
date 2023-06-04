// 'use client';
import React from 'react';
import { connectDB } from '@/util/database';
import Link from 'next/link';
import SearchBar from './components/SearchBar';
import ListView from './ListView';

const List = async () => {
  const db = await connectDB();
  const roomList = await db.collection('room').find().toArray();

  return (
    <div
      style={{
        flex: 1,
        padding: 100,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ListView list={roomList} />
    </div>
  );
};

export default List;
