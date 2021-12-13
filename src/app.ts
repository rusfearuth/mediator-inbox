import express from 'express';

export const PORT = 5050;

const app = express();
app.use(express.json());

const pendingMessages: Array<object> = [];

const MIME_TYPE_APPLICATION_JSON = ""
const MIME_TYPE_DIDCOMM_V0 = "application/ssi-agent-wire";

/**
 * Processing invitations
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

/**
 * Handling other messages
 */
app.post('/', (req, res, next) => {
  const contentType = req.get('Content-Type');
  console.log(`[POST] >> Income message with Content-Type: ${contentType}\n`);

  switch(contentType) {
    case MIME_TYPE_APPLICATION_JSON:
      const response = req.body;
      console.log(`Message body: ${response}\n\n`);
      pendingMessages.push(response);
      res.status(200).send();
      break;
    case MIME_TYPE_DIDCOMM_V0:
      let buffer = '';
      req.setEncoding('utf8');
      req.on('data', chunk => buffer += chunk);
      req.on('end', () => {
        console.log(`Message body: ${buffer}\n\n`);
        pendingMessages.push(
          JSON.parse(buffer),
        );
        res.status(200).send();
      });
      break;
    default:
      res.status(400).send();
  }
});

app.get('/poll/pending', (req, res) => {
  const pending = pendingMessages.splice(0, pendingMessages.length);
  res.status(200).json(pending);
});

export default app;
