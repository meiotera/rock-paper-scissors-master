(function () {
    const btCloser = document.getElementById('btCloser');
    const players = document.querySelectorAll('.players .icon-player-area');
    const btRules = document.querySelector('.btRules');
    const btagain = document.querySelector('.btagain');
    
    btCloser.addEventListener('click', closer);
    
    function closer() {
        const modal = document.querySelector('.modal');
        modal.classList.add('displayNone');

        const screenGame = document.querySelector('.screenGame');
        screenGame.style.display = 'flex';
    }

    for (let player of players) {
        //console.log(player);
        
        player.addEventListener('click', select);
    }

    function select(player) {
        const playerHuman = player.currentTarget;
        //console.log(playerHuman);

        const success = document.querySelector('.success');
        success.classList.remove('displayNone');
        
        const success_winner = document.querySelector('.success-winner');
        success_winner.classList.remove('displayNone');
        
        const players = document.querySelector('.players');
        players.style.display = 'none';
        
        humanChoice(playerHuman);
        autoChoice();
    }
    
    function humanChoice(player) {
        let playerHuman = document.querySelector('.playerHuman');
        playerHuman.id = player.id;
        playerHuman.innerHTML = player.innerHTML;
        
        //champion(playerHuman.id)
    }
    
    function autoChoice() {
        let playerAuto = document.querySelectorAll('.players .icon-player-area');
        
        const min = 0;
        const max = 5;
        
        let randomNumber = Math.floor(Math.random() * (max - min) + min);        
        
        let playerRandom = [];
        
        for(let i = 0; i <= playerAuto.length; i++){
            playerRandom.push(playerAuto[i]);
        }
        
        let screenPlayer = playerRandom[randomNumber];
        
        let auto =  document.querySelector('.playerAuto');
        auto.id = screenPlayer.id;
        auto.innerHTML = screenPlayer.innerHTML;
        
        // champion()
        
        capturePlayers()
    }    
    
    function capturePlayers() {
        const playerHuman = document.querySelector('.playerHuman');
        const playerAuto = document.querySelector('.playerAuto');
        
        champion(playerHuman.id, playerAuto.id);
        
    }
    
    function champion(player, auto) {
        
        let success_winner = document.querySelector('.success-winner .msg-winner h1'); 
        let zindex = document.querySelector('.playerHuman').style.zIndex = '100';
        let index = document.querySelector('.playerAuto').style.zIndex = '101'
        
        let score = document.getElementById('numberOfPoints');
        let points = Number(score.innerText);
        
        const results = [
            ['scissors', 'paper'],
            ['paper', 'rock'],
            ['rock', 'lizard'],
            ['lizard', 'spock'],
            ['spock', 'scissors'],
            ['scissors', 'lizard'],
            ['lizard', 'paper'],
            ['paper', 'spock'],
            ['spock', 'rock'],
            ['rock', 'scissors']
        ];
        
        for(let i = 0; i < results.length; i++) {
            if(results[i][0] === player && results[i][1] === auto){
                document.querySelector('.playerHuman').classList.add('shadow');
                success_winner.innerText = `You Win`;      
                points++;          
            } else if (results[i][1] === player && results[i][0] === auto){
                document.querySelector('.playerAuto').classList.add('shadow');
                success_winner.innerText = `You Lose`;  
                points--;
                index = document.querySelector('.playerAuto').style.zIndex = '99'              
            } else if (player === auto) {
                success_winner.innerText = `A tie`;
            }
        }     
        
        if(points <= 9) {
            points = `0` + points;
        }

        if(points < '00') {
            alert('Jogo será reiniciado, pois você chegou a pontuação mínima');
            points.innerText = '12'

            
            return
        }
        score.innerText = points;        
    }

    btRules.addEventListener('click', function(){
        const modal = document.querySelector('.modal');
        modal.classList.remove('displayNone');
        document.querySelector('.screenGame').style.display = 'none';
        
    });

    btagain.addEventListener('click', function(){
        const success = document.querySelector('.success');
        const success_winner = document.querySelector('.success-winner')
        success.classList.add('displayNone');
        success_winner.classList.add('displayNone');

        document.querySelector('.playerHuman').classList.remove('shadow');
        document.querySelector('.playerAuto').classList.remove('shadow');

        const divPlayersScreen = document.querySelector('.players');
        divPlayersScreen.style.display = 'grid';
        
    })
})();