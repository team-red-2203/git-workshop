//リンク先のURLを配列にする
result = ["daikichi.html"];


const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementById('modalClose');

//ボタンがクリックされた時モーダルウインドウを表示する
buttonOpen.addEventListener('click', modalOpen);

function modalOpen() {
    modal.style.display = 'block';
    randomResult();
}

//ボタンをクリックした時モーダルウインドウを削除する
buttonClose.addEventListener('click', modalClose);

function modalClose() {
    modal.style.display = 'none';
}