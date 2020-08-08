fetch ("https://treinamentoajax.herokuapp.com/messages/")
.then(resp => resp.json())
.then(console.log)
.catch(console.log)
 
//Primeira parte (MVP 1)

async function Enviar(){
    var fetchBody = {
        "message":{
            "name":document.getElementById("nome").value,
            "message":document.getElementById("mensagem").value
        }
    }

    var fetchConfig = {
        method: "POST",
        headers: {"Content-Type":"application/JSON"},
        body: JSON.stringify(fetchBody)
        }
    await fetch("https://treinamentoajax.herokuapp.com/messages", fetchConfig)
}

function ObterMsg(){
    Pessoas.innerHTML = ""
    fetch("https://treinamentoajax.herokuapp.com/messages")
    .then(response => response.json())
    .then(response => {
        for (i in response){
            let card = document.createElement("card");
            let h1 = document.createElement("h1");
            let p =  document.createElement("p");
            let btn = document.createElement("button");
            h1.innerHTML = response[i].name;
            p.innerHTML = response[i].message;
            btn.innerHTML = "DELETAR";
            card.appendChild(h1);
            card.appendChild(p);
            card.appendChild(btn);
            card.id = response[i].id;
            Pessoas.appendChild(card);

            btn.addEventListener("click", function(){
                fetch("https://treinamentoajax.herokuapp.com/messages" + "/" + card.id, {method:"DELETE"}).then(response => {ObterMsg()})
            })
        }
    })
}

//Segunda parte (MVP 2)

function ObterMsgespecífica(){
    Pessoas.innerHTML = ""
    fetch("https://treinamentoajax.herokuapp.com/messages")
    .then(response => response.json())
    .then(response => {
        for (i in response){
            if (response[i].id == document.getElementById("Msgespecífica").value){
                let card = document.createElement("card");
                let h1 = document.createElement("h1");
                let p =  document.createElement("p");
                let btn = document.createElement("button");
                h1.innerHTML = response[i].name;
                p.innerHTML = response[i].message;
                btn.innerHTML = "DELETAR";
                card.appendChild(h1);
                card.appendChild(p);
                card.appendChild(btn);
                card.id = response[i].id;
                Pessoas.appendChild(card);

                btn.addEventListener("click", function(){
                    fetch("https://treinamentoajax.herokuapp.com/messages" + "/" + card.id, {method:"DELETE"}).then(response => {ObterMsg()})
                })
            }
        }
    })
}
