class Form {
    constructor() {
        this.signUpButton = createButton("Sign Up");
        this.LoginButton = createButton("Login");
        this.signUpName = createInput("Username");
        this.signUpPassword = createInput("Password");
        this.signUpSubmit = createButton("Submit");
        this.signUpShow = false;
    }
    
    display() {
        gameManager.getCount();
        this.signUpName.hide();
        this.signUpPassword.hide();
        this.signUpSubmit.hide();
        this.signUpButton.mousePressed(() => {
            this.signUpButton.hide();
            this.LoginButton.hide();
            this.signUpName.show();
            this.signUpPassword.show();
            this.signUpSubmit.show();
            this.signUpShow = true;
        })
        if (this.signUpShow == true) {
            this.signUpSubmit.mousePressed(() => {
                if (this.signUpname.value() != "Username" && 
                    this.signUpPassword.value() != "Password") {
                        player = new Player();
                        player.index = playercount;
                        playercount += 1;
                        gamemanager.updateCount();
                        player.username = this.signUpName.value();
                        player.password = this.signUpPassword.value();
                        player.update();
                }
            })
        }
        
    }
}