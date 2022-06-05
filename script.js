'use strict' ;
const secretNumber = Math.trunc(Math.random()*20) + 1 ;
let score = 20 ;
document.querySelector('.check').addEventListener(
    'click', function(){

        const guessedNumber = Number(document.querySelector('.guess').value) ;
        if(!guessedNumber)
        {
            document.querySelector('.message').textContent = "⚠️ No Number !!" ;
        }
        else if(guessedNumber === secretNumber)
        {
            document.querySelector('.number').textContent = secretNumber ;
            document.querySelector('body').style.backgroundColor = '#60B347' ;
            document.querySelector('.message').textContent = "You Won The Game !!" ;
            document.querySelector('.highscore').textContent = score ;
            document.querySelector('.number').style.width = '30rem' ;
        }
        else if(guessedNumber > secretNumber)
        {
            if(score > 0)
            {
                document.querySelector('.message').textContent = "📈 Guess Too High !!" ;
                score -- ;
                document.querySelector('.score').textContent = score ;
            }
            else
            {
                document.querySelector('.message').textContent = " ⚠️ You Lost The Game !! " ;
                document.querySelector('.score').textContent = score ;
            }
        }
        else if(guessedNumber < secretNumber)
        {
                if(score > 0)
                {
                    document.querySelector('.message').textContent = "📉 Guess Too Low !!" ;
                    score -- ;
                    document.querySelector('.score').textContent = score ;
                }
                else
                {
                    document.querySelector('.message').textContent = "⚠️ You Lost The Game !! " ;
                    document.querySelector('.score').textContent = score ;
                }
        }

        }
) ;

document.querySelector('.again').addEventListener('click', function(){
    location.reload() ;
    }
) ;