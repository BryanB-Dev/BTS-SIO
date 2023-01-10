//////////////// VARIABLES \\\\\\\\\\\\\\\\

var technologies = [
  { nom: "debian", categorie: "Système d'exploitation", description: "Debian est le système d'exploitation principal en SLAM, il est donc important d'apprendre à le maitriser." },
  { nom: "shell", categorie: "Interpréteur de commandes", description: "Le shell est un programme qui reçoit des commandes informatiques données par un utilisateur à partir de son clavier pour les envoyer au système d'exploitation qui se chargera de les exécuter." },
  { nom: "sql", categorie: "Langage de programmation", description: "SQL est un langage informatique normalisé servant à exploiter des bases de données relationnelles. La partie langage de manipulation des données de SQL permet de rechercher, d'ajouter, de modifier ou de supprimer des données dans les bases de données relationnelles." },
  { nom: "php", categorie: "Langage de programmation", description: "PHP est un langage de programmation libre, principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP, mais pouvant également fonctionner comme n'importe quel langage interprété de façon locale. PHP est un langage impératif orienté objet." },
  { nom: "js", categorie: "Langage de programmation", description: "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web. Avec les langages HTML et CSS, JavaScript est au cœur des langages utilisés par les développeurs web." },
  { nom: "mvc", categorie: "Modèle Vue Contrôleur", description: "MVC est un motif d'architecture logicielle destiné aux interfaces graphiques, il est composé de trois types de modules ayant trois responsabilités différentes : les modèles, les vues et les contrôleurs." },
  { nom: "git", categorie: "Logiciel", description: "Git permet de faciliter la collaboration en permettant de revenir sur les anciennes versions. La plateforme GitHub va contenir quant à elle les dépôts dans le cloud afin que les développeurs arrivent à travailler sur un même projet et distinguent en temps réel les modifications apportées par les autres développeurs." }
];

var content = [
  { question: "Question", categorie: "Categorie", rep_slam: "Slam", rep_sisr: "Sisr" },
  { question: "Question", categorie: "Categorie", rep_slam: "Slam", rep_sisr: "Sisr" },
  { question: "Question", categorie: "Categorie", rep_slam: "Slam", rep_sisr: "Sisr" },
  { question: "Question", categorie: "Categorie", rep_slam: "Slam", rep_sisr: "Sisr" },
  { question: "Question", categorie: "Categorie", rep_slam: "Slam", rep_sisr: "Sisr" },
  { question: "Question", categorie: "Categorie", rep_slam: "Slam", rep_sisr: "Sisr" },
  { question: "Question", categorie: "Categorie", rep_slam: "Slam", rep_sisr: "Sisr" },
  { question: "Question", categorie: "Categorie", rep_slam: "Slam", rep_sisr: "Sisr" },
  { question: "Question", categorie: "Categorie", rep_slam: "Slam", rep_sisr: "Sisr" }
];

var resultats = [
  { titre: "SLAM", description: "Bravo, option SLAM" },
  { titre: "SISR", description: "Option SISR" }
];

var quiz_content = document.querySelector(".quiz-content");
var k = 0;
var i = -1;
var result = 0;

//\\\\\\\\\\\\\\ VARIABLES ////////////////




//////////////// QUIZZ \\\\\\\\\\\\\\\\

// REPONSE SLAM
function slam() {
  question();
  result++;
}

// REPONSE SISR
function sisr() {
  question();
  result--;
}

// AFFICHE LA QUESTION SUIVANTE
function question() {
  var buttons = document.querySelectorAll('.quizz-button');

  if (k == 0) {
    buttons[0].disabled = true;
  } else {
    buttons[i].disabled = true;
    buttons[i + 1].disabled = true;
  }

  if (k < content.length) {
    quiz_content.innerHTML += `
    <section class="reveal">
      <div class="static-container">
        <h1 class="title">
          <span class="white">question</span><span class="-purple">.${k + 1}()</span>
        </h1>
        <div class="content">
          <p class="-purple">${content[k].categorie}</p>
          <p class="-gray">${content[k].question}</p>
        </div>
        <button class="quizz-button" onclick="slam()">${content[k].rep_slam}</button>
        <button class="quizz-button" onclick="sisr()">${content[k].rep_sisr}</button>
      </div>
    </section>`;
    i += 2;
    k++;
  } else {
    quiz_content.innerHTML += `
    <section class="reveal">
      <div class="static-container">
        <h1 class="title">
          <span class="white">resultat</span><span class="-purple">.()</span>
        </h1>
        <div class="content">
          <p class="-purple">SLAM ou SISR</p>
          <p class="-gray">SLAM ou SISR ?</p>
        </div>
        <button class="quizz-button" onclick="resultat()">Voir résultat</button>
      </div>
    </section>`;
  }
  document.documentElement.scrollTop += 1500;
}

// AFFICHE LE RESULTAT DU QUIZ
function resultat() {
  var restart = document.querySelector('.content');

  if (result > 0) {
    option = 0;
  } else {
    option = 1;
  }

  quiz_content.innerHTML = `
  <section class="reveal">
    <div class="static-container">
      <h1 class="title">
        <span class="white">resultat</span><span class="-purple">.()</span>
      </h1>
      <div class="content">
        <p class="-purple">${resultats[option].titre}</p>
        <p class="-gray">${resultats[option].description}</p>
      </div>
    </div>
  </section>`;

  restart.innerHTML = `
  <p class="-purple">Quiz</p>
  <p class="-gray">Option SLAM ou SISR ?</p>
  <button class="quizz-button start-button" onclick="reset()">Recommencer</button>`;
}

// RESET LE QUIZ 
function reset() {
  k = 0;
  i = -1;
  result = 0;
  quiz_content.innerHTML = "";
  question();
}

//\\\\\\\\\\\\\\ QUIZ ////////////////




//////////////// SIO \\\\\\\\\\\\\\\\

// AFFICHE LES TECHNOLOGIES
function sio() {
  for (var i = 0; i < technologies.length; i++) {
    var _ = document.querySelector(".technologies")
    _.innerHTML += `
    <section class="reveal">
      <div class="static-container">
        <h1 class="title">
          <span class="white">${technologies[i].nom}</span><span class="-purple">.()</span>
        </h1>
        <div class="content">
          <p class="-purple">${technologies[i].categorie}</p>
          <p class="-gray">${technologies[i].description}</p>
        </div>
      </div>
    </section>`;
  }
}

//\\\\\\\\\\\\\\ SIO ////////////////




//////////////// EFFET \\\\\\\\\\\\\\\\

// FADE EFFECT
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var spine = document.querySelector(".spine2");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 550;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
    var elementTop = reveals[0].getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      spine.classList.add("test");
    } else {
      spine.classList.remove("test");
    }
  }
}
window.addEventListener("scroll", reveal);

// GO TOP PAGE
function goTop() {
  document.documentElement.scrollTop = 0;
}

//\\\\\\\\\\\\\\ EFFET ////////////////