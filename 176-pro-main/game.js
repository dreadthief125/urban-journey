
let words = [
    {
        "inputs": 5,
        "category": "Sports",
        "word": "Chess"
    },
    {
        "inputs": 6,
        "category": "European Country Name",
        "word": "France"
    },

]

$(document).ready(function () {
    fillBlank();
})

function fillBlank() {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    $("#blanks").empty();
    for (let i = 0; i < randomWord.inputs; i++) {
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`
        $("#blanks").append(input_html)
    }

    //Show Hint
    $("#hint").html(randomWord.category)

    var gameOver=false
    //Fill blanks only if the character match is found
    $(".clickable").click(function () {
        var correctGuess = false;      

        //task 1 Get the id of the button clicked
        let id=$(this).attr("id")

        //task 2 Get the life 
        var life=parseInt($("#life").text())


        //Loop through all the letters 
        for (var i = 0; i < randomWord.word.length; i++) {
            //Check if the character matches the id of the button
            if (randomWord.word.charAt(i).toLowerCase() == id) {
                //Check if the life is still left and blank is is empty/already filled
                if (life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)) {

                    //fill blanks
                    $(".fill_blanks").eq(i).html(id)
                    correctGuess=true
                    if ($("#blanks").text()===randomWord.word.toLowerCase()){
                        $("#result").text("You Won!!!")
                        correctGuess=true
                        gameOver=true
                    }

                    //task 3 Check if the word guess is complete
                    





                }                
            }
            
        }
       
        if (life > 0 && correctGuess!=true && gameOver!=true) {           
        //task 4 decrease the life by 1
            life-=1




            $("#life").text(life)
        }
        else if (life == 0) {
            $("#result").text("You Lost!!")
        }
    })
}

    