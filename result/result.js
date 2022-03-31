

//HTMLが読み込まれたときにjsファイルを読み込む
window.onload = onLoad;

    function onLoad() {

      //大吉
      const omikujiDaikichi = document.getElementById('omikuji-daikichi');
      //吉
      const omikujiKichi = document.getElementById('omikuji-kichi');
      //中吉
      const omikujiCyukichi = document.getElementById('omikuji-cyukichi');
      //小吉
      const omikujiSyokichi = document.getElementById('omikuji-syokichi');
      //凶
      const omikujiKyo = document.getElementById('omikuji-kyo');
      //大凶
      const omikujiDaikyou = document.getElementById('omikuji-daikyou');

      if (omikujiDaikichi) {

        ruffy(omikujiDaikichi)

      } else if (omikujiKichi) {

        zoro(omikujiKichi)

      } else if(omikujiCyukichi) {

        nami(omikujiCyukichi)

      } else if (omikujiSyokichi) {

        sanji(omikujiSyokichi)

      } else if (omikujiKyo) {

        buggy(omikujiKyo)

      } else if (omikujiDaikyou) {

        kaigun(omikujiDaikyou)

      }
    }

    //以下各おじくじの関数
    function ruffy(omikujiDaikichi) {

      const explain = document.getElementById('explain');
      const item = document.getElementById('item');

      omikujiDaikichi.innerHTML = "運勢 ：大吉";
      item.innerHTML = "麦わら帽子";
      explain.innerHTML = "ギア2で向かう所敵なしの絶好調！";
      return;
    }

    function zoro(omikujiKichi) {
      const explain = document.getElementById('explain');
      const item = document.getElementById('item');

      omikujiKichi.innerHTML = "運勢 ：吉";
      item.innerHTML = "和道一文字 ";
      explain.innerHTML = "世界一の剣豪まであと少し！";
      return;
    }

    function nami(omikujiCyukichi) {
      const explain = document.getElementById('explain');
      const item = document.getElementById('item');

      omikujiCyukichi.innerHTML = "運勢 ：中吉";
      item.innerHTML = "クリマタクト";
      explain.innerHTML = "航海日和！世界の海図を描く旅に出ましょう！";
      return;
    }

    function sanji(omikujiSyokichi) {

      const explain = document.getElementById('explain');
      const item = document.getElementById('item');

      omikujiSyokichi.innerHTML = "運勢 ：小吉";
      item.innerHTML = "悪魔風脚";
      explain.innerHTML = "女難の相あり！女性には気をつけて！";
      return;
    }

    function buggy(_omikujiKyo) {
      const explain = document.getElementById('explain');
      const item = document.getElementById('item');

      _omikujiKyo.innerHTML = "運勢 ：凶";
      item.innerHTML = "バラバラの実 ";
      explain.innerHTML = "心が真っ二つにされてしまう様な出来事があるかも！";
      return;

    }

    function  kaigun(_omikujiDaikyou) {

      const explain = document.getElementById('explain');
      const item = document.getElementById('item');

      _omikujiDaikyou.innerHTML = "運勢 ：大凶";
      item.innerHTML = "友人";
      explain.innerHTML = "世界政府に追われるほどの出来事が起こる可能性あり？！";
      return;

    }
