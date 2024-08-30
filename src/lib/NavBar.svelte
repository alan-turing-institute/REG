<script lang="ts">
    import { headings, peakStarts } from "src/stores";
    import logo from "src/assets/ati.png";
    import menuIcon from "src/assets/menu.png";
    import menuOpen from "src/assets/menuopen.png";

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

    let dropdownVisible = false;
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
        <a class="logo" href="https://www.turing.ac.uk/" target="_blank">
            <img id="logo" src={logo} alt="The Alan Turing Institute logo" />
        </a>
        <h1>Research Engineering</h1>
    </div>

    <div id="navbar-right">
        <!-- normal -->
        <ul id="navbar-normal">
            {#each navbarItems as item, i}
                <li>
                    <button
                        class="menu-link"
                        on:click={() => scrollToSection(i)}
                        class:active={i === currentSection}
                    >
                        {item}
                    </button>
                </li>
            {/each}
        </ul>
        <!-- dropdown for narrow screens -->
        <button
            id="dropdown"
            on:click={() => {
                dropdownVisible = !dropdownVisible;
            }}
            on:focusout={(e) => {
                if (e.currentTarget.contains(e.relatedTarget)) {
                    return;
                }
                dropdownVisible = false;
            }}
        >
            {#if dropdownVisible}
                <img src={menuOpen} alt="Close dropdown menu" />
            {:else}
                <img src={menuIcon} alt="Dropdown menu" />
            {/if}
            {#if dropdownVisible}
                <ul id="navbar-dropdown">
                    {#each navbarItems as item, i}
                        <li>
                            <button
                                class="menu-link"
                                on:click={() => scrollToSection(i)}
                                class:active={i === currentSection}
                            >
                                {item}
                            </button>
                        </li>
                    {/each}
                </ul>
            {/if}
        </button>
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
        font-size: 1.2em;
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

    button#dropdown {
        display: none;
    }

    ul#navbar-normal {
        font-size: 0.9em;
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 20px;
    }

    button.menu-link {
        color: #350942;
        width: max-content;
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

    button.menu-link.active,
    button.menu-link:hover {
        background-size:
            0 2px,
            100% 2px;
    }
    
    @media (max-width: 850px) {
        ul#navbar-normal {
            display: none;
        }

        button#dropdown {
            display: block;
            position: relative;
            width: min-content;
            height: 90%;
            cursor: pointer;
            border: 1px solid black;
            border-radius: 5px;
            padding: 5px 7px;
            background: none;
        }

        button#dropdown img {
            width: 15px;
            height: auto;
        }

        ul#navbar-dropdown {
            list-style-type: none;
            position: absolute;
            top: 50%;
            right: -2px;
            background-color: #ded9e2;
            border: 1px solid black;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            align-items: end;
            padding: 5px 0 5px 10px;
        }

        ul#navbar-dropdown li {
            padding: 2px 5px;
            text-align: center;
        }
    }

    @media (max-width: 400px) {
        div#navbar {
            padding: 5px 10px;
        }
        img#logo {
            width: 70px;
        }
        h1 {
            font-size: 1em;
        }
    }
</style>
