function autoAdd(auto)
{
    let anzeige = document.createElement("div");
    let bild = document.createElement("img");
    let data = document.createElement("div");
    let titel = document.createElement("span");
    let Utitel = document.createElement("span");
    let merkmale = document.createElement("div");
    let merkmaleDiv1 = document.createElement("div");
    let merkmaleDiv2 = document.createElement("div");
    let stoff = document.createElement("span");
    let leistung = document.createElement("span");
    let km = document.createElement("span");
    let bj = document.createElement("span");



    

    anzeige.classList.add('anzeige');
    data.classList.add('data');
    titel.classList.add('titel');
    Utitel.classList.add('untertitel');
    merkmale.classList.add('merkmale');

    document.getElementById("container2").appendChild(anzeige);
    anzeige.appendChild(bild);
    anzeige.appendChild(data);
    data.appendChild(titel);
    data.appendChild(Utitel);
    data.appendChild(merkmale);
    merkmale.appendChild(merkmaleDiv1);
    merkmale.appendChild(merkmaleDiv2);
    merkmaleDiv1.appendChild(stoff);
    merkmaleDiv1.appendChild(leistung);
    merkmaleDiv2.appendChild(km);
    merkmaleDiv2.appendChild(bj);


    bild.src = auto.img_src;
    titel.innerHTML= auto.marke; 
    Utitel.innerHTML = auto.model;
    stoff.innerHTML = auto.stoff;
    leistung.innerHTML = auto.leistung;
    km.innerHTML = auto.kilometer;
    bj.innerHTML= auto.baujahr;    
    
    
    
    
    let overlay = document.createElement("div");
    overlay.classList.add('overlay');
    anzeige.appendChild(overlay);
    let readmore = document.createElement("button");
    readmore.innerHTML = "Read more";
    overlay.appendChild(readmore);

    anzeige.onmouseover = function()
    {
        overlay.style.display = "flex";
    }

    anzeige.onmouseout =function()
    {
        overlay.style.display = "none";
    }
    
}


function klik()
{
    let inputArray = document.getElementById("container1").getElementsByTagName("input");
    
    let autos = 
        {
            img_src:    inputArray[0].value,
            marke :     inputArray[1].value,
            model :     inputArray[2].value,
            stoff:      inputArray[3].value ,
            leistung:   inputArray[4].value ,
            kilometer:  inputArray[5].value,
            baujahr:    inputArray[6].value
              
        }    

    autoAdd(autos);

}



