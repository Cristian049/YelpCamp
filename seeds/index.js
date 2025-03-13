const path = require("path");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/yelpCampDb");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: `https://picsum.photos/400?random=${Math.random()}`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic velit error cum, optio sed ad temporibus. Natus et nisi beatae, deleniti voluptatum aperiam est quibusdam illo voluptates maiores magnam?",
      price,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  db.close();
});
