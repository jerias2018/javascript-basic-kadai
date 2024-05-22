//現在の年月日時刻を取得
const today= new Date();

//現在の年を取得
const year=today.getFullYear();

//現在の月を取得
const month=today.getMonth()+1;

//現在の日付を取得
const date=today.getDate();

//現在の年月日を表示
console.log(year+"年"+month+"月"+date+"日");