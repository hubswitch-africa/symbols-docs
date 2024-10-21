import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-black text-gray-300 text-xl p-5">
        <Link href='https://github.com/hubswitch-africa/vscode-symbols'>@hubswitch-africa/vscode-symbols</Link>
    </div>
  )
}

export default Header