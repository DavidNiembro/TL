## Projet pour le module Mob1 

Les données viennent de l'API transport.opendata.ch.

## Object Arrêt reçu par l'API
```json
{
    "id": "000000022",
    "name": "Basel",
    "score": null,
    "coordinate": {
        "type": "WGS84",
        "x": 47.547408,
        "y": 7.589547
    },
    "distance": null
}
```
## Object Initeraire reçu par l'API
```json
{
    "from" : {
        "arrival" : null,
        "arrivalTimestamp" : null,
        "departure" : "2012-03-31T08:58:00+02:00",
        "departureTimestamp" : 1333177080,
        "platform" : "7",
        "prognosis" : {
            "platform" : null,
            "arrival" : null
            "departure" : null
            "capacity1st" : "-1",
            "capacity2nd" : "-1",
        },
        "station" : {
            "coordinate" : {
                "type" : "WGS84",
                "x" : "6629086",
                "y" : "46516785"
            },
            "id" : "008501120",
            "name" : "Lausanne",
            "score" : null
        }
    },
    "to" : {
        "arrival" : "2012-03-31T09:46:00+02:00",
        "arrivalTimestamp" : 1333179960,
        "departure" : null,
        "departureTimestamp" : null,
        "platform" : "2",
        "prognosis" : {
            "platform" : null,
            "arrival" : null,
            "departure" : null
            "capacity1st" : null,
            "capacity2nd" : null,
        },
        "station" : {
            "coordinate" : {
                "type" : "WGS84",
                "x" : "6142437",
                "y" : "46210217"
            },
            "id" : "008501008",
            "name" : "Genève",
            "score" : null
        }
    }
}
```