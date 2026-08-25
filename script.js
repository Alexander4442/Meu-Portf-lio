/* ========================================
   MENU MOBILE
======================================== */

const navigationToggle =
    document.getElementById("navigation-toggle");

const navigationMenu =
    document.getElementById("navigation-menu");


navigationToggle.addEventListener("click", () => {

    const isOpen =
        navigationMenu.classList.toggle("open");

    navigationToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

    navigationToggle.innerHTML =
        isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
});


/* Fecha o menu ao clicar em um link */

document
    .querySelectorAll(".navigation-link")
    .forEach((link) => {

        link.addEventListener("click", () => {

            navigationMenu.classList.remove("open");

            navigationToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            navigationToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';
        });
    });


/* ========================================
   TEXTO DIGITANDO
======================================== */

const typingElement =
    document.getElementById("typing-text");

const typingWords = [
    "Front-End",
    "React",
    "JavaScript",
    "Web"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord =
        typingWords[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1600
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                typingWords.length;
        }
    }


    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}


typeEffect();


/* ========================================
   ANIMAÇÃO DAS SEÇÕES
======================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );
                }
            });
        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ========================================
   NAVEGAÇÃO
======================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        ".navigation-link"
    );


const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }


                navigationLinks.forEach((link) => {

                    link.classList.remove(
                        "active"
                    );

                });


                const activeLink =
                    document.querySelector(
                        `.navigation-link[href="#${entry.target.id}"]`
                    );


                if (activeLink) {

                    activeLink.classList.add(
                        "active"
                    );

                }

            });

        },
        {
            rootMargin:
                "-35% 0px -55% 0px"
        }
    );


sections.forEach((section) => {

    sectionObserver.observe(section);

});


/* ========================================
   BOTÃO VOLTAR AO TOPO
======================================== */

const backToTop =
    document.getElementById(
        "back-to-top"
    );


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add(
            "visible"
        );

    } else {

        backToTop.classList.remove(
            "visible"
        );

    }

});


/* ========================================
   BRILHO ACOMPANHANDO O MOUSE
======================================== */

const cursorGlow =
    document.querySelector(
        ".cursor-glow"
    );


window.addEventListener(
    "mousemove",
    (event) => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);


/* ========================================
   EFEITO TILT NOS CARDS
======================================== */

const cards =
    document.querySelectorAll(
        ".technology-card, .project-card"
    );


cards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) /
                    centerY) * -4;

            const rotateY =
                ((x - centerX) /
                    centerX) * 4;


            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;
        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});


/* ========================================
   WHATSAPP / CONTATO
======================================== */

const contactForm =
    document.getElementById(
        "contact-form"
    );


contactForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const nome =
            document
                .getElementById("nome")
                .value
                .trim();


        const mensagem =
            document
                .getElementById("mensagem")
                .value
                .trim();


        if (!nome || !mensagem) {
            return;
        }


        const telefone =
            "5585989237811";


        const texto =
            `Olá, Alexander! Meu nome é ${nome}.\n\n${mensagem}`;


        const mensagemFormatada =
            encodeURIComponent(texto);


        const url =
            `https://wa.me/${telefone}?text=${mensagemFormatada}`;


        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

    }
);


/* ========================================
   PARTÍCULAS
======================================== */

tsParticles.load("particulas", {

    fullScreen: {
        enable: false
    },

    fpsLimit: 60,


    particles: {

        number: {

            value: 70,

            density: {
                enable: true,
                area: 1000
            }

        },


        color: {

            value: [
                "#6366f1",
                "#8b5cf6",
                "#a78bfa"
            ]

        },


        links: {

            enable: true,

            color: "#6366f1",

            distance: 150,

            opacity: 0.18,

            width: 1

        },


        move: {

            enable: true,

            speed: 0.8,

            direction: "none",

            random: true,

            straight: false,

            outModes: {
                default: "bounce"
            }

        },


        opacity: {

            value: {
                min: 0.15,
                max: 0.45
            }

        },


        size: {

            value: {
                min: 1,
                max: 3
            }

        }

    },


    interactivity: {

        detectsOn: "window",


        events: {

            onHover: {

                enable: true,

                mode: "grab"

            },


            onClick: {

                enable: true,

                mode: "push"

            }

        },


        modes: {

            grab: {

                distance: 180,

                links: {
                    opacity: 0.5
                }

            },


            push: {

                quantity: 3

            }

        }

    },


    detectRetina: true

});