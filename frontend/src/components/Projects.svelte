<!-- author_id, name, description, faculty -->
<script lang="ts">
    import axios from 'axios'
    import type Author from '../model/author.model';
    import type Project from '../model/project.model';
    import {navigate} from 'svelte-navigator'

    let authors: Author[] = []
    let projects: Project[] = []

    let authorId: number = 0
    let name: string = ''
    let faculty: string = ''
    let description: string = ''


    axios.get('http://localhost:5050/projects')
         .then(res => {
             projects = res.data.projects
             console.log(projects);
         })
         .catch(err => {
             console.log(err);
         })

    axios.get('http://localhost:5050/authors')
         .then( res => {
            authors = res.data.authors
            authorId = authors.length ? authors[0].id : 0
         })
         .catch(err => {
             console.log(err);
         })
    
    function create() {
        let body = {
            authorId,
            name,
            faculty,
            description
        }

        axios.post('http://localhost:5050/admin/projects', body)
            .then(res => {
                projects = [...projects, res.data.project]
            })
            .catch(err => {
                 console.log(err);
            })
    }

    function deleteOne(id: number) {
        axios.delete('http://localhost:5050/admin/projects/' + id)
             .then(res => {
                 projects = projects.filter(p => p.id !== id)
             })      
             .catch(err => {
                 console.log(err);
            })
    }

    function click(id: number) {
        navigate('/admin/projects/' + id)
    }
</script>

<h1 class="text-3xl my-4"> Projects </h1>

<div class="flex gap-5 my-8">
    <input type="text" placeholder="Name"    class="input input-bordered w-full flex-1" bind:value={name}>
    <input type="text" placeholder="Faculty" class="input input-bordered w-full flex-1" bind:value={faculty}>

    <select class="select select-bordered w-full flex-1" bind:value={authorId}>
        {#each authors as author}
        <option value={author.id}>
            <div class="w-8 rounded-full ring ring-primary ring-offset-base-100">
                <img src={author.avatar} alt="" />
              </div>
              {author.name} {author.surname}
        </option>
        {/each}
    </select>
</div>

<textarea class="textarea textarea-bordered w-full" rows="6" placeholder="Description" bind:value={description}></textarea>

<button on:click={create} class="btn btn-primary">Create Project</button>


<div class="overflow-x-auto">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Faculty</th>
          <th>Description</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {#each projects as project}
            <tr on:click={() => click(project.id)}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{project.faculty}</td>
                <td>{project.description}</td>
                <td>
                    <div class="avatar">
                        <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={project.author.avatar} alt="" />
                        </div>
                    </div>
                    {project.author.name}
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" on:click={() => deleteOne(project.id)}>DELETE</button>
                </td>
            </tr>
        {/each}        
      </tbody>
    </table>
  </div>
