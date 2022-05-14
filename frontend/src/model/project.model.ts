import type Author from "./author.model"

type Project = {
    id: number,
    name: string,
    faculty: string,
    description: string,
    author: Author
}

export default Project
