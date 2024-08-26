document.addEventListener('DOMContentLoaded', function () {
    

    
    document.getElementById("form").addEventListener('submit', function(event){
        // Variables to hold user input
        var name = document.getElementById('name').value;
        var password = document.getElementById('password').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Variable to track validity
        var valid = true;

        // Validate name
        if(name.trim() === ""){
            alert("Please fill in your name!");
            valid = false;
        };
        
        // Validate password
        if(password.trim() === ""){
            alert("Please enter your password!");
            valid = false;
        }
        else if(password.length < 8){
            alert("Your password must at least consist of 8 characters!");
            valid = false;
        };

        // Validate email
        if(email.trim() === ""){
            alert("Please enter your Email!");
            valid = false;
        }
        else if(!validateEmail(email)){
            alert("Please enter a valid Email address!")
            valid = false
        };

        // Validate message
        if(message.trim() === ""){
            alert("Please enter your message!")
            valid = false
        };

        // Prevent form submission if validation fails
        if(!valid){
            event.preventDefault()
        };
    });

    // Email validation function
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(email);
    };
});
