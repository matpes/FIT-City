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
                $('#imeNapomena').text("Name can't contain numbers");
            }else{
                $('#imeNapomena').hide();
            }
        } else {
            can = false;
            $('#imeNapomena').show();
            $('#imeNapomena').text('You must fill this field');
        }


        //PREZIME
        if (prezime != '') {
            let regex = /[0-9]/;
            if (regex.test(prezime)) {
                can = false;
                $('#prezimeNapomena').show();
                $('#prezimeNapomena').text('Surname can not contain numbers');
            }else{
                $('#prezimeNapomena').hide();
            }
        } else {
            can = false;
            $('#prezimeNapomena').show();
            $('#prezimeNapomena').text('You must fill this field');
        }


        //OPIS
        if (opis == '') {
            can = false;
            $('#opisNapomena').show();
            $('#opisNapomena').text('You must fill this field');
        }else{
            $('#opisNapomena').hide();
        }

        //DATUM
        if(datum != ''){
            $('#datumNapomena').hide();
            if(new Date(datum) - new Date()<0){
                can = false;
                $('#datumNapomena').show();
                $('#datumNapomena').text('You must enter forthcoming date');
            }
        }else{
            can = false;
            $('#datumNapomena').show();
            $('#datumNapomena').text('You must fill this field');
        }


        //MAIL

        if(mail!= ''){
            let mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (mailRegExp.test(mail)) {
                $('#mailNapomena').hide();
            }else{
                can = false;
                $('#mailNapomena').show();
                $('#mailNapomena').text('Mail is not in good form');
                
            }
        }else{
            can = false;
            $('#mailNapomena').show();
            $('#mailNapomena').text('You must fill this field');
        }

        //TELEFON
        if(broj != ''){
            let mobileRegExp = /^(\d{10}|\d{3}-\d{3}-\d{4}|\d{3}\/\d{3}-\d{4}|\d{3}-\d{3}-\d{2}-\d{2}|\d{3}\/\d{3}-\d{2}-\d{2}|\(\d{3}\)\d{3}-\d{4})$/;
            if (mobileRegExp.test(broj)) {
                $('#telefonNapomena').hide();
            }else{
                can = false;
                $('#telefonNapomena').show();
                $('#telefonNapomena').text('Phone nomber is not in one of suported forms');
                
            }
        }else{
            can = false;
            $('#telefonNapomena').show();
            $('#telefonNapomena').text('You must fill this field');
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
        let text = 'Thank you for using our services.\n\nYou have succesfuly scheduled an apoitement with our nutricionist. \n\n\n\n\n';
        text += 'name: ' + ime +'\n';
        text += 'surname: ' + prezime +'\n';
        text += 'mail: ' + mail +'\n';
        text += 'phone number: ' + broj +'\n';
        text += 'date: ' + datum +'\n';
        text += 'description: ' + opis +'\n\n\n';
        text += 'See you soon! \nKind poyy!'

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
        let text = 'Thank you for using our services.\n\nYou have succesfuly scheduled an apoitement with our masseuse. \n\n\n\n\n';
        text += 'name: ' + ime +'\n';
        text += 'surname: ' + prezime +'\n';
        text += 'mail: ' + mail +'\n';
        text += 'phone number: ' + broj +'\n';
        text += 'date: ' + datum +'\n';
        text += 'description: ' + opis +'\n\n\n';
        text += 'See you soon! \nKind poyy!'

        doc.setFont('times');
//        doc.addImage("images/pic01.jpg", 'jpg', 10, 10, 150, 150);
        doc.text(text, 10, 10);
        doc.save('PDF.pdf');

    })


})

