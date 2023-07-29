import React, { useState } from 'react';
import Navbar from './Navbar';

const ReverseAlphabet = () => {
  const [inputText, setInputText] = useState('');

  const reverseText = (text) => {
    const karakterAlfabet = text.replace(/[0-9]/g, ''); // Hapus angka dari teks
    const angka = text.replace(/[A-Za-z]/g, ''); // Ambil hanya angka dari teks

    return karakterAlfabet.split('').reverse().join('') + angka;
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <Navbar/>
      <h1>Balikkan Teks</h1>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <p>Teks Terbalik: {reverseText(inputText)}</p>
    </div>
  );
};

export default ReverseAlphabet;
