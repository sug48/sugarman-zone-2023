<script>
    import HomeText from "./home-text.md";
</script>

<h1>
    You've entered the Sugarman Zone
</h1>

<div class="buttonGrid">
    <a href="/blogzone/posts">
        <button>
            Please read my posts
        </button>
    </a>

    <a href="/about">
        <button>
            Who is this Sugar Man?
        </button>
    </a>

    <a href="/nothing">
        <button>
            chillout zone :)
        </button>  
    </a>

    <a href="/news">
        <button>
            what's new with me
        </button>
    </a>
</div>

<div class="bubble">
    <p>
        <HomeText />
    </p>
</div>

<style>
    .bubble {
        width: 60vw;
        height: fit-content;
        text-align: left;
        margin: 5vh auto;
        padding: 2vh 2vw;
        background-image: radial-gradient(var(--color-blog-1) 50%, var(--color-blog-0) 90%);
        background-color: rgba(255, 255, 255, 0.811);
        //box-shadow: inset 0 0 0.2em 0.2em, inset 0 0 0.5em 0.5em;
    }

    .metalButton {
        background: rgb(189, 189, 189);
        box-shadow: inset 0.2em 0.2em 0.2em 0 rgba(255,255,255,0.5), inset -0.2em -0.2em 0.2em 0 rgba(0,0,0,0.5);
        padding: 0.75em 1em;
        width: fit-content;
        font-family: GeneraleStation;
        text-shadow: 0 0 2px #d8d8d8;
    }

    .metalButton:hover, .metalButton:focus {
            background-color: rgb(94, 92, 92);
            box-shadow: inset 0.2em 0.2em 0.2em 0 rgb(121, 121, 121), inset -0.2em -0.2em 0.2em 0 rgb(0, 0, 0);
            color: white;
        }
    
    .homeGrid {
         display: grid;
         width: 60vw;
         grid-template-columns: repeat(2, 1fr);
         grid-auto-rows: minmax(5em, auto);
         align-items: top;
         justify-items: center;
    }

    .buttonGrid {
        display: grid;
        width: auto;
        padding: 1vh 1vw;
        grid-template-columns: repeat(1, 1fr);
        gap: 1%;
        grid-auto-rows: minmax(5em, auto);
        align-items: center;
        justify-items: center;
    }

    h1{
        font-family: 'Brassia';
        font-size: 300%;
        text-shadow: 0 0 10px var(--color-blog-0), 0 0 20px var(--color-blog-0);
        text-align: center;
        margin:  3vh auto;
        color: rgb(255, 255, 255);
    }

	p {
        font-family: Isenheim;
        background-color: rgba(255, 255, 255, 0.474);
        padding: 2vh 2vw;
        text-align: center;
	}

    button {
        font-family: Anybody;
        background: black;
        width: 90vw;
        padding: 3vh 2px;
        margin: 1vh 0;
        border: 1px solid white;
        color: white;
        font-size: 200%;
        font-weight: bold;
    }

    button:hover, button:focus {
        border: solid var(--color-blog-0);
        color: solid var(--color-blog-0);
    }

    @media (min-width: 768px) {
        h1 {
            margin: 5vh 1vw 3vh;
        }
        
        .bubble {
            width: auto;
        }

        .buttonGrid {
            display: grid;
            width: auto;
            padding: 1vh 1vw;
            margin: 3vh 0vw;
            grid-template-columns: repeat(2, 1fr);
            gap: 1em;
            grid-auto-rows: minmax(5em, auto);
            align-items: center;
            justify-items: center;
        }
        button {
            font-family: Anybody;
            background: black;
            width: 40vw;
            height: 10vh;
            border: 1px solid white;
            color: white;
            font-size: 200%;
            font-weight: bold;
        }
    }
</style>