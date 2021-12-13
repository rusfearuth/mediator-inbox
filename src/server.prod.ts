// eslint-disable-next-line import/no-unresolved
import app, { PORT } from './app';

const main = () => {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on ${PORT}`);
  });
};

main();
