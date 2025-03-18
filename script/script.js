// // Dark/light toggle
// const body = document.querySelector("body")
// const themaToggle = document.querySelector(".switch input")
// const logo = document.querySelector("body header a")
// const navButton1 = document.querySelector("body header nav ul li button")
// const navButton2 = document.querySelector("body header nav ul li:nth-of-type(2) button")
// const navButton3 = document.querySelector("body header nav ul li:nth-of-type(3) button")
// const achtergrond = document.querySelector("body main .achtergrond")
// const contactCTA = document.querySelector("body main .achtergrond .contactCTA")

// const work = document.querySelector("body main .work")
// const article1 = document.querySelector("body main .work article:nth-of-type(1)")
// const article2 = document.querySelector("body main .work article:nth-of-type(2)")
// const article3 = document.querySelector("body main .work article:nth-of-type(3)")
// const article4 = document.querySelector("body main .work article:nth-of-type(4)")
// const articleP1 = document.querySelector("body main .work article:nth-of-type(1) p")
// const articleP2 = document.querySelector("body main .work article:nth-of-type(2) p")
// const articleP3 = document.querySelector("body main .work article:nth-of-type(3) p")
// const articleP4 = document.querySelector("body main .work article:nth-of-type(4) p")
// const knopSeeMore = document.querySelector("body main .work a")

// const background2 = document.querySelector("body main .background2")
// const divAbout = document.querySelector("body main .background2 .about div")
// const div2About = document.querySelector("body main .background2 .about div:nth-of-type(2)")
// const contactSectie = document.querySelector("body main .background2 .contact section")
// const contactSectie2 = document.querySelector("body main .background2 .contact section:nth-of-type(2)")
// const contactButton1 = document.querySelector("body main .background2 .contact section button")
// const contactButton2 = document.querySelector("body main .background2 .contact section a")
// const cvButton = document.querySelector("body main .background2 .contact section:nth-of-type(2) a")
// const emailLogo = document.querySelector(".email-logo")
// const linkedinLogo = document.querySelector(".linkedin-logo")
// const downloadLogo = document.querySelector(".download")
// const footer = document.querySelector("body footer")
// const copyright = document.querySelector("body footer p")



// themaToggle.addEventListener('click', veranderThema);

// function veranderThema() {
//     body.classList.toggle("light-mode");
//     logo.classList.toggle("light-mode");
//     navButton1.classList.toggle("light-mode");
//     navButton2.classList.toggle("light-mode");
//     navButton3.classList.toggle("light-mode");
//     achtergrond.classList.toggle("light-mode");
//     contactCTA.classList.toggle("light-mode");

//     work.classList.toggle("light-mode");
//     article1.classList.toggle("light-mode");
//     article2.classList.toggle("light-mode");
//     article3.classList.toggle("light-mode");
//     article4.classList.toggle("light-mode");
//     articleP1.classList.toggle("light-mode");
//     articleP2.classList.toggle("light-mode");
//     articleP3.classList.toggle("light-mode");
//     articleP4.classList.toggle("light-mode");
//     knopSeeMore.classList.toggle("light-mode");

//     background2.classList.toggle("light-mode")
//     divAbout.classList.toggle("light-mode");
//     div2About.classList.toggle("light-mode");
//     contactSectie.classList.toggle("light-mode");
//     contactSectie2.classList.toggle("light-mode");
//     contactButton1.classList.toggle("light-mode");
//     contactButton2.classList.toggle("light-mode");
//     cvButton.classList.toggle("light-mode");
//     emailLogo.classList.toggle("light-mode");
//     linkedinLogo.classList.toggle("light-mode");
//     downloadLogo.classList.toggle("light-mode");
//     footer.classList.toggle("light-mode");
//     copyright.classList.toggle("light-mode");

//     console.log("Theme changed");
// }

// //ContactCTA
// contactCTA.addEventListener('click', scrollContact)



// // Navbar
// const myWork = document.querySelector(".work h2")

// navButton1.addEventListener('click', scrollWork)

// function scrollWork() {
//   myWork.scrollIntoView({behavior: "smooth", block: "start"});
//   console.log("Scroll to my work")
// }



// const aboutMe = document.querySelector(".about h2")

// navButton2.addEventListener('click', scrollAbout)

// function scrollAbout() {
//   aboutMe.scrollIntoView({behavior: "smooth", block: "start"});
//   console.log("Scroll to about me")
// }



// const contact = document.querySelector(".contact h2")

// navButton3.addEventListener('click', scrollContact)

// function scrollContact() {
//   contact.scrollIntoView({behavior: "smooth", block: "start"});
//   console.log("Scroll to contact")
// }




// // Copy email
// contactButton1.addEventListener('click', copyEmail)

// function copyEmail() {
//     navigator.clipboard.writeText("berend@janssen-it.com").then(() => {
//         console.log('Content copied to clipboard');
//         /* Tekst succesvol gekopieerd! */
//       },() => {
//         console.error('Failed to copy');
//         /* Tekst niet kunnen kopieren! */
//       });
// }



// // CAROUSEL FUNCTIONALITEIT
// document.addEventListener("DOMContentLoaded", () => {
//   const track = document.querySelector(".carousel div ul");
//   const slides = Array.from(track.children);
//   const prevButton = document.querySelector(".prev");
//   const nextButton = document.querySelector(".next");

//   if (!track || !prevButton || !nextButton) {
//       console.warn("Carousel elementen niet gevonden!");
//       return;
//   }

//   let index = 0;
//   const slidesToShow = 3; // Aantal zichtbare afbeeldingen
//   const slideWidth = slides[0].getBoundingClientRect().width + 15; // Breedte + gap

//   const moveSlides = () => {
//       track.style.transform = `translateX(-${index * slideWidth}px)`;
//   };

//   nextButton.addEventListener("click", () => {
//       if (index < slides.length - slidesToShow) {
//           index++;
//       } else {
//           index = 0; // Terug naar begin
//       }
//       moveSlides();
//   });

//   prevButton.addEventListener("click", () => {
//       if (index > 0) {
//           index--;
//       } else {
//           index = slides.length - slidesToShow; // Naar laatste set
//       }
//       moveSlides();
//   });

//   // Debugging: laat in console weten dat de carousel geladen is
//   console.log("Carousel script geladen!");
// });

document.addEventListener("DOMContentLoaded", () => {
  // Dark/light toggle
  const body = document.querySelector("body");
  const themaToggle = document.querySelector(".switch input");
  const logo = document.querySelector("body header a");
  const navButton1 = document.querySelector("body header nav ul li button");
  const navButton2 = document.querySelector("body header nav ul li:nth-of-type(2) button");
  const navButton3 = document.querySelector("body header nav ul li:nth-of-type(3) button");
  const achtergrond = document.querySelector("body main .achtergrond");
  const contactCTA = document.querySelector("body main .achtergrond .contactCTA");

  const work = document.querySelector("body main .work");
  const article1 = document.querySelector("body main .work article:nth-of-type(1)");
  const article2 = document.querySelector("body main .work article:nth-of-type(2)");
  const article3 = document.querySelector("body main .work article:nth-of-type(3)");
  const article4 = document.querySelector("body main .work article:nth-of-type(4)");
  const articleP1 = document.querySelector("body main .work article:nth-of-type(1) p");
  const articleP2 = document.querySelector("body main .work article:nth-of-type(2) p");
  const articleP3 = document.querySelector("body main .work article:nth-of-type(3) p");
  const articleP4 = document.querySelector("body main .work article:nth-of-type(4) p");
  const knopSeeMore = document.querySelector("body main .work a");

  const background2 = document.querySelector("body main .background2");
  const divAbout = document.querySelector("body main .background2 .about div");
  const div2About = document.querySelector("body main .background2 .about div:nth-of-type(2)");
  const contactSectie = document.querySelector("body main .background2 .contact section");
  const contactSectie2 = document.querySelector("body main .background2 .contact section:nth-of-type(2)");
  const contactButton1 = document.querySelector("body main .background2 .contact section button");
  const contactButton2 = document.querySelector("body main .background2 .contact section a");
  const cvButton = document.querySelector("body main .background2 .contact section:nth-of-type(2) a");
  const emailLogo = document.querySelector(".email-logo");
  const linkedinLogo = document.querySelector(".linkedin-logo");
  const downloadLogo = document.querySelector(".download");
  const footer = document.querySelector("body footer");
  const copyright = document.querySelector("body footer p");
})

  // Toggle theme if themaToggle exists
  if (themaToggle) {
      themaToggle.addEventListener('click', veranderThema);
  }

  function veranderThema() {
      body.classList.toggle("light-mode");
      logo.classList.toggle("light-mode");
      navButton1 && navButton1.classList.toggle("light-mode");
      navButton2 && navButton2.classList.toggle("light-mode");
      navButton3 && navButton3.classList.toggle("light-mode");
      achtergrond && achtergrond.classList.toggle("light-mode");
      contactCTA && contactCTA.classList.toggle("light-mode");

      work && work.classList.toggle("light-mode");
      article1 && article1.classList.toggle("light-mode");
      article2 && article2.classList.toggle("light-mode");
      article3 && article3.classList.toggle("light-mode");
      article4 && article4.classList.toggle("light-mode");
      articleP1 && articleP1.classList.toggle("light-mode");
      articleP2 && articleP2.classList.toggle("light-mode");
      articleP3 && articleP3.classList.toggle("light-mode");
      articleP4 && articleP4.classList.toggle("light-mode");
      knopSeeMore && knopSeeMore.classList.toggle("light-mode");

      background2 && background2.classList.toggle("light-mode");
      divAbout && divAbout.classList.toggle("light-mode");
      div2About && div2About.classList.toggle("light-mode");
      contactSectie && contactSectie.classList.toggle("light-mode");
      contactSectie2 && contactSectie2.classList.toggle("light-mode");
      contactButton1 && contactButton1.classList.toggle("light-mode");
      contactButton2 && contactButton2.classList.toggle("light-mode");
      cvButton && cvButton.classList.toggle("light-mode");
      emailLogo && emailLogo.classList.toggle("light-mode");
      linkedinLogo && linkedinLogo.classList.toggle("light-mode");
      downloadLogo && downloadLogo.classList.toggle("light-mode");
      footer && footer.classList.toggle("light-mode");
      copyright && copyright.classList.toggle("light-mode");

      console.log("Theme changed");
  }

  // Contact CTA
  if (contactCTA) {
      contactCTA.addEventListener('click', scrollContact);
  }

  // Navbar
  const myWork = document.querySelector(".work h2");

  if (navButton1) {
      navButton1.addEventListener('click', scrollWork);
  }

  function scrollWork() {
      if (myWork) {
          myWork.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      console.log("Scroll to my work");
  }

  const aboutMe = document.querySelector(".about h2");

  if (navButton2) {
      navButton2.addEventListener('click', scrollAbout);
  }

  function scrollAbout() {
      if (aboutMe) {
          aboutMe.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      console.log("Scroll to about me");
  }

  const contact = document.querySelector(".contact h2");

  if (navButton3) {
      navButton3.addEventListener('click', scrollContact);
  }

  function scrollContact() {
      if (contact) {
          contact.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      console.log("Scroll to contact");
  }

  // Copy email
  if (contactButton1) {
      contactButton1.addEventListener('click', copyEmail);
  }

  function copyEmail() {
      navigator.clipboard.writeText("berend@janssen-it.com").then(() => {
          console.log('Content copied to clipboard');
      }, () => {
          console.error('Failed to copy');
      });
  }