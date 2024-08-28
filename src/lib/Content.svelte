<script lang="ts">
    import Email from "src/lib/Email.svelte";
    import Profile from "src/lib/Profile.svelte";
    import ResearchThemes from "src/lib/ResearchThemes.svelte";
    import { onMount } from "svelte";
    import { peakStarts } from "src/stores";

    // Get y-coordinates of headings on mount
    let researchH2: HTMLHeadingElement;
    let examplesH2: HTMLHeadingElement;
    let contactH2: HTMLHeadingElement;
    let workH2: HTMLHeadingElement;
    onMount(() => {
        // Make this positive to make the image change before the heading
        // reaches the top of the page
        const offset = 0;
        // 200 ms delay for Safari :eyeroll:
        // https://stackoverflow.com/questions/26347742
        setTimeout(() => {
            $peakStarts = [
                0, // Don't take the y-coordinate of the title as it's larger than 0
                researchH2.getBoundingClientRect().top - offset,
                examplesH2.getBoundingClientRect().top - offset,
                workH2.getBoundingClientRect().top - offset,
                contactH2.getBoundingClientRect().top - offset,
            ];
        }, 200);
    });
</script>

<div id="content">
    <div class="content-box" id="title">
        <h1>Research Engineering</h1>
        <h2>The Alan Turing Institute</h2>

        <p>Hello! We’re excited you’ve come to visit our website! 🎉</p>
    </div>

    <div class="content-box">
        <h2>Who we are</h2>
        <Profile />
    </div>

    <div class="content-box">
        <h2 bind:this={researchH2}>Our research themes</h2>
        <ResearchThemes />
    </div>

    <div class="content-box">
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
            >, a series of short, engaging, and accessible stories about using
            data science to analyse cultural phenomena in our world.
        </p>
    </div>

    <div class="content-box">
        <h2 bind:this={workH2}>How we work</h2>
        <p>
            To learn more about the team, check out our handbook — this is a
            living document that we’re updating with our practices and
            processes, and should give you some insight into how we work.
        </p>
    </div>

    <div class="content-box">
        <h2 bind:this={contactH2}>Get in touch with us</h2>
        <p>
            Recruitment: <Email address="reg-recruitment-inbox@turing.ac.uk" />
        </p>
        <p>
            Sign up for mailing list: <a
                href="https://forms.office.com/e/vJy48fNJXB"
                target="_blank">here</a
            >
        </p>
        <p>
            Unsubscribe from mailing list: <a
                href="https://forms.office.com/e/P22MqUT0N3"
                target="_blank">here</a
            >
        </p>
    </div>
</div>

<style>
    #content {
        margin: 20px 70px;
        padding-bottom: 800px;

        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    div.content-box {
        opacity: 0.85;
        border-radius: 10px;
        background-color: #dce2e3;
        padding: 30px;

        & h2 {
            margin: 0;
        }
    }

    div#title {
        margin-top: 0;
    
        & h1 {
            margin: 0;
        }
        & h2 {
            font-size: 1.4em;
            margin: 0;
        }
    }

    @media (max-width: 700px) and (min-width: 600px) {
        #content {
            margin: 20px auto;
            width: 560px;
        }
    }
    @media (max-width: 600px) {
        #content {
            margin: 20px 20px;
        }
        div#title {
            margin-bottom: 50px;
        }
    }
</style>
