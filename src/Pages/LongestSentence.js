import React from 'react';
import Navbar from './Navbar';

const LongestSentence = () => {
  const longest = (sentence) => {
    const words = sentence.split(' ');
    let longestWord = '';

    words.forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    });

    return `${longestWord}: ${longestWord.length} character`;
  };

  const sentence = "Saya sangat senang mengerjakan soal algoritma";
  const longestResult = longest(sentence);

  return (
    <div>
      <Navbar/>
      <p>Kalimat Contoh : {sentence}</p>
      <p>Kata Terpanjang : {longestResult}</p>
    </div>
  );
};

export default LongestSentence;
