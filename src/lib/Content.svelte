<script lang="ts">
    import Profile from "src/lib/Profile.svelte";
    import ResearchThemes from "src/lib/ResearchThemes.svelte";
    import Projects from "src/lib/Projects.svelte";
    import WorkHow from "src/lib/WorkHow.svelte";
    import Contact from "src/lib/Contact.svelte";
    import { onMount } from "svelte";
    import { headings, peakStarts } from "src/stores";

    // Code to get y-coordinates of headings
    let profileH2: HTMLHeadingElement;
    let researchH2: HTMLHeadingElement;
    let examplesH2: HTMLHeadingElement;
    let contactH2: HTMLHeadingElement;
    let workH2: HTMLHeadingElement;
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
    onMount(() => {
        $headings = [profileH2, researchH2, examplesH2, workH2, contactH2];
        // 200 ms delay for Safari :eyeroll:
        // https://stackoverflow.com/questions/26347742
        setTimeout(setPeakStarts, 200);
    });
</script>

<svelte:window on:resize={setPeakStarts} />

<div id="content">
    <div class="content-box">
        <h2 bind:this={profileH2}>About us</h2>
        <Profile />
    </div>

    <div class="content-box">
        <h2 bind:this={researchH2}>Our research themes</h2>
        <ResearchThemes />
    </div>

    <div class="content-box">
        <h2 bind:this={examplesH2}>Examples of our projects</h2>
        <Projects />
    </div>

    <div class="content-box">
        <h2 bind:this={workH2}>How we work</h2>
        <WorkHow />
    </div>

    <div class="content-box">
        <h2 bind:this={contactH2}>Get in touch with us</h2>
        <Contact />
    </div>
</div>

<style>
    #content {
        margin: 20px 70px;
        margin-top: 70px;
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    div.content-box {
        opacity: 0.92;
        border-radius: 10px;
        background-color: #dce2e3;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        & h2 {
            margin: 0;
        }
    }

    @media (max-width: 700px) and (min-width: 600px) {
        #content {
            margin: 20px auto;
            margin-top: 70px;
            width: 560px;
        }
    }
    @media (max-width: 600px) {
        #content {
            margin: 20px 20px;
            margin-top: 70px;
        }
    }
</style>
