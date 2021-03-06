'use strict';

//list of cars
//useful for ALL 5 steps
//could be an array of objects that you fetched from api or database
const cars = [{
  'id': 'a9c1b91b-5e3d-4cec-a3cb-ef7eebb4892e',
  'name': 'fiat-500-x',
  'pricePerDay': 36,
  'pricePerKm': 0.10
}, {
  'id': '697a943f-89f5-4a81-914d-ecefaa7784ed',
  'name': 'mercedes-class-a',
  'pricePerDay': 44,
  'pricePerKm': 0.30
}, {
  'id': '4afcc3a2-bbf4-44e8-b739-0179a6cd8b7d',
  'name': 'bmw-x1',
  'pricePerDay': 52,
  'pricePerKm': 0.45
}];

//list of current rentals
//useful for ALL steps
//the time is hour
//The `price` is updated from step 1 and 2
//The `commission` is updated from step 3
//The `options` is useful for step 4
const rentals = [{
  'id': '893a04a3-e447-41fe-beec-9a6bfff6fdb4',
  'driver': {
    'firstName': 'Roman',
    'lastName': 'Frayssinet'
  },
  'carId': 'a9c1b91b-5e3d-4cec-a3cb-ef7eebb4892e',
  'pickupDate': '2020-01-02',
  'returnDate': '2020-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}, {
  'id': 'bc16add4-9b1d-416c-b6e8-2d5103cade80',
  'driver': {
    'firstName': 'Redouane',
    'lastName': 'Bougheraba'
  },
  'carId': '697a943f-89f5-4a81-914d-ecefaa7784ed',
  'pickupDate': '2020-01-05',
  'returnDate': '2020-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}, {
  'id': '8c1789c0-8e6a-48e3-8ee5-a6d4da682f2a',
  'driver': {
    'firstName': 'Fadily',
    'lastName': 'Camara'
  },
  'carId': '4afcc3a2-bbf4-44e8-b739-0179a6cd8b7d',
  'pickupDate': '2019-12-01',
  'returnDate': '2019-12-15',
  'distance': 1000,

  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}];

//list of actors for payment
//useful from step 5
const actors = [{
  'rentalId': '893a04a3-e447-41fe-beec-9a6bfff6fdb4',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': 'bc16add4-9b1d-416c-b6e8-2d5103cade80',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '8c1789c0-8e6a-48e3-8ee5-a6d4da682f2a',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}];

var x,y;
var nod=0;
var nok=0;
var rentalp;
for(x in rentals)
{
  if(rentals[x].pickupDate==rentals[x].returnDate)
  {
    nod=1;
  }
  else {
    nod=(rentals[x].returnDate.substring(8))-(rentals[x].pickupDate.substring(8));
  }
  nok=rentals[x].distance;
  console.log(rentals[x].returnDate.substring(8));
  for(y in cars)
  {
    if(rentals[x].carId==(cars[y].id))
    {
      rentalp=(nod*cars[y].pricePerDay)+(nok*cars[y].pricePerKm);
      console.log(cars[y]);
      console.log("price : "+rentalp);
      rentalp=0;
    }

  }

}


var x,y;
var nod=0;
var nok=0;
var rentalp;
for(x in rentals)
{
  if(rentals[x].pickupDate==rentals[x].returnDate)
  {
    nod=1;
  }
  else {
    nod=(rentals[x].returnDate.substring(8))-(rentals[x].pickupDate.substring(8));
  }
  nok=rentals[x].distance;
  for(y in cars)
  {
    if(rentals[x].carId==(cars[y].id))
    {
      rentalp=(1*cars[y].pricePerDay);
      if(nod>1&&nod<=4)
      {
        rentalp=rentalp+((nod-1)(rentalp-(rentalp.1)));
      }
      else if(nod>4&&nod<=10)
      {
        rentalp=rentalp+(3*(rentalp-(rentalp*.1)))+((nod-4)(rentalp-(rentalp.3)));
      }
      else {
        rentalp=rentalp+(3*(rentalp-(rentalp*.1)))+(6*(rentalp-(rentalp*.3)))+((nod-10)(rentalp-(rentalp.5)));
      }
      rentalp=rentalp+(nok*cars[y].pricePerKm);
      rentals[x].price=rentalp;
      console.log(cars[y]);
      console.log("price : "+rentalp);
      rentalp=0;
    }

  }

}

var x;
var nod=2;
var nok=1;
var commission,rentalp;
for(x in rentals)
{
  if(rentals[x].pickupDate==rentals[x].returnDate)
  {
    nod=1;
  }
  else {
    nod=(rentals[x].returnDate.substring(8))-(rentals[x].pickupDate.substring(8));
  }
  commission=rentals[x].price*.3;
  console.log("insurance:"+commission/2);
  rentals[x].commission.insurance=commission/2;
  console.log("treasury:"+1*nod);
  rentals[x].commission.treasury=1*nod;
  console.log("Virtuo:"+((commission/2)-(1*nod)));
  rentals[x].commission.virtuo=((commission/2)-(1*nod));
  rentalp=0;
}

var x;
var nod=2;
var nok=1;
var rentalp;
var deductibleReduction=true;
for(x in rentals)
{
  if(rentals[x].pickupDate==rentals[x].returnDate)
  {
    nod=1;
  }
  else {
    nod=(rentals[x].returnDate.substring(8))-(rentals[x].pickupDate.substring(8));
  }
  if(rentals[x].options.deductibleReduction==true)
  {
    rentalp=rentals[x].price+(4*nod);
  }
  else {
    {
      rentalp=rentals[x].price;
    }
  }
  console.log(rentals[x]);
  console.log("price:"+rentalp);
  rentalp=0;
}


var x,y,z;
for(x in actors)
{
  console.log(actors[x].rentalId);
  for(y in rentals)
  {
    if(actors[x].rentalId==rentals[y].id)
    {
      for(z in actors[x].payment)
      {
        if(actors[x].payment[z].who=="driver")
        {
            if(rentals[y].pickupDate==rentals[y].returnDate)
            {
              nod=1;
            }
            else {
              nod=(rentals[y].returnDate.substring(8))-(rentals[y].pickupDate.substring(8));
            }
            if(rentals[x].options.deductibleReduction==true)
            {
              actors[x].payment[z].amount=rentals[y].price+(4*nod);
            }
            else {
              {
                actors[x].payment[z].amount=rentals[y].price;
              }
            }
        }
        else if(actors[x].payment[z].who=="partner")
        {
          actors[x].payment[z].amount=rentals[y].price-(rentals[y].price*.3);
        }
        else if(actors[x].payment[z].who=="insurance")
        {
          actors[x].payment[z].amount=rentals[y].commission.insurance;
        }
        else if(actors[x].payment[z].who=="treasury")
        {
          actors[x].payment[z].amount=rentals[y].commission.treasury;
        }
        else if(actors[x].payment[z].who=="virtuo")
        {
          if(rentals[y].pickupDate==rentals[y].returnDate)
          {
            nod=1;
          }
          else {
            nod=(rentals[y].returnDate.substring(8))-(rentals[y].pickupDate.substring(8));
          }
          if(rentals[x].options.deductibleReduction==true)
          {
            actors[x].payment[z].amount=rentals[y].commission.virtuo+(4*nod);
          }
          else {
            {
              actors[x].payment[z].amount=rentals[y].commission.virtuo;
            }
          }
        }
      }
    }
  }
}

console.log(cars);
console.log(rentals);
console.log(actors);
