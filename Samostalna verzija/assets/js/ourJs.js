var comments = {
    cardioCom1: ["Jako naporan, ali zanimljiv trening", "HELLO"],
    cardioCom2: [],
    cardioCom3: [],
    coreCom1: [],
    coreCom2: [],
    coreCom3: [],
    pilatesCom1: ["OVO RADI!"],
    pilatesCom2: [],
    pilatesCom3: [],
    yogaCom1: [],
    yogaCom2: [],
    yogaCom3: []
}
class MojTrening {
    constructor(name, time, day, milis, number) {
        this.name = name;
        this.time = time;
        this.day = day;
        this.milis = milis;
        this.number = number
    }

}

var getDay = () => {
    let date1 = new Date();
    let time1 = '10:00'
    let time2 = date1.getHours() + ':' + date1.getMinutes();
    if (time2.localeCompare(time1) == 1) {
        console.log(time1 + " je pre " + time2);
    } else {
        console.log(time2 + " je pre " + time1);
    }
    //let date2 = new Date('4/27/2020');
    //alert("Danas je " + date1.getMinutes() + ", a standard je " + date2.getMinutes());
}

var dani = {
    Ponedeljak: 1,
    Utorak: 2,
    Sreda: 3,
    Cetvrtak: 4,
    Petak: 5,
    Subota: 6,
    Nedelja: 7 //Inace 0

}

var mojiTreninzi = [];

var showComents = id => {
    //document.getElementById("komentar").classList.toggle("sakriveno").toggle("vidljivo");
    //document.getElementById(id).classList.toggle("sakriveno");

}



var displayComents = id => {
    insertCom(id);
    document.getElementById(id).innerHTML += `<textarea name="kom" id="komentar${id}" rows="2" cols="100" class="form-control bg-dark komentar"></textarea>\
    <br>\
    </li>
    </ul>
    <input type="button" value="Postavi" id="komentar2" name="kom" class="btn bg-dark btn-pos btn-middle" onclick="setKom('${id}')">\
    <button type="button" class="button btn bg-dark btn-pos btn-middle" onclick="hide('${id}')"> Sakrij </button>`

}

var hide = id => {
    document.getElementById(id).innerHTML = ''
}

var init = () => {
    if (!(typeof localStorage.comments !== 'undefined')) {
        localStorage.comments = JSON.stringify(comments);
    }
    localStorage['cardioCom1'] = false;
    localStorage['cardioCom2'] = false;
    localStorage['cardioCom3'] = false;
    localStorage['coreCom1'] = false;
    localStorage['coreCom2'] = false;
    localStorage['coreCom3'] = false;
    localStorage['pilatesCom1'] = false;
    localStorage['pilatesCom2'] = false;
    localStorage['pilatesCom3'] = false;
    localStorage['yogaCom1'] = false;
    localStorage['yogaCom2'] = false;
    localStorage['yogaCom3'] = false;
}

var initPoseceni = () => {

    if (!(typeof sessionStorage.mojiTreninzi !== 'undefined')) {
        mojiTreninzi.push(new MojTrening('combatZak', '19:00', 'Ponedeljak', new Date('4/27/2020'), 1));
        mojiTreninzi.push(new MojTrening('combatZak', '19:00', 'Sreda', new Date('4/22/2020'), 2));
        mojiTreninzi.push(new MojTrening('combatZak', '19:00', 'Petak', new Date('4/24/2020'), 3));
        mojiTreninzi.push(new MojTrening('combatZak', '19:00', 'Nedelja', new Date('4/26/2020'), 4));
        mojiTreninzi.push(new MojTrening('combatZak', '19:00', 'Ponedeljak', new Date('4/20/2020'), 1));



        sessionStorage.mojiTreninzi = JSON.stringify(mojiTreninzi);
    }
}

var initZak = () => {
    if (!(typeof localStorage.birkamZakSM3 !== 'undefined')) {
        localStorage.birkamZakSM3 = 5;
        localStorage.birkamZakSM2 = 0;
        localStorage.birkamZakSM1 = 0;

        localStorage.yinZakSM1 = 0;
        localStorage.yinZakSM2 = 0;
        localStorage.yinZakSM3 = 0;

        localStorage.prenatalZakSM1 = 1;
        localStorage.prenatalZakSM2 = 0;

        localStorage.pilatesZakSM1 = 1;
        localStorage.pilatesZakSM2 = 1;
        localStorage.pilatesZakSM3 = 0;

        localStorage.stottZakSM1 = 0;
        localStorage.stottZakSM2 = 0;
        localStorage.stottZakSM3 = 0;

        localStorage.reformerZakSM1 = 2;
        localStorage.reformerZakSM2 = 1;
        localStorage.reformerZakSM3 = 2;

        localStorage.cxworxZakSM1 = 5;
        localStorage.cxworxZakSM2 = 7;
        localStorage.cxworxZakSM3 = 5;

        localStorage.bodyweightZakSM1 = 0;
        localStorage.bodyweightZakSM2 = 0;
        localStorage.bodyweightZakSM3 = 8;

        localStorage.plankZakSM1 = 0;
        localStorage.plankZakSM2 = 0;

        localStorage.combatZakSM1 = 15;
        localStorage.combatZakSM2 = 15;
        localStorage.combatZakSM3 = 15;
        localStorage.combatZakSM4 = 15;

        localStorage.RPMZakSM1 = 8;
        localStorage.RPMZakSM2 = 19;
        localStorage.RPMZakSM3 = 10;
        localStorage.RPMZakSM4 = 18;

        localStorage.stepZakSM1 = 4;
        localStorage.stepZakSM2 = 3;
        localStorage.stepZakSM3 = 4;
    }
}
var insertCom = id => {
    document.getElementById(id).innerHTML = '';
    comments = JSON.parse(localStorage.comments);
    comments[`${id}`].forEach(elem => {
        console.log(elem);
        document.getElementById(id).innerHTML += `<textarea disabled name="kom" id="komentar" rows="1" cols="100" class="form-control bg-dark komentar">` + elem;
        document.getElementById(id).innerHTML += `</textarea><br>`;
    })

}

var setKom = id => {
    let com = document.getElementById(`komentar${id}`).value;
    if (com !== '') {
        comments[`${id}`].push(com);
        localStorage.comments = JSON.stringify(comments);
        displayComents(id);
    }
}

var mark = id => {
    if (localStorage[`${id}`] === 'false') {
        localStorage[`${id}`] = true;
        document.getElementById(id).innerHTML = '';
        document.getElementById(id).innerHTML += `<select class="ocena" id="${id}NewMark">
    <option class="ocena">1</option>
    <option class="ocena">2</option>
    <option class="ocena">3</option>
    <option class="ocena">4</option>
    <option class="ocena">5</option>
    </select>
    &nbsp;&nbsp;
    <button type="button" class="button btn bg-dark btn-pos btn-middle" onclick="storeMark('${id}')"> Potvrdi </button>`
    } else {
        localStorage[`${id}`] = false;
        hide(id);
    }
}

var storeMark = id => {
    let currMark = parseFloat(document.getElementById(`${id}Mark`).innerText);
    let newMark = parseFloat(document.getElementById(`${id}NewMark`).value);
    currMark = (currMark + newMark) / 2;
    document.getElementById(`${id}Mark`).innerText = currMark;
    localStorage[`${id}Mark`] = currMark;
    localStorage[`${id}`] = false;
    hide(id);
}

var loadMark = id => {
    if (typeof localStorage[`${id}`] !== 'undefined') {
        document.getElementById(`${id}`).innerText = localStorage[`${id}`];
    }
}


var reserve = (trening, rdBr, time, day) => {

    let vrednost = localStorage[trening + 'SM' + rdBr];
    console.log(vrednost);
    document.getElementById(trening + 'SM' + rdBr).innerText = vrednost - 1;
    localStorage[trening + 'SM' + rdBr] = vrednost - 1;
    if (vrednost == 1) {
        document.getElementById(trening + 'Button' + rdBr).disabled = true;
        document.getElementById(trening + 'Button' + rdBr).classList.add('disabled');
    }
    let date1 = new Date();
    let month1 = date1.getMonth(); //mesec
    month1++; //Zato sto Januar vraca kao 0, a kad upisujes trazi 1
    let dateDay1 = date1.getDate(); //dan u mesecu
    let day1 = date1.getDay(); //rd br dana
    day1 = ((day1 == 0) ? 7 : day1);
    let offset = dani[`${day}`] - day1;
    //let date1chopped = new Date(month1 + '/' + dateDay1 + '/2020'); //Danasnji datum resetovan na 00:00
    let time1 = date1.getHours() + ':' + date1.getMinutes();
    if (offset == 0 && time1.localeCompare(time) == 1) {//Zakazuje se trening za danas, Trening je sledece nedelje 
        offset = 7;
    }
    dateDay1 += offset;
    if (dateDay1 > 30) {
        month1++;
        dateDay1 -= 30;
    }
    let date1chopped = new Date(month1 + '/' + dateDay1 + '/2020');
    date1chopped.setHours(`${time[0]}${time[1]}`);

    mojiTreninzi = JSON.parse(sessionStorage.mojiTreninzi);
    mojiTreninzi.push(new MojTrening(trening, time, day, date1chopped, rdBr));

    sessionStorage.mojiTreninzi = JSON.stringify(mojiTreninzi);


}

var reload = trening => {
    document.getElementById(trening + 'SM1').innerText = localStorage[trening + 'SM1'];
    document.getElementById(trening + 'SM2').innerText = localStorage[trening + 'SM2'];

    if (typeof localStorage[trening + 'SM3'] === 'undefined') {

    } else {
        document.getElementById(trening + 'SM3').innerText = localStorage[trening + 'SM3'];
        if (localStorage[trening + 'SM3'] <= 0) {
            document.getElementById(trening + 'Button3').disabled = true;
            document.getElementById(trening + 'Button3').classList.add('disabled');
        } else {
            document.getElementById(trening + 'Button3').disabled = false;
            document.getElementById(trening + 'Button3').classList.remove('disabled');
        }
    }
    if (typeof localStorage[trening + 'SM4'] === 'undefined') {

    } else {
        document.getElementById(trening + 'SM4').innerText = localStorage[trening + 'SM4'];
        if (localStorage[trening + 'SM4'] <= 0) {
            document.getElementById(trening + 'Button4').disabled = true;
            document.getElementById(trening + 'Button4').classList.add('disabled');
        }
    }

    if (localStorage[trening + 'SM1'] <= 0) {
        document.getElementById(trening + 'Button1').disabled = true;
        document.getElementById(trening + 'Button1').classList.add('disabled');
    }

    if (localStorage[trening + 'SM2'] <= 0) {
        document.getElementById(trening + 'Button2').disabled = true;
        document.getElementById(trening + 'Button2').classList.add('disabled');
    }


}