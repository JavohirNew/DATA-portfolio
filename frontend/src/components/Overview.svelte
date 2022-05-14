<script lang="ts">
    import axios from 'axios'
    
    export let id: string = ""

    let data: string = ''

    axios.get('http://localhost:5050/projects/' + id)
         .then(res => {
             data = JSON.stringify(res.data)
         })
         .catch(err => {
             console.log(err);
         })


</script>

<div class="">
    {data}
</div>