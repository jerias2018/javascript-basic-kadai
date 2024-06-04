// #btnの内容を取得
const btn = document.getElementById('btn');
btn.addEventListener("click",()=>{
  // 要素の中身を書き換える
  const textChild = document.getElementById('text');
  textChild.textContent = "ボタンをクリックしました";
});