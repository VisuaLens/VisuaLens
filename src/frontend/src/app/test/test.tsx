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
    localStorage.setItem('isAdmin', 'true');
    localStorage.setItem('key', key);
    alert('Admin-Daten gespeichert!');
  }

  return (
    <>
        <h1 className='text-center'>Test Site</h1>
        <div className='flex h-screen justify-center items-center'>
            <button onClick={writeAdmin} className='p-8 border border-gray-700 rounded-xl bg-gray-400 '>Speichern</button>
        </div>
    </>
  );
}
