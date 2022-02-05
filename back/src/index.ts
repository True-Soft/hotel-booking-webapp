import * as express from 'express'

const app = express();

app.use((req, res) => {
  console.log(req.query);

  res.json(req.query);
})

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})
