<script lang="ts">
    import { headings, peakStarts } from "src/stores";
    import logo from "src/assets/ati.png";

    export let currentSection: number;

    // This function is copied from Content.svelte. I don't know how to reuse
    // the code without putting it in stores.ts which is ugly because we can't
    // use $stores syntax
    function setPeakStarts() {
        if ($headings === null) {
            return;
        }
        // Expected value for the first element of $peakStarts. We set this
        // as a kind of normalisation, because getBoundingClientRect() depends
        // on the scroll position, so we can't just use the raw values.
        const first = -80;
        const offset = $headings[0].getBoundingClientRect().top - first;
        $peakStarts = $headings.map(
            (h: HTMLHeadingElement) => h.getBoundingClientRect().top - offset,
        );
    }

    function scrollToSection(sectionNumber: number) {
        setPeakStarts();
        if ($peakStarts === null) {
            // Not yet initialised
            return;
        }
        // Don't know why this fudge factor.
        const offset = sectionNumber === 0 ? 0 : -80;
        const targetY = $peakStarts[sectionNumber] - offset;
        window.scrollTo({ top: targetY, behavior: "smooth" });
    }

    const navbarItems = [
        "About us",
        "Research",
        "Projects",
        "How we work",
        "Contact",
    ];
</script>

<div id="navbar">
    <div id="navbar-left">
        <a class="logo" href="https://www.turing.ac.uk/">
            <img id="logo" src={logo} alt="The Alan Turing Institute logo" />
        </a>
        <h1>Research Engineering</h1>
    </div>

    <div id="navbar-right">
        <ul>
            {#each navbarItems as item, i}
                <li>
                    <button
                        on:click={() => scrollToSection(i)}
                        class:active={i === currentSection}
                    >
                        {item}
                    </button>
                </li>
            {/each}
        </ul>
    </div>
</div>

<style>
    div#navbar {
        position: fixed;
        top: 0;
        width: 100%;
        height: 50px;
        background-color: #ded9e2;
        box-shadow: 0 0 10px 0 rgba(69, 47, 87, 0.5);
        z-index: 2;
        opacity: 1;
        display: flex;
        flex-direction: row;
        padding: 5px 30px;
        justify-content: space-between;
        align-items: center;
    }

    div#navbar-left {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    h1 {
        font-size: 1.5em;
        margin: 0;
    }

    a.logo {
        background: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    img#logo {
        width: 90px;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 20px;
    }

    button {
        color: #350942;
        border: none;
        padding: 0 0 2px 0;
        font-size: 1em;
        cursor: pointer;
        transition: background-size 0.3s;
        background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 0)
            ),
            linear-gradient(
                to right,
                rgba(186, 50, 227, 1),
                rgba(124, 11, 158, 1)
            );
        background-size:
            100% 2px,
            0 2px;
        background-position:
            100% 100%,
            0 100%;
        background-repeat: no-repeat;
    }

    button.active,
    button:hover {
        background-size:
            0 2px,
            100% 2px;
    }

    @media (max-width: 944px) {
        div#navbar-left {
            margin: 0 auto;
        }

        ul {
            display: none;
        }
    }
</style>
