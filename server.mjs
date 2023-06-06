import express from'express';
import * as path from 'path';
import * as url from 'url';
import five from "johnny-five";
import {RaspiIO} from "raspi-io";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();
const port = 5173;
const board = new five.Board({
    io: new RaspiIO({
        excludePins: ['GPIO3','GPIO5'],
    })
});

let relay;

board.on("ready", () => {
    relay = new five.Relay({
        pin: "GPIO27",
        type: "NO",
    });
    relay.close();
});


app.use(express.static(path.join(__dirname, '/')));
app.get('/lock/open', (req, res) => {
    relay.open();
    return res.sendStatus(200);
});
app.get('/lock/close', (req, res) => {
    relay.close();
    return res.sendStatus(200);
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`Open browser and navigate to localhost:${port}`);
});