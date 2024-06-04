// #btnの内容を取得
const btn = document.getElementById('btn');
btn.addEventListener("click",()=>{
  // 要素の中身を書き換える
  document.querySelector("h2").innerText="ボタンをクリックしました";
});