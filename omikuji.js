
//リンク先のURLを配列にする

const omikujibutton = document.getElementById('omikujibutton');

//ボタンがクリックされた時nullチェックが必要
if (omikujibutton != null) {

    omikujibutton.addEventListener('click', randomLink);
    function randomLink(){
        var resultPage = ["daikichi.html","kichi.html","cyukichi.html","syokichi.html","kyo.html","daikyou.html"];
        //ランダムでリンクの配列のインデックスを決める
        var link = Math.floor(Math.random()*resultPage.length);
        //リンク先を返す
        return location.href = "result/" + resultPage[link];
    };
}
