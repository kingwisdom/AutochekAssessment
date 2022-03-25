

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/api/location](http://localhost:3000/api/location) with your browser to see the result.

Fetch All Locations
http://localhost:3000/api/location

POST A Location
http://localhost:3000/api/location
{
    "locationName": "Ibadan2",
    "description": "hello world",
    "Website": "gggg",
    "phone": "08178822123",
    "contactPerson": "adeoye2",
    "lontitude": "3444.55",
    "latitude": "900.000",
    "radius": "50.9",
    "_id": "623d6d4f86954d9bf8bda882",
    "createdAt": "2022-03-25T07:20:47.826Z",
    "updatedAt": "2022-03-25T07:20:47.826Z"
}

 Fetch A Location
http://localhost:3000/api/location/id

UPDATE Location
PUT REQUEST
http://localhost:3000/api/location/id

DELETE Location
DELETE REQUEST
http://localhost:3000/api/location/id