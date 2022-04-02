const luckyItem = [
    ['麦わら帽子', 'fashion_mugiwaraboushi'],
    ['えんぴつ', 'bunbougu_memo'],
    ['万年筆', 'techou_open'],
    ['テニスボール', 'sport_tennis_ball'],
    ['コーヒー', 'drink_coffee'],
    ['おにぎり', 'onigiri_mentaiko'],
    ['雨がさ', 'rain_kasatate_kasa'],
];

const data = [
    ["大吉", "onepiece01_luffy", "今日は絶好調！ 何をしてもうまくいきます。 イケイケでやってみましょう。"],
    ["中吉", "onepiece02_zoro_bandana", "今日はかなり好調です。 良いイベントが起きるので、 見逃さないようにしましょう。"],
    ["小吉", "onepiece03_nami", "今日は好調です。 小さな幸せを感じて、 元気に過ごせるでしょう。"],
    ["吉", "onepiece05_sanji", "今日はまずまず。 可もなく不可もない、 良い1日になるでしょう。"],
    ["凶", "onepiece12_buggy", "今日は注意です。 慎重に事を運べば、 失敗や事故を回避できるでしょう。"],
    ["大凶", "onepiece20_santaisyou", "今日は試練の1日です。 大変ですが、 乗り越えれば大きくレベルアップできるでしょう。"]
];

function randomResult() {
    const randomNum = Math.floor( Math.random() * 6 );
    const randomNumItem = Math.floor( Math.random() * 7 );
    document.getElementById('fortune').innerText = '運勢：' + data[randomNum][0];
    document.getElementById('image').setAttribute('src', 'img/imgOmikuji/' + data[randomNum][1] + '.png');
    document.getElementById('description').innerText = data[randomNum][2];
    document.getElementById('item').innerText = luckyItem[randomNumItem][0];
    // document.getElementById('itemImage').setAttribute('src', 'img/item/' + luckyItem[randomNumItem][1] + '.png');
}