import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import ngrok from 'ngrok';

const app = express();
app.use(express.json());

const PORT = 5050;

/**
 * Message handler for invites.
 */
app.get('/', (req, res) => {
  if (req.query.c_i != null) {
    res.status(200).send({
      message: 'You have received a connection invitation. '
        + 'To accept the invitation, paste it into your agent application.',
    });
  } else {
    res.status(200).send({});
  }
});

app.post('/', (req, res) => {
  res.status(200).json({});
});

const main = async () => {
  const url = await ngrok.connect({
    proto: 'http',
    addr: `${PORT}`,
  });
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on ${PORT} with ${url} Ngrok URL`);
  });
};

main();
