

const networkWindow = document.querySelector(".network")
const blink1_1 = document.querySelector("#blink1_first")
const blink1_2 = document.querySelector("#blink1_second")
const blink1_3 = document.querySelector("#blink1_third")
const bl_cont = document.querySelector(".blink1_cont")
//networks

const network = document.querySelector(".network")

const wifi_name1 = document.querySelector("#net-name1")
const wifi_name2 = document.querySelector("#net-name2")
const wifi_name3 = document.querySelector("#net-name3")
const wifi_name4 = document.querySelector("#net-name4")
const wifi_name5 = document.querySelector("#net-name5")
const wifi_name6 = document.querySelector("#net-name6")

const wifi_names = document.querySelector(".net-name")
//connect buttons

const conn1 = document.querySelector("#connect1")
const conn2 = document.querySelector("#connect2")
const conn3 = document.querySelector("#connect3")
const conn4 = document.querySelector("#connect4")
const conn5 = document.querySelector("#connect5")
const conn6 = document.querySelector("#connect6")

const connBtn = document.querySelectorAll(".connect")

const logo = document.querySelector("img")

const logo1 = document.querySelector("#img1")
const logo2 = document.querySelector("#img2")
const logo3 = document.querySelector("#img3")
const logo4 = document.querySelector("#img4")
const logo5 = document.querySelector("#img5")
const logo6 = document.querySelector("#img6")











//screen
const para_boxMain = document.querySelector(".box_p");

const para_box1 = document.querySelector("#p1")
const para_box2 = document.querySelector("#p2")
const para_box3 = document.querySelector("#p3")
const para_box4 = document.querySelector("#p4")
const para_box5 = document.querySelector("#p5")
const para_box6 = document.querySelector("#p6")

const box_title = document.querySelector("#bef_title_main")




/*                 Main Code                   */
//slider

networkWindow.addEventListener("click", () => {
    networkWindow.classList.toggle("network_after")
})


function blinking1() {
    if (blink1_1.style.visibility === "hidden") {
        blink1_1.style.visibility = "visible"
    } else {
        blink1_1.style.visibility = "hidden"
    }
}



function blinking2() {
    if (blink1_2.style.visibility === "hidden") {
        blink1_2.style.visibility = "visible"
    } else {
        blink1_2.style.visibility = "hidden"
    }
}

function blinking3() {
    if (blink1_3.style.visibility === "hidden") {
        blink1_3.style.visibility = "visible"
    } else {
        blink1_3.style.visibility = "hidden"
    }
}

setTimeout(() => {
    setInterval(blinking1, 500);

    setTimeout(() => {
        setInterval(blinking2, 500);

        setTimeout(() => {
            setInterval(blinking3, 500);
        }, 200);
    }, 100)
}, 100);

//random network name generating

let name1 = Math.ceil(Math.random() * 4)
let name2 = Math.ceil(Math.random() * 4)
let name3 = Math.ceil(Math.random() * 4)
let name4 = Math.ceil(Math.random() * 4)
let name5 = Math.ceil(Math.random() * 4)
let name6 = Math.ceil(Math.random() * 4)

name1 === 1 ? wifi_name1.innerText = "Airtel_5G+" : name1 === 2 ? wifi_name1.innerText = "ACT" : name1 === 3 ? wifi_name1.innerText = "National_4G" : wifi_name1.innerText = "Ajay's_Wifi"

name2 === 1 ? wifi_name2.innerText = "Vodafone_5G" : name2 === 2 ? wifi_name2.innerText = "Home" : name2 === 3 ? wifi_name2.innerText = "Private_Net" : wifi_name2.innerText = "Raghav_Singh";

name3 === 1 ? wifi_name3.innerText = "Sunil" : name3 === 2 ? (wifi_name3.innerText = "Shree_Ram Networks", wifi_name3.style.margin = "5px 0 0 0") : name3 === 3 ? wifi_name3.innerText = "Balaji_Caters" : wifi_name3.innerText = "FronTech_Inc.";

name4 === 1 ? wifi_name4.innerText = "WTP_Jaipur" : name4 === 2 ? wifi_name4.innerText = "Padosi_WiFi" : name4 === 3 ? wifi_name4.innerText = "Andhra_Spice" : wifi_name4.innerText = "WorkHub";

name5 === 1 ? wifi_name5.innerText = "Ext_Access" : name5 === 2 ? wifi_name5.innerText = "SecureNet" : name5 === 3 ? wifi_name5.innerText = "ProNet" : wifi_name5.innerText = "MotiSons";

name6 === 1 ? wifi_name6.innerText = "Network_hQ" : name6 === 2 ? wifi_name6.innerText = "Jaipur_34" : name6 === 3 ? wifi_name6.innerText = "OfficeLink" : wifi_name6.innerText = "Nacho_yaar";

//on screen

const ip = Math.ceil(Math.random() * 4800 + 200)
const timeout_msg = Math.ceil(Math.random() * 2 + 2)


console.log(timeout_msg)

function noneDisp() {
    para_box1.style.display = "none";
    para_box2.style.display = "none";
    para_box3.style.display = "none";
    para_box4.style.display = "none";
    para_box5.style.display = "none";
    para_box6.style.display = "none";
}


const success = document.createElement("h2");
const mainBox = document.querySelector(".mainBox");

function creteEleSuccess() {
    success.setAttribute("class", "successMsg");
    mainBox.appendChild(success)
    mainBox.style.textAlign = "center";
    mainBox.style.fontSize = "30px"
};


const speed = document.createElement("h3");

function ping() {
    speed.setAttribute("class", "speed");
    mainBox.appendChild(speed)
    speed.style.fontSize = "17px"
    speed.style.color = "red"
};






function timeMain1() {
    setTimeout(() => {
        para_box2.innerText = `tracking IP : @${ip}`

        setTimeout(() => {
            para_box3.innerText = `Stealing Network`

            setTimeout(() => {
                para_box4.innerText = `Cleaning All Evidences`

                setTimeout(() => {
                    para_box5, innerText = "Cleaning All Evidences"

                    setTimeout(() => {
                        para_box6.innerText = "Almost There"

                        setTimeout(() => {
                            noneDisp()
                            creteEleSuccess();
                            ping()


                        }, 1300);

                    }, timeout_msg * 1200);

                }, timeout_msg * 700);

            }, timeout_msg * 500);

        }, timeout_msg * 850);

    }, timeout_msg * 1000);
}

function disconnect(dis) {
    dis.innerText = "Disconnect";
    dis.style.fontSize = "15px";
    dis.style.display = "flex"
    dis.style.justifyContent = "center";
    dis.style.alignItems = "center";
}

function reloadFunc(cnBtn, wifiN) {
    cnBtn.addEventListener("click", () => {
        alert(`You Are Now Disconnected from ${wifiN.innerText}`)
        window.location.reload()
    })
}



function unableConnect(con1, con2, con3, con4, con5, con6, wi1, wi2, wi3, wi4, wi5, wi6, log1, log2, log3, log4, log5, log6) {

    con1.style.display = "none";
    con2.style.display = "none";
    con3.style.display = "none";
    con4.style.display = "none";
    con5.style.display = "none";
    con6.style.display = "none";

    wi1.style.opacity = "50%";
    wi2.style.opacity = "50%";
    wi3.style.opacity = "50%";
    wi4.style.opacity = "50%";
    wi5.style.opacity = "50%";
    wi6.style.opacity = "50%";

    log1.style.opacity = "50%";
    log2.style.opacity = "50%";
    log3.style.opacity = "50%";
    log4.style.opacity = "50%";
    log5.style.opacity = "50%";
    log6.style.opacity = "50%";

}

function unConnectVisible(wiName, wiLogo) {
    wiName.style.opacity = "100%";
    wiLogo.style.opacity = "100%";
}


//random ping generating

function ranPingHFun() {
    let H = Math.ceil(Math.random() * 45 + 10);


    speed.innerText = `Ping: ${H}`
    speed.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
}

function ranPingMFun() {
    let M = Math.ceil(Math.random() * 185 + 55);


    speed.innerText = `Ping: ${M}`
    speed.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
}

function ranPingLFun() {
    let L = Math.ceil(Math.random() * 600 + 240);


    speed.innerText = `Ping: ${L}`
    speed.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
}







conn1.addEventListener("click", () => {
    bl_cont.classList.add("hide");

    unableConnect(conn1, conn2, conn3, conn4, conn5, conn6, wifi_name1, wifi_name2, wifi_name3, wifi_name4, wifi_name5, wifi_name6, logo1, logo2, logo3, logo4, logo5, logo6);
    unConnectVisible(wifi_name1, logo1);

    disconnect(conn1);
    reloadFunc(conn1, wifi_name1);

    if (box_title) {
        box_title.innerText = wifi_names.innerText;
        setTimeout(() => {
            para_box1.innerText = `Connecting To ${wifi_names.innerText}`;

            timeMain1();
            success.innerText = `Successfully Hacked ${wifi_names.innerText}`;
            speed.innerText = setInterval(ranPingHFun, 1500)

        }, 1000);


    }



})

conn2.addEventListener("click", () => {
    bl_cont.classList.add("hide");

    unableConnect(conn1, conn2, conn3, conn4, conn5, conn6, wifi_name1, wifi_name2, wifi_name3, wifi_name4, wifi_name5, wifi_name6, logo1, logo2, logo3, logo4, logo5, logo6);
    unConnectVisible(wifi_name2, logo2);

    disconnect(conn2);
    reloadFunc(conn2, wifi_name2);

    if (box_title) {
        box_title.innerText = wifi_name2.innerText;
        setTimeout(() => {
            para_box1.innerText = `Connecting To ${wifi_name2.innerText}`
        }, 1000);
        timeMain1();
        success.innerText = `Successfully Hacked ${wifi_name2.innerText}`;
        speed.innerText = setInterval(ranPingHFun, 1500)
    };

});

conn3.addEventListener("click", () => {
    bl_cont.classList.add("hide");

    unableConnect(conn1, conn2, conn3, conn4, conn5, conn6, wifi_name1, wifi_name2, wifi_name3, wifi_name4, wifi_name5, wifi_name6, logo1, logo2, logo3, logo4, logo5, logo6);
    unConnectVisible(wifi_name3, logo3);


    disconnect(conn3);
    reloadFunc(conn3, wifi_name3);

    if (box_title) {
        box_title.innerText = wifi_name3.innerText
        setTimeout(() => {
            para_box1.innerText = `Connecting To ${wifi_name3.innerText}`
        }, 1000);
        timeMain1()
    }
    success.innerText = `Successfully Hacked ${wifi_name3.innerText}`;
    speed.innerText = setInterval(ranPingMFun, 1500);

})

conn4.addEventListener("click", () => {
    bl_cont.classList.add("hide");

    unableConnect(conn1, conn2, conn3, conn4, conn5, conn6, wifi_name1, wifi_name2, wifi_name3, wifi_name4, wifi_name5, wifi_name6, logo1, logo2, logo3, logo4, logo5, logo6);
    unConnectVisible(wifi_name4, logo4);


    disconnect(conn4);
    reloadFunc(conn4, wifi_name4);

    if (box_title) {
        box_title.innerText = wifi_name4.innerText;
        setTimeout(() => {
            para_box1.innerText = `Connecting To ${wifi_name4.innerText}`
        }, 1000);
        timeMain1()
    }
    success.innerText = `Successfully Hacked ${wifi_name4.innerText}`;
    speed.innerText = setInterval(ranPingMFun, 1500);


})

conn5.addEventListener("click", () => {
    bl_cont.classList.add("hide");

    unableConnect(conn1, conn2, conn3, conn4, conn5, conn6, wifi_name1, wifi_name2, wifi_name3, wifi_name4, wifi_name5, wifi_name6, logo1, logo2, logo3, logo4, logo5, logo6);
    unConnectVisible(wifi_name5, logo5);


    disconnect(conn5);
    reloadFunc(conn5, wifi_name5);

    if (box_title) {
        box_title.innerText = wifi_name5.innerText;
        setTimeout(() => {
            para_box1.innerText = `Connecting To ${wifi_name5.innerText}`
        }, 1000);
        timeMain1()
    }
    success.innerText = `Successfully Hacked ${wifi_name5.innerText}`;
    speed.innerText = setInterval(ranPingLFun, 1500);


})

conn6.addEventListener("click", () => {
    bl_cont.classList.add("hide");

    unableConnect(conn1, conn2, conn3, conn4, conn5, conn6, wifi_name1, wifi_name2, wifi_name3, wifi_name4, wifi_name5, wifi_name6, logo1, logo2, logo3, logo4, logo5, logo6);
    unConnectVisible(wifi_name6, logo6);


    disconnect(conn6)
    reloadFunc(conn6, wifi_name6);

    if (box_title) {
        box_title.innerText = wifi_name6.innerText;
        setTimeout(() => {
            para_box1.innerText = `Connecting To ${wifi_name6.innerText}`
        }, 1000);
        timeMain1()
    }
    success.innerText = `Successfully Hacked ${wifi_name6.innerText}`;
    speed.innerText = setInterval(ranPingLFun, 1500);

})




