<script>
  import { format, parseISO } from 'date-fns'

  export let as = 'div'
  export let href = undefined

  let _class = undefined
  export { _class as class }
</script>

<svelte:element this={as}>
  <div>
    {#if $$slots.title}
        {#if href}
          <h1>
            <a {href}>
              <slot name="title" />
            </a>
          </h1>
        {:else}
          <slot name="title" />
        {/if}
    {/if}

    {#if $$slots.date}
        <slot name="date" />
    {/if}

    {#if $$slots.description}
        <slot name="description" />
    {/if}

    {#if $$slots.actions}
        <slot name="actions" />
    {/if}
  </div>
</svelte:element>

<style>
  a {
    color: var(--color-blog-1);
  }

  a:hover, a:focus {
    color: var(--color-blog-0);
  }
</style>
