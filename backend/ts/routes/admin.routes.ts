import { Router } from "express";
import projectStorage from "../storage/project.storage";
import authorsStorage from "../storage/authors.storage";
import { Authors, Projects } from "@prisma/client";

const router = Router();

router.post('/projects', async (req, res) =>{
    let {name, description, faculty, authorId} = req.body;

    let project:Projects = {
        id:0,
        name,
        description,
        authorId,
        date: new Date(),
        faculty
    } 
    try{
        let createdProject = await projectStorage.createProject(project);
        res.json(createdProject);
    }catch (err) {
        res.sendStatus(404).send(err);
    }
})

router.post('/authors', async (req, res) =>{
    let {name, surname, avatar} = req.body;

    let author: Authors = {
        id:0,
        name,
        surname,
        avatar
    } 
    try{
        let createdAuthor = await authorsStorage.create(author);
        res.json(createdAuthor);
    }catch (err) {
        throw err
    }
})

router.delete('/project/:id', async (req, res) => {
    let xabar = await projectStorage.remove(+req.params.id);
    res.send(xabar);
})

router.delete('/author/:id', async (req, res) => {
    let xabar = await authorsStorage.remove(+req.params.id);
    res.send(xabar);
})

export default router;