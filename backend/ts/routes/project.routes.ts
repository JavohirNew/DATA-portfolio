import { Router } from "express";
import projectStorage from "../storage/project.storage";

const router = Router();

router.get('/', async (req, res) =>{
    let projects = await projectStorage.findAll();
    res.send(projects);
})

router.get('/:id', async (req, res) =>{
    let project = await projectStorage.findOne(+req.params.id);
    res.send(project);
})

router.post('/comment', async (req, res) =>{
    let commentedProject = await projectStorage.addComment(req.body.projectId, req.body);
    res.send(commentedProject);
})

export default router;