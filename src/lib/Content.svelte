<script lang="ts">
    import Profile from "src/lib/Profile.svelte";
    import ResearchThemes from "src/lib/ResearchThemes.svelte";
    import Projects from "src/lib/Projects.svelte";
    import WorkingWays from "src/lib/WorkingWays.svelte";
    import Contact from "src/lib/Contact.svelte";
    import { onMount } from "svelte";
    import { peakStarts } from "src/stores";

    // Code to get y-coordinates of headings
    let profileH2: HTMLHeadingElement;
    let researchH2: HTMLHeadingElement;
    let examplesH2: HTMLHeadingElement;
    let contactH2: HTMLHeadingElement;
    let workH2: HTMLHeadingElement;
    function setPeakStarts() {
        // Make this positive to make the image change before the heading
        // reaches the top of the page
        const offset = 115;
        // 200 ms delay for Safari :eyeroll:
        // https://stackoverflow.com/questions/26347742
        setTimeout(() => {
            $peakStarts = [
                profileH2.getBoundingClientRect().top - offset,
                researchH2.getBoundingClientRect().top - offset,
                examplesH2.getBoundingClientRect().top - offset,
                workH2.getBoundingClientRect().top - offset,
                contactH2.getBoundingClientRect().top - offset,
            ];
        }, 200);
    }
    onMount(() => {
        setPeakStarts();
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
        <WorkingWays />
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
