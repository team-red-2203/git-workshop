//リンク先のURLを配列にする
result = ["daikichi.html"];


const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

//ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen,false);
function modalOpen(){
    modal.style.display = 'block';
}

