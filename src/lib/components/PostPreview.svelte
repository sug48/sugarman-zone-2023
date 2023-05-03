<script>
  import Card from './Card.svelte'
  import { format, parseISO } from 'date-fns'

  export let post
</script>

<Card href={`/blogzone/${post.slug}`} data-sveltekit-prefetch>
    <slot slot="title">{post.title}</slot>
    <strong slot="date">
      <time datetime={post.date}>
        {format(new Date(parseISO(post.date)), 'MMMM d, yyyy')}
      </time>
    </strong>  
    <div slot="description" >
      {@html post.preview.html}
      <div class="line" />
    </div>
</Card>

<style>
  .line {
    width: 70%;
    border-bottom: 1px solid var(--color-blog-1);
    margin-bottom: 5vh;
  }
</style>
