<script lang="ts">
    import axios from 'axios'
    import type Author from '../model/author.model';

    let authors: Author[] = []

    let nameInput: string = ''
    let surnameInput: string = ''
    let avatarInput: string = ''

    axios.get('http://localhost:5050/authors')
         .then( res => {
            authors = res.data.authors
         })
         .catch(err => {
             console.log(err);
         })


    function deleteOne(id: number) {
        axios.delete(`http://localhost:5050/admin/authors/${id}`)
         .then( res => {
             authors = authors.filter(v => v.id !== id)
         })
         .catch(err => {
             console.log(err);
         })
    }

    function createAuthor() {
        let body = {
            name: nameInput,
            surname: surnameInput,
            avatar: avatarInput
        }

        axios.post(`http://localhost:5050/admin/authors`, body)
             .then(res => {
                 authors = [...authors, res.data.author]
                 console.log(authors);
             })
             .catch(err => {
                 console.log(err);
             })
    }

</script>

<h1 class="text-3xl my-4"> Authors </h1>

<div class="flex gap-5 my-8">
    <input type="text" placeholder="Name"    bind:value={nameInput} class="input input-bordered w-full flex-1">
    <input type="text" placeholder="Surname" bind:value={surnameInput} class="input input-bordered w-full flex-1">
    <input type="text" placeholder="Avatar"  bind:value={avatarInput} class="input input-bordered w-full flex-1">
    <button on:click={ createAuthor } class="btn btn-primary"> Create Author </button>
</div>

<div class="overflow-x-auto">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>#</th>
          <th>Avatar</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {#if authors === []}
            <span class="text-md">Ma`lumot yo`q</span>
        {:else}
            {#each authors as author}
            <tr>
                <th>{author.id}</th>
                <td>
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={author.avatar} alt="" />
                        </div>
                    </div>
                </td>
                <td>{author.name}</td>
                <td>{author.surname}</td>
                <td> 
                    <button on:click={() => deleteOne(author.id)} class="btn btn-primary">Delete</button>
                </td>
            </tr>
            {/each}
        {/if}
        
      </tbody>
    </table>
  </div>