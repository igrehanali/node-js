import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why did the chicken cross the road?",
      joke: "To get to the other side!",
    },
    {
      id: 2,
      title: "Knock Knock",
      joke: "Knock, knock. Who’s there? Lettuce. Lettuce who? Lettuce in, it’s freezing out here!",
    },
    {
      id: 3,
      title: "Math Pun",
      joke: "Why was the math book sad? It had too many problems.",
    },
    {
      id: 4,
      title: "Lightbulb joke",
      joke: "How many programmers does it take to change a light bulb? None, that’s a hardware problem.",
    },
    {
      id: 5,
      title: "Pirate joke",
      joke: "Why don’t pirates take a bath before they walk the plank? Because they just wash up on shore!",
    },
    {
      id: 6,
      title: "Invisible man joke",
      joke: "Why didn’t the skeleton go to the party? Because he had no body to go with!",
    },
    {
      id: 7,
      title: "Elevator joke",
      joke: "Why are elevator jokes so good? They work on many levels.",
    },
    {
      id: 8,
      title: "Ghost joke",
      joke: "What do you call a ghost’s true love? His ghoul-friend.",
    },
    {
      id: 9,
      title: "Coffee joke",
      joke: "What did the coffee say to the sugar? You’re sweet.",
    },
    {
      id: 10,
      title: "Tomato joke",
      joke: "Why did the tomato turn red? Because it saw the salad dressing!",
    },
  ];
  res.send(jokes);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
