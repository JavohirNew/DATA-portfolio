<script lang="ts">
  import { Link } from 'svelte-navigator'
</script>

<div class="navbar bg-base-300 text-secondary-content">
    <div class="flex-1">
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li>
            <Link to="/admin/projects">Projects</Link>
        </li>
        <li>
           <Link to="/admin/authors">Authors</Link>
        </li>
      </ul>
    </div>
  </div>