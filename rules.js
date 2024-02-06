document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to the Password Game!");
    alert("Here's how to play the game: \n1. Follow what the rules say. \n2. Type in the password in the input. \nDon't worry! This game is easy!");
});

function startGame() {
    var play = confirm("Do you want to play?");
    if (play) {
        alert("Great! Let's start typing!");
        document.getElementById("gameContainer").style.display = "block";
        displayNextRule();
    } else {
        alert("Canceled.");
        window.history.back();
    }
}

function displayNextRule() {
    var rules = [
        "Rule 1. Enter the first letter of the alphabet.",
        "Rule 2. Type the first number.",
        "Rule 3. Type in a planet that we live on right now.",
        "Rule 4. Type a star that we see when it's daytime.",
        "Rule 5. 8 x 8?",
        "Rule 6. Type in \"daddy\" backwards.",
        "Rule 7. Type a Uppercase letter but the word \"zebra\".",
        "Rule 8. What is the richest country ever? Hint: It is not what stands for, It starts with \"United\".",
        "Rule 9. What is the strictest, baddest country ever? It is one of the Korean Countries.",
        "Rule 10. Put a space at the end of your password.",
        "Rule 11. Type a card game that you play by yourself.",
        "Rule 12. Type in the year when World War 2 had ended.",
        "Rule 13. Type in the city that is \"The heart of the Filipino\".",
        "Rule 14. What is the flavor that is brown?",
        // Add more rules as needed
    ];

    var ruleIndex = 0;
    document.getElementById("rule").innerHTML = rules[ruleIndex];

    function testPassword() {
        var passwordInput = document.getElementById("passwordInput");
        var password = passwordInput.value.toLowerCase();
        var expectedPasswords = [
            "a",
            "a1",
            "a1earth",
            "a1earthsun",
            "a1earthsun64",
            "a1earthsun64yddad",
            "a1earthsun64yddadzebra",
            "a1earthsun64yddadzebraunitedstates",
            "a1earthsun64yddadzebraunitedstatesnorthkorea",
            "a1earthsun64yddadzebraunitedstatesnorthkorea ",
            "a1earthsun64yddadzebraunitedstatesnorthkoreasolitaire",
            "a1earthsun64yddadzebraunitedstatesnorthkoreasolitaire1945",
            "a1earthsun64yddadzebraunitedstatesnorthkoreasolitaire1945manila",
            "a1earthsun64yddadzebraunitedstatesnorthkoreasolitaire1945manilachocolate",
            // Add more expected passwords corresponding to rules
        ];

        if (password == expectedPasswords[ruleIndex]) {
            ruleIndex++;
            if (ruleIndex < rules.length) {
                document.getElementById("rule").innerHTML = rules[ruleIndex];
            } else {
                alert("Congratulations, You completed the password game!");
                var playAgain = confirm("Would you like to play again?");
                if (playAgain) {
                    location.reload();
                } else {
                    alert("Canceled.");
                    window.history.back();
                }
            }
        } else {
            alert("Incorrect password. Try again!");
        }
    }

    document.getElementById("testBtn").onclick = testPassword;
}
