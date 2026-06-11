const input = document.getElementById("nameInput");
const btn = document.getElementById("confirmBtn");
const result = document.getElementById("result");
const devPanel = document.getElementById("devPanel");

const DEV_PASSWORD = "devmode@hao";

function login(){

    const value =
        input.value.trim().toLowerCase();

    if(value === DEV_PASSWORD.toLowerCase()){

        devPanel.style.display = "block";

        result.innerHTML =
            "<h3>Xin chào DEV</h3>";

        return;d
    }

    if(people[value]){

        const person = people[value];

        document.getElementById("mainCard")
            .style.width = "900px";

        result.innerHTML = `

            <h2>${person.message}</h2>

            <div class="mac-window">

                <div class="mac-bar">

                    <span class="red"></span>
                    <span class="yellow"></span>
                    <span class="green"></span>

                </div>

                <img
                    id="slideImage"
                    src="${person.photos[0]}">

            </div>

            <p class="caption">
                ${person.caption}
            </p>

        `;

        return;
    }

    result.innerHTML =
        "<p>Không tìm thấy dữ liệu 😥</p>";
}

btn.addEventListener("click", login);

input.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){
        login();
    }

});

for(let i=0;i<20;i++){

    const flower =
        document.createElement("div");

    flower.className = "flower";

    flower.innerHTML = "🌸";

    flower.style.left =
        Math.random()*100+"vw";

    flower.style.animationDuration =
        8+Math.random()*10+"s";

    document.body.appendChild(flower);
}