/* ==================================================
   PANTALLA INICIAL
================================================== */

const intro =
    document.getElementById("intro");

const enterButton =
    document.getElementById("enterButton");


enterButton.addEventListener("click", () => {

    intro.classList.add("hide");

    createFlowerExplosion();

});



/* ==================================================
   PARTÍCULAS DEL FONDO
================================================== */

const particles =
    document.getElementById("particles");


for (let i = 0; i < 90; i++) {

    const particle =
        document.createElement("div");

    particle.className =
        "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        5 + Math.random() * 12 + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        .2 + Math.random() * .7;

    particles.appendChild(
        particle
    );

}



/* ==================================================
   FLORES FLOTANDO EN EL FONDO
================================================== */

const floatingFlowers =
    document.getElementById(
        "floatingFlowers"
    );


for (let i = 0; i < 22; i++) {

    const flower =
        document.createElement("div");

    flower.className =
        "background-flower";

    flower.innerHTML = "🌻";

    flower.style.left =
        Math.random() * 100 + "%";

    flower.style.fontSize =
        10 + Math.random() * 22 + "px";

    flower.style.animationDuration =
        8 + Math.random() * 15 + "s";

    flower.style.animationDelay =
        Math.random() * 15 + "s";

    floatingFlowers.appendChild(
        flower
    );

}



/* ==================================================
   BOTÓN DESCUBRIR
================================================== */

const discoverButton =
    document.getElementById(
        "discoverButton"
    );


discoverButton.addEventListener(
    "click",
    () => {

        document
            .getElementById("message")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);



/* ==================================================
   RAMO
================================================== */

const flowerButton =
    document.getElementById(
        "flowerButton"
    );

const bouquet =
    document.getElementById(
        "bouquet"
    );

const finalMessage =
    document.getElementById(
        "finalMessage"
    );


flowerButton.addEventListener(
    "click",
    () => {

        bouquet.classList.add(
            "show"
        );

        flowerButton.innerHTML =
            "🌻 Para ti, Karla 💛";

        createFlowerExplosion();

        setTimeout(() => {

            finalMessage.classList.add(
                "show"
            );

        }, 1500);

    }
);



/* ==================================================
   EXPLOSIÓN DE FLORES
================================================== */

function createFlowerExplosion() {

    for (let i = 0; i < 45; i++) {

        const flower =
            document.createElement("div");

        flower.innerHTML = "🌻";

        flower.style.position =
            "fixed";

        flower.style.left =
            "50%";

        flower.style.top =
            "55%";

        flower.style.zIndex =
            "10000";

        flower.style.pointerEvents =
            "none";

        flower.style.fontSize =
            12 + Math.random() * 20 + "px";

        document.body.appendChild(
            flower
        );


        const angle =
            Math.random() *
            Math.PI * 2;

        const distance =
            150 + Math.random() * 500;

        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;


        flower.animate(

            [

                {
                    transform:
                        "translate(-50%,-50%) scale(0)",

                    opacity: 1

                },

                {

                    transform:
                        `translate(${x}px,${y}px)
                         rotate(360deg)
                         scale(1)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    1200 +
                    Math.random() * 1200,

                easing:
                    "cubic-bezier(.2,.8,.2,1)"

            }

        ).onfinish = () => {

            flower.remove();

        };

    }

}



/* ==================================================
   EFECTO AL HACER CLICK
================================================== */

document.addEventListener(
    "click",
    (event) => {

        const sparkle =
            document.createElement(
                "div"
            );

        sparkle.innerHTML =
            "✨";

        sparkle.style.position =
            "fixed";

        sparkle.style.left =
            event.clientX + "px";

        sparkle.style.top =
            event.clientY + "px";

        sparkle.style.zIndex =
            "10001";

        sparkle.style.pointerEvents =
            "none";

        sparkle.style.fontSize =
            "20px";

        document.body.appendChild(
            sparkle
        );


        sparkle.animate(

            [

                {

                    transform:
                        "translate(-50%,-50%) scale(.5)",

                    opacity: 1

                },

                {

                    transform:
                        "translate(-50%,-100px) scale(1.5)",

                    opacity: 0

                }

            ],

            {

                duration: 700,

                easing: "ease-out"

            }

        ).onfinish = () => {

            sparkle.remove();

        };

    }
);



/* ==================================================
   ANIMACIÓN DE LAS TARJETAS
================================================== */

const cards =
    document.querySelectorAll(
        ".gym-card"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },

        {
            threshold: .2
        }

    );


cards.forEach(
    (card, index) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(50px)";

        card.style.transition =
            `all .8s ease ${index * .15}s`;

        observer.observe(card);

    }
);



/* ==================================================
   EFECTO PARALLAX SUAVE
================================================== */

document.addEventListener(
    "mousemove",
    (event) => {

        const x =
            (event.clientX /
                window.innerWidth -
                .5) * 2;

        const y =
            (event.clientY /
                window.innerHeight -
                .5) * 2;


        const gym =
            document.querySelector(
                ".hero-visual"
            );


        if (gym) {

            gym.style.transform =
                `translate(
                    ${x * 8}px,
                    ${y * 8}px
                )`;

        }

    }
);