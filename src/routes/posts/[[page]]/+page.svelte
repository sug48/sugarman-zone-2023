<script>
  import { name } from '$lib/info.js'
  import PostsList from '$lib/components/PostsList.svelte'

  /** @type {import('./$types').PageData} */
  export let data

  $: isFirstPage = data.page === 1
  $: hasNextPage = data.posts[data.posts.length - 1]?.previous
</script>

<svelte:head>
  <title>{name} | Posts</title>
</svelte:head>


<div class="blog">
  <header>
    <h1>
      The Zone
    </h1>
    <p>sound and other waves</p>
    <p class="wiggle">
      <a href="/" class="navLinks">home</a> ~/~/~ <a href="mailto:sugarman.zone" class="navLinks">subscribe</a>
    </p>
  </header>
  
  <PostsList posts={data.posts} />
</div>



<style>
    .blog {
        min-height: 100vh;
        width: 80vw;
        background: rgba(255, 255, 255, 0.433);
        padding: 1vh 5vw;
    }

    p {
        color: black;
    }

    .navLinks {
      color: var(--color-blog-1);
    }

    .navLinks:hover, .navLinks:focus {
      color: var(--color-blog-0);
    }

    .wiggle {
      color: white;
    }

    @media (min-width: 800px) {
      .blog {
        width: 60vw;
      }
    }
</style>