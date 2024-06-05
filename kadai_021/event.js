// #btnの内容を取得
const btn = document.getElementById('btn');
btn.addEventListener("click",()=>{
// 定数に#textを代入。
  const textChild = document.getElementById('text');
    // 要素の中身を書き換える
  setTimeout(() => {textChild.textContent = "ボタンをクリックしました";},2000);
});
