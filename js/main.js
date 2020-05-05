const continueBtn = document.querySelector("#continueBtn");
const resetData = document.querySelector("#resetData");
const gamingArea = document.querySelector("#gamingArea");
const infoArea = document.querySelector("#infoArea");
const wordsArray = [];
let p1Points;

continueBtn.addEventListener('click',checkAndEnterData);

// PLAYER 1 DETAILS

function checkAndEnterData(){

    // store value of player 1 name, age and gender into  variables
    const p1NameData = document.getElementById("player1Name").value;
    const p1AgeData = document.getElementById("player1Age").value;

    // check if name and age of player 1 input box is empty
    if(p1NameData == ''){
        alert('Player 1 Please Input your name first then continue');
        return false;
    };

    if (p1AgeData > 80){
        alert(`Yikes PLAYER 1 you are too old to play this game please enter a genuine Age`);
        return;
    }

    if (p1AgeData == '') {
        alert('Player 1 Please Input your Age first then continue');
        return false;
    };

// PLAYER 2 DETAILS

    // store value of player 2 name, age and gender into  variables
    const p2NameData = document.getElementById("player2Name").value;
    const p2AgeData = document.getElementById("player2Age").value;

    // check if name and age of player 2 input box is empty
    if (p2NameData == '') {
        alert('Player 2 Please Input your name first then continue');
        return false;
    };

    if (p2AgeData > 80) {
        alert(`Yikes PLAYER 2 you are too old to play this game please enter a genuine Age`);
        return;
    }

    if (p2AgeData == '') {
        alert('Player 2 Please Input your Age first then continue');
        return false;
    };

    // check if last field is not empty then show gaming area
    if (p2AgeData !=0){
        gamingArea.style.display="block";
    }
    if (p2AgeData != 0) {
        infoArea.style.display="none";
    }

    alert(`Its Player 1's Turn`);
    
    // adding names from input into gaming area
    document.getElementById("p1Name").append(p1NameData);
    document.getElementById("p2Name").append(p2NameData);

    // clearing input values after submit button is clicked
    document.getElementById("player1Name").value = '';
    document.getElementById("player1Age").value = '';

    // clearing input values after submit button is clicked
    document.getElementById("player2Name").value = '';
    document.getElementById("player2Age").value = '';
};

// PAGE 2

const promptBoxBtn1 = document.querySelector("#promptBoxP1");
const promptBoxBtn2 = document.querySelector("#promptBoxP2");
let countP1 = 0;
let countP2 = 0;


promptBoxBtn1.addEventListener('click', promptBoxInput1);
promptBoxBtn2.addEventListener('click', promptBoxInput2);

function promptBoxInput1() {

    // storeing the value of prompt into a variable
    const inputValue = prompt('Enter the word for palindrome test');// prompt box it will store input from players
    const inputSlice = inputValue.split('');// splits the words into array one by one eg oh->['o','h']
    const inputArray = [];// stores the value after getting reversed

    // check if word already exists or not
    if (wordsArray.includes(inputValue)){
        alert('Use Different word this has be used already');
        return;
    }

    // pushing into array
    wordsArray.unshift(inputValue);

    // reverseing the splited array and pushing into array
    // eg hello -> olleh
    for (let i = inputSlice.length; i >= 0; i--) {
        inputArray.push(inputSlice[i]);
    };

    // it joins and stores the value into a variable
    const inputJoin = inputArray.join('');

    // check if word is palindrome or not
    if (inputJoin === inputValue) {
        alert('Vola ! You got it correct');
    }
    else {
        alert('Oops you didnt get the correct word');
    };

    // point system
        if (inputJoin === inputValue) {
            countP1++;
            let divP1 = document.getElementById('myPoints1');
            divP1.innerHTML = countP1;
            console.log(countP1);
        }
        else {
            countP1--;
            let divP1 = document.getElementById('myPoints1');
            divP1.innerHTML = countP1;
            console.log(countP1);
        }

    // winner choosing
    if (countP1 == 5){
        alert('We have a winner, Player 1 is a winner');
        window.location.reload();
    };

    if (countP1 == -5) {
        alert('Better Luck Next Time. Player 2 is Winner');
        window.location.reload();
    };
    
    // hiding prompt1 and showing prompt 2
    promptBoxP2.style.display = "block";
    promptBoxP1.style.display = "none"; 

};


function promptBoxInput2() {

    // storeing the value of prompt into a variable
    const inputValue = prompt('Enter the word for palindrome test');// prompt box it will store input from players
    const inputSlice = inputValue.split('');// splits the words into array one by one eg oh->['o','h']
    const inputArray = [];// stores the value after getting reversed

    // check if word already exists or not
    if (wordsArray.includes(inputValue)) {
        alert('Use Different word this has be used already');
        return;
    }

    // pushing into array
    wordsArray.unshift(inputValue);

    // reverseing the splited array and pushing into array
    // eg hello -> olleh
    for (let i = inputSlice.length; i >= 0; i--) {
        inputArray.push(inputSlice[i]);
    };

    // it joins and stores the value into a variable
    const inputJoin = inputArray.join('');

    // check if word is palindrome or not
    if (inputJoin === inputValue) {
        alert('Vola ! You got it correct')
    }
    else {
        alert('Oops you didnt get the correct word');
    }
    
    // point system
        if (inputJoin === inputValue) {
            countP2++;
            let divP2 = document.getElementById('myPoints2');
            divP2.innerHTML = countP2;
            console.log(countP2);
        }
        else {
            countP2--;
            let divP2 = document.getElementById('myPoints2');
            divP2.innerHTML = countP2;
            console.log(countP2);
        }

    // winner choosing
    if (countP2 == 5) {
        alert('We have a winner, Player 1 is a winner');
        window.location.reload();
    };

    if (countP2 == -5) {
        alert('Better Luck Next Time. Player 2 is Winner');
        window.location.reload();
    };
    
    // hiding prompt2 and showing prompt 1
    promptBoxP2.style.display = "none";
    promptBoxP1.style.display = "block"; 

};

// reseting page data
resetData.addEventListener('click', resetPageData)

function resetPageData(){
    window.location.reload();

    // hiding gaming area and showing players information area
    gamingArea.style.display = "none";
    infoArea.style.display = "block";
}

