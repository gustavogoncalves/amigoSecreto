// variaves 
let friendsList = document.getElementById('lista-amigos');
let friendsName = document.getElementById('nome-amigo');
let drawList = document.getElementById('lista-sorteio');
let friendDrawList = [];
// primeiro adicionar amigos
function adicionar(){
    if(friendsName.value != ''){
        friendsList.textContent += ` - ${friendsName.value}`;
        friendDrawList.push(friendsName.value);
    }
    friendsName.value = '';
}
// sortear
function sortear(){
    numberFriends = parseInt(friendDrawList.length);
    if(numberFriends % 2 === 0 && numberFriends > 0){
        let prizeList = [];
        drawList.textContent = '';
        let i = 0;
        while(i < numberFriends){
            let number = Math.floor(Math.random() * numberFriends);
            if(prizeList.includes(`${friendDrawList[number]}`) == false && friendDrawList[number] != friendDrawList[i]){
                let html = `<a>${friendDrawList[i]}: ${friendDrawList[number]}</a></br>`
                drawList.innerHTML = drawList.innerHTML + html;
                prizeList.push(friendDrawList[number]);
                i++;
            }
        }
    } else {
        alert('Incluia mais uma pessoa para realizar o sorteio!')
    }
}
//função reiniciar.
function reiniciar(){
    friendsList.textContent = '';
    friendsName.value = '';
    friendDrawList = [];
    drawList.textContent = '';
}

// By Gustavo3gs
