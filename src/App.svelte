<script lang="ts">
    import BackgroundImage from 'src/lib/BackgroundImage.svelte';
    import Content from 'src/lib/Content.svelte';
    import { peakStarts } from 'src/stores';

    // curY = current y-coordinate; pictureNumber = 0, 1, 2, ...
    // peakStarts = array, i-th element is when the i-th picture should be fully faded in
    function getOpacity(curY: number, pictureNumber: number): number {
        // Handle the case where $peakStarts is not yet initialised
        if ($peakStarts === null) {
            return pictureNumber === 0 ? 1 : 0;
        }
        console.log($peakStarts);
        console.log(curY);
        // How many pixels the crossfade effect should work over, i.e. how many
        // pixels it takes to fade out an image and fade in the next one
        let a: number = 200;  

        // The first image should begin its max opacity at 0; it should start
        // fading out at b pixels, and be completely faded out at a + b pixels.
        // Thus, the N-th image should begin its max opacity at N * (a + b)
        // pixels (indexing from 0), it should start to fade out at (N * (a +
        // b)) + b pixels, and be completely faded out at (N + 1) * (a + b)
        // pixels. The following formulae calculate the appropriate opacity.
        let peakStart: number = $peakStarts[pictureNumber];
        let peakEnd: number = pictureNumber < $peakStarts.length - 1
            ? $peakStarts[pictureNumber + 1] - a
            : peakStart + 10000000; // some large number to make sure it's always > curY
        if (curY < peakStart) {
            return Math.max(0, 1 - (peakStart - curY) / a);
        }
        else if (curY > peakEnd) {
            return Math.max(0, 1 - (curY - peakEnd) / a);
        }
        else {
            return 1;
        }
    }

    let y: number = 0;
    let backgroundImages = [
        "backgrounds/tgks.jpg",
        "backgrounds/azmr.jpg",
        "backgrounds/shmn.png",
        "backgrounds/wsct.png",
        "backgrounds/pplp.png",
    ]
    let opacities: number[] = Array(backgroundImages.length).fill(0);
    $: {
        for (let i = 0; i < opacities.length; i++) {
            opacities[i] = getOpacity(y, i);
        }
    }
</script>

<svelte:window bind:scrollY={y} />
{#each backgroundImages as imagePath, i}
    <BackgroundImage imagePath={imagePath} opacity={opacities[i]} />
{/each}

<main>
    <Content />
</main>
