fetch ("https://treinamentoajax.herokuapp.com/messages/")
.then(resp => resp.json())
.then(console.log)
.catch(console.log)
 
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
    fetch("https://treinamentoajax.herokuapp.com/messages")
    .then(response => response.json())
    .then(response => {
        for (i in response){
            let card = document.createElement("card");
            let h1 = document.createElement("h1");
            let p =  document.createElement("p");
            h1.innerHTML = response[i].name;
            p.innerHTML = response[i].message;
            card.appendChild(h1);
            card.appendChild(p);
            card.id = response[i].id;
            Pessoas.appendChild(card);
        }
    })
}