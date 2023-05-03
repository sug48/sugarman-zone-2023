<script>
  import PostPreview from '$lib/components/PostPreview.svelte'

  export let posts
</script>

<div>
  {#each posts as post}
      <PostPreview {post} />
  {/each}
</div>

