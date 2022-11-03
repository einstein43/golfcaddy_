import express, { Request, Response } from "express";
import { PlayerController } from "./controllers/player.controller";
const app = express()
const playerController = new PlayerController()

// Route
app.get('/player', (req: Request, res: Response) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    playerController.getPlayer(req, res)
})

 


app.listen(3001, () => console.log('app listening on port 3001'))
