const luckyItem = {
  '麦わら帽子': 'fashion_mugiwaraboushi',
  'えんぴつ': 'bunbougu_memo',
  '万年筆': 'techou_open',
  'テニスボール': 'sport_tennis_ball',
  'コーヒー': 'drink_coffee',
  'おにぎり': 'onigiri_mentaiko',
  '雨がさ': 'rain_kasatate_kasa',
};

async function import_csv() {
  await fetch('./data/data.csv')
    .then((res) => {
      if (!res.ok) {
        console.log('正常にリクエストを処理できませんでした。');
      }
      return res.text();
    })
    .then((csv_data) => {
      const randomNum = Math.floor(Math.random() * 10) % 6 + 1;
      const result = convert_array(csv_data)[randomNum];
      console.log(result);
      document.getElementById('fortune').innerText = '運勢：' + result[0];

    })
    .catch((error) => {
      console.log(error);
    })
}

function convert_array(csv_data, num) {
  let data_array = [];
  const data_string = csv_data.split('\n');
  for (let i = 0; i < data_string.length; i++) {
    data_array[i] = data_string[i].split(',');
  }
  return data_array;
}