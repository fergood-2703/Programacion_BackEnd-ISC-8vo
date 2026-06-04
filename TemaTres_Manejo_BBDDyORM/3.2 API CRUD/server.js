import app from './index.js';

const puerto = 3000;

app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});