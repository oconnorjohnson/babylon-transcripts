import React from 'react';
import Link from 'next/link';

const getLink = async () => {
  const element = await (
    <Link href={"/"}>
      <h1>Babylon Transcripts</h1>
    </Link>
  );
  return element;
};

export default async function Nav() {
  return (
    <nav> 
      {await getLink()}
    </nav>
  );
};
