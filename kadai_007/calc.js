num = 15;

//   %  左の値を右の値で割った余りを求める。余りなし
// "===0"   2つの値とデータ型が等しい場合はtrueを返す（厳密等価演算子）。

// 変数(num)が3と5の倍数の場合

if ((num % 3) === 0 && (num % 5) === 0) {
  console.log('3と5の倍数です');
}

// 変数(num)が3の倍数の場合
else if ((num % 3) === 0) {
  console.log('3の倍数です');
}

// 変数(num)が5の倍数の場合
else if ((num % 5) === 0) {
  console.log('5の倍数です');
}

// それ以外の場合
else {
  console.log(num);
}
