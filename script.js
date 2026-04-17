function enviarWhats(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5585989237811'

    const texto = `Olá! me  chamo${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');
}
// Fundo interativo estilo prgramação
tsParticles.load("particulas", {
    background: {
        color: "transparent"
    },
    fpsLimit: 60,
    particles: {
        number: {
            value: 90
        },
        color: {
            value: "#4f46e5"
        },
        links: {
            enable: true,
            color: "#7c3aed",
            distance: 140,
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            outModes: {
                default: "bounce"
            }
        },
        size: {
            value: { min: 1, max: 3 }
        },
        opacity: {
            value: 0.5
        }
    },
    interactivity: {
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
                    opacity: 0.7
                }
            },
            push: {
                quantity: 5
            }
        }
    },
    detectRetina: true
});