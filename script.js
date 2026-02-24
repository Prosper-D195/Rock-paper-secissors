console.log("Hello World")
let humanScore = 0; 
let computerScore = 0;

function getComputerChoice() {
    const choices = ["pierre", "papier", "ciseaux"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
 }

 function getHumanChoice() {
   let choice = prompt("Enrez votre choix (pierre, papier ou ciseaux) : ");
   if (choice === null) { 
      alert ("Vous avez annulé le jeu. Au revoir !");
      return null
   }

    choice = choice.toLowerCase();
   if (choice === "pierre" || choice === "papier" || choice === "ciseaux") { 
      return choice;
      } else { 
         alert("Choix invalide. Veuillez entrez pierre, papier ou ciseaux");
         return getHumanChoice();
          }
}
 function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`Égalité ! Vous avez choisi ${humanChoice} et l'ordinaneutre a choisi ${computerChoice}`);
      
   
   } else if ((humanChoice === 'pierre' && computerChoice === 'ciseaux')||
         (humanChoice === 'papier' && computerChoice === 'pierre') ||
      (humanChoice === 'ciseaux' && computerChoice === 'papier')) {
         humanScore++;
         console.log(`Vous avez gagné ! ${humanChoice} bat ${computerChoice}`);
         } else { 
            computerScore++;
            console.log(`L'ordinateur a gagné ! ${computerChoice} bat ${humanChoice}`);
             }
              }
              function playGame() { 
               for (let i = 0; i < 5; i++) {
               const humanSelection = getHumanChoice();
               if (humanSelection === null) {
                  break;
               }
               const computerSelection = getComputerChoice();
               playRound(humanSelection, computerSelection);
                }

                console.log(`Score final : Homme ${humanScore} - ${computerScore} Ordinateur`);
                if (humanScore > computerScore) { 
                  console.log(`Vous avez gagné le jeu !`);
                  } else if (humanScore < computerScore) { 
                     console.log('L\'ordinateur a gagné le jeu !');
                     } else { 
                        console.log('Le jeu est égal !');
            }
          }
              playGame();
          