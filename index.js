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
            let edit = document.createElement("button");
            h1.innerHTML = response[i].name;
            p.innerHTML = response[i].message;
            btn.innerHTML = "DELETAR"; //Segunta parte(MVP 2-Botão deletar)
            edit.innerHTML = "Editar mensagem";
            card.appendChild(h1);
            card.appendChild(p);
            card.appendChild(btn);
            card.appendChild(edit);
            card.id = response[i].id;
            Pessoas.appendChild(card);

            btn.addEventListener("click", function(){
                fetch("https://treinamentoajax.herokuapp.com/messages" + "/" + card.id, {method:"DELETE"}).then(response => {ObterMsg()})
            })
//Terceira parte(MVP 3-Botão editar)
            edit.addEventListener("click", function(){
                var x = document.createElement("TEXTAREA");
                var y = document.createElement("TEXTAREA");
                let confirmedit = document.createElement("button");
                let cancelar = document.createElement("button");
                confirmedit.innerHTML = "Editar";
                cancelar.innerHTML = "Cancelar";
                card.appendChild(x);
                card.appendChild(y);
                card.appendChild(confirmedit);
                card.appendChild(cancelar);

                confirmedit.addEventListener("click", function(){
                    var fetchBody = {
                        "message":{
                            "name":x.value,
                            "message":y.value
                        }
                    }
                    var fetchConfig = {
                        method: "PUT",
                        headers: {"Content-Type":"application/JSON"},
                        body: JSON.stringify(fetchBody)
                        }
                    fetch("https://treinamentoajax.herokuapp.com/messages" + "/" + card.id, fetchConfig)
                })

                cancelar.addEventListener("click", function(){
                    x.remove();
                    y.remove();
                    confirmedit.remove();
                    cancelar.remove();

                })
            })
        }
    })
}

//Segunda parte (MVP 2-Obter Mensagem específica)

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
                let edit = document.createElement("button");
                h1.innerHTML = response[i].name;
                p.innerHTML = response[i].message;
                btn.innerHTML = "DELETAR";
                edit.innerHTML = "Editar mensagem";
                card.appendChild(h1);
                card.appendChild(p);
                card.appendChild(btn);
                card.appendChild(edit);
                card.id = response[i].id;
                Pessoas.appendChild(card);

                btn.addEventListener("click", function(){
                    fetch("https://treinamentoajax.herokuapp.com/messages" + "/" + card.id, {method:"DELETE"}).then(response => {ObterMsg()})
                })

                edit.addEventListener("click", function(){
                    var x = document.createElement("TEXTAREA");
                    var y = document.createElement("TEXTAREA");
                    let confirmedit = document.createElement("button");
                    let cancelar = document.createElement("button");
                    confirmedit.innerHTML = "Editar";
                    cancelar.innerHTML = "Cancelar";
                    card.appendChild(x);
                    card.appendChild(y);
                    card.appendChild(confirmedit);
                    card.appendChild(cancelar);
    
                    confirmedit.addEventListener("click", function(){
                        var fetchBody = {
                            "message":{
                                "name":x.value,
                                "message":y.value
                            }
                        }
                        var fetchConfig = {
                            method: "PUT",
                            headers: {"Content-Type":"application/JSON"},
                            body: JSON.stringify(fetchBody)
                            }
                        fetch("https://treinamentoajax.herokuapp.com/messages" + "/" + card.id, fetchConfig)
                    })
    
                    cancelar.addEventListener("click", function(){
                        x.remove();
                        y.remove();
                        confirmedit.remove();
                        cancelar.remove();
    
                    })
                })
            }
        }
    })
}
