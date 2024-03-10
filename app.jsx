const twilio = require('twilio');

const client = new twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const number = process.env.TWILIO_NUMBER;

const welcomeMessage = 'Olá! Seja bem-vindo ao chatbot da [Nome da Empresa]. O que você gostaria de saber?';

const options = [
  {
    text: 'Sobre a empresa',
    value: 'sobre',
  },
  {
    text: 'Portfólio',
    value: 'portfolio',
  },
  {
    text: 'Depoimentos',
    value: 'depoimentos',
  },
  {
    text: 'Contato',
    value: 'contato',
  },
];

const sendWelcomeMessage = (to) => {
  client.messages.create({
    body: welcomeMessage,
    from: number,
    to,
  });
};

const sendOptions = (to) => {
  client.messages.create({
    body: 'Selecione uma opção:',
    from: number,
    to,
    mediaUrl: [
      'https://example.com/options.png',
    ],
  });
};

app.post('/webhook', (req, res) => {
  const { body } = req;
  const { From, Body } = body;

  if (Body === 'oi') {
    sendWelcomeMessage(From);
  } else if (Body === 'sobre') {
    // Enviar informações sobre a empresa
  } else if (Body === 'portfolio') {
    // Enviar link para o portfólio
  } else if (Body === 'depoimentos') {
    // Enviar depoimentos de clientes
  } else if (Body === 'contato') {
    // Enviar informações de contato
  } else {
    sendOptions(From);
  }

  res.send('OK');
});

app.listen(3000);