<script lang="ts">
import Authors from "./components/Authors.svelte";

import Navbar from "./components/Navbar.svelte";
import Projects from "./components/Projects.svelte";
import { Router, Route } from 'svelte-navigator';
import Redirect from "./components/Redirect.svelte";
import Overview from "./components/Overview.svelte";

</script>



<Router basepath="/" >

<Navbar/>

<main class="container-sm p-20 mx-auto">

        <Route path="/admin/authors" primary={true}>
            <Authors/>
        </Route>

        <Route path="/admin/projects" component={Projects}/>

        <Route path="/admin/projects/:id" let:params>
            <Overview id={params.id}/>
        </Route>

        <Redirect path="/admin/authors"/>


</main>

</Router>
