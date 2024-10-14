'use client'; // Hinweis, dass dies eine Client-Komponente ist

import { useEffect, useState } from 'react';
import { generateKey } from './generateKey'; // Importiere die Serverkomponente


export default function Test() {
  const [key, setKey] = useState('');

  useEffect(() => {
    // Generiere den Schlüssel beim Mounten der Komponente
    const generatedKey = generateKey();
    setKey(generatedKey);
  }, []);

  function writeAdmin() {
    if (localStorage.getItem('isAdmin') === null && localStorage.getItem('key') === null) {
        localStorage.setItem('isAdmin', 'true');
        localStorage.setItem('key', key);
        alert('Written all Admin Data');
    } else if(localStorage.getItem('isAdmin') === null) { 
        localStorage.setItem('isAdmin', 'true')
        alert('Written only Admin ')
    } else if(localStorage.getItem('key') === null ) {
        localStorage.setItem('key', key)
    } else {
      
    }
  }

  function clear() {
    localStorage.setItem('isAdmin', '')
    localStorage.setItem('key', '')
  }

  function writePleb() {
    localStorage.setItem('isAdmin', 'false')
    localStorage.setItem('key', '')
  }

  function CheckValues() { 
    console.log(``)
  }

  return (
    <>
        <h1 className='text-center text-[40px]'>Test Site</h1>
        <div className='flex h-screen justify-center items-center'>
            <button onClick={writeAdmin} className='p-8 border border-gray-700 rounded-[20px] bg-gray-300 hovee'>LocalAdmin</button>
            <button onClick={clear} className='p-8 border border-gray-700 rounded-[20px] bg-gray-300 m-5'>Clear</button>
            <button onClick={writePleb} className='p-8 border border-gray-700 rounded-[20px] bg-gray-300 '>WritePleb</button>
            <button onClick={writePleb} className='p-8 border border-gray-700 rounded-[20px] bg-gray-300 m-5'>CheckValues</button>
        </div>
    </>
  );
}
