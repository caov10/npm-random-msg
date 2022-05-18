const messages = [
  "Camilo",
  "Alejandra",
  "Andrea",
  "Maria Paula",
  "Laura",
  "Mariana",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg};
