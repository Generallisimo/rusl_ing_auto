import Head from "next/head";

export default function MainCont({ children }) {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>ING Auto</title>

                <link
                    rel="shortcut icon"
                    href="icons/favicon.ico"
                    type="image/x-icon"
                />
                <link
                    rel="apple-touch-icon"
                    href="icons/favicon.ico"
                    type="image/x-icon"
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="css/style.css" />

                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/swiper/swiper-bundle.min.css"
                />
                <link
                    href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Manrope:wght@600&display=swap"
                    rel="stylesheet"
                />

                <link rel="stylesheet" href="css/my.css" />
            </Head>
            <div>{children}</div>
                <script
                    src="https://code.jquery.com/jquery-3.6.1.min.js"
                    integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
                    crossOrigin="anonymous"></script>
                <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
                <script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js"></script>

                <script src="js/script.js"></script>
                <script src="js/anchor.js"></script>
                <script src="js/slider.js"></script>
                <script src="js/accardion.js"></script>
                <script src="js/modals.js"></script>
                <script src="js/animation.js"></script>
                <script src="js/my.js"></script>

        </>
    )
}
