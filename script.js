
      const score =JSON.parse(localStorage.getItem('score')) || {
        win:0,
        loss:0,
        tie:0
      };
      document.querySelector('.js-display-score')
          .innerHTML = `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie} `;
      function resetScore(){
        score.win=0;
        score.tie=0;
        score.loss=0;
        localStorage.removeItem('score');
        displayScore();
      }

      function pickComputerMove(){
        let computerMove;
        let randomNumber = Math.random();
        if(randomNumber>=0 && randomNumber < (1/3) ){
          computerMove = 'Rock';
        }
        else if(randomNumber >=1/3 && randomNumber < 2/3){
          computerMove = 'Paper';
        }
        else{
          computerMove = 'Scissors';
        }
        return computerMove;
      }
      
      function playGame(playerMove){
        let result;
        let computerMove = pickComputerMove();
        if(computerMove === playerMove){
          score.tie++;
          result = 'Tie';
        }
        else if(computerMove ==='Rock'){
          if(playerMove === 'Paper'){
            score.win++;
            result = 'You Won';
 
          }
          else if(playerMove === 'Scissors'){
            score.loss++;
            result = 'You Lost';
          }
        }
        else if(computerMove ==='Paper'){
          if(playerMove === 'Rock'){
            score.loss++;
            result = 'You Lost';
          }
          else if(playerMove === 'Scissors'){
            score.win++;
            result = 'You Won';
          }
        }
        else{
          if(playerMove === 'Paper'){
            score.loss++;
            result = 'You Lost';
          }
          else if(playerMove === 'Rock'){
            score.win++;
            result = 'You Won';
          }
        }
        localStorage.setItem('score',JSON.stringify(score));
        
        document.querySelector('.js-display-moves')
          .innerHTML= `You <img class="move" src="${playerMove}-emoji.png">
           <img class="move" src="${computerMove}-emoji.png">
            Computer`;

        displayResult(result);

      }
      

      function displayResult(result){
        document.querySelector('.js-display-result')
          .innerHTML = result;
        displayScore();
      }

      function displayScore(){
        document.querySelector('.js-display-score')
          .innerHTML = `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie} `;
      }



