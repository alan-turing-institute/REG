<script lang="ts">
    import GridCol from "src/lib/grid-col/GridCol.svelte";
    import scrollLeft from "src/assets/left.png";
    import scrollRight from "src/assets/right.png";
    import wordCloud from "src/assets/wordcloud.png";

    import ua from "src/assets/ua.png";
    import turingjl from "src/assets/turingjl.png";

    type Project = {
        href: string;
        imgSrc: string;
        title: string;
        description: string;
    };

    let projects: Project[] = [
        {
            href: "https://www.turing.ac.uk/research/research-engineering/meet-the-team",
            imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg",
            title: "Project A",
            description: "This space could be yours!",
        },
        {
            href: "https://www.turing.ac.uk/research/research-engineering/meet-the-team",
            imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg",
            title: "Project B",
            description: "This space could be yours!",
        },
        {
            href: "https://urban-analytics-technology-platform.github.io/",
            imgSrc: ua,
            title: "Urban Analytics",
            description: "A collection of open-source software to improve how we design, interact with, and live in urban spaces.",
        },
        {
            href: "https://turinglang.org/",
            imgSrc: turingjl,
            title: "Turing.jl",
            description: "A Julia library for general-purpose probabilistic programming and Bayesian inference.",
        },
    ];

    let galleryElem: HTMLDivElement;
    let currentProject: number = 0;
    function scrollGallery(direction: number) {
        currentProject += direction;
        // Ensure that project index is within bounds
        const maxCurrentProject = Math.ceil(
            (galleryElem.scrollWidth - galleryElem.clientWidth) / 240,
        );
        currentProject = Math.max(
            0,
            Math.min(currentProject, maxCurrentProject),
        );

        const targetX = Math.max(
            0,
            Math.min(
                galleryElem.scrollWidth - galleryElem.clientWidth,
                currentProject * 240,
            ),
        );
        galleryElem.scroll({
            left: targetX,
            behavior: "smooth",
        });
    }
</script>

<p>
    Most of our work is open-source. You can see a list of repositories we have
    worked on in <a
        href="https://github.com/search?q=topic%3Ahut23+org%3Aalan-turing-institute+fork%3Atrue&type=repositories"
        target="_blank"
        >the <span class="monospace">alan-turing-institute</span> GitHub organisation</a
    >.
</p>

<p>
    Here is a sample of some of the projects we are currently working on. This
    list is not exhaustive!
</p>

<div id="gallery-container-container">
    <button on:click={() => scrollGallery(-1)}>
        <img src={scrollLeft} alt="Scroll left" class="scroll" />
    </button>
    <div id="gallery-container" bind:this={galleryElem}>
        <div id="gallery">
            {#each projects as project}
                <GridCol
                    href={project.href}
                    imgSrc={project.imgSrc}
                    title={project.title}
                >
                    <p>{project.description}</p>
                </GridCol>
            {/each}
        </div>
    </div>
    <button on:click={() => scrollGallery(1)}>
        <img src={scrollRight} alt="Scroll right" class="scroll" />
    </button>
</div>

<p>
    The following word cloud was generated from a (slightly unscientific)
    survey of languages and technologies we have used in REG. The most common
    language we use is Python, but there are many others!
</p>

<img
    class="word-cloud"
    src={wordCloud}
    alt="Word cloud of languages and technologies used in REG"
/>

<style>
    .monospace {
        font-family: monospace;
        font-size: 90%;
    }

    div#gallery-container-container {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        margin: 0;
    }
    img.scroll {
        height: 50px;
        margin: 0 5px;
    }

    div#gallery-container {
        overflow-x: scroll;
    }

    div#gallery {
        overflow-x: scroll;
        padding: 10px;
        display: grid;
        width: max-content;
        grid-auto-flow: column;
        grid-template-rows: 1fr max-content max-content;
        grid-template-columns: repeat(5, 200px);
        gap: 10px 40px;
    }

    img.word-cloud {
        width: 80%;
        max-width: 700px;
        margin: 0 auto;
        border-radius: 5px;
    }

    p {
        margin: 0;
    }
</style>
