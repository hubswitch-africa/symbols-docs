'use client';
import { useState } from 'react';
import symbols from '../api/data.json';

const SymbolSearch = () => {
  const [query, setQuery] = useState('');

  return (
    <>
        <div className='bg-zinc-700 p-3'>
            <input 
                type="text" 
                className="bg-inherit rounded w-full outline-none p-2.5 border-zinc-500 border text-white placeholder:text-dark-700" 
                placeholder="Find a country..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>

        {symbols.filter(
            (data) => {
                return query.toLowerCase() === ''
                ? data
                : data.prefix.toLowerCase().includes(query) || data.prefix.toUpperCase().includes(query);
            }).map(data => (
            <>
                <div className="p-5 flex justify-start content-normal text-center">
                    <div className='w-5 pr-10 pl-3 decoration-black text-4xl font-bold symbol'>{data.body}</div>

                    <div className='px-20 text-left'>
                        <span className="symbol-name text-xl font-bold">{data.name}</span> <br />
                        <span className="symbol-prefix text-sm">{data.prefix}</span>
                    </div>
                </div>
                <hr className='w-full' />
            </>
        ))}
    </>
  )
}

export default SymbolSearch