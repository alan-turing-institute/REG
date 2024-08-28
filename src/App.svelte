<script lang="ts">
    import BackgroundImage from 'src/lib/BackgroundImage.svelte';
    import Content from 'src/lib/Content.svelte';

    // curY = current y-coordinate; pictureNumber = 0, 1, 2, ...
    function getOpacity(curY: number, pictureNumber: number): number {
        // How many pixels the crossfade effect should work over, i.e. how many
        // pixels it takes to fade out an image and fade in the next one
        let a: number = 1000;  
        // How many pixels the image should persist for at max opacity
        let b: number = 500;

        // The first image should begin its max opacity at 0; it should start
        // fading out at b pixels, and be completely faded out at a + b pixels.
        // Thus, the N-th image should begin its max opacity at N * (a + b)
        // pixels (indexing from 0), it should start to fade out at (N * (a +
        // b)) + b pixels, and be completely faded out at (N + 1) * (a + b)
        // pixels. The following formulae calculate the appropriate opacity.
        let peakStart: number = (a + b) * pictureNumber;
        let peakEnd: number = peakStart + b;
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
        "backgrounds/tgks.jpg",
        "backgrounds/azmr.jpg"
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
