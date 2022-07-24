(function(){
    const btCloser = document.getElementById('btCloser');
    const players = document.querySelectorAll('.players .icon-player-area');
    btCloser.addEventListener('click', closer);     
    
    function closer() {
        
        const modal = document.querySelector('.modal');
        modal.classList.add('displayNone');

        const screenGame = document.querySelector('.screenGame');
        screenGame.style.display = 'flex';
    }

    
    
    for(let player of players){
        console.log(player);
        
        player.addEventListener('click', select);
    }
    
    function select(player) {
        const playerHuman = player.currentTarget; 
        console.log(playerHuman)       
    }
})();

