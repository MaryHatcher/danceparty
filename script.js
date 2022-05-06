document.getElementById("textbox").focus();

document.body.addEventListener('keypress', changebg);
function changebg (){
    console.log("hey");
    document.body.style.backgroundImage = "url('images/dancefloor2.gif')";
};
let danceFloor = document.getElementById("dancefloor");

addEventListener("keydown", function(event) {
    this.document.getElementById("introdiv").style.display = "none";
    document.createElement("img");
    var img = document.createElement("img");
    img.style.bottom = danceFloor.clientHeight * Math.random() + 'px';
    img.style.left = danceFloor.clientWidth * Math.random() + 'px';
    img.style.position = 'absolute';
    document.body.appendChild(img);

    if (event.key === "a"){
        img.src = "images/a.gif";
    }
    if (event.key === "b"){
        img.src = "images/b.gif";
    }
    if (event.key === "c"){
        img.src = "images/c.gif";
    }
    if (event.key === "d"){
        img.src = "images/d.gif";
    }
    if (event.key === "e"){
        img.src = "images/e.gif";
    }
    if (event.key === "f"){
        img.src = "images/f.gif";
    }
    if (event.key === "g"){
        img.src = "images/g.gif";
    }
    if (event.key === "h"){
        img.src = "images/h.gif";
    }
    if (event.key === "i"){
        img.src = "images/i.gif";
    }
    if (event.key === "j"){
        img.src = "images/j.gif";
    }
    if (event.key === "k"){
        img.src = "images/k.gif";
    }
    if (event.key === "l"){
        img.src = "images/l.gif";
    }
    if (event.key === "m"){
        img.src = "images/m.gif";
    }
    if (event.key === "n"){
        img.src = "images/n.gif";
    }
    if (event.key === "o"){
        img.src = "images/o.gif";
    }
    if (event.key === "p"){
        img.src = "images/p.gif";
    }
    if (event.key === "q"){
        img.src = "images/q.gif";
    }
    if (event.key === "r"){
        img.src = "images/r.gif";
    }
    if (event.key === "s"){
        img.src = "images/s.gif";
    }
    if (event.key === "t"){
        img.src = "images/t.gif";
    }
    if (event.key === "u"){
        img.src = "images/u.gif";
    }
    if (event.key === "v"){
        img.src = "images/v.gif";
    }
    if (event.key === "w"){
        img.src = "images/w.gif";
    }
    if (event.key === "x"){
        img.src = "images/x.gif";
    }
    if (event.key === "y"){
        img.src = "images/y.gif";
    }
    if (event.key === "z"){
        img.src = "images/z.gif";
    }

  });