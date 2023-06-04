import Link from 'next/link';

const Header = () => {
  return (
    <div
      style={{
        width: '100%',
        height: 100,
        backgroundColor: '#6B8E23',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
      }}
    >
      <Link
        style={{ fontSize: 24, paddingLeft: 50, color: 'white' }}
        href={'/game'}
      >
        경매장
      </Link>
      {/* <Link href={'/game/create'}></Link> */}
    </div>
  );
};

export default Header;
