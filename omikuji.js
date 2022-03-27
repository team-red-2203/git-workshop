//リンク先のURLを配列にする
result = ["daikichi.html"];

function randomLink(){
    //ランダムでリンクの配列のインデックスを決める
    link = Math.floor(Math.random()*result.length);
    //リンク先を返す
    return location.href = "result/" + result[link];
}