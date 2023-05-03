<script>
  import { website, name, bio, avatar } from '$lib/info.js'
  import { afterNavigate } from '$app/navigation'
  import { format, parseISO } from 'date-fns'

  /** @type {import('./$types').PageData} */
  export let data

  // generated open-graph image for sharing on social media.
  // see https://og-image.vercel.app/ for more options.
  const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
    data.post.title
  )}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`

  const url = `${website}/${data.post.slug}`

  // if we came from /posts, we will use history to go back to preserve
  // posts pagination
  let canGoBack = false
  afterNavigate(({ from }) => {
    if (from && from.url.pathname.startsWith('/posts')) {
      canGoBack = true
    }
  })

  function goBack() {
    if (canGoBack) {
      history.back()
    }
  }
</script>

<svelte:head>
  <title>{data.post.title} - {name}</title>
  <meta name="description" content={data.post.preview.text} />
  <meta name="author" content={name} />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={data.post.title} />
  <meta property="og:description" content={data.post.preview.text} />
  <meta property="og:image" content={ogImage} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={website} />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:title" content={data.post.title} />
  <meta name="twitter:description" content={data.post.preview.text} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<div>
      <header>
        <h1>
          {data.post.title}
        </h1>
        <h3>
          {format(new Date(parseISO(data.post.date)), 'MMMM d, yyyy')}
        </h3>
      </header>
      <svelte:component this={data.component} />
</div>

<style>
  div {
      min-height: 100vh;
      width: 80vw;
      background: rgba(255, 255, 255, 0.433);
      padding: 2vh 5vw;
  }

  p {
      color: black;
  }

  @media (min-width: 480px) {
		div {
			width: 60vw;
		}
	}
</style>

