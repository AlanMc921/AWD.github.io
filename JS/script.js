/*-------------- Gallery ----------------*/

/* Function that checks ID of gallery item and changes text base on it*/

function addText(clicked_id) {

    /*declare variables*/
    var galleryText = [];
    galleryText[0] = "Friendly team available to manage your online project";
    galleryText[1] = "Responsive design across all devices";
    galleryText[2] = "Mobile support";
    galleryText[3] = "Online store functionality";
    galleryText[4] = "Setup across all main social media";
    galleryText[5] = "24/7 support available";

    /*Take in ID from html and create two variables for section and type*/ 
    /*Type = p for paragraph and g for the image*/
    var clicked_id;
    let section = clicked_id.substring(1);
    let sectionType = clicked_id.charAt(0);

    /*if statement checks type and changes it to either image/paragraph*/
    if (sectionType=="g"){
        document.getElementById(clicked_id).style.display = "none";
        document.getElementById("p" + section).innerHTML= galleryText[section];
    }
    else {
        console.log(clicked_id);
        document.getElementById("g" + section).style.display = "block";
        document.getElementById(clicked_id).innerHTML=  "";
    }
}

/*--------------------- Contact Form -------------------------------*/

/*Method for contact form section*/
function contact() {

    /*declare variables, clear response messages and pass through user details from form and store in a loop*/
    var validation = 0;
    var errorMsg = "*All fields are required.";
    var userDetails = [];
    document.getElementById("response").innerHTML="";
    userDetails[0] = document.getElementById("name").value;
    userDetails[1] = document.getElementById("email").value;
    userDetails[2] = document.getElementById("phone").value;
    userDetails[3] = document.getElementById("query").value;
    var response = "Thank you for your enquiry. <br> One of our team will be with you shortly.";


    /*for loop and if statement to check all required fields are populated and provide response*/
    for(let i=0;i<userDetails.length;i++){
        if(userDetails[i]==""){
        validation++;
        }
    }

    /*if there is missing info, an error is produced*/
    if(validation!=0){
        document.getElementById("error").innerHTML=errorMsg;
        document.getElementById("response").innerHTML="<br><br>";
    }
    
    /*if all fields are populated, then validate*/
    else {

        /*for loop to show details are stored correctly as array in console*/
        for(let i=0;i<userDetails.length;i++){
            console.log(userDetails[i]);
            }

        /*reset form, provide response, change CSS, clear prior error and disable button so no more attempts*/
        document.getElementById("contactForm").reset();
        document.getElementById("response").innerHTML= response;
        document.getElementById("responseBox").classList.add("response");
        document.getElementById("error").innerHTML="<br>";
        document.getElementById("submit").disabled = true;
    }
}
