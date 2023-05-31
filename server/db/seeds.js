use hotel_bookings;
db.dropDatabase();
​
db.bookings.insertMany([
  {
    guest: "Jane Smith",
    email: "jane.smith@hotmail.com",
    checkinStatus :true
  },
  {
   guest: "John Walker",
    email: "jonnie_whiskey@gmail.com",
    checkinStatus :false
  },
  {
    guest: "Sara Cox",
    email: "sara.cox@bbc.radio1.co.uk",
    checkinStatus :false
  },
  {
    guest: "Brian Cox",
    email: "astrophysics_Dude@universe.ed.uk",
    checkinStatus :true
  }
]);