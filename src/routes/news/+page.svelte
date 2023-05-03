<script>
    import NewsText from "./news.md"
</script>

<main>
    <h1>
        news
    </h1>
    <p>
        <NewsText />
    </p>
</main>


<style>
    main {
        background: var(--color-bg-1);
        min-height: 100vh;
        padding: 5vh 5vw;
    }

    h1 {
        font-family: GeneraleStation;
    }

    p {
        font-family: Paysage;
        font-size: large;
        width: 80vw;
    }

    @media (min-width: 800px) {
		p {
			width: 60vw;
		}
	}

</style>