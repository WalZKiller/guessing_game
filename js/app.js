new fullpage('#fullpage', {
    verticalCentered: false,
    navigation: true,

    onLeave: function(origin, destination, direction){

        if(destination.index == 0){
            fullpage_api.setAllowScrolling(true);
            fullpage_api.setKeyboardScrolling(true);
        }
        else{
            fullpage_api.setAllowScrolling(false);
            fullpage_api.setKeyboardScrolling(false);
        }
    }
})

let counter = 0

//methods

function RightAnswer(){

    console.log('Correct')
    alert('You are correct!')
    fullpage_api.moveSectionDown(true);
    counter = 0

    //if(Section == 3){
    //    alert('Congratulations! You win the game!')
    // } Ada ke cara buat cam atas ni?
}
function WrongAnswer(){

    console.log('Wrong')
    alert('Wrong answer')
    counter = counter + 1

    if(counter == 3){
        counter = 0
        alert('Game over! Try again.')
        fullpage_api.moveTo(1);
    }
}
function FinalRightAnswer(){

    console.log('Correct')
    alert('Congratulations! You win the game!')
    fullpage_api.moveTo(1);
}
