const getUrlImage = (type, id) => `media/images/${type}/${id}.jpg`
export const list = [
    {
        "type": "House",
        imgUrl: getUrlImage("House", 0),
        "address": "8860 Micah Shoals",
        "city": "Ciudad de Cordoba",
        "country": "Argentina",
        "price": 120000,
        "numberOfRooms": 5,
        "numberOfBathrooms": 3
    },
    {
        "type": "Apartments",
        imgUrl: getUrlImage("Apartments", 0),
        "address": "23047 Orn Ford",
        "city": "San Juan",
        "country": "Puerto Rico",
        "price": 110000,
        "numberOfRooms": 4,
        "numberOfBathrooms": 2
    },
    {
        "type": "Apartments",
        imgUrl: getUrlImage("Apartments", 1),
        "address": "6566 Halvorson Knolls",
        "city": "Santo Domingo Este",
        "country": "República Dominicana",
        "price": 85000,
        "numberOfRooms": 3,
        "numberOfBathrooms": 2
    },
    {
        "type": "House",
        imgUrl: getUrlImage("House", 1),
        "address": "6220 Hazel Spring",
        "city": "Colón",
        "country": "Panamá",
        "price": 45000,
        "numberOfRooms": 4,
        "numberOfBathrooms": 2
    },
    {

        "type": "Office",
        imgUrl: getUrlImage("Office", 0),
        "address": "1921 Chelsea Shoals",
        "city": "Mar de Plata",
        "country": "Chile",
        "price": 37000,
        "numberOfRooms": 2,
        "numberOfBathrooms": 1
    },
    {
        "type": "Office",
        imgUrl: getUrlImage("Office", 1),
        "address": "915 Colleen Freeway",
        "city": "Caracas",
        "country": "Venezuela",
        "price": 30000,
        "numberOfRooms": 2,
        "numberOfBathrooms": 1
    },
]