<script lang="ts">
  import { page } from '$app/stores'
  import { Head } from '$lib/components'
  import PostCard from '$lib/components/post-card.svelte'
  import { description, name, website } from '$lib/info.js'
  import { og_image_url } from '$lib/utils'
  import type { Post } from '../../types'

  export let data
  let { posts } = data
</script>
  
{#each posts as post (post.slug)}
  <PostCard {post} />
{/each}

<style>
    div {
        min-height: 100vh;
        width: 60vw;
        background: rgba(255, 255, 255, 0.433);
        padding: 5vh 5vw;
    }

    p {
        color: black;
    }
</style>