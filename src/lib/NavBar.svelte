<script lang="ts">
    import { headings, peakStarts } from "src/stores";
    import logo from "src/assets/ati.png";

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
</script>

<div id="navbar">
    <div id="navbar-left">
        <img id="logo" src={logo} alt="The Alan Turing Institute logo" />
        <h1>Research Engineering</h1>
    </div>

    <div id="navbar-right">
        <ul>
            <li><button on:click={() => scrollToSection(0)}>About us</button></li>
            <li><button on:click={() => scrollToSection(1)}>Research</button></li>
            <li><button on:click={() => scrollToSection(2)}>Projects</button></li>
            <li><button on:click={() => scrollToSection(3)}>How we work</button></li>
            <li><button on:click={() => scrollToSection(4)}>Contact</button></li>

        </ul>
    </div>
</div>

<style>
    div#navbar {
        position: fixed;
        top: 0;
        width: 100%;
        height: 50px;
        background-color: #dce2e3;
        z-index: 2;
        opacity: 1;
        border-bottom: 2px solid #000;
        display: flex;
        flex-direction: row;
        padding: 5px 20px;
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
        background-color: transparent;
        border: none;
        font-size: 1em;
        cursor: pointer;
        transition: color 0.3s;
    }

    button:hover {
        text-decoration: underline;
        color: #026070;
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
