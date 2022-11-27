window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    class Table{
        col
        data
        constructor(col, data) {
            this.col = col
            this.data = data
        }
        GetTable(){
            let str="<table><tbody>"
            for(let row = 0; row < rows.length; row++){
                str+=""
            }
        }
    }

    class Link {
        hyperlink
        tooltip
        color

        constructor(link, tooltip, color) {
            this.hyperlink = link
            this.tooltip = tooltip
            this.color = color
        }

        GetHTML() {
            return `<a title='` + this.tooltip + `' href='` + this.hyperlink + `' class='` + this.color + `'>Забыли пароль?</a>`
        }
    }

    let links = [
        new Link("arduino.html", "Arduino", "red"),
        new Link("raspberry.html", "Raspberry", "green"),
        new Link("index.html", "Главная", "blue"),
    ]

    const rand_link = links[getRandomInt(0, 3)]
    document.getElementById("rand_link").innerHTML = rand_link.GetHTML()

    function changeColor(day) {
        if (day) {
            console.log("сейчас день")
            document.body.style.background = '#fff';
            document.getElementsByClassName("navbar-inverse").item(0).style.borderColor = '#000'
            document.getElementsByClassName("panel-body").item(0).style.background = '#f9f9f9'
            document.getElementsByClassName("panel-body").item(1).style.background = '#f9f9f9'
            document.getElementsByClassName("panel-body").item(2).style.background = '#f9f9f9'
            let n = document.getElementsByClassName("width")
            for (let i = 0; i < n.length; i++) {
                n.item(i).style.color = '#111'
                n.item(i).style.background = '#fdfdfd'
            }
            let mark = document.getElementsByClassName("mark")
            for (let i = 0; i < mark.length; i++) {
                mark.item(i).style.color = '#af5508'
            }
            let a = document.getElementsByTagName("p")
            for (let i = 0; i < a.length; i++) {
                a.item(i).style.color = '#222'
            }
            let table = document.getElementsByTagName("table")
            for (let i = 0; i < table.length; i++) {
                table.item(i).style.color = '#222'
            }
            document.getElementsByTagName("footer").item(0).style.borderColor = '#000'
        } else {
            console.log("сейчас ночь")
            document.body.style.background = '#222';
            document.getElementsByClassName("navbar-inverse").item(0).style.borderColor = '#f9f9f9'
            document.getElementsByClassName("panel-body").item(0).style.background = '#333'
            document.getElementsByClassName("panel-body").item(1).style.background = '#333'
            document.getElementsByClassName("panel-body").item(2).style.background = '#333'
            let n = document.getElementsByClassName("width")
            for (let i = 0; i < n.length; i++) {
                n.item(i).style.color = '#aaa'
                n.item(i).style.background = '#313031'
            }
            let mark = document.getElementsByClassName("mark")
            for (let i = 0; i < mark.length; i++) {
                mark.item(i).style.color = 'lightsalmon'
            }
            let a = document.getElementsByTagName("p")
            for (let i = 0; i < a.length; i++) {
                a.item(i).style.color = '#aaa'
            }
            let table = document.getElementsByTagName("table")
            for (let i = 0; i < table.length; i++) {
                table.item(i).style.color = '#aaa'
            }
            document.getElementsByTagName("footer").item(0).style.borderColor = '#f9f9f9'
        }
        return !day
    }

    let now = new Date();
    let clock = document.getElementById("clock");
    clock.innerHTML = "Текущее время: " + now.toLocaleTimeString().split(':')[0] + ":" + now.toLocaleTimeString().split(':')[1];
    let hour = parseInt(now.toLocaleTimeString().split(':')[0])
    let day = hour > 7 && hour < 21;
    day = changeColor(day)
    if (!day) {
        clock = document.getElementById("clock").innerHTML =
            +String(now.getDate()).padStart(2, '0') + "/"
            + String(now.getMonth() + 1).padStart(2, '0') + "/"
            + now.getFullYear()
            + " Текущее время: "
            + now.toLocaleTimeString().split(':')[0]
            + ":"
            + now.toLocaleTimeString().split(':')[1]
            + " Включена дневная тема";
    } else {
        clock = document.getElementById("clock").innerHTML =
            +String(now.getDate()).padStart(2, '0') + "/"
            + String(now.getMonth() + 1).padStart(2, '0') + "/"
            + now.getFullYear()
            + " Текущее время: "
            + now.toLocaleTimeString().split(':')[0]
            + ":"
            + now.toLocaleTimeString().split(':')[1]
            + " Включена ночная тема";
    }
    window.setInterval(function () {
        now = new Date();
        hour = parseInt(now.toLocaleTimeString().split(':')[0])
        console.log(now.toLocaleTimeString())
        if ((hour > 7 && hour < 21) && day === true) {
            console.log("смена на день " + hour + " час " + day)
            day = changeColor(day)
        }
        if (!(hour > 7 && hour < 21) && day === false) {
            console.log("смена на ночь " + hour + " час " + day)
            day = changeColor(day)
        }
        if (!day) {
            clock = document.getElementById("clock").innerHTML =
                +String(now.getDate()).padStart(2, '0') + "/"
                + String(now.getMonth() + 1).padStart(2, '0') + "/"
                + now.getFullYear()
                + " Текущее время: "
                + now.toLocaleTimeString().split(':')[0]
                + ":"
                + now.toLocaleTimeString().split(':')[1]
                + " Включена дневная тема";
        } else {
            clock = document.getElementById("clock").innerHTML =
                +String(now.getDate()).padStart(2, '0') + "/"
                + String(now.getMonth() + 1).padStart(2, '0') + "/"
                + now.getFullYear()
                + " Текущее время: "
                + now.toLocaleTimeString().split(':')[0]
                + ":"
                + now.toLocaleTimeString().split(':')[1]
                + " Включена ночная тема";
        }
    }, 1000);
}