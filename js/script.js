const input = document.getElementById("nameInput");
const btn = document.getElementById("confirmBtn");
const result = document.getElementById("result");
const devPanel = document.getElementById("devPanel");

const DEV_PASSWORD = "DEV2024";

const data = {
    "hao": {
        message: "Chúc bạn có một ngày thật vui vẻ ❤️"
    }
};

function login(){

    const value = input.value.trim().toLowerCase();

    if(value === DEV_PASSWORD.toLowerCase()){

        devPanel.style.display = "block";

        result.innerHTML = `
            <h3>Xin chào DEV 👑</h3>
        `;

        return;
    }

    if(data[value]){

        result.innerHTML = `
            <h2>${data[value].message}</h2>
        `;

        document.querySelector(".card").style.width = "700px";

        return;
    }

    result.innerHTML = `
        <p>Không tìm thấy dữ liệu 😥</p>
    `;
}

btn.addEventListener("click", login);

input.addEventListener("keydown", (e)=>{

    if(e.key==="Enter"){
        login();
    }

});

for(let i=0;i<20;i++){

    const flower=document.createElement("div");

    flower.className="flower";

    flower.innerHTML="🌸";

    flower.style.left=Math.random()*100+"vw";

    flower.style.animationDuration=
        8+Math.random()*10+"s";

    document.body.appendChild(flower);
}