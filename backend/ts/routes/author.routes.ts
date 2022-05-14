import { Router } from "express";
import authorsStorage from "../storage/authors.storage";

const router = Router();

router.get("/", async (req, res) => {
    res.send(await authorsStorage.findAll());
});

router.get("/:id", async (req, res) => {
    res.send(await authorsStorage.findOne(+req.params.id));
});

export default router;