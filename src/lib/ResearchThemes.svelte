<div id="gc-images">
    <div class="gc-image-container">
        <a
            href="https://www.turing.ac.uk/research/transformation-health"
            target="_blank"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg"
                alt="Health"
            />
            <div class="float-text">Health</div>
        </a>
    </div>

    <div class="gc-image-container">
        <a
            href="https://www.turing.ac.uk/research/environment-and-sustainability"
            target="_blank"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg"
                alt="Environment and Sustainability"
            />
            <div class="float-text">Environment and Sustainability</div>
        </a>
    </div>

    <div class="gc-image-container">
        <a
            href="https://www.turing.ac.uk/research/defence-and-national-security"
            target="_blank"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg"
                alt="Defence and National Security"
            />
            <div class="float-text">Defence and National Security</div>
        </a>
    </div>
    <div class="gc-image-container grid-3">
        <a
            href="https://www.turing.ac.uk/research/transformation-health"
            target="_blank"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Branta_sandvicensis_LC399.jpg/640px-Branta_sandvicensis_LC399.jpg"
                alt="Foundational Research in Data Science and AI"
            />
            <div class="float-text">
                Foundational Research in Data Science and AI
            </div>
        </a>
    </div>
</div>

<style>
    div#gc-images {
        display: grid;
        width: 100%;
        max-width: 100%;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

        & div.gc-image-container {
            position: relative;
        }
        & img {
            height: 100%;
            width: 100%;
            border-radius: 5px;
            transition: opacity 0.3s;
            object-fit: cover;
        }
        & img:hover {
            opacity: 0.8;
        }
        & div.float-text {
            position: absolute;
            text-align: center;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: white;
            text-shadow: 2px 2px 4px black;
        }
    }

    @media (max-width: 600px) {
        div.float-text {
            font-size: 0.8em;
        }
    }
</style>
