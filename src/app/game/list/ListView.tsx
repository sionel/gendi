'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';

interface ListViewProps {
  list: any[];
}

const ListView: React.FC<ListViewProps> = ({ list }) => {
  const [keyword, setKeyword] = useState();

  return (
    <div>
      <div
        style={{
          display: 'flex',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SearchBar />
        <Link href={'/game/create'} style={{ textAlign: 'right' }}>
          방 생성
        </Link>
      </div>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ display: 'flex' }}>as222d</div>
        <div>as11d</div>
      </div>
    </div>
  );
};

export default ListView;
