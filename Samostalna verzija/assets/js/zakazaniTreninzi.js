var poseceniTreninzi = [];

var predstojeciTreninzi = [];

var nazivi = {
    prenatalZak: 'Prenatal Yoga',
    reformerZak: 'Reformer Pilates',
    plankZak: 'Plank',
    cxworxZak: 'CXWORX',
    RPMZak: 'RPM',
    combatZak: 'Body Combat',
    yinZak: 'Yin Yoga',
    bodyweightZak: 'Bodyweight',
    stottZak: 'Stott Pilates',
    pilatesZak: 'Klasični pilates',
    birkamZak: 'Bikram Yoga',
    stepZak: 'Body Step'
}


var loadZakazane = () => {
    sortTreninge();
    let string = '';
    let datum = '';
    let i = 0;
    predstojeciTreninzi.forEach(trening => {
        datum = new Date(trening.milis).getDate();
        datum += '.';
        datum += (new Date(trening.milis).getMonth() + 1);
        datum += '.2020.';
        string += '<div class="row tileTreninzi">';
        string += '<div class="tile5 col-xs-12 col-sm-6 col-md-4">';
        string += nazivi[`${trening.name}`];
        string += '</div>';
        string += '<div class="tile5 col-xs-12 col-sm-6 col-md-4">';
        string += datum;
        string += ' ' + trening.day;
        string += '</div>';
        string += '<div class="tile5 col-xs-6 col-sm-6 col-md-2">';
        string += trening.time;
        string += '</div>';
        string += '<div class="tile5 col-xs-6 col-sm-6 col-md-2">';
        string += `<button class="otkaziDugme" type="button" id=${i} onclick=otkazi(id)`;
        if((new Date(trening.milis) - new Date()) < 30*60*1000){
            string += 'disabled';
        }
        string += '>Otkaži </button>'
        string += '</div>';
        string += '</div>';
        ++i;
    });
    document.getElementById('predstojeci').innerHTML = string;

    string='';

    poseceniTreninzi.forEach(trening => {
        datum = new Date(trening.milis).getDate();
        datum += '.';
        datum += (new Date(trening.milis).getMonth() + 1);
        datum += '.2020.';
        string += '<div class="row tileTreninzi">';
        string += '<div class="tile5 col-xs-12 col-sm-6 col-md-4">';
        string += nazivi[`${trening.name}`];
        string += '</div>';
        string += '<div class="tile5 col-xs-12 col-sm-6 col-md-4">';
        string += datum;
        string += ' ' + trening.day;
        string += '</div>';
        string += '<div class="tile5 col-xs-6 col-sm-6 col-md-2">';
        string += trening.time;
        string += '</div>';
        string += '<div class="tile5 col-xs-6 col-sm-6 col-md-2">';
        //string += '<button class="otkaziDugme" type="button">Otkazi </button>'
        string += '</div>';
        string += '</div>';
    });

    document.getElementById('poseceni').innerHTML = string;
    
}
/*
<div class="col-10">
	<div class="row tile3">
						<div class="tile5 col-xs-12 col-sm-6 col-md-6">
							Naziv
						</div>
						<div class="tile5 col-xs-12 col-sm-6 col-md-4">
							Datum
						</div>
						<div class="tile5 col-xs-6 col-sm-6 col-md-1">
							Vreme
						</div>
						<div class="tile5 col-xs-6 col-sm-6 col-md-1">
							Otkazi
						</div>
	</div>


</div>
*/

var datumiSort = (a, b) => {
    let aa = new Date(a.milis);
    let bb = new Date(b.milis);
    return aa - bb;
}

var sortTreninge = () => {
    treninzi = JSON.parse(sessionStorage.mojiTreninzi);
    predstojeciTreninzi = [];
    poseceniTreninzi = [];
    treninzi.forEach(element => {
        if (new Date(element.milis) - new Date() >= 0) {
            predstojeciTreninzi.push(element);
        } else {
            poseceniTreninzi.push(element);
        }
    });
    predstojeciTreninzi.sort(datumiSort);
    poseceniTreninzi.sort(datumiSort);
    console.log(new Date());
    //console.log(predstojeciTreninzi);
    //console.log(poseceniTreninzi);
    return poseceniTreninzi;

}

var otkazi = id => {
    console.log(id);
    let otkazanTrening = predstojeciTreninzi[id];
    let path = otkazanTrening.name +'SM' + otkazanTrening.number;
    localStorage[`${path}`]++;
    predstojeciTreninzi.splice(id, 1);
    console.log(predstojeciTreninzi);
    sessionStorage.mojiTreninzi = JSON.stringify(predstojeciTreninzi.concat(poseceniTreninzi));
    loadZakazane();
}
