import { Authors, Projects, PrismaClient } from "@prisma/client";
const client = new PrismaClient();

// CRUD
// Create Read Update Delete
async function findAll(): Promise<Authors[] | string> {
    try {
        let authors = await client.authors.findMany()
        return authors
    } catch (err){ return ("Olishda xatolik! "+err)}
}

type AuthorsWithProjects = Authors & { projects: Projects[] }

async function findOne(id: number) {
    try{
        let author = await client.authors.findUnique({
            where: {
                id: id
            },
            include: {
                projects: true
            }
        })
        return author
    } catch (err) {return ("Olishda xatolik! "+err)}
}

async function create(author: Authors) {
    try {
        let newAuthor = await client.authors.create({
            data: {
                name: author.name,
                surname: author.surname,
                avatar: author.avatar
            }
        })
        return newAuthor
    } catch (err) {return "Error on creating.." + err}
}

async function remove(id: number) {
    try {
        await client.authors.delete({
            where: {
                id: id
            }
        })
        return "Author deleted!"
    } catch (err) {
        return err;
    }
}

export default {
    findAll,
    findOne,
    create,
    remove
}