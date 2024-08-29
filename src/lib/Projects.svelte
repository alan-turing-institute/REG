<script lang="ts">
    import GridCol from "src/lib/grid-col/GridCol.svelte";
    import { onMount } from "svelte";

    import sLeft from "src/assets/sLeft.png";
    import sRight from "src/assets/sRight.png";
    import sNoLeft from "src/assets/sNoLeft.png";
    import sNoRight from "src/assets/sNoRight.png";

    import wordCloud from "src/assets/wordcloud.png";
    import ua from "src/assets/ua.png";
    import turingjl from "src/assets/turingjl.png";
    import ai4nwp from "src/assets/ai4nwp.png";
    import dsh from "src/assets/dsh.png";
    import mapreader from "src/assets/mapreader.png";
    import nats from "src/assets/nats.png";
    import eider from "src/assets/eider.png";
    import scivision from "src/assets/scivision.jpg";

    type Project = {
        href: string;
        imgSrc: string;
        title: string;
        description: string;
    };

    let projects: Project[] = [
        {
            href: "https://www.turing.ac.uk/research/research-projects/ai-numerical-weather-prediction-nwp-ai4nwp",
            imgSrc: ai4nwp,
            title: "AI4NWP",
            description:
                "A collaboration with the Met Office on the use of modern AI techniques for weather forecasting.",
        },
        {
            href: "https://github.com/alan-turing-institute/data-safe-haven",
            imgSrc: dsh,
            title: "Data Safe Haven",
            description:
                "A framework to create secure environments for sensitive data analysis.",
        },
        {
            href: "https://github.com/alan-turing-institute/eider",
            imgSrc: eider,
            title: "Eider",
            description:
                "An R package for declarative preprocessing of health data for machine learning models.",
        },
        {
            href: "https://github.com/maps-as-data/MapReader",
            imgSrc: mapreader,
            title: "MapReader",
            description:
                "A computer vision tool to identify visual elements in images, particularly historical maps.",
        },
        {
            href: "https://www.turing.ac.uk/research/research-programmes/project-bluebird",
            imgSrc: nats,
            title: "Project Bluebird",
            description:
                "Developing AI for air traffic control in collaboration with NATS.",
        },
        {
            href: "https://sci.vision/",
            imgSrc: scivision,
            title: "Scivision",
            description:
                "A platform for computer vision models and datasets across the sciences and humanities.",
        },
        {
            href: "https://turinglang.org/",
            imgSrc: turingjl,
            title: "Turing.jl",
            description:
                "A Julia library for general-purpose probabilistic programming and Bayesian inference.",
        },
        {
            href: "https://urban-analytics-technology-platform.github.io/",
            imgSrc: ua,
            title: "Urban Analytics",
            description:
                "A collection of open-source software to improve how we design, interact with, and live in urban spaces.",
        },
    ];

    // Shuffle projects
    for (let i = projects.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [projects[i], projects[j]] = [projects[j], projects[i]];
    }
    // Add in advertisement at the front
    projects.unshift({
        href: "https://www.turing.ac.uk/research/research-engineering/meet-the-team",
        imgSrc: "https://thumbs.dreamstime.com/b/gray-white-maine-coon-cat-pointing-paw-camera-studio-shot-blue-tabby-raising-reaching-216696547.jpg",
        title: "Your project?",
        description:
            "This space could be yours! Simply contact Penny on Slack for some free advertising.",
    });

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
        // have to pass targetX as an argument because otherwise it will use the
        // current scroll position, which takes a while to update due to the
        // smooth scrolling
        updateCanScrolls(targetX);
    }

    let canScrollLeft: boolean = false;
    let canScrollRight: boolean = true;
    // Update canScrollLeft and canScrollRight based on the current scroll
    // position, or the desired scroll position if targetX is provided
    function updateCanScrolls(targetX: number | null = null) {
        if (targetX === null) {
            targetX = galleryElem.scrollLeft;
        }

        canScrollLeft = galleryElem !== undefined && targetX > 0;
        canScrollRight =
            galleryElem !== undefined &&
            targetX + galleryElem.clientWidth < galleryElem.scrollWidth;
        console.log(canScrollLeft, canScrollRight);
    }
    onMount(updateCanScrolls);
</script>

<p>
    Most of our work is open-source, with some exceptions due to contractual
    limitations. You can see a list of repositories we have worked on in <a
        href="https://github.com/search?q=topic%3Ahut23+org%3Aalan-turing-institute+fork%3Atrue&type=repositories"
        target="_blank"
        >the <span class="monospace">alan-turing-institute</span> GitHub organisation</a
    >.
</p>

<p>
    Here is a sample of some of the projects we have worked on in 2024. This
    list is not exhaustive!
</p>

<div id="gallery-container-container">
    <button on:click={() => scrollGallery(-1)}>
        {#if canScrollLeft}
            <img src={sLeft} alt="Scroll left" class="scroll" />
        {:else}
            <img src={sNoLeft} alt="Scroll left disabled" class="scroll" />
        {/if}
    </button>
    <div
        id="gallery-container"
        bind:this={galleryElem}
        on:scroll={() => {
            updateCanScrolls();
        }}
    >
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
        {#if canScrollRight}
            <img src={sRight} alt="Scroll right" class="scroll" />
        {:else}
            <img src={sNoRight} alt="Scroll right disabled" class="scroll" />
        {/if}
    </button>
</div>

<p>
    The following word cloud was generated from a (slightly unscientific) survey
    of languages and technologies we have used in REG. The most common language
    we use is Python, but there are many others!
</p>

<img
    class="word-cloud"
    src={wordCloud}
    alt="Word cloud of languages and technologies used in REG"
/>

<style>
    .monospace {
        font-family: monospace;
        font-size: 95%;
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
        grid-template-columns: repeat(9, 200px);
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
