var APP_DATA = {
  "scenes": [
    {
      "id": "0-vista-general",
      "name": "Vista Panorámica",
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
      "faceSize": 2048,
      "point_init": 0,
      "point": {top: -1034, left: 15},
      "initialViewParameters": {
        "yaw": 0.013719957440230246,
        "pitch": 0.7246801671544263,
        "fov": 0.9441461815082277
      },
      "linkHotspots": [
        {
          "yaw": 0.04054317465259416,
          "pitch": 0.5124575976615411,
          "rotation": 0,
          "target": "9-mirador"
        },
        {
          "yaw": -0.7848562170727522,
          "pitch": 0.8933749006608149,
          "rotation": 0,
          "target": "8-zona-comun"
        },
        {
          "yaw": -0.6934692172159842,
          "pitch": 1.045042379522915,
          "rotation": 0,
          "target": "1-ingreso"
        },
        {
          "yaw": -0.7168605003589825,
          "pitch": 0.7727327154185311,
          "rotation": 0,
          "target": "2-nivel-1"
        },
        {
          "yaw": -0.43965528168790307,
          "pitch": 0.8690829272113483,
          "rotation": 0,
          "target": "3-nivel-2"
        },
        {
          "yaw": -0.24955071559828923,
          "pitch": 0.6523605290892966,
          "rotation": 0,
          "target": "4-nivel-3"
        },
        {
          "yaw": -0.01969543813741446,
          "pitch": 0.43041121351912274,
          "rotation": 0,
          "target": "5-nivel-4"
        },
        {
          "yaw": 0.4126480543505089,
          "pitch": 0.5598614133480702,
          "rotation": 0,
          "target": "6-nivel-5"
        },
        {
          "yaw": 0.15470835145626438,
          "pitch": 0.345951711043778,
          "rotation": 0,
          "target": "7-nivel-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ingreso",
      "name": "Ingreso",
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
        }
      ],
      "faceSize": 1024,
      "point_init": 0,
      "point": {top: 180, left: 33},
      "initialViewParameters": {
        "yaw": -0.0208190368031147,
        "pitch": -0.05648196548803952,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -0.03501196209522561,
          "pitch": -0.5139998016214307,
          "rotation": 0,
          "target": "0-vista-general"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-nivel-1",
      "name": "Nivel #1",
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
        }
      ],
      "faceSize": 1024,
      "point_init": 0,
      "point": {top: 145, left: 33},
      "initialViewParameters": {
        "yaw": 0.5094202973103616,
        "pitch": 0.967842357758677,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 1.15470835145626438,
          "pitch": 0.085951711043778,
          "rotation": 0,
          "target": "3-nivel-2"
        },

        {
          "yaw": 1.79054317465259416,
          "pitch": 0.55024575976615411,
          "rotation": 0,
          "target": "1-ingreso"
        },

         {
          "yaw": -0.6848562170727522,
          "pitch": 1.1933749006608149,
          "rotation": 0,
          "target": "8-zona-comun"
        }


        ],
      "infoHotspots": [
        {
          "yaw": 1.8238288481529903,
          "pitch": 0.7391739620690885,
          "title": "Vendido",
          "text": "Lote 01 - 500m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.5424832533497046,
          "pitch": 0.7737577675652716,
          "title": "Vendido",
          "text": "Lote 02 - 500m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": -0.14666940203706247,
          "pitch": 0.633643030534234,
          "title": "Vendido",
          "text": "Lote 03 - 500m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -0.36895568857144667,
          "pitch": 0.49254894911158686,
          "title": "Vendido",
          "text": "Lote 04 - 500m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": -0.49404503976353453,
          "pitch": 0.37567415460351583,
          "title": "Vendido",
          "text": "Lote 05 - 500m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 1.5053245041452339,
          "pitch": 0.5078042779020091,
          "title": "Vendido",
          "text": "Lote 01 - 300m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": 1.3262067598140212,
          "pitch": 0.5259952258007721,
          "title": "Vendido",
          "text": "Lote 02 - 300m2",
          "estado":"VENDIDO"
        }
      ]
    },
    {
      "id": "3-nivel-2",
      "name": "Nivel #2",
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
        }
      ],
      "faceSize": 1024,
       "point_init": 0,
      "point": {top: 140, left: 62},
      "initialViewParameters": {
        "yaw": 0.5783185058410325,
        "pitch": 0.7315786491955247,
        "fov": 1.1648482503977253
      },
      "linkHotspots": [

        {
          "yaw": 1.95470835145626438,
          "pitch": 2.53951711043778,
          "rotation": 0,
          "target": "2-nivel-1"
        },
        {
          "yaw": -0.10470835145626438,
          "pitch": 0.005951711043778,
          "rotation": 0,
          "target": "4-nivel-3"
        }

        ],
      "infoHotspots": [
        {
          "yaw": 1.4718366513381582,
          "pitch": 0.9730917638280072,
          "title": "Vendido",
          "text": "Lote 03 - 300m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": 1.2939804902636602,
          "pitch": 0.5359929610031706,
          "title": "Vendido",
          "text": "Lote 04 - 300m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": 1.0482013757352178,
          "pitch": 0.24398479362078085,
          "title": "Vendido",
          "text": "Lote 05 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.946409399907747,
          "pitch": 0.2906756481786079,
          "title": "Vendido",
          "text": "Lote 06 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.847003698215385,
          "pitch": 0.753821295818927,
          "title": "Vendido",
          "text": "Lote 07 - 300m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": 0.4193011107076874,
          "pitch": 0.6748970001601144,
          "title": "Vendido",
          "text": "Lote 08 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.22207644740285026,
          "pitch": 0.5421519036399391,
          "title": "Vendido",
          "text": "Lote 09 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.08203152209607723,
          "pitch": 0.4176838241013125,
          "title": "Vendido",
          "text": "Lote 10 - 300m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": -0.2534893501930817,
          "pitch": 0.6234867451862929,
          "title": "Vendido",
          "text": "Lote 11 - 300m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": -0.2312216713802453,
          "pitch": 0.25151658385590636,
          "title": "Vendido",
          "text": "Lote 12 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -0.4355114605985282,
          "pitch": 0.36547038172366264,
          "title": "Vendido",
          "text": "Lote 08 - 500m2",
          "estado":"DISPONIBLE"
        }
      ]
    },
    {
      "id": "4-nivel-3",
      "name": "Nivel #3",
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
        }
      ],
      "faceSize": 1024,
      "point_init": 0,
      "point": {top: 130, left: 97},
      "initialViewParameters": {
        "yaw": -2.14421673624992,
        "pitch": 1.1049270213550102,
        "fov": 0.7868069688572181
      },
      "linkHotspots": [


        {
          "yaw": 0.55470835145626438,
          "pitch": 2.28951711043778,
          "rotation": 0,
          "target": "3-nivel-2"
        },

          {
          "yaw": 2.95470835145626438,
          "pitch": 2.33951711043778,
          "rotation": 0,
          "target": "5-nivel-4"
        },

        {
          "yaw": -1.87470835145626438,
          "pitch": 2.27951711043778,
          "rotation": 0,
          "target": "6-nivel-5"
        }

        ],
      "infoHotspots": [
        {
          "yaw": 2.835209530679835,
          "pitch": 1.1987565015695416,
          "title": "Vendido",
          "text": "Lote 16 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -3.101526774354856,
          "pitch": 1.2178002505830278,
          "title": "Vendido",
          "text": "Lote 15 - 300m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": -2.7300405179986804,
          "pitch": 1.1846620653611605,
          "title": "Vendido",
          "text": "Lote 14 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -2.4513764244052688,
          "pitch": 1.1142213692210925,
          "title": "Vendido",
          "text": "Lote 13 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -1.955611649523041,
          "pitch": 1.234544020876765,
          "title": "Vendido",
          "text": "Lote 16 - 500m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": -1.6222871876750474,
          "pitch": 1.0335966114675306,
          "title": "Vendido",
          "text": "Lote 15 - 500m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -1.498809357625004,
          "pitch": 0.9272959172195283,
          "title": "Vendido",
          "text": "Lote 14 - 500m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -1.7808548626065906,
          "pitch": 0.8500246964081865,
          "title": "Vendido",
          "text": "Lote 10 - 500m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -2.0060606830143275,
          "pitch": 0.9528368370707052,
          "title": "Vendido",
          "text": "Lote 09 - 500m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -1.6119290180324816,
          "pitch": 0.7673588363760493,
          "title": "Vendido",
          "text": "Lote 11 - 500m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -1.4606991743144516,
          "pitch": 0.6883313306663408,
          "title": "Vendido",
          "text": "Lote 12 - 500m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -1.3492363358162585,
          "pitch": 0.7011323842586017,
          "title": "Vendido",
          "text": "Lote 13 - 500m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -1.7999245169080996,
          "pitch": 0.7269032681689595,
          "title": "Vendido",
          "text": "Lote 07 - 500m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": -1.6852008205912315,
          "pitch": 0.7012349186911677,
          "title": "Vendido",
          "text": "Lote 06 - 500m2",
          "estado":"DISPONIBLE"
        }
      ]
    },
    {
      "id": "5-nivel-4",
      "name": "Nivel #4",
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
        }
      ],
      "faceSize": 1024,
      "point_init": 0,
      "point": {top: 105, left: 122},
      "initialViewParameters": {
        "yaw": 0.297896175960032,
        "pitch": 1.001904910886503,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [

        {
          "yaw": 3.35470835145626438,
          "pitch": 2.89951711043778,
          "rotation": 0,
          "target": "7-nivel-6"
        },

         {
          "yaw": 3.15470835145626438,
          "pitch": 1.97951711043778,
          "rotation": 0,
          "target": "9-mirador"
        },

         {
          "yaw": 4.55470835145626438,
          "pitch": 0.89951711043778,
          "rotation": 0,
          "target": "4-nivel-3"
        },



         {
          "yaw": 4.45470835145626438,
          "pitch": 2.27951711043778,
          "rotation": 0,
          "target": "6-nivel-5"
        },

        ],
      "infoHotspots": [
        {
          "yaw": 0.25758460195699982,
          "pitch": 0.6035804842079894,
          "title": "Vendido",
          "text": "Lote 22 - 500m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": 0.38282712225432377,
          "pitch": 0.8202045689150743,
          "title": "Vendido",
          "text": "Lote 21 - 500m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": -0.6612974090464183,
          "pitch": 0.7830899016605657,
          "title": "Vendido",
          "text": "Lote 18 - 500m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": -0.9329271399249687,
          "pitch": 0.9216394003372648,
          "title": "Vendido",
          "text": "Lote 17 - 500m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": 1.4237281151762635,
          "pitch": 1.4387217494934811,
          "title": "Vendido",
          "text": "Lote 19 - 500m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 1.1268984031473869,
          "pitch": 1.1501908732079826,
          "title": "Vendido",
          "text": "Lote 20 - 500m2",
          "estado":"DISPONIBLE"
        }
      ]
    },
    {
      "id": "6-nivel-5",
      "name": "Nivel #5",
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
        }
      ],
      "faceSize": 1024,
      "point_init": 0,
      "point": {top: 145, left: 152},
      "initialViewParameters": {
        "yaw": -0.03657943433133603,
        "pitch": 0.6263430412110971,
        "fov": 1.2016378141251496
      },
      "linkHotspots": [


         {
          "yaw": 3.15470835145626438,
          "pitch": 3.18951711043778,
          "rotation": 0,
          "target": "7-nivel-6"
        },
        {
          "yaw": 2.55470835145626438,
          "pitch": 2.99951711043778,
          "rotation": 0,
          "target": "5-nivel-4"
        }

        ],
      "infoHotspots": [
        {
          "yaw": 0.8468244355710215,
          "pitch": 0.3893181629536677,
          "title": "Vendido",
          "text": "Lote 25 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.839522657463857,
          "pitch": 0.4722341944354976,
          "title": "Vendido",
          "text": "Lote 24 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.6332373366887826,
          "pitch": 0.8844985517533401,
          "title": "Vendido",
          "text": "Lote 22 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.3084564952327561,
          "pitch": 0.9876806662704062,
          "title": "Vendido",
          "text": "Lote 21 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.8426459079941538,
          "pitch": 0.5588259739862519,
          "title": "Vendido",
          "text": "Lote 23 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -0.45217408386295865,
          "pitch": 0.7556158735159348,
          "title": "Vendido",
          "text": "Lote 20 - 300m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": -0.5520962576721753,
          "pitch": 0.45129461866431626,
          "title": "Vendido",
          "text": "Lote 19 - 300m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": -0.7164949775374949,
          "pitch": 0.4839291196025188,
          "title": "Vendido",
          "text": "Lote 18 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -0.8883214846789931,
          "pitch": 0.51913827352824434,
          "title": "Vendido",
          "text": "Lote 17 - 300m2",
          "estado":"DISPONIBLE"
        }
      ]
    },
    {
      "id": "7-nivel-6",
      "name": "Nivel #6",
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
        }
      ],
      "faceSize": 1024,
        "point_init": 0,
      "point": {top: 63, left: 205},
      "initialViewParameters": {
        "yaw": -0.09636346550007033,
        "pitch": 0.959746343327636,
        "fov": 0.9602086837182086
      },
      "linkHotspots": [

         {
          "yaw": 3.69470835145626438,
          "pitch": 2.47951711043778,
          "rotation": 0,
          "target": "6-nivel-5"
        }

        ],
      "infoHotspots": [
        {
          "yaw": -1.2613056669412228,
          "pitch": 0.8101247721314368,
          "title": "Vendido",
          "text": "Lote 30 - 300m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": -1.1757460183546022,
          "pitch": 0.9020824541473695,
          "title": "Vendido",
          "text": "Lote 29 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -1.087884630708598,
          "pitch": 0.9638946951661298,
          "title": "Vendido",
          "text": "Lote 28 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -0.9634182229417576,
          "pitch": 1.0311552228395151,
          "title": "Vendido",
          "text": "Lote 27 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -0.7934966899108555,
          "pitch": 1.0879198151030506,
          "title": "Vendido",
          "text": "Lote 26 - 300m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -0.5204639020528239,
          "pitch": 1.1096878049779832,
          "title": "Vendido",
          "text": "Lote 30 - 500m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": -0.2136444675366221,
          "pitch": 1.1256048724007827,
          "title": "Vendido",
          "text": "Lote 29 - 500m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.090545163877354383,
          "pitch": 1.1185013114158737,
          "title": "Vendido",
          "text": "Lote 28 - 500m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.360681308881461,
          "pitch": 1.0750664006663928,
          "title": "Vendido",
          "text": "Lote 27 - 500m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.5498431945110364,
          "pitch": 1.019153542876538,
          "title": "Vendido",
          "text": "Lote 26 - 500m2",
          "estado":"DISPONIBLE"
        },
        {
          "yaw": 0.9334997520840533,
          "pitch": 0.9016532954220175,
          "title": "Vendido",
          "text": "Lote 25 - 500m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": 1.132866836926337,
          "pitch": 0.7615735753996857,
          "title": "Vendido",
          "text": "Lote 24 - 500m2",
          "estado":"VENDIDO"
        },
        {
          "yaw": 1.1554130053435287,
          "pitch": 0.6765141507705494,
          "title": "Vendido",
          "text": "Lote 23 - 500m2",
          "estado":"VENDIDO"
        }
      ]
    },
    {
      "id": "8-zona-comun",
      "name": "Zona Comun",
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
        }
      ],
      "faceSize": 1024,
      "point_init": 0,
      "point": {top: 152, left: 13},
      "initialViewParameters": {
        "yaw": 0.18737133122801986,
        "pitch": 0.22890059697784437,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -0.5489139526469078,
          "pitch": -0.20828350607388302,
          "rotation": 0,
          "target": "0-vista-general"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-mirador",
      "name": "Mirador",
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
        }
      ],
      "faceSize": 1024,
       "point_init": 0,
      "point": {top: 100, left: 124},
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.46858420799101097,
          "pitch": -0.4368879329186832,
          "rotation": 0,
          "target": "0-vista-general"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
