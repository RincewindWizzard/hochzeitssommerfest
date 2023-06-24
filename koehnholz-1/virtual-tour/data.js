var APP_DATA = {
  "scenes": [
    {
      "id": "0-auffahrt",
      "name": "Auffahrt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.750824245842388,
        "pitch": -0.3585610071212848,
        "fov": 1.421594779482255
      },
      "linkHotspots": [
        {
          "yaw": -0.5072187507733048,
          "pitch": 0.07518948274013226,
          "rotation": 0,
          "target": "32-holzschuppen"
        },
        {
          "yaw": -2.89764813853766,
          "pitch": -0.013804377713245941,
          "rotation": 0,
          "target": "31-eingang"
        },
        {
          "yaw": 0.3990986787868813,
          "pitch": -0.18939974274703175,
          "rotation": 0,
          "target": "33-weg-zur-wiese"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dachboden-sofaecke",
      "name": "Dachboden Sofaecke",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5421076711085622,
          "pitch": 0.5651137021057018,
          "rotation": 0,
          "target": "7-eingang-dachboden"
        },
        {
          "yaw": -0.6305112207081685,
          "pitch": 0.26592397404649937,
          "rotation": 0,
          "target": "2-dachboden-betten"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dachboden-betten",
      "name": "Dachboden Betten",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.301247245169911,
          "pitch": 0.3457715450098391,
          "rotation": 0,
          "target": "7-eingang-dachboden"
        },
        {
          "yaw": -2.8399961831326657,
          "pitch": 0.15682002323046973,
          "rotation": 0,
          "target": "1-dachboden-sofaecke"
        },
        {
          "yaw": 0.19969097700581706,
          "pitch": -0.0044882475942884525,
          "rotation": 0,
          "target": "3-dachboden-mitte"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dachboden-mitte",
      "name": "Dachboden Mitte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10573014250116053,
          "pitch": 0.08750841395260522,
          "rotation": 0,
          "target": "2-dachboden-betten"
        },
        {
          "yaw": -2.325201764466268,
          "pitch": 0.05480355995522501,
          "rotation": 0,
          "target": "4-dachboden-fundus-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dachboden-fundus-eingang",
      "name": "Dachboden Fundus Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6845542728568983,
          "pitch": 0.054533664494638145,
          "rotation": 0,
          "target": "3-dachboden-mitte"
        },
        {
          "yaw": -3.041608486039287,
          "pitch": 0.2855474539555516,
          "rotation": 0,
          "target": "5-dachboden-fundus"
        },
        {
          "yaw": -3.031801677094947,
          "pitch": 0.005576823521748153,
          "rotation": 0,
          "target": "6-dachboden-miranargh-fundus"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dachboden-fundus",
      "name": "Dachboden Fundus",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.090121034929714,
          "pitch": -0.06870808722129951,
          "rotation": 0,
          "target": "6-dachboden-miranargh-fundus"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dachboden-miranargh-fundus",
      "name": "Dachboden Miranargh Fundus",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.34992682395432695,
          "pitch": 0.3951712758195214,
          "rotation": 0,
          "target": "5-dachboden-fundus"
        },
        {
          "yaw": 0.06556507539118428,
          "pitch": 0.2099257411887372,
          "rotation": 0,
          "target": "4-dachboden-fundus-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-eingang-dachboden",
      "name": "Eingang Dachboden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0697142105673887,
          "pitch": 0.9241279406445191,
          "rotation": 0,
          "target": "8-treppe-dachboden"
        },
        {
          "yaw": -1.1074656252485955,
          "pitch": 0.09112388935215954,
          "rotation": 0,
          "target": "2-dachboden-betten"
        },
        {
          "yaw": 0.5964937488034536,
          "pitch": 0.11270205954108725,
          "rotation": 0,
          "target": "1-dachboden-sofaecke"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-treppe-dachboden",
      "name": "Treppe Dachboden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.4616308315614708,
        "pitch": -0.6324848791333064,
        "fov": 1.421594779482255
      },
      "linkHotspots": [
        {
          "yaw": 1.5660582140107806,
          "pitch": -0.7484621604804893,
          "rotation": 0,
          "target": "7-eingang-dachboden"
        },
        {
          "yaw": -1.747170783677845,
          "pitch": 0.7570648894391603,
          "rotation": 0,
          "target": "9-dachbodenraum-treppe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-dachbodenraum-treppe",
      "name": "Dachbodenraum Treppe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.7980684739171338,
        "pitch": -0.1028404479825582,
        "fov": 1.421594779482255
      },
      "linkHotspots": [
        {
          "yaw": -3.1389672283095535,
          "pitch": -0.4072804602340092,
          "rotation": 0,
          "target": "8-treppe-dachboden"
        },
        {
          "yaw": -2.7417361593758276,
          "pitch": 0.0803951544119581,
          "rotation": 0,
          "target": "10-eingang-dachbodenraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-eingang-dachbodenraum",
      "name": "Eingang Dachbodenraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.354760275257073,
        "pitch": 0.15884192354528182,
        "fov": 1.421594779482255
      },
      "linkHotspots": [
        {
          "yaw": 1.3505294006078454,
          "pitch": -0.021989868147546332,
          "rotation": 0,
          "target": "11-flur-eingang"
        },
        {
          "yaw": -1.51144189331999,
          "pitch": 0.0396726282325961,
          "rotation": 0,
          "target": "9-dachbodenraum-treppe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-flur-eingang",
      "name": "Flur Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7038304068691428,
          "pitch": 0.058183136984077066,
          "rotation": 0,
          "target": "10-eingang-dachbodenraum"
        },
        {
          "yaw": 0.09791739000000099,
          "pitch": 0,
          "rotation": 0,
          "target": "15-flur-mitte"
        },
        {
          "yaw": 1.7021143374196601,
          "pitch": -0.01806697366287402,
          "rotation": 0,
          "target": "12-trainingsraum"
        },
        {
          "yaw": -2.9183220367922598,
          "pitch": -0.19324454336886454,
          "rotation": 0,
          "target": "31-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-trainingsraum",
      "name": "Trainingsraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.467805800060585,
          "pitch": 0.04670653599564467,
          "rotation": 0,
          "target": "11-flur-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-eingang-trainingsraum",
      "name": "Eingang Trainingsraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "14-flur-2",
      "name": "Flur 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.661695794459807,
        "pitch": 0.010288775832199448,
        "fov": 1.421594779482255
      },
      "linkHotspots": [
        {
          "yaw": -0.3617403321174777,
          "pitch": 0.008711861121680542,
          "rotation": 0,
          "target": "20-stube-flur"
        },
        {
          "yaw": 2.7441222509623096,
          "pitch": 0.058758032812761485,
          "rotation": 0,
          "target": "15-flur-mitte"
        },
        {
          "yaw": -2.4460731425090376,
          "pitch": -0.024313643820237374,
          "rotation": 0,
          "target": "18-werkstatt"
        },
        {
          "yaw": 0.5287958546217659,
          "pitch": -0.10016129272661978,
          "rotation": 0,
          "target": "19-bad-1"
        },
        {
          "yaw": 1.8752219957613958,
          "pitch": -0.187048961971243,
          "rotation": 0,
          "target": "17-bad-2"
        },
        {
          "yaw": -0.9619720483614458,
          "pitch": 0.01837862202438778,
          "rotation": 0,
          "target": "29-kche-flureingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-flur-mitte",
      "name": "Flur Mitte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.6550038402863745,
        "pitch": 0.04666233942743503,
        "fov": 1.421594779482255
      },
      "linkHotspots": [
        {
          "yaw": -2.52459979709014,
          "pitch": -0.01108205785867078,
          "rotation": 0,
          "target": "11-flur-eingang"
        },
        {
          "yaw": 0.6534333681241584,
          "pitch": 0.010514588511476575,
          "rotation": 0,
          "target": "14-flur-2"
        },
        {
          "yaw": -0.03303196207648185,
          "pitch": -0.02823089785798416,
          "rotation": 0,
          "target": "18-werkstatt"
        },
        {
          "yaw": 1.3035917490483797,
          "pitch": 0.07065790076061518,
          "rotation": 0,
          "target": "17-bad-2"
        },
        {
          "yaw": 0.9737156997505956,
          "pitch": -0.013921491808641662,
          "rotation": 0,
          "target": "19-bad-1"
        },
        {
          "yaw": 2.413254928041301,
          "pitch": -0.06561434672697608,
          "rotation": 0,
          "target": "16-schlafzimmer-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-schlafzimmer-2",
      "name": "Schlafzimmer 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.7154397566446278,
        "pitch": 0.09280201229239537,
        "fov": 1.421594779482255
      },
      "linkHotspots": [
        {
          "yaw": -3.0514296355431423,
          "pitch": 0.027833261172368395,
          "rotation": 0,
          "target": "15-flur-mitte"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bad-2",
      "name": "Bad 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9160461997070986,
          "pitch": 0.030340003064237564,
          "rotation": 0,
          "target": "14-flur-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-werkstatt",
      "name": "Werkstatt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8477573723656633,
          "pitch": -0.06424541811724183,
          "rotation": 0,
          "target": "14-flur-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bad-1",
      "name": "Bad 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5379431724495394,
          "pitch": -0.04036172952910455,
          "rotation": 0,
          "target": "14-flur-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-stube-flur",
      "name": "Stube Flur",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.578529692295895,
        "pitch": 0.025113543820397766,
        "fov": 1.421594779482255
      },
      "linkHotspots": [
        {
          "yaw": 2.1628680020875297,
          "pitch": -0.01780349234578793,
          "rotation": 0,
          "target": "21-wohnstube-2"
        },
        {
          "yaw": -0.8781480110696975,
          "pitch": 0.0965680622892151,
          "rotation": 0,
          "target": "14-flur-2"
        },
        {
          "yaw": -2.4619352660040157,
          "pitch": -0.034970397499796135,
          "rotation": 0,
          "target": "30-schlafzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-wohnstube-2",
      "name": "Wohnstube 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1130604050391604,
          "pitch": 0.20564612907941182,
          "rotation": 0,
          "target": "22-wohnstube"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-wohnstube",
      "name": "Wohnstube",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0016336459454198,
          "pitch": 0.31216027798720347,
          "rotation": 0,
          "target": "21-wohnstube-2"
        },
        {
          "yaw": -2.8158485805938565,
          "pitch": 0.2970105069259006,
          "rotation": 0,
          "target": "24-bar-tresen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-bar",
      "name": "Bar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1902732513655714,
          "pitch": 0.08127985647751856,
          "rotation": 0,
          "target": "25-kche-mitte"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-bar-tresen",
      "name": "Bar Tresen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.432311560458043,
          "pitch": -0.04162306347427247,
          "rotation": 0,
          "target": "25-kche-mitte"
        },
        {
          "yaw": -0.45129364248557735,
          "pitch": -0.4352663256323517,
          "rotation": 0,
          "target": "23-bar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-kche-mitte",
      "name": "Küche Mitte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2454498293376357,
          "pitch": -0.001869035525118079,
          "rotation": 0,
          "target": "29-kche-flureingang"
        },
        {
          "yaw": -0.7899569610980723,
          "pitch": 0.1072412915456944,
          "rotation": 0,
          "target": "26-kche-tr-hauswirtschaftsraum"
        },
        {
          "yaw": 2.5074692373093015,
          "pitch": 0.18828219882559338,
          "rotation": 0,
          "target": "24-bar-tresen"
        },
        {
          "yaw": 2.653564372787333,
          "pitch": -0.08386455950747163,
          "rotation": 0,
          "target": "23-bar"
        },
        {
          "yaw": -0.048366482787791654,
          "pitch": -0.04260787226475138,
          "rotation": 0,
          "target": "28-kche-auentr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-kche-tr-hauswirtschaftsraum",
      "name": "Küche Tür Hauswirtschaftsraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.3235523206990667,
        "pitch": 0.16892146501522376,
        "fov": 1.421594779482255
      },
      "linkHotspots": [
        {
          "yaw": -0.15115844379865173,
          "pitch": -0.05487613839453509,
          "rotation": 0,
          "target": "27-hauswirtschaftsraum"
        },
        {
          "yaw": 1.4777393200253508,
          "pitch": 0.0033361845685995206,
          "rotation": 0,
          "target": "28-kche-auentr"
        },
        {
          "yaw": -0.9500649547609648,
          "pitch": 0.0037606905922444867,
          "rotation": 0,
          "target": "29-kche-flureingang"
        },
        {
          "yaw": -2.785838944498458,
          "pitch": 0.20728811261229652,
          "rotation": 0,
          "target": "25-kche-mitte"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-hauswirtschaftsraum",
      "name": "Hauswirtschaftsraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4139362788883325,
          "pitch": -0.138145395534659,
          "rotation": 0,
          "target": "26-kche-tr-hauswirtschaftsraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-kche-auentr",
      "name": "Küche Außentür",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8235817374473005,
          "pitch": -0.1053204239587302,
          "rotation": 0,
          "target": "26-kche-tr-hauswirtschaftsraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-kche-flureingang",
      "name": "Küche Flureingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.8850209392856225,
        "pitch": 0.13815201492000817,
        "fov": 1.421594779482255
      },
      "linkHotspots": [
        {
          "yaw": 1.256571015749886,
          "pitch": 0.1119955676828095,
          "rotation": 0,
          "target": "25-kche-mitte"
        },
        {
          "yaw": 0.14219102804318595,
          "pitch": 0.04686696959675807,
          "rotation": 0,
          "target": "26-kche-tr-hauswirtschaftsraum"
        },
        {
          "yaw": -1.8385647527513562,
          "pitch": 0.05522767574134946,
          "rotation": 0,
          "target": "14-flur-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-schlafzimmer",
      "name": "Schlafzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.2928935553411804,
        "pitch": 0.012569815219602987,
        "fov": 1.421594779482255
      },
      "linkHotspots": [
        {
          "yaw": -2.2928935553411804,
          "pitch": 0.012569815219602987,
          "rotation": 0,
          "target": "20-stube-flur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-eingang",
      "name": "Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.3271163439849882,
        "pitch": 0.03405220969029621,
        "fov": 1.421594779482255
      },
      "linkHotspots": [
        {
          "yaw": -0.6805727259643302,
          "pitch": 0.06027011533489457,
          "rotation": 0,
          "target": "0-auffahrt"
        },
        {
          "yaw": 2.3271163439849882,
          "pitch": 0.03405220969029621,
          "rotation": 0,
          "target": "11-flur-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-holzschuppen",
      "name": "Holzschuppen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1306017117929255,
          "pitch": 0.023275977548046,
          "rotation": 0,
          "target": "0-auffahrt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-weg-zur-wiese",
      "name": "Weg zur Wiese",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5743278720017386,
          "pitch": 0.3136248871226748,
          "rotation": 0,
          "target": "0-auffahrt"
        },
        {
          "yaw": 0.052514331475935094,
          "pitch": -0.19194042924351784,
          "rotation": 0,
          "target": "34-weg-zur-wiese-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-weg-zur-wiese-2",
      "name": "Weg zur Wiese 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5987014975329537,
          "pitch": 0.30510765973642506,
          "rotation": 0,
          "target": "33-weg-zur-wiese"
        },
        {
          "yaw": 0.33893735641673395,
          "pitch": -0.10799708010714149,
          "rotation": 0,
          "target": "35-wiese"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9978642907262412,
          "pitch": 0.6513796193753763,
          "title": "Löschteich",
          "text": "<div>Im Sommer eher wenig Wasser</div>"
        }
      ]
    },
    {
      "id": "35-wiese",
      "name": "Wiese",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8449695217833817,
          "pitch": 0.2764773584796778,
          "rotation": 0,
          "target": "34-weg-zur-wiese-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Hof Köhnholz",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
