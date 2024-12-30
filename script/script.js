const body = document.querySelector("body")
const logo = document.querySelector("body header a")
const achtergrond = document.querySelector("body main .achtergrond")
const contactCTA = document.querySelector("body main .achtergrond .contactCTA")
const gradient = document.querySelector("body main .gradient")
const article1 = document.querySelector("body main .work article:nth-of-type(1)")
const article2 = document.querySelector("body main .work article:nth-of-type(2)")
const article3 = document.querySelector("body main .work article:nth-of-type(3)")
const article4 = document.querySelector("body main .work article:nth-of-type(4)")
const knopSeeMore = document.querySelector("body main .work button")
const divAbout = document.querySelector("body main .gradient .about div")
const div2About = document.querySelector("body main .gradient .about div:nth-of-type(2)")
const contactSectie = document.querySelector("body main .gradient .contact section")
const contactSectie2 = document.querySelector("body main .gradient .contact section:nth-of-type(2)")
const contactButton1 = document.querySelector("body main .gradient .contact section button")
const contactButton2 = document.querySelector("body main .gradient .contact section button:nth-of-type(2)")
const contactButton3 = document.querySelector("body main .gradient .contact section:nth-of-type(2) button")
const emailLogo = document.querySelector(".email-logo")
const linkedinLogo = document.querySelector(".linkedin-logo")
const downloadLogo = document.querySelector(".download")
const footer = document.querySelector("body footer")
const copyright = document.querySelector("body footer p")

const themaToggle = document.querySelector(".switch input")

themaToggle.addEventListener('click', veranderThema);

function veranderThema() {
    body.classList.toggle("light-mode");
    logo.classList.toggle("light-mode");
    achtergrond.classList.toggle("light-mode");
    contactCTA.classList.toggle("light-mode");
    gradient.classList.toggle("light-mode");
    article1.classList.toggle("light-mode");
    article2.classList.toggle("light-mode");
    article3.classList.toggle("light-mode");
    article4.classList.toggle("light-mode");
    knopSeeMore.classList.toggle("light-mode");
    divAbout.classList.toggle("light-mode");
    div2About.classList.toggle("light-mode");
    contactSectie.classList.toggle("light-mode");
    contactSectie2.classList.toggle("light-mode");
    contactButton1.classList.toggle("light-mode");
    contactButton2.classList.toggle("light-mode");
    contactButton3.classList.toggle("light-mode");
    emailLogo.classList.toggle("light-mode");
    linkedinLogo.classList.toggle("light-mode");
    downloadLogo.classList.toggle("light-mode");
    footer.classList.toggle("light-mode");
    copyright.classList.toggle("light-mode");

    console.log("Thema veranderd");
}