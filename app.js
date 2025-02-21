app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/makecampground", async (req, res) => {
  const camp = new Campground({
    title: "My Backyard",
  });
  await camp.save();
  res.send(camp);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
