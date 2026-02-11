<script lang="ts">
    import GridCol from "src/lib/grid-col/GridCol.svelte";
    import { onMount } from "svelte";

    import sLeft from "src/assets/sLeft.png";
    import sRight from "src/assets/sRight.png";
    import sNoLeft from "src/assets/sNoLeft.png";
    import sNoRight from "src/assets/sNoRight.png";

    import wordCloud from "src/assets/wordcloud.png";

    import ai4nwp from "src/assets/ai4nwp.png";
    import ami from "src/assets/ami.png";
    import assurance from "src/assets/assurance.png";
    import autoemu from "src/assets/autoemu.png";
    import autspaces from "src/assets/autspaces.png";
    import dsh from "src/assets/dsh.png";
    import eider from "src/assets/eider.png";
    import hsbc from "src/assets/hsbc.jpg";
    import mapreader from "src/assets/mapreader.png";
    import nats from "src/assets/nats.png";
    import prompto from "src/assets/prompto.png";
    import rcp from "src/assets/rcp.png";
    import scivision from "src/assets/scivision.jpg";
    import seshat from "src/assets/seshat.png";
    import turingjl from "src/assets/turingjl.png";
    import ua from "src/assets/ua.png";

    let showCompleted: boolean = false;

    type Project = {
        href: string;
        imgSrc: string;
        title: string;
        description: string;
        isCompleted: boolean;
    };

    let projects: Project[] = [
        {
            href: "https://www.turing.ac.uk/research/research-projects/ai-numerical-weather-prediction-nwp-ai4nwp",
            imgSrc: ai4nwp,
            title: "AI4NWP",
            description:
                "A collaboration with the Met Office on the use of modern AI techniques for weather forecasting.",
            isCompleted: false,
        },
        {
            href: "https://github.com/AMI-system",
            imgSrc: ami,
            title: "AMBER",
            description:
                "Developing a pipeline to automate the monitoring of biodiversity using edge processing and remote sensors.",
            isCompleted: false,
        },
        {
            href: "https://github.com/alan-turing-institute/AssurancePlatform",
            imgSrc: assurance,
            title: "Assurance Platform",
            description:
                "An application for constructing trustworthy and ethical assurance cases for data-driven technologies.",
            isCompleted: false,
        },
        {
            href: "https://github.com/alan-turing-institute/autoemulate",
            imgSrc: autoemu,
            title: "AutoEmulate",
            description:
                "Surrogate modelling to speed up digital twin simulations.",
            isCompleted: false,
        },
        {
            href: "https://github.com/alan-turing-institute/AutSPACEs",
            imgSrc: autspaces,
            title: "AutSPACEs",
            description:
                "A citizen science platform co-created by autistic people, their supporters, researchers, and the open source community.",
            isCompleted: false,
        },
        {
            href: "https://github.com/alan-turing-institute/data-safe-haven",
            imgSrc: dsh,
            title: "Data Safe Haven",
            description:
                "A framework to create secure environments for sensitive data analysis.",
            isCompleted: false,
        },
        {
            href: "https://github.com/alan-turing-institute/eider",
            imgSrc: eider,
            title: "Eider",
            description:
                "An R package for declarative preprocessing of health data for machine learning models.",
            isCompleted: false,
        },
        {
            href: "https://www.turing.ac.uk/research/research-projects/role-synthetic-data-financial-systems",
            imgSrc: hsbc,
            title: "Synthetic Data",
            description:
                "A project with HSBC exploring the generation and use of synthetic data in financial systems.",
            isCompleted: false,
        },
        {
            href: "https://github.com/maps-as-data/MapReader",
            imgSrc: mapreader,
            title: "MapReader",
            description:
                "A computer vision tool to identify visual elements in images, particularly historical maps.",
            isCompleted: false,
        },
        {
            href: "https://github.com/alan-turing-institute/prompto",
            imgSrc: prompto,
            title: "Prompto",
            description:
                "A Python library for asynchronous querying of LLM endpoints.",
            isCompleted: false,
        },
        {
            href: "https://www.turing.ac.uk/research/research-programmes/project-bluebird",
            imgSrc: nats,
            title: "Project Bluebird",
            description:
                "Developing AI for air traffic control in collaboration with NATS.",
            isCompleted: false,
        },
        {
            href: "https://www.turing.ac.uk/research/research-engineering/join-us/what-does-research-computing-engineer-do-turing",
            imgSrc: rcp,
            title: "Research Computing",
            description:
                "Managing the computing facilities that the Turing has access to, and training researchers to make the best use of them.",
            isCompleted: false,
        },
        {
            href: "https://sci.vision/",
            imgSrc: scivision,
            title: "Scivision",
            description:
                "A platform for computer vision models and datasets across the sciences and humanities.",
            isCompleted: false,
        },
        {
            href: "https://seshatdata.com/core/world_map",
            imgSrc: seshat,
            title: "Seshat",
            description:
                "A resource bringing together data about human history and polity borders across time.",
            isCompleted: false,
        },
        {
            href: "https://turinglang.org/",
            imgSrc: turingjl,
            title: "Turing.jl",
            description:
                "A Julia library for general-purpose probabilistic programming and Bayesian inference.",
            isCompleted: false,
        },
        {
            href: "https://urban-analytics-technology-platform.github.io/",
            imgSrc: ua,
            title: "Urban Analytics",
            description:
                "A collection of software to improve how we design, interact with, and live in urban spaces.",
            isCompleted: false,
        },
    ];

    // Shuffle projects once on load (don't shuffle projectsShown since we
    // don't want the list to reorder every time the checkbox is toggled)
    for (let i = projects.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [projects[i], projects[j]] = [projects[j], projects[i]];
    }

    let projectsShown: Project[] = [];
    $: {
        // Filter projects based on showCompleted
        projectsShown = projects.filter(
            (project) => showCompleted || !project.isCompleted,
        );
        // Add in advertisement at the front
        projectsShown.unshift({
            href: "https://www.turing.ac.uk/research/research-engineering/meet-the-team",
            imgSrc: "https://thumbs.dreamstime.com/b/gray-white-maine-coon-cat-pointing-paw-camera-studio-shot-blue-tabby-raising-reaching-216696547.jpg",
            title: "Your project?",
            description:
                "This space could be yours! Simply contact Penny on Slack for some free advertising.",
            isCompleted: false,
        });
    }

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
    // Update currentProject based on scroll position
    function updateCurrentProject() {
        currentProject = Math.floor(galleryElem.scrollLeft / 240);
    }
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
    }
    onMount(updateCanScrolls);
</script>

<p>
    Most of our work is open-source, with some exceptions due to contractual
    limitations. You can see a list of repositories we have worked on in <a
        href="https://github.com/search?q=topic%3Ahut23+org%3Aalan-turing-institute+fork%3Atrue&type=repositories&s=updated&o=desc"
        target="_blank"
        >the <span class="monospace">alan-turing-institute</span> GitHub organisation</a
    >.
</p>

<p>
    Here is a sample of some of the projects we have worked on recently. This
    list is not exhaustive!
</p>

<div id="projects">
    <label>
        <input
            type="checkbox"
            bind:checked={showCompleted}
            on:change={() => {
                currentProject = 0;
                galleryElem.scroll({ left: 0, behavior: "smooth" });
                updateCanScrolls(0);
            }}
        />
        Show completed projects
    </label>
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
                updateCurrentProject();
                updateCanScrolls();
            }}
        >
            <div
                id="gallery"
                style="--projects-length: {String(projectsShown.length)}"
            >
                {#each projectsShown as project}
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
                <img
                    src={sNoRight}
                    alt="Scroll right disabled"
                    class="scroll"
                />
            {/if}
        </button>
    </div>
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

    div#projects {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    div#gallery-container-container {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
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
        grid-template-columns: repeat(16, 200px);
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
