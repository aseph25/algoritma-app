import React from 'react';
import Navbar from './Navbar';

const ArrayKata = () => {
  // Array INPUT
  const INPUT = ['saya', 'suka', 'makan', 'nasi', 'goreng', 'suka'];

  // Array QUERY
  const QUERY = ['suka', 'nasi', 'rendang'];

  // Fungsi untuk menghitung berapa kali kata dalam QUERY muncul dalam INPUT
  const countOccurrence = (arr, target) => {
    let count = 0;
    arr.forEach((item) => {
      if (item === target) {
        count++;
      }
    });
    return count;
  };

  // Menghitung jumlah kemunculan kata dalam QUERY pada array INPUT
  const results = QUERY.map((word) => ({
    word: word,
    count: countOccurrence(INPUT, word),
  }));

  return (
    <div>
      <Navbar/>
      <h2>Input:</h2>
      <ul>
        {INPUT.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Query:</h2>
      <ul>
        {QUERY.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Hasil:</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            Kata "{result.word}" muncul sebanyak {result.count} kali pada array INPUT.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayKata;
