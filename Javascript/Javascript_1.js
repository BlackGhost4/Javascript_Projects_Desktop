function Color_Function(){
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch (Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
            break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
            break;
        case "Green":
            Color_Output = "Green" + Color_String;
            break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
            break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
            break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
            break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//This function change the text of the first element of the array of elements
//with class "NewClass"
function ChangeText(){
    var A = document.getElementsByClassName("NewClass");
    A[0].innerHTML = "Change Text";
}

//Function to draw a house
function DrawHouse(){
    var c = document.getElementById("Graphic");
    var ctx = c.getContext("2d");
    
    //Draw the lines
    ctx.beginPath();

    ctx.moveTo(60, 200);
    ctx.lineTo(440, 200);
    //ctx.stroke();

    ctx.moveTo(440, 200);
    ctx.lineTo(400, 100);
    //ctx.stroke();

    ctx.moveTo(400, 100);
    ctx.lineTo(100, 100);
    //ctx.stroke();

    ctx.moveTo(100, 100);
    ctx.lineTo(60, 200);
    //ctx.stroke();

    //Fill the house
    var grd = ctx.createLinearGradient(0, 100, 400, 350);
    grd.addColorStop(0, "white");
    grd.addColorStop(0.5, "red");
    grd.addColorStop(1, "blue");
    ctx.fillStyle = grd;
    ctx.fillRect(100, 200, 300, 250);
    ctx.stroke();

    //Door
    ctx.fillStyle = "brown";
    ctx.fillRect(200, 300, 100, 149);
    ctx.stroke();
}