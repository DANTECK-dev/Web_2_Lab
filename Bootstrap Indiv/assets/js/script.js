window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    class Table {
        matrix

        constructor(matrix) {
            this.matrix = matrix
        }

        GetTable() {
            let str = "<table><tbody>"
            for (let row = 0; row < this.matrix.length; row++) {
                str += `<tr>`
                let rows = matrixx[row]
                for (let col = 0; col < rows.length; col++) {
                    if (this.matrix[row][col].indexOf("@#strong#@") >= 0){
                        str += `<td><strong>` + this.matrix[row][col].replace("@#strong#@", "") + `</strong></td>`
                        continue
                    }

                    if (this.matrix[row][col].indexOf("@#3#@") >= 0) {
                        str += `<td align="center" colspan="3">` + this.matrix[row][col].replace("@#3#@", "") + `</td>`
                        break
                    } else if (this.matrix[row][col].indexOf("@#2#@") >= 0) {
                        str += `<td align="center" colspan="2">` + this.matrix[row][col].replace("@#2#@", "") + `</td>`
                        break
                    }
                    str +=`<td align="center">` + this.matrix[row][col] + `</td>`
                }
                str += `</tr>`
            }
            return (str + `</tbody></table>`)
        }
    }

    let matrixx = [
        ["@#3#@Одноплатный мини-ПК Raspberry Pi"],
        [" ", "@#strong#@Model A", "@#strong#@Model B"],
        ["@#strong#@Цена", "$25", "$35"],
        ["@#strong#@System-on-a-chip (SoC)", "@#2#@Broadcom BCM2835 (CPU + GPU)"],
        ["@#strong#@CPU", "@#2#@700 МГц ARM11 (ядро ARM1176JZF-S), возможен разгон до 1 ГГц"],
        ["@#strong#@GPU", "@#2#@Broadcom VideoCore IV"],
        ["@#strong#@Стандарты", "@#2#@OpenGL ES 1.1/2.0, OpenVG 1.1, Open EGL, OpenMAX"],
        ["@#strong#@Аппаратные кодеки", "@#2#@H.264 (1080p30, high-profile); MPEG-2 и VC-1 (лицензия продаётся отдельно)"],
        ["@#strong#@Память (SDRAM, общая)", "@#2#@256 Мбайт", "512 Мбайт; 256 Мбайт (до 15.10.2012)"],
        ["@#strong#@Порты USB 2.0", "1", "2"],
        ["@#strong#@Видеовыход", "@#2#@1 x HDMI 1.3a (CEC), 1 x RCA (576i/480i, PAL-BGHID/M/N,NTSC, NTSC-J)"],
        ["@#strong#@Аудиовыход", "@#2#@Гнездо 3,5 мм, HDMI", ""],
        ["@#strong#@Карт-ридер", "@#2#@SD/MMC/SDIO"],
        ["@#strong#@Сеть", "-", "Ethernet-порт RJ45 10/100 Мбит/с"],
        ["@#strong#@Интерфейсы", "@#2#@20 x GPIO (SPI, I^(2)C, UART, TTL); MIPI CSI-2, MIPI DSI"],
        ["@#strong#@Энергопотребление", "500 мА (2,5 Вт)", "700 мА (3,5 Вт)"],
        ["@#strong#@Питание", "@#2#@5 В через порт micro-USB или GPIO"],
        ["@#strong#@Размеры", "@#2#@85,6x56x21 мм"],
        ["@#strong#@Масса", "@#2#@54 г"]
    ];
    let table = new Table(matrixx)
    document.getElementById('table').innerHTML = table.GetTable()

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