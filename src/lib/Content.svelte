<script lang="ts">
    import Email from "src/lib/Email.svelte";
    import { onMount } from "svelte";
    import { peakStarts } from 'src/stores';

    // Get y-coordinates of headings on mount
    let researchH2: HTMLHeadingElement;
    let examplesH2: HTMLHeadingElement;
    let contactH2: HTMLHeadingElement;
    onMount(() => {
        const dy = 100;
        $peakStarts = [
            0, // Don't take the y-coordinate of the title as it's larger than 0
            researchH2.getBoundingClientRect().top - dy,
            examplesH2.getBoundingClientRect().top - dy,
            contactH2.getBoundingClientRect().top - dy,
        ]
    });
</script>

<div id="content">
    <h1>Research Engineering at the Turing</h1>
    <p>Hello! We’re excited you’ve come to visit us! 🎉</p>

    <p>
        We are a team of data scientists, software engineers, and compute
        specialists who build tools and software to support research in data
        science and artificial intelligence.
    </p>

    <h2 bind:this={researchH2}>Our research themes</h2>
    <p>
        We work across many themes, such as health, environment and
        sustainability, and defence and national security.
    </p>

    <h2 bind:this={examplesH2}>Examples of our work</h2>
    <p>
        See <a
            href="https://github.com/search?q=topic%3Ahut23+org%3Aalan-turing-institute+fork%3Atrue&type=repositories"
            target="_blank">our GitHub page</a
        >.
    </p>
    <p>
        We also run <a
            href="https://alan-turing-institute.github.io/TuringDataStories/"
            target="_blank">Turing Data Stories</a
        >, a series of short, engaging, and accessible stories about using data
        science to analyse cultural phenomena in our world.
    </p>

    <h2 bind:this={contactH2}>Get in touch with us</h2>
    <p>
        Recruitment: <Email address="reg-recruitment-inbox@turing.ac.uk" />
    </p>
    <p>
        Sign up for mailing list: <a href="https://forms.office.com/e/vJy48fNJXB" target="_blank">here</a>
    </p>
    <p>
        Unsubscribe from mailing list: <a href="https://forms.office.com/e/P22MqUT0N3" target="_blank">here</a>
    </p>
</div>

<style>
    #content {
        margin: 20px 100px;
        padding: 10px 20px;
        padding-bottom: 800px;
        opacity: 0.9;
        background-color: #3a3a3a;
        color: white;
    }

    h1 {
        margin-top: 0;
        margin-bottom: 100px;
    }
    h2 {
        margin-top: 500px;
    }

    a {
        color: white;
    }
    a:hover {
        color: #e0e0e0;
    }
    a:visited {
        color: #e0e0e0;
    }
</style>
