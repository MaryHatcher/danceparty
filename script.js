
var audiocount = 0;
let copcount;
var imgCount = 0;
var images = ["images/dancefloor2.gif", "images/dancefloor3.gif", "images/dancefloor4.gif", "images/dancefloor5.gif"];

let danceFloor = document.getElementById("dancefloor");

window.addEventListener('load', ()=> {
    document.body.style.backgroundImage = "url(images/dancefloor2.gif)";
});


addEventListener("keydown", function(event) {
    document.getElementById("textbox").focus();
    this.document.getElementById("introdiv").style.display = "none";
    this.document.getElementById("fakebg").style.display = "none";
    document.createElement("img");
    var img = document.createElement("img");
    img.style.bottom = danceFloor.clientHeight * Math.random() + 'px';
    img.style.left = danceFloor.clientWidth * Math.random() + 'px';
    img.style.position = 'absolute';
    document.body.appendChild(img);
    img.classList.add("partyguest");
    const partyguests = document.querySelectorAll('.partyguest');
    console.log(event.key);
    

    if (event.key === "Control"){
        console.log(imgCount);
        if (imgCount !== images.length - 1)
        imgCount++;
        else 
        imgCount = 0;
        document.body.style.backgroundImage = "url('"+images[imgCount]+"')";
    }
    if (event.key === "Escape"){
        console.log("hi");
        this.document.getElementById("police").style.display = "block";
        document.getElementById('textbox').value = "";
        partyguests.forEach(partyguest => {
            partyguest.remove();
          });
          copcount = 1;
          setTimeout(function () {
            if (copcount = 1) {
                this.document.getElementById("police").style.display = "none";
            }
        }, 2000);   
    }
    if (event.key === "Alt"){
        audiocount++;
        if (audiocount === 1){
            document.getElementById('audio').play();
        }
        console.log(audiocount);
        if (audiocount === 2){
            document.getElementById('audio').pause();
            audiocount=0;
        }
    }

    if (event.key === "a" || event.key === "A"){
        img.src = "images/a.gif";
    }
    if (event.key === "b" || event.key === "B"){
        img.src = "images/b.gif";
    }
    if (event.key === "c" || event.key === "C"){
        img.src = "images/c.gif";
    }
    if (event.key === "d" || event.key === "D"){
        img.src = "images/d.gif";
    }
    if (event.key === "e" || event.key === "E"){
        img.src = "images/e.gif";
    }
    if (event.key === "f" || event.key === "F"){
        img.src = "images/f.gif";
    }
    if (event.key === "g" || event.key === "G"){
        img.src = "images/g.gif";
    }
    if (event.key === "h" || event.key === "H"){
        img.src = "images/h.gif";
    }
    if (event.key === "i" || event.key === "I"){
        img.src = "images/i.gif";
    }
    if (event.key === "j" || event.key === "J"){
        img.src = "images/j.gif";
    }
    if (event.key === "k" || event.key === "K"){
        img.src = "images/k.gif";
    }
    if (event.key === "l" || event.key === "L"){
        img.src = "images/l.gif";
    }
    if (event.key === "m" || event.key === "M"){
        img.src = "images/m.gif";
    }
    if (event.key === "n" || event.key === "N"){
        img.src = "images/n.gif";
    }
    if (event.key === "o" || event.key === "O"){
        img.src = "images/o.gif";
    }
    if (event.key === "p" || event.key === "P"){
        img.src = "images/p.gif";
    }
    if (event.key === "q" || event.key === "Q"){
        img.src = "images/q.gif";
    }
    if (event.key === "r" || event.key === "R"){
        img.src = "images/r.gif";
    }
    if (event.key === "s" || event.key === "S"){
        img.src = "images/s.gif";
    }
    if (event.key === "t" || event.key === "T"){
        img.src = "images/t.gif";
    }
    if (event.key === "u" || event.key === "U"){
        img.src = "images/u.gif";
    }
    if (event.key === "v" || event.key === "V"){
        img.src = "images/v.gif";
    }
    if (event.key === "w" || event.key === "W"){
        img.src = "images/w.gif";
    }
    if (event.key === "x" || event.key === "X"){
        img.src = "images/x.gif";
    }
    if (event.key === "y" || event.key === "Y"){
        img.src = "images/y.gif";
    }
    if (event.key === "z" || event.key === "Z"){
        img.src = "images/z.gif";
    }
    

  });
