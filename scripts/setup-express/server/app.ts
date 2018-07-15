import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

export default app;
