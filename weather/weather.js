const authCode = 'CWA-95E8AD39-3134-4A7B-BD75-B9D4E3A1B404'
const area_data = {
  '臺北市': {
    apiCode: '063',
    regions:[
      '中正區', '大同區', '中山區', '萬華區', '信義區', '松山區', '大安區', '南港區', '北投區', '內湖區', '士林區', '文山區'
    ]
  },
  '新北市': {
    apiCode: '071',
    regions:[
      '板橋區', '新莊區', '泰山區', '林口區', '淡水區', '金山區', '八里區', '萬里區', '石門區', '三芝區', '瑞芳區', '汐止區', '平溪區', '貢寮區', '雙溪區', '深坑區', '石碇區', '新店區', '坪林區', '烏來區', '中和區', '永和區', '土城區', '三峽區', '樹林區', '鶯歌區', '三重區', '蘆洲區', '五股區'
    ]
  },
  '基隆市':{
    apiCode: '051',
    regions:[
      '仁愛區', '中正區', '信義區', '中山區', '安樂區', '暖暖區', '七堵區'
    ]
  },
  '桃園市': {
    apiCode: '007',
    regions:[
      '桃園區', '中壢區', '平鎮區', '八德區', '楊梅區', '蘆竹區', '龜山區', '龍潭區', '大溪區', '大園區', '觀音區', '新屋區', '復興區'
    ]
  },
  '新竹縣': {
    apiCode: '011',
    regions:[
      '竹北市', '竹東鎮', '新埔鎮', '關西鎮', '峨眉鄉', '寶山鄉', '北埔鄉', '橫山鄉', '芎林鄉', '湖口鄉', '新豐鄉', '尖石鄉', '五峰鄉'
    ]
  },
  '新竹市': {
    apiCode: '055',
    regions:[
      '東區', '北區', '香山區'
    ]
  },
  '苗栗縣': {
    apiCode: '015',
    regions:[
      '苗栗市', '通霄鎮', '苑裡鎮', '竹南鎮', '頭份鎮', '後龍鎮', '卓蘭鎮', '西湖鄉', '頭屋鄉', '公館鄉', '銅鑼鄉', '三義鄉', '造橋鄉', '三灣鄉', '南庄鄉', '大湖鄉', '獅潭鄉', '泰安鄉'
    ]
  },
  '臺中市': {
    apiCode: '075',
    regions:[
      '中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區', '大里區', '霧峰區', '烏日區', '豐原區', '后里區', '東勢區', '石岡區', '新社區', '和平區', '神岡區', '潭子區', '大雅區', '大肚區', '龍井區', '沙鹿區', '梧棲區', '清水區', '大甲區', '外埔區', '大安區'
    ]
  },
  '南投縣': {
    apiCode: '023',
    regions:[
      '南投市', '埔里鎮', '草屯鎮', '竹山鎮', '集集鎮', '名間鄉', '鹿谷鄉', '中寮鄉', '魚池鄉', '國姓鄉', '水里鄉', '信義鄉', '仁愛鄉'
    ]
  },
  '彰化縣': {
    apiCode: '019',
    regions:[
      '彰化市', '員林鎮', '和美鎮', '鹿港鎮', '溪湖鎮', '二林鎮', '田中鎮', '北斗鎮', '花壇鄉', '芬園鄉', '大村鄉', '永靖鄉', '伸港鄉', '線西鄉', '福興鄉', '秀水鄉', '埔心鄉', '埔鹽鄉', '大城鄉', '芳苑鄉', '竹塘鄉', '社頭鄉', '二水鄉', '田尾鄉', '埤頭鄉', '溪州鄉'
    ]
  },
  '雲林縣': {
    apiCode: '027',
    regions:[
      '斗六市', '斗南鎮', '虎尾鎮', '西螺鎮', '土庫鎮', '北港鎮', '莿桐鄉', '林內鄉', '古坑鄉', '大埤鄉', '崙背鄉', '二崙鄉', '麥寮鄉', '臺西鄉', '東勢鄉', '褒忠鄉', '四湖鄉', '口湖鄉', '水林鄉', '元長鄉'
    ]
  },
  '嘉義縣': {
    apiCode: '031',
    regions:[
      '太保市', '朴子市', '布袋鎮', '大林鎮', '民雄鄉', '溪口鄉', '新港鄉', '六腳鄉', '東石鄉', '義竹鄉', '鹿草鄉', '水上鄉', '中埔鄉', '竹崎鄉', '梅山鄉', '番路鄉', '大埔鄉', '阿里山鄉'
    ]
  },
  '嘉義市': {
    apiCode: '059',
    regions:[
      '東區', '西區'
    ]
  },
  '臺南市': {
    apiCode: '079',
    regions:[
      '中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區', '左鎮區', '玉井區', '楠西區', '南化區', '仁德區', '關廟區', '龍崎區', '官田區', '麻豆區', '佳里區', '西港區', '七股區', '將軍區', '學甲區', '北門區', '新營區', '後壁區', '白河區', '東山區', '六甲區', '下營區', '柳營區', '鹽水區', '善化區', '大內區', '山上區', '新市區', '安定區'
    ]
  },
  '高雄市': {
    apiCode: '067',
    regions:[
      '楠梓區', '左營區', '鼓山區', '三民區', '鹽埕區', '前金區', '新興區', '苓雅區', '前鎮區', '小港區', '旗津區', '鳳山區', '大寮區', '鳥松區', '林園區', '仁武區', '大樹區', '大社區', '岡山區', '路竹區', '橋頭區', '梓官區', '彌陀區', '永安區', '燕巢區', '田寮區', '阿蓮區', '茄萣區', '湖內區', '旗山區', '美濃區', '內門區', '杉林區', '甲仙區', '六龜區', '茂林區', '桃源區', '那瑪夏區'
    ]
  },
  '屏東縣': {
    apiCode: '035',
    regions:[
      '屏東市', '潮州鎮', '東港鎮', '恆春鎮', '萬丹鄉', '長治鄉', '麟洛鄉', '九如鄉', '里港鄉', '鹽埔鄉', '高樹鄉', '萬巒鄉', '內埔鄉', '竹田鄉', '新埤鄉', '枋寮鄉', '新園鄉', '崁頂鄉', '林邊鄉', '南州鄉', '佳冬鄉', '琉球鄉', '車城鄉', '滿州鄉', '枋山鄉', '霧台鄉', '瑪家鄉', '泰武鄉', '來義鄉', '春日鄉', '獅子鄉', '牡丹鄉', '三地門鄉'
    ]
  },
  '宜蘭縣': {
    apiCode: '003',
    regions:[
      '宜蘭市', '羅東鎮', '蘇澳鎮', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '冬山鄉', '五結鄉', '三星鄉', '大同鄉', '南澳鄉'
    ]
  },
  '花蓮縣': {
    apiCode: '043',
    regions:[
      '花蓮市', '鳳林鎮', '玉里鎮', '新城鄉', '吉安鄉', '壽豐鄉', '秀林鄉', '光復鄉', '豐濱鄉', '瑞穗鄉', '萬榮鄉', '富里鄉', '卓溪鄉'
    ]
  },
  '臺東縣': {
    apiCode: '039',
    regions:[
      '臺東市', '成功鎮', '關山鎮', '長濱鄉', '海端鄉', '池上鄉', '東河鄉', '鹿野鄉', '延平鄉', '卑南鄉', '金峰鄉', '大武鄉', '達仁鄉', '綠島鄉', '蘭嶼鄉', '太麻里鄉'
    ]
  },
  '澎湖縣': {
    apiCode: '047',
    regions:[
      '馬公市', '湖西鄉', '白沙鄉', '西嶼鄉', '望安鄉', '七美鄉'
    ]
  },
  '金門縣': {
    apiCode: '087',
    regions:[
      '金城鎮', '金湖鎮', '金沙鎮', '金寧鄉', '烈嶼鄉', '烏坵鄉'
    ]
  },
  '連江縣': {
    apiCode: '083',
    regions:[
      '南竿鄉', '北竿鄉', '莒光鄉', '東引鄉'
    ]
  }
}

const DAY = { 
  0: '週日',
  1: '週一', 
  2: '週二', 
  3: '週三', 
  4: '週四', 
  5: '週五', 
  6: '週六', 
}
const citySelect = document.getElementById('city')
const cityRegion = document.getElementById('region')
const carousel = document.querySelector('.carousel')
const cityNameDom = document.querySelector(".city-name")
const allCityInMap = document.querySelectorAll('g') 

let cityName;

Object.keys(area_data).forEach(cityName => {
  const option = document.createElement("option");
  option.text = cityName;
  option.value = cityName;
  citySelect.append(option)
})

allCityInMap.forEach(city => {
  city.addEventListener('click', (e) => {
    cityName = e.currentTarget.id
    allCityInMap.forEach(city => {
      city.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
    resetRegionSelect()
  })
})

function resetRegionSelect() {
  // 重設對應城市的區域
  cityRegion.innerHTML = `<option value="" disabled selected>請選擇區域</option>`

  area_data[cityName].regions.forEach(region => {
    const option = document.createElement("option");
    option.text = region;
    option.value = region;
    cityRegion.append(option)
  })
}

citySelect.addEventListener('change', (e) => {
  // 紀錄城市的 api 碼
  cityName = e.target.value
  resetRegionSelect()
})

cityRegion.addEventListener('change', (e) => {  
  getWeatherData(area_data[cityName].apiCode, e.target.value)
  cityNameDom.innerHTML = `${cityName}${e.target.value}`
})


function getWeatherData(apiCode, regionName) {
  const nowHour = new Date().getHours()
  fetch(`https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-${apiCode}?Authorization=CWA-95E8AD39-3134-4A7B-BD75-B9D4E3A1B404`)
  .then(res => res.json())
  .then(data => {
    const regionData = data.records.locations[0].location.filter(location => location.locationName === regionName)[0]
    // 我所需的4種天氣相關資訊
    const weekMinTemp = regionData.weatherElement[regionData.weatherElement.findIndex(element => element.elementName === 'MinT')].time
    const weekMaxTemp = regionData.weatherElement[regionData.weatherElement.findIndex(element => element.elementName === 'MaxT')].time
    const weekWx = regionData.weatherElement[regionData.weatherElement.findIndex(element => element.elementName === 'Wx')].time
    // const weekPoP = regionData.weatherElement[regionData.weatherElement.findIndex(element => element.elementName === 'PoP12h')].time

    carousel.innerHTML = ''
    for (i = 0; i < 13; i+=2) {  
      let imagePath;
      const weatherCode = weekWx[i].elementValue[1].value
      if (nowHour >= 6 && nowHour <= 18) {
        imagePath = weatherCode
      } else {
        imagePath = parseInt(weatherCode) <= 4 ? weatherCode + '-night' : weatherCode
      }
      carousel.innerHTML += ` <div class="card">
      <div class="card-body">
        <h5 class="card-title">${DAY[new Date(weekMinTemp[i].startTime).getDay()]}</h5>
        <img src='./img/${imagePath}.svg' alt='天氣圖騰'/>
        <div class="temperature">
          <p class="max-temp">${weekMaxTemp[i].elementValue[0].value}&#176;C</p>
          <p class="min-temp">${weekMinTemp[i].elementValue[0].value}&#176;C</p>
        </div>
      </div>
    </div>`  
    }
  })
}

window.addEventListener('load', () => {
  getWeatherData('063', '大安區')
  cityNameDom.innerHTML = '臺北市大安區'
})