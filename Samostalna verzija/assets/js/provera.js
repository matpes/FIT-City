$(document).ready(function () {

    $('#exportPDF').hide();
    $('#exportPDF2').hide();

    $("#posaljiZahtev").click(function () {
        let can = true;
        let ime = $('#ime').val();
        let prezime = $('#prezime').val();
        let mail = $('#mail').val();
        let broj = $('#telefon').val();
        let opis = $('#opis').val();
        let datum = $('#datum').val();

        //IME
        if (ime != '') {
            let regex = /[0-9]/;
            if (regex.test(ime)) {
                can = false;
                $('#imeNapomena').show();
                $('#imeNapomena').text('Ime ne moze imati brojeve');
            }else{
                $('#imeNapomena').hide();
            }
  
        } else {
            can = false;
            $('#imeNapomena').show();
            $('#imeNapomena').text('Morate uneti ime');
        }


        //PREZIME
        if (prezime != '') {
            let regex = /[0-9]/;
            if (regex.test(prezime)) {
                can = false;
                $('#prezimeNapomena').show();
                $('#prezimeNapomena').text('Prezime ne moze imati brojeve');
            }else{
                $('#prezimeNapomena').hide();
            }
        } else {
            can = false;
            $('#prezimeNapomena').show();
            $('#prezimeNapomena').text('Morate uneti prezime');
        }


        //OPIS
        if (opis == '') {
            can = false;
            $('#opisNapomena').show();
            $('#opisNapomena').text('Morate uneti opis');
        }else{
            $('#opisNapomena').hide();
        }

        //DATUM
        if(datum != ''){
            $('#datumNapomena').hide();
            if(new Date(datum) - new Date()<0){
                can = false;
                $('#datumNapomena').show();
                $('#datumNapomena').text('Morate uneti predstojeci datum');
            }
        }else{
            can = false;
            $('#datumNapomena').show();
            $('#datumNapomena').text('Morate uneti datum');
        }


        //MAIL

        if(mail!= ''){
            let mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (mailRegExp.test(mail)) {
                $('#mailNapomena').hide();
            }else{
                can = false;
                $('#mailNapomena').show();
                $('#mailNapomena').text('Mail nije u dobrom formatu');
                
            }
        }else{
            can = false;
            $('#mailNapomena').show();
            $('#mailNapomena').text('Morate uneti mail');
        }

        //TELEFON
        if(broj != ''){
            let mobileRegExp = /^(\d{10}|\d{3}-\d{3}-\d{4}|\d{3}\/\d{3}-\d{4}|\d{3}-\d{3}-\d{2}-\d{2}|\d{3}\/\d{3}-\d{2}-\d{2}|\(\d{3}\)\d{3}-\d{4})$/;
            if (mobileRegExp.test(broj)) {
                $('#telefonNapomena').hide();
            }else{
                can = false;
                $('#telefonNapomena').show();
                $('#telefonNapomena').text('Broj telefona nije u dobrom formatu');
                
            }
        }else{
            can = false;
            $('#telefonNapomena').show();
            $('#telefonNapomena').text('Morate uneti broj telefona');
        }
        if(can){
            $('#exportPDF').show();
            $('#exportPDF2').show();
        }else{
            $('#exportPDF').hide();
            $('#exportPDF2').hide();
        }

    });


    $('#exportPDF').click(function () {
        let can = true;
        let ime = $('#ime').val();
        let prezime = $('#prezime').val();
        let mail = $('#mail').val();
        let broj = $('#telefon').val();
        let opis = $('#opis').val();
        let datum = $('#datum').val();

        var doc = new jsPDF();
        let text = 'Hvala vam što koristite naše usluge.\n\nUspešno ste zakazali pregled kod nutricioniste. \n\n\n\n\n';
        text += 'ime: ' + ime +'\n';
        text += 'prezime: ' + prezime +'\n';
        text += 'mail: ' + mail +'\n';
        text += 'broj: ' + broj +'\n';
        text += 'datum: ' + datum +'\n';
        text += 'opis: ' + opis +'\n\n\n';
        text += 'Vidimo se uskoro! \nSrdacan poyy!'

        doc.setFont('times');
//        doc.addImage("images/pic01.jpg", 'jpg', 10, 10, 150, 150);
        doc.text(text, 10, 10);
        doc.save('PDF.pdf');

    })


    $('#exportPDF2').click(function () {
        let can = true;
        let ime = $('#ime').val();
        let prezime = $('#prezime').val();
        let mail = $('#mail').val();
        let broj = $('#telefon').val();
        let opis = $('#opis').val();
        let datum = $('#datum').val();

        var doc = new jsPDF();
        let text = 'Hvala vam što koristite naše usluge.\n\nUspešno ste zakazali pregled kod masažera. \n\n\n\n\n';
        text += 'ime: ' + ime +'\n';
        text += 'prezime: ' + prezime +'\n';
        text += 'mail: ' + mail +'\n';
        text += 'broj: ' + broj +'\n';
        text += 'datum: ' + datum +'\n';
        text += 'opis: ' + opis +'\n\n\n';
        text += 'Vidimo se uskoro! \nSrdacan poyy!'

        doc.setFont('times');
//        doc.addImage("images/pic01.jpg", 'jpg', 10, 10, 150, 150);
        doc.text(text, 10, 10);
        doc.save('PDF.pdf');

    })


})

