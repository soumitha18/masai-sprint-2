var arrnon = ["chicken-biriyani", "chicken-fingure", "chicken-fried", "chicken-kabab", "chicken-leg", "chicken-wings", "egg-biriyani", "fish-fried", "fish-mix"]
var nonamt = [400, 200, 250, 300, 300, 250, 350, 300, 400]

var arrveg = ["meals", "idly", "dosa", "chapathi", "puri", "parota", "upma", "pongal", "masala-bonda"]
var vegamt = [300, 70, 70, 100, 120, 150, 100, 150, 70]

var juices = ["rose-milk", "chocolate-milk", "coconut-milk", "milk", "coffiee", "tea", "apple", "strawberry", "watermelon"]
var juiceamt = [30, 30, 30, 15, 20, 20, 40, 40, 40]

var total = 0
var vegtotal = 0
var nontotal = 0
var juctotal = 0
var tax = 0

var btn = document.getElementById("click")

function generate() {

    var div = document.getElementById("bill")

    var divhead = document.createElement("div")
    divhead.innerHTML = "Your Bill"
    divhead.setAttribute("id", "total")
    div.appendChild(divhead)

    var name = document.getElementById("name").value
    var number = document.getElementById("number").value
    var date = document.getElementById("date").value
    var day = document.getElementById("day").value
    var non = document.getElementById("non").value
    var nonQ = document.getElementById("nonQuan").value
    var veg = document.getElementById("veg").value
    var vegQ = document.getElementById("vegQuan").value
    var juc = document.getElementById("juice").value
    var jucQ = document.getElementById("juiceQuan").value

    var na = document.createElement("p")
    na.innerHTML = "User Name : " + name
    div.appendChild(na)

    var num = document.createElement("p")
    num.innerHTML = "Mobile Number : " + number
    div.appendChild(num)

    var dat = document.createElement("p")
    dat.innerHTML = "Date : " + date
    div.appendChild(dat)

    var da = document.createElement("p")
    da.innerHTML = "Day : " + day
    div.appendChild(da)

    for (i = 0; i < 9; i++) {
        if (non == arrnon[i]) {
            nontotal += nonamt[i] * Number(nonQ)
        }
    }

    for (j = 0; j < 9; j++) {
        if (veg == arrveg[j]) {
            vegtotal += vegamt[j] * Number(vegQ)
        }
    }

    for (k = 0; k < 9; k++) {
        if (juc == juices[k]) {
            juctotal += juiceamt[k] * Number(jucQ)
        }
    }

    total = vegtotal + nontotal + juctotal

    tax = total * (5 / 100)

    total = total + tax

    if (day == "Friday") {

        var h2 = document.createElement("h2")
        h2.innerHTML = "Friday Fun"
        div.appendChild(h2)

        var hr = document.createElement("hr")
        div.appendChild(hr)

    }
    else {

        var hr = document.createElement("hr")
        div.appendChild(hr)

    }

    if (non != "") {
        var nonveg = document.createElement("p")
        nonveg.innerHTML = "Non-Veg : " + non + " - " + nonQ + " = " + nontotal + "/-"
        div.appendChild(nonveg)
    }
    if (veg != "") {
        var vegt = document.createElement("p")
        vegt.innerHTML = "Veg : " + veg + " - " + vegQ + " = " + vegtotal + "/-"
        div.appendChild(vegt)
    }

    if (juc != "") {
        var juct = document.createElement("p")
        juct.innerHTML = "Juices : " + juc + " - " + jucQ + " = " + juctotal + "/-"
        div.appendChild(juct)
    }

    var taxA = document.createElement("p")
    taxA.innerHTML = "Tax : " + tax + "/-"
    div.appendChild(taxA)

    if (day == "Friday") {

        var dis = Math.floor(total * (10 / 100))

        var discount = document.createElement("p")
        discount.innerHTML = "Friday Fun Discount : " + dis + "/-"
        div.appendChild(discount)

        total = total - dis
    }

    var divTotal = document.createElement("div")
    divTotal.setAttribute("id", "total")
    divTotal.innerHTML = "Total : " + total + "/-"
    div.appendChild(divTotal)

    var br = document.createElement("br")
    div.appendChild(br)

    var but = document.createElement("button")
    but.innerHTML = "Print"
    but.setAttribute("id", "printbtn")
    div.appendChild(but)

    document.getElementById("name").value = ""
    document.getElementById("number").value = ""
    document.getElementById("date").value = ""
    document.getElementById("day").value = ""
    document.getElementById("non").value = ""
    document.getElementById("nonQuan").value = ""
    document.getElementById("veg").value = ""
    document.getElementById("vegQuan").value = ""
    document.getElementById("juice").value = ""
    document.getElementById("juiceQuan").value = ""
}

btn.addEventListener("click", generate)