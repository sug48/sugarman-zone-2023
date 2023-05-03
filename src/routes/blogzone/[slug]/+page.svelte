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
  <meta property="og:image" content={avatar} />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={website} />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:title" content={data.post.title} />
  <meta name="twitter:description" content={data.post.preview.text} />
  <meta name="twitter:image" content={avatar} />
</svelte:head>

<div class="blog">
  <header>
      <h1>
        <a href="/blogzone/posts" class="navLinks">
          The Zone
        </a>
      </h1>
      <p>sound and other waves</p>
      <p class="wiggle">
        <a href="/" class="navLinks">home</a> ~/~/~ <a href="mailto:sugarman.zone" class="navLinks">subscribe</a>
      </p>
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
  .blog {
      min-height: 100vh;
      width: 80vw;
      background: rgba(255, 255, 255, 0.733);
      padding: 2vh 5vw;
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

