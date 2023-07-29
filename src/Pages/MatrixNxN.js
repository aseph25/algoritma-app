import React from 'react';
import Navbar from './Navbar';

const MatrixNxN = () => {
  // Fungsi untuk mencari hasil pengurangan diagonal matriks NxN
  const findDiagonalDifference = (matrix) => {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    // Menghitung jumlah elemen diagonal utama (kiri atas - kanan bawah)
    for (let i = 0; i < matrix.length; i++) {
      primaryDiagonalSum += matrix[i][i];
    }

    // Menghitung jumlah elemen diagonal kedua (kanan atas - kiri bawah)
    for (let i = 0; i < matrix.length; i++) {
      secondaryDiagonalSum += matrix[i][matrix.length - 1 - i];
    }

    // Mengembalikan hasil pengurangan dari dua diagonal
    return primaryDiagonalSum - secondaryDiagonalSum;
  };

  // Contoh matriks NxN
  const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];

  // Memanggil fungsi untuk mendapatkan hasil pengurangan diagonal matriks
  const result = findDiagonalDifference(matrix);

  return (
    <>
    <Navbar/>
      <h1>Matrix = {JSON.stringify(matrix)}</h1>
      <p>diagonal pertama = {matrix[0][0]} + {matrix[1][1]} + {matrix[2][2]} = {matrix[0][0] + matrix[1][1] + matrix[2][2]}</p>
      <p>diagonal kedua = {matrix[0][2]} + {matrix[1][1]} + {matrix[2][0]} = {matrix[0][2] + matrix[1][1] + matrix[2][0]}</p>
      <p>maka hasilnya adalah {result}</p>
    </>
  );
};

export default MatrixNxN;
