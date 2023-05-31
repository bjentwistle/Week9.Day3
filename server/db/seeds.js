use hotel_bookings;
db.dropDatabase();
​
db.bookings.insertMany([
  {
    guest: "Jane Smith",
    email: "jane.smith@hotmail.com",
    checkinStatus :"Checked in"
  },
  {
    guest: "John Walker",
    email: "jonnie_whiskey@gmail.com",
    checkinStatus :"Not checked in"
  },
  {
    guest: "Sara Cox",
    email: "sara.cox@bbc.radio1.co.uk",
    checkinStatus :"Not checked in"
  },
  {
    guest: "Brian Cox",
    email: "astrophysics_Dude@universe.ed.uk",
    checkinStatus :"Checked in"
  }
]);