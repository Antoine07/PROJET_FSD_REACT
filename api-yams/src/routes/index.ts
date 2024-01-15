import express, { Router } from "express";

import pastrie from "./pastrie";
import user from "./user";
import auth from "./auth";
import game from "./game";

const router: Router = express.Router();

router.use("/api", pastrie ); // CRUD 
router.use("/", user ); // information users 
router.use("/", auth ); // connecté déconnecté
router.use("/game", game);// jeu pour gagner des patisseries

export default router;