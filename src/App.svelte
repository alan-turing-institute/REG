<script lang="ts">
    import BackgroundImage from 'src/lib/BackgroundImage.svelte';

    let y: number;

    // pictureNumber = 0, 1, 2, ...
    function getOpacity(pictureNumber: number): number {
        // How many pixels the crossfade effect should work over, i.e. how many
        // pixels it takes to fade out an image and fade in the next one
        let a: number = 1000;  
        // How many pixels the image should persist for at max opacity
        let b: number = 700;

        // The first image should begin its max opacity at 0; it should start
        // fading out at b pixels, and be completely faded out at a + b pixels.
        // Thus, the N-th image should begin its max opacity at N * (a + b)
        // pixels (indexing from 0), it should start to fade out at (N * (a +
        // b)) + b pixels, and be completely faded out at (N + 1) * (a + b)
        // pixels. The following formulae calculate the appropriate opacity.
        let peakStart: number = (a + b) * pictureNumber;
        let peakEnd: number = peakStart + b;
        if (b < peakStart) {
            return Math.max(0, 1 - (peakStart - b) / a);
        }
        else if (b > peakEnd) {
            return Math.max(0, 1 - (b - peakEnd) / a);
        }
        else {
            return 1;
        }
    }

    // Generate some fake text
    let t: string = "";
    for (let i = 0; i < 100; i++) {
        t += `Some text, ${i}\n`;
    }

    let opacities: number[] = [0, 0, 0, 0];
    $: {
        console.log(y);
        for (let i = 0; i < opacities.length; i++) {
            opacities[i] = getOpacity(i);
        }
        console.log(opacities);
    }
</script>

<svelte:window bind:scrollY={y} />
<BackgroundImage imagePath="/backgrounds/tgks.jpg" opacity={opacities[0]} />
<BackgroundImage imagePath="/backgrounds/azmr.jpg" opacity={opacities[1]} />
<BackgroundImage imagePath="/backgrounds/tgks.jpg" opacity={opacities[2]} />
<BackgroundImage imagePath="/backgrounds/azmr.jpg" opacity={opacities[3]} />

<main>
    <div id="content">
        {#each t.split("\n") as text}
            <p>{text}</p>
        {/each}
    </div>
</main>

<style>

    #content {
        margin: 0 100px;
        opacity: 0.7;
        background-color: white;
    }
</style>
