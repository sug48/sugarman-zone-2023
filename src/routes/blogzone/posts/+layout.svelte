

<div class="app">
    <main>
        <slot />
    </main>
</div>

<style>
    .app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
    main {
        background-image: radial-gradient(
			50% 50% at 50% 50%,
			rgb(255, 217, 0) 0%,
			rgba(227, 162, 41, 0.199) 100%
		),
		 linear-gradient(180deg, var(--color-blog-0) 25%, var(--color-blog-1) 40%, var(--color-blog-2) 100%);
    }
</style>