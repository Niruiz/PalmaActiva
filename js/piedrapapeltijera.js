var ppt = [ "piedra", "papel", "tijeras"];

//funcion que
function startgame (player1, player2){
    if(player1 == player2)
    console.log(`Empate`);


    // si p1 es pieda y p2 es tijeras   o  p1=papel y p2= tijeras          p1=tijeras y p2= papel
   else if (player1 == 0 && player2 ==2 || player1 == 1 && player2 == 0 || player1 == 2 && player2==1 )
    console.log("gana jugador 1, "+ ppt[player1]+" gana a "+ ppt[player2]);
   // si no ocurre ninguno de los casos anteriores
    else{
        console.log("gana jugador 2, "+ ppt[player2]+" gana a "+ ppt[player1]);
    }
}
