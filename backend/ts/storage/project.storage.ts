import { Comments, PrismaClient, Projects } from "@prisma/client";
const prisma = new PrismaClient();

async function findAll() {
    try{
        let projects = await prisma.projects.findMany();
        return projects;
    }catch(err){
        console.log("xatolik..." +err);        
    }
}

async function findOne(id: number) {
    try{
        let project = await prisma.projects.findUnique({
            where: {
                id: id
            },
            include: {
                comments: true
            }
        })
        return project;
    }catch (err){
        console.log("xatolik..." +err);        
    }
}

async function addComment(projectId: number, comment:Comments) {
    try {
        let commentedProject = await prisma.comments.create({
            data: {
                name: comment.name,
                comment: comment.comment,
                projectId: projectId
            }
        })
        return commentedProject;
    }catch(err) {
        console.log(err);        
    }
}

async function createProject(project: Projects) {
    try {
        let newProject = await prisma.projects.create({
            data: {
                authorId: project.authorId,
                faculty: project.faculty,
                name: project.name,
                description: project.description,
                date: project.date
            }
        })
        return newProject;
    }catch(err) {
        console.log(err);        
    }
}

async function remove(id: number) {
    try {
        await prisma.projects.delete({
            where: {
                id: id
            }
        })
        return "Project deleted!"
    } catch (err) {
        return ("xatolik..." + err);
    }
}
export default {
    addComment, createProject, findAll, findOne, remove
}