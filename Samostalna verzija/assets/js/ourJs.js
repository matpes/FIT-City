



var comments = {
    cardioCom1: ["Jako naporan, ali zanimljiv trening", "HELLO"],
    cardioCom2: [],
    cardioCom3: [],
    coreCom1: [],
    coreCom2: [],
    coreCom3: []
}


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
    localStorage['cardioCom1'] = false;
    localStorage['cardioCom2'] = false;
    localStorage['cardioCom3'] = false;
}
var insertCom = id => {
    document.getElementById(id).innerHTML = '';
    comments[`${id}`].forEach(elem => {
        console.log(elem);
        document.getElementById(id).innerHTML += `<textarea disabled name="kom" id="komentar" rows="1" cols="100" class="form-control bg-dark komentar">` + elem;
        document.getElementById(id).innerHTML += `</textarea><br>`;
    })
    /*
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        document.getElementById(id).innerHTML += `<textarea name="kom" id="komentar" rows="2" cols="100" class="form-control bg-dark komentar">`;
        document.getElementById(id).innerHTML += array[i];
        document.getElementById(id).innerHTML += `</textarea><br>`;
    };*/
}

var setKom = id => {
    let com = document.getElementById(`komentar${id}`).value;
    if (com !== '') {
        comments[`${id}`].push(com);
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
    }else{
        localStorage[`${id}`] = false;
        hide(id);
    }
}

var storeMark = id => {
    let currMark = parseInt(document.getElementById(`${id}Mark`).innerText);
    let newMark = parseInt(document.getElementById(`${id}NewMark`).value);
    console.log(currMark);
    console.log(newMark);
    currMark = (currMark+newMark)/2;
    console.log(currMark);
    document.getElementById(`${id}Mark`).innerText = currMark;
    hide(id);
}