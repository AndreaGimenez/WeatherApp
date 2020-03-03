import React from 'react';
import { Redirect } from "react-router-dom";

const cities ={
          "cities":
            [
              {
                "id": 3427213,
                "city": {
                  "id": {
                    "$numberLong": "3427213"
                  },
                  "name": "Zarate",
                  "findname": "ZARATE",
                  "country": "AR",
                  "coord": {
                    "lon": -59.02858,
                    "lat": -34.098141
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": 3427388,
                "city": {
                  "id": {
                    "$numberLong": "3427388"
                  },
                  "name": "Villa Ocampo",
                  "findname": "VILLA OCAMPO",
                  "country": "AR",
                  "coord": {
                    "lon": -59.355148,
                    "lat": -28.48752
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": 3427428,
                "city": {
                  "id": {
                    "$numberLong": "3427428"
                  },
                  "name": "Villaguay",
                  "findname": "VILLAGUAY",
                  "country": "AR",
                  "coord": {
                    "lon": -59.02689,
                    "lat": -31.865299
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": "3427431",
                "city": {
                  "id": {
                    "$numberLong": "3427431"
                  },
                  "name": "Villa Gesell",
                  "findname": "VILLA GESELL",
                  "country": "AR",
                  "coord": {
                    "lon": -56.973042,
                    "lat": -37.263939
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": 3427761,
                "city": {
                  "id": {
                    "$numberLong": "3427761"
                  },
                  "name": "Tigre",
                  "findname": "TIGRE",
                  "country": "AR",
                  "coord": {
                    "lon": -58.57962,
                    "lat": -34.426029
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": 3427833,
                "city": {
                  "id": {
                    "$numberLong": "3427833"
                  },
                  "name": "Tandil",
                  "findname": "TANDIL",
                  "country": "AR",
                  "coord": {
                    "lon": -59.13316,
                    "lat": -37.321671
                  },
                  "zoom": {
                    "$numberLong": "7"
                  }
                }
              },
              {
                "id": 3428068,
                "city": {
                  "id": {
                    "$numberLong": "3428068"
                  },
                  "name": "San Vicente",
                  "findname": "SAN VICENTE",
                  "country": "AR",
                  "coord": {
                    "lon": -54.133331,
                    "lat": -26.616671
                  },
                  "zoom": {
                    "$numberLong": "9"
                  }
                }
              },
              {
                "id": 3428071,
                "city": {
                  "id": {
                    "$numberLong": "3428071"
                  },
                  "name": "Santo Tome",
                  "findname": "SANTO TOME",
                  "country": "AR",
                  "coord": {
                    "lon": -56.040771,
                    "lat": -28.549391
                  },
                  "zoom": {
                    "$numberLong": "11"
                  }
                }
              },
              {
                "id": 3428359,
                "city": {
                  "id": {
                    "$numberLong": "3428359"
                  },
                  "name": "Santa Elena",
                  "findname": "SANTA ELENA",
                  "country": "AR",
                  "coord": {
                    "lon": -59.786961,
                    "lat": -30.94768
                  },
                  "zoom": {
                    "$numberLong": "10"
                  }
                }
              },
              {
                "id": 3428577,
                "city": {
                  "id": {
                    "$numberLong": "3428577"
                  },
                  "name": "San Pedro",
                  "findname": "SAN PEDRO",
                  "country": "AR",
                  "coord": {
                    "lon": -54.108421,
                    "lat": -26.62207
                  },
                  "zoom": {
                    "$numberLong": "14"
                  }
                }
              },
              {
                "id": 3428708,
                "city": {
                  "id": {
                    "$numberLong": "3428708"
                  },
                  "name": "San Luis del Palmar",
                  "findname": "SAN LUIS DEL PALMAR",
                  "country": "AR",
                  "coord": {
                    "lon": -58.554539,
                    "lat": -27.5079
                  },
                  "zoom": {
                    "$numberLong": "9"
                  }
                }
              },
              {
                "id": 3428759,
                "city": {
                  "id": {
                    "$numberLong": "3428759"
                  },
                  "name": "San Lorenzo",
                  "findname": "SAN LORENZO",
                  "country": "AR",
                  "coord": {
                    "lon": -58.76733,
                    "lat": -28.13306
                  },
                  "zoom": {
                    "$numberLong": "7"
                  }
                }
              },
              {
                "id": 3428975,
                "city": {
                  "id": {
                    "$numberLong": "3428975"
                  },
                  "name": "San Javier",
                  "findname": "SAN JAVIER",
                  "country": "AR",
                  "coord": {
                    "lon": -59.931702,
                    "lat": -30.57781
                  },
                  "zoom": {
                    "$numberLong": "9"
                  }
                }
              },
              {
                "id": 3429403,
                "city": {
                  "id": {
                    "$numberLong": "3429403"
                  },
                  "name": "Saladas",
                  "findname": "SALADAS",
                  "country": "AR",
                  "coord": {
                    "lon": -58.625912,
                    "lat": -28.253839
                  },
                  "zoom": {
                    "$numberLong": "10"
                  }
                }
              },
              {
                "id": 3429576,
                "city": {
                  "id": {
                    "$numberLong": "3429576"
                  },
                  "name": "Retiro",
                  "findname": "RETIRO",
                  "country": "AR",
                  "coord": {
                    "lon": -58.383331,
                    "lat": -34.583328
                  },
                  "zoom": {
                    "$numberLong": "13"
                  }
                }
              },
              {
                "id": 3429577,
                "city": {
                  "id": {
                    "$numberLong": "3429577"
                  },
                  "name": "Resistencia",
                  "findname": "RESISTENCIA",
                  "country": "AR",
                  "coord": {
                    "lon": -58.983891,
                    "lat": -27.46056
                  },
                  "zoom": {
                    "$numberLong": "6"
                  }
                }
              },
              {
                "id": 3429594,
                "city": {
                  "id": {
                    "$numberLong": "3429594"
                  },
                  "name": "Reconquista",
                  "findname": "RECONQUISTA",
                  "country": "AR",
                  "coord": {
                    "lon": -59.650002,
                    "lat": -29.15
                  },
                  "zoom": {
                    "$numberLong": "6"
                  }
                }
              },
              {
                "id": 3429652,
                "city": {
                  "id": {
                    "$numberLong": "3429652"
                  },
                  "name": "Quilmes",
                  "findname": "QUILMES",
                  "country": "AR",
                  "coord": {
                    "lon": -58.252651,
                    "lat": -34.724178
                  },
                  "zoom": {
                    "$numberLong": "10"
                  }
                }
              },
              {
                "id": 3429732,
                "city": {
                  "id": {
                    "$numberLong": "3429732"
                  },
                  "name": "Puerto Rico",
                  "findname": "PUERTO RICO",
                  "country": "AR",
                  "coord": {
                    "lon": -55.024021,
                    "lat": -26.79598
                  },
                  "zoom": {
                    "$numberLong": "9"
                  }
                }
              },
              {
                "id": 3429777,
                "city": {
                  "id": {
                    "$numberLong": "3429777"
                  },
                  "name": "Puerto Iguazu",
                  "findname": "PUERTO IGUAZU",
                  "country": "AR",
                  "coord": {
                    "lon": -54.573551,
                    "lat": -25.599119
                  },
                  "zoom": {
                    "$numberLong": "11"
                  }
                }
              },
              {
                "id": 3429786,
                "city": {
                  "id": {
                    "$numberLong": "3429786"
                  },
                  "name": "Puerto Esperanza",
                  "findname": "PUERTO ESPERANZA",
                  "country": "AR",
                  "coord": {
                    "lon": -54.673061,
                    "lat": -26.015169
                  },
                  "zoom": {
                    "$numberLong": "9"
                  }
                }
              },
              {
                "id": 3429790,
                "city": {
                  "id": {
                    "$numberLong": "3429790"
                  },
                  "name": "Puerto Eldorado",
                  "findname": "PUERTO ELDORADO",
                  "country": "AR",
                  "coord": {
                    "lon": -54.69463,
                    "lat": -26.408421
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": 3429886,
                "city": {
                  "id": {
                    "$numberLong": "3429886"
                  },
                  "name": "Posadas",
                  "findname": "POSADAS",
                  "country": "AR",
                  "coord": {
                    "lon": -55.89608,
                    "lat": -27.367081
                  },
                  "zoom": {
                    "$numberLong": "6"
                  }
                }
              },
              {
                "id": 3429902,
                "city": {
                  "id": {
                    "$numberLong": "3429902"
                  },
                  "name": "Pontevedra",
                  "findname": "PONTEVEDRA",
                  "country": "AR",
                  "coord": {
                    "lon": -58.686958,
                    "lat": -34.749741
                  },
                  "zoom": {
                    "$numberLong": "10"
                  }
                }
              },
              {
                "id": 3429949,
                "city": {
                  "id": {
                    "$numberLong": "3429949"
                  },
                  "name": "Pirane",
                  "findname": "PIRANE",
                  "country": "AR",
                  "coord": {
                    "lon": -59.108791,
                    "lat": -25.732389
                  },
                  "zoom": {
                    "$numberLong": "7"
                  }
                }
              },
              {
                "id": 3430104,
                "city": {
                  "id": {
                    "$numberLong": "3430104"
                  },
                  "name": "Paso de los Libres",
                  "findname": "PASO DE LOS LIBRES",
                  "country": "AR",
                  "coord": {
                    "lon": -57.089909,
                    "lat": -29.71311
                  },
                  "zoom": {
                    "$numberLong": "12"
                  }
                }
              },
              {
                "id": 3430340,
                "city": {
                  "id": {
                    "$numberLong": "3430340"
                  },
                  "name": "Obera",
                  "findname": "OBERA",
                  "country": "AR",
                  "coord": {
                    "lon": -55.119942,
                    "lat": -27.487061
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": 3430443,
                "city": {
                  "id": {
                    "$numberLong": "3430443"
                  },
                  "name": "Necochea",
                  "findname": "NECOCHEA",
                  "country": "AR",
                  "coord": {
                    "lon": -58.736752,
                    "lat": -38.54726
                  },
                  "zoom": {
                    "$numberLong": "7"
                  }
                }
              },
              {
                "id": 3430545,
                "city": {
                  "id": {
                    "$numberLong": "3430545"
                  },
                  "name": "Moron",
                  "findname": "MORON",
                  "country": "AR",
                  "coord": {
                    "lon": -58.619751,
                    "lat": -34.653439
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": 3430598,
                "city": {
                  "id": {
                    "$numberLong": "3430598"
                  },
                  "name": "Monte Caseros",
                  "findname": "MONTE CASEROS",
                  "country": "AR",
                  "coord": {
                    "lon": -57.636261,
                    "lat": -30.25359
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": 3430601,
                "city": {
                  "id": {
                    "$numberLong": "3430601"
                  },
                  "name": "Montecarlo",
                  "findname": "MONTECARLO",
                  "country": "AR",
                  "coord": {
                    "lon": -54.757,
                    "lat": -26.5662
                  },
                  "zoom": {
                    "$numberLong": "10"
                  }
                }
              },
              {
                "id": 3430708,
                "city": {
                  "id": {
                    "$numberLong": "3430708"
                  },
                  "name": "Mercedes",
                  "findname": "MERCEDES",
                  "country": "AR",
                  "coord": {
                    "lon": -59.430679,
                    "lat": -34.651459
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": 3430863,
                "city": {
                  "id": {
                    "$numberLong": "3430863"
                  },
                  "name": "Mar del Plata",
                  "findname": "MAR DEL PLATA",
                  "country": "AR",
                  "coord": {
                    "lon": -57.557541,
                    "lat": -38.002281
                  },
                  "zoom": {
                    "$numberLong": "6"
                  }
                }
              },
              {
                "id": 3430988,
                "city": {
                  "id": {
                    "$numberLong": "3430988"
                  },
                  "name": "Lujan",
                  "findname": "LUJAN",
                  "country": "AR",
                  "coord": {
                    "lon": -59.105,
                    "lat": -34.570278
                  },
                  "zoom": {
                    "$numberLong": "9"
                  }
                }
              },
              {
                "id": 3432043,
                "city": {
                  "id": {
                    "$numberLong": "3432043"
                  },
                  "name": "La Plata",
                  "findname": "LA PLATA",
                  "country": "AR",
                  "coord": {
                    "lon": -57.954529,
                    "lat": -34.921452
                  },
                  "zoom": {
                    "$numberLong": "9"
                  }
                }
              },
              {
                "id": 3432079,
                "city": {
                  "id": {
                    "$numberLong": "3432079"
                  },
                  "name": "La Paz",
                  "findname": "LA PAZ",
                  "country": "AR",
                  "coord": {
                    "lon": -59.64566,
                    "lat": -30.74485
                  },
                  "zoom": {
                    "$numberLong": "7"
                  }
                }
              },
              {
                "id": 3433349,
                "city": {
                  "id": {
                    "$numberLong": "3433349"
                  },
                  "name": "Jardin America",
                  "findname": "JARDIN AMERICA",
                  "country": "AR",
                  "coord": {
                    "lon": -55.226978,
                    "lat": -27.043461
                  },
                  "zoom": {
                    "$numberLong": "9"
                  }
                }
              },
              {
                "id": 3433658,
                "city": {
                  "id": {
                    "$numberLong": "3433658"
                  },
                  "name": "Gualeguaychu",
                  "findname": "GUALEGUAYCHU",
                  "country": "AR",
                  "coord": {
                    "lon": -58.51722,
                    "lat": -33.00938
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": 3433663,
                "city": {
                  "id": {
                    "$numberLong": "3433663"
                  },
                  "name": "Gualeguay",
                  "findname": "GUALEGUAY",
                  "country": "AR",
                  "coord": {
                    "lon": -59.309662,
                    "lat": -33.14156
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": 3433715,
                "city": {
                  "id": {
                    "$numberLong": "3433715"
                  },
                  "name": "Goya",
                  "findname": "GOYA",
                  "country": "AR",
                  "coord": {
                    "lon": -59.262562,
                    "lat": -29.14003
                  },
                  "zoom": {
                    "$numberLong": "9"
                  }
                }
              },
              {
                "id": 3433753,
                "city": {
                  "id": {
                    "$numberLong": "3433753"
                  },
                  "name": "Gobernador Ingeniero Valentin Virasoro",
                  "findname": "GOBERNADOR INGENIERO VALENTIN VIRASORO",
                  "country": "AR",
                  "coord": {
                    "lon": -56.033329,
                    "lat": -28.049999
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": 3433803,
                "city": {
                  "id": {
                    "$numberLong": "3433803"
                  },
                  "name": "General Jose de San Martin",
                  "findname": "GENERAL JOSE DE SAN MARTIN",
                  "country": "AR",
                  "coord": {
                    "lon": -59.341579,
                    "lat": -26.53743
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": 3433836,
                "city": {
                  "id": {
                    "$numberLong": "3433836"
                  },
                  "name": "Garupa",
                  "findname": "GARUPA",
                  "country": "AR",
                  "coord": {
                    "lon": -55.829208,
                    "lat": -27.48171
                  },
                  "zoom": {
                    "$numberLong": "10"
                  }
                }
              },
              {
                "id": 3433899,
                "city": {
                  "id": {
                    "$numberLong": "3433899"
                  },
                  "name": "Formosa",
                  "findname": "FORMOSA",
                  "country": "AR",
                  "coord": {
                    "lon": -58.178139,
                    "lat": -26.17753
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": 3433901,
                "city": {
                  "id": {
                    "$numberLong": "3433901"
                  },
                  "name": "Fontana",
                  "findname": "FONTANA",
                  "country": "AR",
                  "coord": {
                    "lon": -59.023918,
                    "lat": -27.418131
                  },
                  "zoom": {
                    "$numberLong": "11"
                  }
                }
              },
              {
                "id": 3433956,
                "city": {
                  "id": {
                    "$numberLong": "3433956"
                  },
                  "name": "Federal",
                  "findname": "FEDERAL",
                  "country": "AR",
                  "coord": {
                    "lon": -58.78326,
                    "lat": -30.954651
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": 3434095,
                "city": {
                  "id": {
                    "$numberLong": "3434095"
                  },
                  "name": "Esquina",
                  "findname": "ESQUINA",
                  "country": "AR",
                  "coord": {
                    "lon": -59.527191,
                    "lat": -30.014441
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": 3434291,
                "city": {
                  "id": {
                    "$numberLong": "3434291"
                  },
                  "name": "El Soberbio",
                  "findname": "EL SOBERBIO",
                  "country": "AR",
                  "coord": {
                    "lon": -54.198769,
                    "lat": -27.29846
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": 3435038,
                "city": {
                  "id": {
                    "$numberLong": "3435038"
                  },
                  "name": "Dolores",
                  "findname": "DOLORES",
                  "country": "AR",
                  "coord": {
                    "lon": -57.67918,
                    "lat": -36.313221
                  },
                  "zoom": {
                    "$numberLong": "7"
                  }
                }
              },
              {
                "id": 3435103,
                "city": {
                  "id": {
                    "$numberLong": "3435103"
                  },
                  "name": "Curuzu Cuatia",
                  "findname": "CURUZU CUATIA",
                  "country": "AR",
                  "coord": {
                    "lon": -58.0546,
                    "lat": -29.79171
                  },
                  "zoom": {
                    "$numberLong": "7"
                  }
                }
              },
              {
                "id": 3435217,
                "city": {
                  "id": {
                    "$numberLong": "3435217"
                  },
                  "name": "Corrientes",
                  "findname": "CORRIENTES",
                  "country": "AR",
                  "coord": {
                    "lon": -58.834099,
                    "lat": -27.4806
                  },
                  "zoom": {
                    "$numberLong": "11"
                  }
                }
              },
              {
                "id": 3435261,
                "city": {
                  "id": {
                    "$numberLong": "3435261"
                  },
                  "name": "Concordia",
                  "findname": "CONCORDIA",
                  "country": "AR",
                  "coord": {
                    "lon": -58.020889,
                    "lat": -31.39296
                  },
                  "zoom": {
                    "$numberLong": "6"
                  }
                }
              },
              {
                "id": 3435264,
                "city": {
                  "id": {
                    "$numberLong": "3435264"
                  },
                  "name": "Concepcion del Uruguay",
                  "findname": "CONCEPCION DEL URUGUAY",
                  "country": "AR",
                  "coord": {
                    "lon": -58.237221,
                    "lat": -32.482491
                  },
                  "zoom": {
                    "$numberLong": "10"
                  }
                }
              },
              {
                "id": 3435356,
                "city": {
                  "id": {
                    "$numberLong": "3435356"
                  },
                  "name": "Colegiales",
                  "findname": "COLEGIALES",
                  "country": "AR",
                  "coord": {
                    "lon": -58.449242,
                    "lat": -34.57365
                  },
                  "zoom": {
                    "$numberLong": "11"
                  }
                }
              },
              {
                "id": 3435486,
                "city": {
                  "id": {
                    "$numberLong": "3435486"
                  },
                  "name": "Chajari",
                  "findname": "CHAJARI",
                  "country": "AR",
                  "coord": {
                    "lon": -57.979622,
                    "lat": -30.750481
                  },
                  "zoom": {
                    "$numberLong": "8"
                  }
                }
              },
              {
                "id": 3435810,
                "city": {
                  "id": {
                    "$numberLong": "3435810"
                  },
                  "name": "Campana",
                  "findname": "CAMPANA",
                  "country": "AR",
                  "coord": {
                    "lon": -58.959141,
                    "lat": -34.168739
                  },
                  "zoom": {
                    "$numberLong": "11"
                  }
                }
              },
              {
                "id": 3435910,
                "city": {
                  "id": {
                    "$numberLong": "3435910"
                  },
                  "name": "Buenos Aires",
                  "findname": "BUENOS AIRES",
                  "country": "AR",
                  "coord": {
                    "lon": -58.377232,
                    "lat": -34.613152
                  },
                  "zoom": {
                    "$numberLong": "1"
                  }
                }
              },
              {
                "id": 3436124,
                "city": {
                  "id": {
                    "$numberLong": "3436124"
                  },
                  "name": "Barranqueras",
                  "findname": "BARRANQUERAS",
                  "country": "AR",
                  "coord": {
                    "lon": -58.935791,
                    "lat": -27.48299
                  },
                  "zoom": {
                    "$numberLong": "12"
                  }
                }
              },
              {
                "id": 3436199,
                "city": {
                  "id": {
                    "$numberLong": "3436199"
                  },
                  "name": "Azul",
                  "findname": "AZUL",
                  "country": "AR",
                  "coord": {
                    "lon": -59.85854,
                    "lat": -36.776981
                  },
                  "zoom": {
                    "$numberLong": "9"
                  }
                }
              },
              {
                "id": 3436230,
                "city": {
                  "id": {
                    "$numberLong": "3436230"
                  },
                  "name": "Avellaneda",
                  "findname": "AVELLANEDA",
                  "country": "AR",
                  "coord": {
                    "lon": -59.65834,
                    "lat": -29.117611
                  },
                  "zoom": {
                    "$numberLong": "13"
                  }
                }
              },
              {
                "id": 3436287,
                "city": {
                  "id": {
                    "$numberLong": "3436287"
                  },
                  "name": "Aristobulo del Valle",
                  "findname": "ARISTOBULO DEL VALLE",
                  "country": "AR",
                  "coord": {
                    "lon": -54.896259,
                    "lat": -27.096251
                  },
                  "zoom": {
                    "$numberLong": "9"
                  }
                }
              }
            ]
          }

const CitiesArgentina = () => {
    return(
      <div style={{marginTop:"3%", textAlign:"center"}}>
        {
          cities.cities.map((city) =>  <City cityName={city.city.name} id={city.id} key ={city.city.name}/>)
        }
      </div>
    )
}

class City extends React.Component{
  constructor(props){
    super(props);
    this.state = { redirect: null, id: props.id  }
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection = (e) => {
    e.preventDefault()
    const path = '/argentina/' + this.state.id;
    this.setState( { redirect: path } );
  }

  render(){
    const { cityName } = this.props;
    return(
      <div>
        {this.state.redirect ?
          <Redirect to={this.state.redirect}/>
        :
          <div style={{cursor:"pointer", marginBottom:"1%"}} onClick={this.handleSelection}>
            { cityName }
          </div>
        }
      </div>
    )
  }
}

export default CitiesArgentina;
