
import data from './data.json' assert { type: 'json' };


var data_size = data.length;
var pages_required = data.length/3;

function createCard(data, serial)
{
    let li = document.createElement("li");
    let div = document.createElement("div");
    let span = document.createElement("span");

    div.appendChild(span);

    let div2 = div.cloneNode(true);
    let div3 = document.createElement("div");    

    li.appendChild(div3);
    li.appendChild(div);
    li.appendChild(div2);

    div.children[0].innerText = "Name : " + data.name;
    div2.children[0].innerText = "Location : " + data.location;
    div3.innerText = serial;
    
    div3.classList.add("serial");
    div.classList.add("name");
    div2.classList.add("loc");

    return li;
}

let card = document.getElementById("card");

function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}


var page = 0;
nextCard(card);

function nextCard(parent){

    if(page<=pages_required){
        
        let items = paginate(data, 3, ++page);
        console.log(items);
        parent.innerHTML = "";
        items.forEach((element, index) => {
            parent.appendChild(createCard(element, (page*3)-(3-index)+1));
        });

        document.getElementById("note").innerText = `CURRENTLY ${items.length} PEOPLE SHOWING`;

    }
    else{
        card.remove();
        document.getElementById("note").innerText = `NO MORE PEOPLE!`;
    }
}

document.getElementById("btn").addEventListener("click", ()=>nextCard(card));
