// ##############################################################
// -------------------------- Data ------------------------------
// ##############################################################

function loadData() {
	var peaks = 
	{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          42.439167, 43.355
        ]
      },
      "properties": {
        "name": "Elbrus",
        "country": "Russia",
        "height": "5642",
        "completed": "1 Aug 2017",
        "link": "http://49peaks.com/2017/08/07/elbrus/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          6.865, 45.833611
        ]
      },
      "properties": {
        "name": "Mont Blanc",
        "country": "France & Italy",
        "height": "4810",
        "completed": "17 Aug 2017",
        "link": "http://49peaks.com/2017/08/18/mont-blanc-france-italy/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.867056, 45.936833
        ]
      },
      "properties": {
        "name": "Dufourspitze",
        "country": "Switzerland",
        "height": "4634",
        "completed": "",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.69525, 47.074867
        ]
      },
      "properties": {
        "name": "Grossglockner",
        "country": "Austria",
        "height": "3789",
        "completed": "",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -3.311389, 37.053333
        ]
      },
      "properties": {
        "name": "Mulhacén",
        "country": "Spain",
        "height": "3478",
        "completed": "17 Sep 2017",
        "link": "http://49peaks.com/2017/09/30/mulhacen-spain/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          10.985278, 47.421111
        ]
      },
      "properties": {
        "name": "Zugspitze",
        "country": "Germany",
        "height": "2962",
        "completed": "",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.444781, 42.590556
        ]
      },
      "properties": {
        "name": "Coma Pedrosa",
        "country": "Andorra",
        "height": "2943",
        "completed": "19 Sep 2017",
        "link": "http://49peaks.com/2017/10/12/coma-pedrosa-andorra/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          23.586667, 42.179722
        ]
      },
      "properties": {
        "name": "Musala",
        "country": "Bulgaria",
        "height": "2925",
        "completed": "1 Oct 2017",
        "link": "http://49peaks.com/2017/11/16/musala-bulgaria/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          22.358611, 40.085556
        ]
      },
      "properties": {
        "name": "Mount Olympus",
        "country": "Greece",
        "height": "2918",
        "completed": "27 Sep 2017",
        "link": "http://49peaks.com/2017/11/06/mount-olympus-greece/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          22.358611, 40.085556
        ]
      },
      "properties": {
        "name": "Mount Olympus",
        "country": "Greece",
        "height": "2918",
        "completed": "27 Sep 2017",
        "link": "http://49peaks.com/2017/11/06/mount-olympus-greece/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.836667, 46.378333
        ]
      },
      "properties": {
        "name": "Triglav",
        "country": "Slovenia",
        "height": "2864",
        "completed": "7 Oct 2017",
        "link": "http://49peaks.com/2018/01/15/triglav-slovenia/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.547778, 41.791111
        ]
      },
      "properties": {
        "name": "Mount Korab",
        "country": "Albania and Macedonia",
        "height": "2764",
        "completed": "",
        "link": ""
      }
    },
        {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.14, 42.533611
        ]
      },
      "properties": {
        "country": "Kosovo",
    "name": "Đeravica + Rudoka e Madhe",
    "height": "2656 m + 2658",
    "completed": "",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.131111, 49.167222
        ]
      },
      "properties": {
        "country": "Slovakia",
    "name": "Gerlachovský štít",
    "height": "2654",
    "completed": "",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
           9.581944, 47.052778
        ]
      },
      "properties": {
        "country": "Liechtenstein",
    "name": "Grauspitz",
    "height": "2599",
    "completed": "13 sep 2017",
        "link": "http://49peaks.com/2017/09/22/grauspitz-liechtenstein/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          24.737778, 45.6
        ]
      },
      "properties": {
        "country": "Romania",
    "name": "Moldoveanu Peak",
    "height": "2544",
    "completed": "3 oct 2017",
        "link": "http://49peaks.com/2018/01/12/moldoveanu-peak-romania/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.897222, 42.485
        ]
      },
      "properties": {
        "country": "Montenegro",
    "name": "Zla Kolata",
    "height": "2534",
    "completed": "",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.088056, 49.179444
        ]
      },
      "properties": {
        "country": "Poland",
    "name": "Rysy",
    "height": "2499",
    "completed": "",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
           8.315, 61.636667
        ]
      },
      "properties": {
        "country": "Norway",
    "name": "Galdhøpiggen",
    "height": "2469",
    "completed": "",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.736944, 43.281111          
        ]
      },
      "properties": {
        "country": "Bosnia and Herzegovina",
    "name": "Maglic",
    "height": "2386",
    "completed": "24 sep 2017",
        "link": "http://49peaks.com/2017/10/27/maglic-bosnia-herzegovina/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          22.681667, 43.393889
        ]
      },
      "properties": {
        "country": "Serbia",
    "name": "Midžor",
    "height": "2169",
    "completed": "26 sep 2017",
        "link": "http://49peaks.com/2017/11/02/midzor-serbia/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -16.674722, 64.015833
        ]
      },
      "properties": {
        "country": "Iceland",
    "name": "Hvannadalshnúkur",
    "height": "2110",
    "completed": "",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.516667, 67.9
        ]
      },
      "properties": {
        "country": "Sweden",
    "name": "Kebnekaise",
    "height": "2098",
    "completed": "",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          24.500278, 48.16
        ]
      },
      "properties": {
        "country": "Ukraine",
    "name": "Mount Hoverla",
    "height": "2061",
    "completed": "",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
           -7.612967, 40.321867
        ]
      },
      "properties": {
        "country": "Portugal",
    "name": "Torre Mountain",
    "height": "1993",
    "completed": "18 sep 2017",
        "link": "http://49peaks.com/2017/10/04/torre-mountain-portugal/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.863333, 34.936389
        ]
      },
      "properties": {
        "country": "Cyprus",
    "name": "Olympus",
    "height": "1952",
    "completed": "",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.381, 44.056
        ]
      },
      "properties": {
        "country": "Croatia",
    "name": "Dinara",
    "height": "1830",
    "completed": "23 sep 2017",
        "link": "http://49peaks.com/2017/10/24/dinara-croatia/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.740278, 50.736111
        ]
      },
      "properties": {
        "country": "Czech Republic",
    "name": "Snežka",
    "height": "1603",
    "completed": "",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          21.272222, 69.307778
        ]
      },
      "properties": {
        "country": "Finland",
    "name": "Halti",
    "height": "1325",
    "completed": "",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -5.003508, 56.79685
        ]
      },
      "properties": {
        "country": "United Kingdom",
    "name": "Ben Nevis",
    "height": "1345",
    "completed": "",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -4.076231, 53.068497
        ]
      },
      "properties": {
        "country": "Wales",
    "name": "Snowdon",
    "height": "1085",
    "completed": "2 nov 2017",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -9.742744, 51.999447
        ]
      },
      "properties": {
        "country": "Ireland",
    "name": "Carrauntoohil",
    "height": "1038",
    "completed": "26 okt 2017",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          27.616667, 41.783333
        ]
      },
      "properties": {
        "country": "Turkey",
    "name": "Mahya Dağı",
    "height": "1031",
    "completed": "30 sep 2017",
        "link": "http://49peaks.com/2017/11/08/mahya-dagi-turkey/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.010278, 47.878889
        ]
      },
      "properties": {
        "country": "Hungray",
    "name": "Kékes",
    "height": "1014",
    "completed": "5 nov 2017",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -3.211528, 54.454222
        ]
      },
      "properties": {
        "country": "England",
    "name": "Scafell Pike",
    "height": "978",
    "completed": "3 nov 2017",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -5.920898, 54.180238
        ]
      },
      "properties": {
        "country": "North Ireland",
    "name": "Slieve Donard",
    "height": "850",
    "completed": "25 okt 2017",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.452222, 43.928333
        ]
      },
      "properties": {
        "country": "San Marino",
    "name": "Monte Titano",
    "height": "739",
    "completed": "8 oct 2017",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          6.092778, 50.501667
        ]
      },
      "properties": {
        "country": "Belgium",
    "name": "Signal de Botrange",
    "height": "694",
    "completed": "28 oct 2017",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          6.037167, 50.157694
        ]
      },
      "properties": {
        "country": "Luxembourg",
    "name": "Kneiff",
    "height": "560",
    "completed": "28 oct 2017",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          28.083056, 47.217222
        ]
      },
      "properties": {
        "country": "Moldova",
    "name": "Bălănești Hill",
    "height": "430",
    "completed": "",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          27.065278, 53.848611
        ]
      },
      "properties": {
        "country": "Belarus",
    "name": "Dzyarzhynskaya Hara",
    "height": "345",
    "completed": "22 aug 2017",
        "link": "http://49peaks.com/2017/08/22/dzyarzhynskaya-hara-belarus/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
           6.020833, 50.754722
        ]
      },
      "properties": {
        "country": "Netherlands",
    "name": "Vaalserberg",
    "height": "322",
    "completed": "28 oct 2017",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          27.059167, 57.714444
        ]
      },
      "properties": {
        "country": "Estonia",
    "name": "Suur Munamägi",
    "height": "318",
    "completed": "20 aug 2017",
        "link": "http://49peaks.com/2017/08/20/suur-munamagi-estonia/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          25.959356, 56.870258
        ]
      },
      "properties": {
        "country": "Latvia",
    "name": "Gaiziņkalns",
    "height": "311",
    "completed": "20 aug 2017",
        "link": "http://49peaks.com/2017/08/20/gaizinkalns-latvia/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          25.634444, 54.529444
        ]
      },
      "properties": {
        "country": "Lithuania",
    "name": "Aukštojas Hill",
    "height": "293",
    "completed": "21 aug 2017",
        "link": "http://49peaks.com/2017/08/21/lithuania-aukstojas-hill/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          14.396389, 35.845833
        ]
      },
      "properties": {
        "country": "Malta",
    "name": "Ta’ Dmejrek",
    "height": "253",
    "completed": "",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.826228, 55.977189
        ]
      },
      "properties": {
        "country": "Denmark",
    "name": "Møllehøj",
    "height": "170",
    "completed": "23 oct 2017",
        "link": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.412861, 43.734569
        ]
      },
      "properties": {
        "country": "Monaco",
    "name": "Chemin des Révoires",
    "height": "161",
    "completed": "14 sep 2017",
        "link": "http://49peaks.com/2017/09/28/chemin-des-revoires-monaco/"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.450278, 41.903611
        ]
      },
      "properties": {
        "country": "Vatican City",
    "name": "Vatican Hill",
    "height": "76",
    "completed": "8 oct 2017",
        "link": ""
      }
    }
  ]
}

	// End of data input, return data variable
	return peaks;
}