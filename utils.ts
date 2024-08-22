const generateRandomPersonName = (): string => {
  const adjectives = [
    "adorable",
    "beautiful",
    "clean",
    "drab",
    "elegant",
    "fancy",
    "gorgeous",
    "handsome",
    "magnificent",
    "old-fashioned",
    "plain",
    "quaint",
    "ravishing",
  ];

  const animals = [
    "cat",
    "dog",
    "fish",
    "rabbit",
    "tiger",
    "bear",
    "lion",
    "wolf",
    "elephant",
    "giraffe",
    "zebra",
    "hare",
    "panther",
    "zebra",
    "squirrel",
  ];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  return `${randomAdjective} ${randomAnimal}`;
};

export { generateRandomPersonName };
