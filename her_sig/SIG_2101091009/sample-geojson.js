var freeBus = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-105.00341892242432, 39.75383843460583],
                    [-105.0008225440979, 39.751891803969535]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across downtown.",
                "underConstruction": false
            },
            "id": 1
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-105.0008225440979, 39.751891803969535],
                    [-104.99820470809937, 39.74979664004068]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across downtown.",
                "underConstruction": true
            },
            "id": 2
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-104.99820470809937, 39.74979664004068],
                    [-104.98689651489258, 39.741052354709055]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across downtown.",
                "underConstruction": false
            },
            "id": 3
        }
    ]
};

var lightRailStop = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "popupContent": "18th & California Light Rail Stop"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-104.98999178409576, 39.74683938093904]
            }
        },{
            "type": "Feature",
            "properties": {
                "popupContent": "20th & Welton Light Rail Stop"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-104.98689115047453, 39.747924136466565]
            }
        }
    ]
};

var bicycleRental = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -104.9998241,
                    39.7471494
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 51
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -104.9983545,
                    39.7502833
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 52
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -104.9963919,
                    39.7444271
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 54
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -104.9960754,
                    39.7498956
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 55
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -104.9933717,
                    39.7477264
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 57
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -104.9913392,
                    39.7432392
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 58
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -104.9788452,
                    39.6933755
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 74
        }
    ]
};

var campus = {
    "type": "Feature",
    "properties": {
        "popupContent": "This is the Auraria West Campus",
        "style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: "#B0DE5C",
            fillOpacity: 0.8
        }
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [-105.00432014465332, 39.74732195489861],
                    [-105.00715255737305, 39.74620006835170],
                    [-105.00921249389647, 39.74468219277038],
                    [-105.01067161560059, 39.74362625960105],
                    [-105.01195907592773, 39.74290029616054],
                    [-105.00989913940431, 39.74078835902781],
                    [-105.00758171081543, 39.74059036160317],
                    [-105.00346183776855, 39.74059036160317],
                    [-105.00097274780272, 39.74059036160317],
                    [-105.00062942504881, 39.74072235994946],
                    [-105.00020027160645, 39.74191033368865],
                    [-105.00071525573731, 39.74276830198601],
                    [-105.00097274780272, 39.74369225589818],
                    [-105.00097274780272, 39.74461619742136],
                    [-105.00123023986816, 39.74534214278395],
                    [-105.00183105468751, 39.74613407445653],
                    [-105.00432014465332, 39.74732195489861]
                ],[
                    [-105.00361204147337, 39.74354376414072],
                    [-105.00301122665405, 39.74278480127163],
                    [-105.00221729278564, 39.74316428375108],
                    [-105.00283956527711, 39.74390674342741],
                    [-105.00361204147337, 39.74354376414072]
                ]
            ],[
                [
                    [-105.00942707061768, 39.73989736613708],
                    [-105.00942707061768, 39.73910536278566],
                    [-105.00685214996338, 39.73923736397631],
                    [-105.00384807586671, 39.73910536278566],
                    [-105.00174522399902, 39.73903936209552],
                    [-105.00041484832764, 39.73910536278566],
                    [-105.00041484832764, 39.73979836621592],
                    [-105.00535011291504, 39.73986436617916],
                    [-105.00942707061768, 39.73989736613708]
                ]
            ]
        ]
    }
};

var coorsField = {
    "type": "Feature",
    "properties": {
        "popupContent": "Coors Field"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404191970824, 39.756213909328125]
    }
};

var padang = {

  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            100.36242251816185,
            -0.925455448185275
          ],
          [
            100.35706207852382,
            -0.9352004172905737
          ],
          [
            100.36583370702152,
            -0.9381239027592443
          ],
          [
            100.36924489588114,
            -0.9305715603219369
          ],
          [
            100.36120423642495,
            -0.927648068578435
          ]
        ],
        "type": "LineString"
      }
    }
  ]
};

var dharmasraya = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            101.49111561234156,
            -0.9550267779033987
          ],
          [
            101.48254359551186,
            -0.9863431135039917
          ],
          [
            101.5445258710509,
            -1.0532601784792206
          ],
          [
            101.63017533766822,
            -1.061073365206255
          ],
          [
            101.6849043681994,
            -1.0211871043971144
          ],
          [
            101.66116647543822,
            -0.9638291394055187
          ],
          [
            101.614679768781,
            -0.9143818403883159
          ],
          [
            101.53819100321664,
            -0.9031736899376028
          ],
          [
            101.49104491065003,
            -0.9532804412734492
          ],
          [
            101.48247289381811,
            -0.98591536987513
          ]
        ],
        "type": "LineString"
      }
    }
  ]
};

var nurul = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            98.63903621209636,
            3.3953674295447485
          ],
          [
            98.86460946632985,
            3.418881582738237
          ],
          [
            98.79180919164025,
            3.1638634228862514
          ]
        ],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            98.54972705086305,
            2.2520789559258674
          ],
          [
            99.36943405732654,
            2.828727975199058
          ],
          [
            99.10138800024589,
            1.7949433062273386
          ],
          [
            99.89475618913525,
            2.345335585298983
          ]
        ],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            100.06990424917012,
            1.8915880640917777
          ],
          [
            99.40126035276239,
            1.4424533078188801
          ],
          [
            99.75005775800662,
            0.8919374691537882
          ],
          [
            100.44256406730801,
            1.3397932638115009
          ]
        ],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            [
              100.66547868151406,
              0.9404537274410956
            ],
            [
              100.66547868151406,
              0.7910570552566867
            ],
            [
              100.78912398758854,
              0.7910570552566867
            ],
            [
              100.78912398758854,
              0.9404537274410956
            ],
            [
              100.66547868151406,
              0.9404537274410956
            ]
          ]
        ],
        "type": "Polygon"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            99.97323759312144,
            0.6674044504243
          ],
          [
            100.56649276204547,
            1.065107937343086
          ],
          [
            100.71495140861668,
            0.7661688664137642
          ],
          [
            100.54196798791145,
            0.5672920042139253
          ],
          [
            100.34399153108893,
            0.8659313755114368
          ],
          [
            100.34451280129207,
            0.19510040388394145
          ]
        ],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            101.08544801754874,
            0.2446734468275622
          ],
          [
            100.64091855366757,
            -0.07759563593580765
          ],
          [
            100.9617010799792,
            -0.5969406995746027
          ],
          [
            101.3566888407077,
            -0.3494496962421323
          ]
        ],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            101.75152904861,
            -0.7444357274249143
          ],
          [
            101.30704071222544,
            -0.9918615672092557
          ],
          [
            101.52911299219409,
            -1.31248124419632
          ]
        ],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            102.69165027818354,
            -1.8788153508969287
          ],
          [
            102.49317023043727,
            -1.4840648474383187
          ],
          [
            102.22097618886045,
            -1.6325288688628774
          ],
          [
            102.41928819750535,
            -2.0271923876676397
          ],
          [
            102.17182659912578,
            -2.0520482503557247
          ],
          [
            102.04791133768492,
            -1.706732576865008
          ]
        ],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            102.84069660411461,
            -2.051514662142125
          ],
          [
            102.39492160193487,
            -2.2987241908882794
          ],
          [
            102.86551202900023,
            -2.0514910016284347
          ],
          [
            103.01492065314875,
            -2.273697171698913
          ],
          [
            102.86551202900023,
            -2.0514910016284347
          ],
          [
            102.64240372120429,
            -2.125763880146579
          ],
          [
            102.79163249072104,
            -2.34793276617863
          ]
        ],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            103.1115021574604,
            -2.4013559538939546
          ],
          [
            103.41169731726768,
            -2.8451646716368657
          ],
          [
            103.27810126363295,
            -2.623112727258402
          ],
          [
            102.82354602973845,
            -2.8781212950607937
          ]
        ],
        "type": "LineString"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            103.59025809027196,
            -3.123297310322741
          ],
          [
            103.14632760055355,
            -3.501463032161908
          ],
          [
            103.59022440981579,
            -3.1121696198140683
          ],
          [
            103.81380578042422,
            -3.346547064171716
          ],
          [
            103.65858499022795,
            -3.5470478948313655
          ],
          [
            103.44622060707422,
            -3.3234961063679123
          ],
          [
            103.47026003802529,
            -3.8485611533714064
          ]
        ],
        "type": "LineString"
      }
    }
  ]
};
