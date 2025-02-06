document.addEventListener('DOMContentLoaded', function() {
    var typingTextElement = document.getElementById("typingText");

    var texts = [
        "My name is Luis ", 
        "Me encanta la tecnología"
    ];
    var currentTextIndex = 0;
    var currentCharIndex = 0;
    var typingSpeed = 100;  // Velocidad de escritura
    var erasingSpeed = 50;  // Velocidad de borrado
    var pauseBetweenText = 1000;  // Pausa entre cada texto

    function typeWriter() {
        if (currentCharIndex < texts[currentTextIndex].length) {
            typingTextElement.innerHTML += texts[currentTextIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            setTimeout(eraseText, pauseBetweenText);
        }
    }

    function eraseText() {
        if (currentCharIndex > 0) {
            typingTextElement.innerHTML = typingTextElement.innerHTML.slice(0, -1);  // Borra un carácter
            currentCharIndex--;
            setTimeout(eraseText, erasingSpeed);
        } else {
            currentTextIndex = (currentTextIndex + 1) % texts.length;  // Cambia de texto cíclicamente
            setTimeout(typeWriter, pauseBetweenText);
        }
    }

    typeWriter();  // Inicia la animación de escritura
});


document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.tecnologias, .contac');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;
        const triggerTop = window.innerHeight / 5;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < triggerBottom && elementBottom > triggerTop) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});