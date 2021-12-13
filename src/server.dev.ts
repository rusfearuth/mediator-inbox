// eslint-disable-next-line import/no-extraneous-dependencies
import ngrok from 'ngrok';
// eslint-disable-next-line import/no-unresolved
import app, { PORT } from './app';

const main = async () => {
  try {
    const url = await ngrok.connect({port: PORT});

    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log('Server is ready to use.');
      // eslint-disable-next-line no-console
      console.log(`Local URL: http://localhost:${PORT}`);
      // eslint-disable-next-line no-console
      console.log(`Public URL: ${url}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

main();
