  // создание карты
  var mymap = L.map('map').setView([52.4447, 31.0119], 8);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Интерактивная карта ГГАЭК',
      maxZoom: 18
  }).addTo(mymap);

  //Объявление переменных для работы с марк.
  const cancelFilter = document.getElementById('cancelFilter');
  const culture = document.getElementById('culture');
  const attractions = document.getElementById('attractions');
  const starCity = document.getElementById('starCity');
  const monuments = document.getElementById('monuments');
  const celebrity = document.getElementById('celebrity');
  const industry = document.getElementById('industry');
  const museums = document.getElementById('museums');
  const reserve = document.getElementById('reserve');
  const rivers = document.getElementById('rivers');
  const energy = document.getElementById('energy');
  const myGeolocation = document.getElementById('MyGeolocation');

  //Культурные ценности
  const blockModalCulture1 = document.getElementById('block-modal1');
  const closeCulture1 = document.getElementById('close1-culture');
  closeCulture1.addEventListener('click',function(){
    blockModalCulture1.classList.remove('active1_culture');
  })

  const blockModalCulture2 = document.getElementById('block-modal2');
  const closeCulture2 = document.getElementById('close2-culture');
  closeCulture2.addEventListener('click',function(){
    blockModalCulture2.classList.remove('active1_culture');
  })

  const blockModalCulture3 = document.getElementById('block-modal3');
  const closeCulture3 = document.getElementById('close3-culture');
  closeCulture3.addEventListener('click', function(){
    blockModalCulture3.classList.remove('active1_culture');
  })

  const blockModalCulture4 = document.getElementById('block-modal4');
  const closeCulture4 = document.getElementById('close4-culture');
  closeCulture4.addEventListener('click',function(){
    blockModalCulture4.classList.remove('active1_culture');
  })

  const blockModalCulture5 = document.getElementById('block-modal5');
  const closeCulture5 = document.getElementById('close5-culture').addEventListener('click',function(){
    blockModalCulture5.classList.remove('active1_culture');
  })

  const blockModalCulture6 = document.getElementById('block-modal6');
  const closeCulture6 = document.getElementById('close6-culture')
  .addEventListener('click',function(){
    blockModalCulture6.classList.remove('active1_culture');
  })


  //Музеи
  const blockModalMuseums1 = document.getElementById('block-modal1-museums');
  const closeMuseums1 = document.getElementById('close1-museums').addEventListener('click',function(){
    blockModalMuseums1.classList.remove('active1_culture');
  })

  const blockModalMuseums2 = document.getElementById('block-modal2-museums');
  const closeMuseums2 = document.getElementById('close2-museums').addEventListener('click',function(){
    blockModalMuseums2.classList.remove('active1_culture');
  })

  const blockModalMuseums3 = document.getElementById('block-modal3-museums');
  const closeMuseums3 = document.getElementById('close3-museums').addEventListener('click',function(){
    blockModalMuseums3.classList.remove('active1_culture');
  })

  const blockModalMuseums4 = document.getElementById('block-modal4-museums');
  const closeMuseums4 = document.getElementById('close4-museums').addEventListener('click',function(){
    blockModalMuseums4.classList.remove('active1_culture');
  })

  const blockModalMuseums5 = document.getElementById('block-modal5-museums');
  const closeMuseums5 = document.getElementById('close5-museums').addEventListener('click',function(){
    blockModalMuseums5.classList.remove('active1_culture');
  })

  const blockModalMuseums6 = document.getElementById('block-modal6-museums');
  const closeMuseums6 = document.getElementById('close6-museums').addEventListener('click',function(){
    blockModalMuseums6.classList.remove('active1_culture');
  })

  const blockModalMuseums7 = document.getElementById('block-modal7-museums');
  const closeMuseums7 = document.getElementById('close7-museums').addEventListener('click',function(){
    blockModalMuseums7.classList.remove('active1_culture');
  })

  const blockModalMuseums8 = document.getElementById('block-modal8-museums');
  const closeMuseums8 = document.getElementById('close8-museums').addEventListener('click',function(){
    blockModalMuseums8.classList.remove('active1_culture');
  })

  const blockModalMuseums9 = document.getElementById('block-modal9-museums');
  const closeMuseums9 = document.getElementById('close9-museums').addEventListener('click',function(){
    blockModalMuseums9.classList.remove('active1_culture');
  })

  const blockModalMuseums10 = document.getElementById('block-modal10-museums');
  const closeMuseums10 = document.getElementById('close10-museums').addEventListener('click',function(){
    blockModalMuseums10.classList.remove('active1_culture');
  })
  const blockModalMuseums11 = document.getElementById('block-modal11-museums');
  const closeMuseums11 = document.getElementById('close11-museums').addEventListener('click',function(){
    blockModalMuseums11.classList.remove('active1_culture');
  })
  const blockModalMuseums12 = document.getElementById('block-modal12-museums');
  const closeMuseums12 = document.getElementById('close12-museums').addEventListener('click',function(){
    blockModalMuseums12.classList.remove('active1_culture');
  })
  const blockModalMuseums13 = document.getElementById('block-modal13-museums');
  const closeMuseums13 = document.getElementById('close13-museums').addEventListener('click',function(){
    blockModalMuseums13.classList.remove('active1_culture');
  })
  const blockModalMuseums14 = document.getElementById('block-modal14-museums');
  const closeMuseums14 = document.getElementById('close14-museums').addEventListener('click',function(){
    blockModalMuseums14.classList.remove('active1_culture');
  })
  const blockModalMuseums15 = document.getElementById('block-modal15-museums');
  const closeMuseums15 = document.getElementById('close15-museums').addEventListener('click',function(){
    blockModalMuseums15.classList.remove('active1_culture');
  })
  const blockModalMuseums16 = document.getElementById('block-modal16-museums');
  const closeMuseums16 = document.getElementById('close16-museums').addEventListener('click',function(){
    blockModalMuseums16.classList.remove('active1_culture');
  })
  const blockModalMuseums17 = document.getElementById('block-modal17-museums');
  const closeMuseums17 = document.getElementById('close17-museums').addEventListener('click',function(){
    blockModalMuseums17.classList.remove('active1_culture');
  })
  const blockModalMuseums18 = document.getElementById('block-modal18-museums');
  const closeMuseums18 = document.getElementById('close18-museums').addEventListener('click',function(){
    blockModalMuseums18.classList.remove('active1_culture');
  })
  const blockModalMuseums19 = document.getElementById('block-modal19-museums');
  const closeMuseums19 = document.getElementById('close19-museums').addEventListener('click',function(){
    blockModalMuseums19.classList.remove('active1_culture');
  })







  var markersCulture = [];
  var markersAttractions = [];
  var markersStarCity = [];
  var markersMonuments = [];
  var markersCelebrity = [];
  var markersIndustry = [];
  var markersMuseums = [];
  var markersReserve = [];
  var markersRivers = [];
  var markersEnergy = [];


  //Функция для создание и скрытиеы маркеров (Культурные ценности)
  function createMarkersCulture(){
    var pinkIcon = L.icon({
      // iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      iconUrl: './img/marker/pink.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [35, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
  });
    var marker2 = L.marker([52.422281,31.01690862691909], {icon:pinkIcon}).addTo(mymap);
    marker2.on('click',function(){
      blockModalCulture2.classList.add('active1_culture');
    })

    var marker3 = L.marker([52.0524,29.2448], {icon:pinkIcon}).addTo(mymap);
    marker3.on('click', function(){
      blockModalCulture4.classList.add('active1_culture');
    })
    var marker4 = L.marker([ 52.6536,28.5466], {icon:pinkIcon}).addTo(mymap);
    marker4.on('click', function(){
      blockModalCulture5.classList.add('active1_culture');
    })
    var marker5 = L.marker([52.0709,27.7303], {icon:pinkIcon}).addTo(mymap);
    marker5.on('click', function(){
      blockModalCulture6.classList.add('active1_culture');
    })
    var marker6 = L.marker([52.9195,30.9162], {icon:pinkIcon}).addTo(mymap);
    marker6.on('click', function(){
      blockModalCulture3.classList.add('active1_culture');
    })
    var marker7 = L.marker([52.2547,31,0051], {icon:pinkIcon}).addTo(mymap);
    marker7.on('click', function(){
      blockModalCulture1.classList.add('active1_culture');
    })


    markersCulture.push(marker2,marker3,marker4,marker5,marker6, marker7);
  }
  culture.addEventListener('click',function(){
    createMarkersCulture();
  })
  
  //Функция для скрытия маркеров
  function hideMarkersCulture() {
    for (var i = 0; i < markersCulture.length; i++) {
        mymap.removeLayer(markersCulture[i]);
    }
    markersCulture = [];
  } 
  cancelFilter.addEventListener('click',function(){
    hideMarkersCulture();
  })



  //Функция для создание и скрытие маркеров (Старейшие города)
  function createMarkersStarCity(){
    var fiolIcon = L.icon({
      iconUrl: './img/marker/fiol.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [35, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
  });
    var marker2 = L.marker([53.7870000,30.2677000], {icon:fiolIcon}).addTo(mymap);
    marker2.on('click', function() {
      alert('стар город 1');
    });
    var marker3 = L.marker([54.9458000,30.7953000], {icon:fiolIcon}).addTo(mymap);
    marker3.on('click', function(){
      alert('стар город 2');
    });
    markersStarCity.push(marker2,marker3);
  }
  starCity.addEventListener('click',function(){
    createMarkersStarCity();
  }) 
  //Функция для скрытия маркеров
  function hideMarkersStarCity() {
    for (var i = 0; i < markersStarCity.length; i++) {
        mymap.removeLayer(markersStarCity[i]);
    }
    markersStarCity = [];
  } 
  cancelFilter.addEventListener('click',function(){
    hideMarkersStarCity();
  })


  
  //Функция для создание и скрытие маркеров (Знаменитые люди)
  function createMarkersCelebrity(){
    var fiolIcon = L.icon({
      iconUrl: './img/marker/рр.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [35, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
  });
    var marker2 = L.marker([53.7870000,30.2677000], {icon:fiolIcon}).addTo(mymap);
    marker2.on('click', function() {
      alert('знаменитость 1');
    });
    var marker3 = L.marker([54.9458000,30.7953000], {icon:fiolIcon}).addTo(mymap);
    marker3.on('click', function(){
      alert('знаменитость 2');
    });
    markersCelebrity.push(marker2,marker3);
  }
  celebrity.addEventListener('click',function(){
    createMarkersCelebrity();
  }) 
  //Функция для скрытия маркеров
  function hideMarkersCelebrity() {
    for (var i = 0; i < markersCelebrity.length; i++) {
        mymap.removeLayer(markersCelebrity[i]);
    }
    markersCelebrity = [];
  } 
  cancelFilter.addEventListener('click',function(){
    hideMarkersCelebrity();
  })

   //Функция для создание и скрытие маркеров (Памятники)
  function createMarkersMonuments(){
    var fiolIcon = L.icon({
      iconUrl: './img/marker/green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [35, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
  });
    var marker2 = L.marker([53.7870000,30.2677000], {icon:fiolIcon}).addTo(mymap);
    marker2.on('click', function() {
      alert('памятник 1');
    });
    var marker3 = L.marker([54.9458000,30.7953000], {icon:fiolIcon}).addTo(mymap);
    marker3.on('click', function(){
      alert('памятник 2');
    });
    markersMonuments.push(marker2,marker3);
  }
  monuments.addEventListener('click',function(){
    createMarkersMonuments();
  }) 
  //Функция для скрытия маркеров
  function hideMarkersMonuments() {
    for (var i = 0; i < markersMonuments.length; i++) {
        mymap.removeLayer(markersMonuments[i]);
    }
    markersMonuments = [];
  } 
  cancelFilter.addEventListener('click',function(){
    hideMarkersMonuments();
  })
  

   //Функция для создание и скрытие маркеров (Промышленность)
  function createMarkersIndustry(){
    var fiolIcon = L.icon({
      iconUrl: './img/marker/map-marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [35, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
  });
    var marker2 = L.marker([53.7870000,30.2677000], {icon:fiolIcon}).addTo(mymap);
    marker2.on('click', function() {
      alert('промышленность 1');
    });
    var marker3 = L.marker([54.9458000,30.7953000], {icon:fiolIcon}).addTo(mymap);
    marker3.on('click', function(){
      alert('промышленность 2');
    });
    markersIndustry.push(marker2,marker3);
  }
  industry.addEventListener('click',function(){
    createMarkersIndustry();
  }) 
  //Функция для скрытия маркеров
  function hideMarkersIndustry() {
    for (var i = 0; i < markersIndustry.length; i++) {
        mymap.removeLayer(markersIndustry[i]);
    }
    markersIndustry = [];
  } 
  cancelFilter.addEventListener('click',function(){
    hideMarkersIndustry();
  })

  //Функция для создание и скрытие маркеров (Музеи)
  function createMarkersMuseums(){
    var fiolIcon = L.icon({
      iconUrl: './img/marker/black.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [35, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
  });
    var marker2 = L.marker([52.42846,31.018764], {icon:fiolIcon}).addTo(mymap);
    marker2.on('click', function() {
      blockModalMuseums1.classList.add('active1_culture')
    });
    var marker3 = L.marker([52.426494,31.010598], {icon:fiolIcon}).addTo(mymap);
    marker3.on('click', function(){ 
      blockModalMuseums2.classList.add('active1_culture');
    });
    var marker4 = L.marker([52.430843,31.002864], {icon:fiolIcon}).addTo(mymap);
    marker4.on('click', function(){
      blockModalMuseums3.classList.add('active1_culture');
    });
    var marker5 = L.marker([52.430843,31.002864], {icon:fiolIcon}).addTo(mymap);
    marker5.on('click', function(){
      blockModalMuseums4.classList.add('active1_culture');
    });
    var marker6 = L.marker([52.423523,31.018198], {icon:fiolIcon}).addTo(mymap);
    marker6.on('click', function(){
      blockModalMuseums5.classList.add('active1_culture');
    });
    var marker7 = L.marker([52.419404,30.99839], {icon:fiolIcon}).addTo(mymap);
    marker7.on('click', function(){
      blockModalMuseums6.classList.add('active1_culture');
    });
    var marker8 = L.marker([51.790203,30.27035], {icon:fiolIcon}).addTo(mymap);
    marker8.on('click', function(){
      blockModalMuseums7.classList.add('active1_culture');
    });
    var marker9 = L.marker([52.558086,31.171882], {icon:fiolIcon}).addTo(mymap);
    marker9.on('click', function(){
      blockModalMuseums8.classList.add('active1_culture');
    });
    var marker10 = L.marker([52.140207,28.604551], {icon:fiolIcon}).addTo(mymap);
    marker10.on('click', function(){
      blockModalMuseums9.classList.add('active1_culture');
    });
    var marker11 = L.marker([51.80669,29.149648], {icon:fiolIcon}).addTo(mymap);
    marker11.on('click', function(){
      blockModalMuseums10.classList.add('active1_culture');
    });
    var marker12 = L.marker([53.190154,30.870973], {icon:fiolIcon}).addTo(mymap);
    marker12.on('click', function(){
      blockModalMuseums11.classList.add('active1_culture');
    });
    var marker13 = L.marker([52.049019,29.267301], {icon:fiolIcon}).addTo(mymap);
    marker13.on('click', function(){
      blockModalMuseums12.classList.add('active1_culture');
    });
    var marker14 = L.marker([51.939741,30.805666], {icon:fiolIcon}).addTo(mymap);
    marker14.on('click', function(){
      blockModalMuseums13.classList.add('active1_culture');
    });
    var marker15 = L.marker([53.080958,30.051593], {icon:fiolIcon}).addTo(mymap);
    marker15.on('click', function(){
      blockModalMuseums14.classList.add('active1_culture');
    });
    var marker16 = L.marker([52.635204,28.880522], {icon:fiolIcon}).addTo(mymap);
    marker16.on('click', function(){
      blockModalMuseums15.classList.add('active1_culture');
    });
    var marker17 = L.marker([51.805537,29.49567], {icon:fiolIcon}).addTo(mymap);
    marker17.on('click', function(){
      blockModalMuseums16.classList.add('active1_culture');
    });
    var marker18 = L.marker([52.367564,30.375085], {icon:fiolIcon}).addTo(mymap);
    marker18.on('click', function(){
      blockModalMuseums17.classList.add('active1_culture');
    });
    var marker19 = L.marker([52.629378,29.758005], {icon:fiolIcon}).addTo(mymap);
    marker19.on('click', function(){
      blockModalMuseums18.classList.add('active1_culture');
    });
    var marker20 = L.marker([52.06737,27.731433], {icon:fiolIcon}).addTo(mymap);
    marker20.on('click', function(){
      blockModalMuseums19.classList.add('active1_culture');
    });


    markersMuseums.push(marker2,
      marker3,
      marker4,
      marker5,
      marker6,
      marker7,
      marker8,
      marker9,
      marker10,
      marker11,
      marker12,
      marker13,
      marker14,
      marker15,
      marker16,
      marker17,
      marker18,
      marker19,
      marker20);
  }
  museums.addEventListener('click',function(){
    createMarkersMuseums();
  })   
  
  //Функция для скрытия маркеров
  function hideMarkersMuseums() { 
    for (var i = 0; i < markersMuseums.length; i++) {
        mymap.removeLayer(markersMuseums[i]);
    }
    markersMuseums = [];
  } 
  cancelFilter.addEventListener('click',function(){
    hideMarkersMuseums();
  })




  // Получаем местоположение пользователя
  function geolocationUser(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
    
          // Создаем маркер на местоположении пользователя
           var marker = L.marker([lat, lng]).addTo(mymap);
          marker.bindPopup("<b>Ваше местопложение!</b>");
          // Перемещаем карту к местоположению пользователя
          mymap.setView([lat, lng], 15);
      });
    } else {
      alert("Извините. Ваше местопложение не определено!");
    }
  }
  myGeolocation.addEventListener('click', geolocationUser);

  //Функции модальных окон
  const btnFiltr = document.getElementById('filtr');
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('close');


  btnFiltr.addEventListener('click', function(){
    modal.classList.add('active');
  })
  closeBtn.addEventListener('click', function(){
    modal.classList.remove('active');
  })

  const btnInfo =document.getElementById('info');
  const blockModalInfo = document.getElementById('block-info');
  const close2 = document.getElementById('close2');

  btnInfo.addEventListener('click', function(){
    blockModalInfo.classList.add('active2');
  })
  close2.addEventListener('click',function(){
    blockModalInfo.classList.remove('active2');
  })

