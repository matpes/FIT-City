var klasican = {
    naslov: 'klasican',
    tezina: 4.5,
    trajanje: 30,
    slike: `<div class="carousel-item active">
    <img src="images/Pilates/klasicni1.jpg"
        class="d-block w-100 img-fluid circle" alt="home3">
</div>
<div class="carousel-item">
    <img src="images/Pilates/klasicni2.jpg"
        class="d-block w-100 img-fluid circle" alt="home3">
</div>
<div class="carousel-item">
    <img src="images/Pilates/klasicni3.jpg"
        class="d-block w-100 img-fluid circle" alt="home3">
</div>`,
    text: `<br>

    <h2>
        KLASIČNI PILATES
    </h2>

    <p class="description">
        Pilates je profinjena forma vežbanja koja istovremeno razvija specifičnu mišićnu
        snagu kao i
        fleksibilnost mišića i zglobova, cime se postiže optimalna telesna uravnoteženost.
        Pilates izdužuje i tonizira telo, utiče na elegantnu posturu, oslobađa stresa,
        doprinosi boljoj
        samokontroli i većem samopouzdanju. Ovaj program koncentriše se na unutrašnje
        mišiće-držače
        koji su važni za održavanje tela u ravnoteži, a od suštinskog su značaja za
        podržavanje normalnog stanja kičmenog stuba.
        <br>
        Treninzi traju 30 minuta.
    </p>
    <div class="row">
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Težina: &nbsp;&nbsp; 4.5
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark btn-pos"
                onclick=" displayComents('pilatesCom1')">
                Komentari
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos" onclick="mark('pilatesCom1')">
                Oceni
            </button>
        </div>
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Ocena: &nbsp;&nbsp;
                <span id=pilatesCom1Mark> 5</span>

            </p>
        </div>

    </div>
    <form action="" name="cardioKom2">
        <div class="row">
            <div class="col-12 form-group" id="pilatesCom1">



            </div>
        </div>
    </form>`
}

var stott = {
    naslov: 'stott',
    tezina: 5,
    trajanje: 30,
    slike: `<div class="carousel-item active">
    <img src="images/Pilates/stott11.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>
<div class="carousel-item">
    <img src="images/Pilates/stott21.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>
<div class="carousel-item">
    <img src="images/Pilates/stott3.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>`,
    text: `<br>

    <h2>
        STOTT PILATES
    </h2>

    <p class="description">
        Naglasak <b>Stott pilates</b> metode je na očuvanju prirodne krive kičme,
        stabilizaciji centra tela i ramenog obruča, neutralnom pozicioniranju zglobova i
        pravilnom disanju.
        Balansirajući između mišićne snage i fleksibilnosti, stott pilates na siguran način
        popraviće vaše držanje,
        smanjiti bolove u leđima i tenzije u mišićima karlice. Ovakvim treningom izgradi
        ćete telo vitkog mišićnog tonusa,
        zavidne snage i pokretljivosti a pre svega zdravog duha.
        <br>
        Treninzi traju 30 minuta.

    </p>
    <div class="row">
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Težina: &nbsp;&nbsp; 5
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark float-left btn-pos"
                onclick=" displayComents('pilatesCom2')">
                Komentari
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos" onclick="mark('pilatesCom2')">
                Oceni
            </button>
        </div>
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Ocena: &nbsp;&nbsp;
                <span id=pilatesCom2Mark> 5</span>
            </p>
        </div>
    </div>
    <form action="" name="cardioKom2">
        <div class="row">
            <div class="col-12 form-group" id="pilatesCom2">

            </div>
        </div>
    </form>`
}

var reformer = {
    naslov: 'reformer',
    tezina: 3.5,
    trajanje: 30,
    slike: `<div class="carousel-item">
    <img src="images/Pilates/reformer1.jpg"
        class="d-block w-100 img-fluid circle" alt="home3">
</div>
<div class="carousel-item">
    <img src="images/Pilates/reformer2.jpg"
        class="d-block w-100 img-fluid circle" alt="home3">
</div>
<div class="carousel-item active">
    <img src="images/Pilates/reformer3.jpg"
        class="d-block w-100 img-fluid circle" alt="home3">
</div>`,
    text: `<br>

    <h2>
        REFORMER PILATES
    </h2>

    <p class="description">
        Sama ideja o reformeru nastala je za vreme I svetskog rata kada je J.Pilates
        na bolničke krevete konstuisao manje opruge, federe i trake pomoću kojih su se
        ranjenici
        koji su tada bili vezani za bolničke krevete brže oporavljali od onih koji su samo
        mirovali.
        Prednost vežbanja na reformeru je u simetriji, odnosno jednakom opterećenju leve i
        desne strane
        prilikom vežbanja.
        <br>
        Treninzi traju 30 minuta.
    </p>

    <div class="row">
        <div class="col-sm-12 col-md-4 description">
            <p class="description text-center">
                Težina: &nbsp;3.5
            </p>
        </div>
        <div class="col-sm-12 col-md-4 text-center">
            <button type="button" class="btn bg-dark float-left btn-pos"
                onclick="displayComents('pilatesCom3')">
                Komentari
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos" onclick="mark('pilatesCom3')">
                Oceni
            </button>
        </div>

        <div class="description col-sm-12 col-md-4 text-center">
            <p class="description text-center">
                Ocena: &nbsp;&nbsp;
                <span id=pilatesCom3Mark> 5</span>
            </p>
        </div>
    </div>

    <form action="" name="cardioKom3">
        <div class="row">
            <div class="col-12 form-group" id="pilatesCom3">

            </div>
        </div>
    </form>`
}

var cxworx = {
    naslov: 'cxworx',
    tezina: 5,
    trajanje: 30,
    slike: `<div class="carousel-item ">
    <img src="images/Core/cxworx1.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>
<div class="carousel-item">
    <img src="images/Core/cxworx2.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>
<div class="carousel-item active">
    <img src="images/Core/cxworx3.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>`,
    text: `<br>

    <h2>
        CXWORX
    </h2>

    <p class="description">
        <b>CXWORX</b> fokusiran je na torso i na mišiće koji povezuju gornji i donji deo tela. 
        Idealan je za zatezanje stomaka i zadnjice, za unapređenje funkcionalne snage, kao i za predupređenje povreda.
        Sastoji se od tridesetominutnih treninga koji koriste težinu tela, otpornih traka i tegova kako bi zategli i tonirali vaše mišiće.
        Trake se obmotavaju oko tela na različite načine kako bi dovele do što većeg otpora tela pri izvođenju vežbi.
        <br>
        Treninzi traju 30 minuta.
    </p>
    <div class="row">

        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Težina: &nbsp;&nbsp; 5
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark btn-pos"
                onclick=" displayComents('coreCom1')">
                Komentari
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos" onclick="mark('coreCom1')">
                Oceni
            </button>
        </div>
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Ocena: &nbsp;&nbsp;
                <span id=coreCom1Mark> 5</span>

            </p>

        </div>
    </div>
    <form action="" name="cardioKom2">
        <div class="row">
            <div class="col-12 form-group" id="coreCom1">



            </div>
        </div>
    </form>`
}

var bodyweight = {
    naslov: 'bodyweight',
    tezina: 4,
    trajanje: 45,
    slike: `<div class="carousel-item active">
    <img src="images/Core/body.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>
<div class="carousel-item">
    <img src="images/Core/body2.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>
<div class="carousel-item">
    <img src="images/Core/body3.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>`,
    text: `<br>

    <h2>
        BODYWEIGHT
    </h2>

    <p class="description">
        <b>Bodzweight</b> trening predstavlja razvijanje vašeg tela korišćenjem samo njegove sopstvene težine.
        Ovi treninzi su veoma dobri, jer se mogu sprovoditi i kod kuće. Nikakva dodatna operma nije potrebna.
        Ovi treninzi mogu biti kako individualni, tako i grupni. Najčešće vežbe u ovoj grupi su trbušnjaci i leđnjaci.
        <br>
        Treninzi obično traju do 45 minuta.

    </p>
    <div class="row">
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Težina: &nbsp;&nbsp; 4
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark float-left btn-pos"
                onclick=" displayComents('coreCom2')">
                Komentari
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos" onclick="mark('coreCom2')">
                Oceni
            </button>
        </div>
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Ocena: &nbsp;&nbsp;
                <span id=coreCom2Mark> 4.5</span>
            </p>
        </div>
    </div>
    <form action="" name="coreKom2">
        <div class="row">
            <div class="col-12 form-group" id="coreCom2">

            </div>
        </div>
    </form>`
}

var plank = {
    naslov: 'plank',
    tezina: 4.5,
    trajanje: 20,
    slike: `<div class="carousel-item active">
    <img src="images/Core/core4.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>
<div class="carousel-item ">
    <img src="images/core/plank3.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>
<div class="carousel-item">
    <img src="images/core/core2.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>`,
    text: ` <br>

    <h2>
        PLANK
    </h2>

    <p class="description">
        <b>Plank</b> je trening koji testira vašu izdržljivost.
        Svakim treningom pomeramo granice vaše izdržljivosti sve više i više.
        Tokom ovih treninga trbušni mišići se najviše naprežu, kako bi održavali vaše telo u pravilnom položaju. 
        Osim obicnog položaja, naslonjeni na laktovima, raširenih nogu, tokom treninga se sprovode različiti pokreti,
        kako bi ciljali sve mišiče tela.
        <br>
        Treninzi traju oko 20 minuta.
    </p>

    <div class="row">
        <div class="col-sm-12 col-md-3 description">
            <p class="description text-center">
                Težina: &nbsp;4.5
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark float-left btn-pos"
                onclick="displayComents('coreCom3')">
                Komentari
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos" onclick="mark('coreCom3')">
                Oceni
            </button>
        </div>

        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Ocena: &nbsp;&nbsp;
                <span id=coreCom3Mark> 3.5</span>
            </p>
        </div>
    </div>

    <form action="" name="cardioKom3">
        <div class="row">
            <div class="col-12 form-group" id="coreCom3">

            </div>
        </div>
    </form>`
}

var prenatal = {
    naslov: 'prenatalna',
    tezina: 5,
    trajanje: 30,
    slike: `<div class="carousel-item">
    <img src="images/yoga/prenatal2.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>
<div class="carousel-item">
    <img src="images/yoga/prenatal3.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>
<div class="carousel-item active">
    <img src="images/yoga/prenatal4.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>`,
    text: `<br>

    <h2>
        PRENATALNA YOGA
    </h2>

    <p class="description">
        <b>Prenatalna yoga</b> je savršena aktivnost za trudnice jer pruža psihofizičku
        pripremu za porođaj,
        opušta i smiruje telo, uči pravilnom držanju i ono što je možda i najlepše
        upoznaćete gomilu mama
        koje dele iste brige kao i vi!
        Program Prenatal yoge je takav da se prilagođava trimestru u kome se trenutno
        nalazite,
        tako da ćete uvek vežbati bezbedno i u granicama svog trenutnog stanja i mogućnosti.
        <br>
        Treninzi traju 30 minuta.
    </p>

    <div class="row">
        <div class="col-sm-12 col-md-4 description">
            <p class="description text-center">
                Težina: &nbsp;5
            </p>
        </div>
        <div class="col-sm-12 col-md-4 text-center">
            <button type="button" class="btn bg-dark float-left btn-pos"
                onclick="displayComents('yogaCom3')">
                Komentari
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos" onclick="mark('yogaCom3')">
                Oceni
            </button>
        </div>

        <div class="description col-sm-12 col-md-4 text-center">
            <p class="description text-center">
                Ocena: &nbsp;&nbsp;
                <span id=yogaCom3Mark> 5</span>
            </p>
        </div>
    </div>

    <form action="" name="cardioKom3">
        <div class="row">
            <div class="col-12 form-group" id="yogaCom3">

            </div>
        </div>
    </form>`

}

var yin = {
    naslov: 'yin',
    tezina: 3.5,
    trajanje: 30,
    slike: `<div class="carousel-item active">
    <img src="images/yoga/yin1.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>
<div class="carousel-item">
    <img src="images/yoga/yin2.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>
<div class="carousel-item">
    <img src="images/yoga/yin3.jpg=w768" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>`,
    text: `<br>

    <h2>
        YIN YOGA
    </h2>

    <p class="description">
        <b>Yin yoga</b> se fokusira na vaša duboka vezna tkiva, poput fascija, ligamenata,
        zglobova i kostiju.
        Ona je sporija i meditativnija što vam daje prostor da se okrenete prema unutra i
        regulišete kako vaš um, tako i fizičke senzacije vašeg tela.
        Budući da držite poza duže vreme nego što je to slučaj sa drugim tradicionalnim
        vrstama joge,
        yin ioga vam pomaže da se istegnete i produžite ona retko korišćena tkiva,
        a istovremeno vas uči kako disati kroz nelagodu i sedeti sa svojim mislima.
        <br>
        Treninzi traju 30 minuta.

    </p>
    <div class="row">
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Težina: &nbsp;&nbsp; 3.5
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark float-left btn-pos"
                onclick=" displayComents('yogaCom2')">
                Komentari
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos" onclick="mark('yogaCom2')">
                Oceni
            </button>
        </div>
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Ocena: &nbsp;&nbsp;
                <span id=yogaCom2Mark> 4.5</span>
            </p>
        </div>
    </div>
    <form action="" name="cardioKom2">
        <div class="row">
            <div class="col-12 form-group" id="yogaCom2">

            </div>
        </div>
    </form>`

}

var bikram = {
    naslov: 'bikram',
    tezina: 4.5,
    trajanje: 35,
    slike: `<div class="carousel-item active">
    <img src="images/yoga/birkam1.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>
<div class="carousel-item">
    <img src="images/yoga/bikram2.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>
<div class="carousel-item">
    <img src="images/yoga/bikram3.jfif" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>`,
    text: `<br>

    <h2>
        BIKRAM YOGA
    </h2>

    <p class="description">
        <b>Bikram yoga</b> je dobila ime po Bikram Čouduriju i sadrži niz postavljenih poza
        u sobi kao što
        je sauna - obično podešena na 105 stepeni i 40% vlažnossti.
        Choudhuri se suočio sa tužbama za seksualno zlostavljanje i uznemiravanje u SAD-u i
        pobjegao u Meksiko 2017. godine.
        Mnogi studiji koji su nekada bili Bikram studiji, sada praktikuju vruću jogu, u
        nastojanju da se razdvoje od osnivača.
        <br>
        Treninzi traju 35 minuta.
    </p>
    <div class="row">
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Težina: &nbsp;&nbsp; 4.5
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark btn-pos"
                onclick=" displayComents('yogaCom1')">
                Komentari
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos" onclick="mark('yogaCom1')">
                Oceni
            </button>
        </div>
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Ocena: &nbsp;&nbsp;
                <span id=yogaCom1Mark> 2.5</span>

            </p>
        </div>

    </div>
    <form action="" name="yogaKom2">
        <div class="row">
            <div class="col-12 form-group" id="yogaCom1">



            </div>
        </div>
    </form>`

}


var bodyCombat = {
    naslov: 'bodyCombat',
    tezina: 5,
    slike: `<div class="carousel-item active">
                <img src="images/Cardio/combat.png" class="d-block w-100 img-fluid circle"
                                                alt="home3">
            </div>
            <div class="carousel-item">
                <img src="images/Cardio/combat2.jpg" class="d-block w-100 img-fluid circle"
                                                alt="home3">
            </div>
            <div class="carousel-item">
                <img src="images/Cardio/combat3.jpg" class="d-block w-100 img-fluid circle"
                                                alt="home3">
            </div>`,
    text: `<br>

    <h2>
        BODY COMBAT
    </h2>

    <p class="description">
        <b> Body Combat </b> je energičan trening koji kombinuje pokrete više borilačkih veština, koji će vam pomoći da budete fit, brzi i snažni. 
        Nakon treninga Body Combata osećate se osnaženo i moćno.Body Combat koristi elemente karatea, tekvondoa, boksa, muai taia, kapoere i kung fua. 
        Ali ne brinite, ne treba vam nikakvo iskustvo borilačkih veština – tokom zagrevanja instruktori će vam pokazati sve pokrete. Jačaćete kroz razne kikove, 
        aperkate i krošee. 
        Takođe se rade vežbe poput iskoraka, čučnjeva i sklekova.
        <br>
        Treninzi traju 55 minuta.
    </p>

    <div class="row">
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Težina: &nbsp;&nbsp; 5
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark btn-pos"
                onclick=" displayComents('cardioCom1')">
                Komentari
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos" onclick="mark('cardioCom1')">
                Oceni
            </button>
        </div>
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Ocena: &nbsp;&nbsp;
                <span id=cardioCom1Mark> 5</span>

            </p>
        </div>

    </div>
    <form action="" name="cardioKom2">
        <div class="row">
            <div class="col-12 form-group" id="cardioCom1">



            </div>
        </div>
    </form>`,
    trajanje: 55
}

var rpm = {
    naslov:'rpm',
    tezina: 4,
    slike: `<div class="carousel-item active">
    <img src="images/Cardio/rpm1.png" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>
<div class="carousel-item">
    <img src="images/Cardio/rpm2.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>
<div class="carousel-item">
    <img src="images/Cardio/rpm3.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>`,
    text: `<br>
    <br>

    <h2>
        RPM
    </h2>

    <p class="description">
        <b>RPM </b> je fantastični, pažljivo osmišljeni trening na biciklima, takav koji će vas zadovoljiti na nekoliko nivoa
         – sagoreće brdo kalorija, napraviće od vas fitnes mašine i pri tom će vam stalno iznova i iznova podizati raspoloženje!
        RPM je trening na biciklovima koji se dešava uz najmoćniju muziku koju možete zamisliti. 
        Zahvaljujući treneru koji podstiče i inspiriše, konstantno imate utisak da vozite planinama, brdima i kroz šume. 
        Otkrijte sportistu u sebi – izgorite kako biste podigli endorfin do neslućenih granica. 
        <br>
        Treninzi traju 30 minuta.

    </p>

    <div class="row">
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Težina: &nbsp;&nbsp; 4
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark float-left btn-pos"
                onclick=" displayComents('cardioCom2')">
                Komentari
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos" onclick="mark('cardioCom2')">
                Oceni
            </button>
        </div>
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Ocena: &nbsp;&nbsp;
                <span id=cardioCom2Mark> 5</span>
            </p>
        </div>
    </div>
    <form action="" name="cardioKom2">
        <div class="row">
            <div class="col-12 form-group" id="cardioCom2">

            </div>
        </div>
    </form>`,
    trajanje: 30
}

var bodyStep = {
    naslov: 'bodyStep',
    tezina: 3.5,
    trajanje: 45,
    slike: `<div class="carousel-item active">
    <img src="images/Cardio/step4.png" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>
<div class="carousel-item">
    <img src="images/Cardio/step1.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>
<div class="carousel-item">
    <img src="images/Cardio/step3.jpg" class="d-block w-100 img-fluid circle"
        alt="home3">
</div>`,
text: `<br>

<h2>
    BODY STEP
</h2>

<p class="description">
    <b>Body step</b> je energični trening sa steperom koji čini da se osećate slobodnim tokom treninga.  
    Ako saberemo podesive stepere, jednostavne korake (preko ili oko stepera) sa sjajnom muzikom koju svi pevaju 
    i dostpunim instruktorom, koga ćete lako pratiti, imaćete sjajan trening. 
    Kardio blokovi će probuditi vaš sistem za sagorevanje kalorija i ubaciti ga u sledeću brzinu, 
    sve to praćeno kondicionim pesmama koje će oblikovati vaše telo.
    Za sve one koji bi želeli da pojačaju intezitet treninga i ostvare fenomenalne rezultate – 
    kružni funkcionalni trening Body step je idealan izbor.
    <br>
    Treninzi traju 45 minuta.
</p>

<div class="row">
    <div class="col-sm-12 col-md-4 description">
        <p class="description text-center">
            Težina: &nbsp;3.5
        </p>
    </div>
    <div class="col-sm-12 col-md-4 text-center">
        <button type="button" class="btn bg-dark float-left btn-pos"
            onclick="displayComents('cardioCom3')">
            Komentari
        </button>
        &nbsp;
        &nbsp;
        <button type="button" class="btn bg-dark btn-pos" onclick="mark('cardioCom3')">
            Oceni
        </button>
    </div>

    <div class="description col-sm-12 col-md-4 text-center">
        <p class="description text-center">
            Ocena: &nbsp;&nbsp;
            <span id=cardioCom3Mark> 5</span>
        </p>
    </div>
</div>

<form action="" name="cardioKom3">
    <div class="row">
        <div class="col-12 form-group" id="cardioCom3">

        </div>
    </div>
</form>`
}




























var byLength = (a, b) => {
    return parseInt(b.trajanje) - parseInt(a.trajanje);
}

var byName = (a, b) => {
    return a.naslov.localeCompare(b.naslov);
}

var byDifficulty = (a, b) => {
    return parseFloat(b.tezina) - parseFloat(a.tezina);
}
var trainingArray;

var initTA = id => {
    switch(id){
        case 'cardio':
            return [bodyCombat, rpm, bodyStep];
            break;
        
        case 'core':
            return [cxworx, bodyweight, plank];
            break;
        case 'pilates':
            return [klasican, stott, reformer];
            break;
        
        case 'yoga':
            return [bikram, yin, prenatal];
            break;
        default: 
        return null;
            break;

    }
}

var sortByLength = id => {
    //id===cardio
    var trainingArray = initTA(id);
    
    trainingArray.sort(byLength);

    for(let i = 0; i < 3; i++){
        let e = i + 1;
        var slike = id + 'Slike' + e;
        var text = id + 'Text' + e;
        document.getElementById(slike).innerHTML=trainingArray[i].slike;
        document.getElementById(text).innerHTML=trainingArray[i].text;
    }
}

var sortByName = id => {
    //id===cardio
    var trainingArray = initTA(id);

    
    trainingArray.sort(byName);

    for(let i = 0; i < 3; i++){
        let e = i + 1;
        var slike = id + 'Slike' + e;
        var text = id + 'Text' + e;
        document.getElementById(slike).innerHTML=trainingArray[i].slike;
        document.getElementById(text).innerHTML=trainingArray[i].text;
    }
}

var sortByDifficulty = id => {
    //id===cardio
    var trainingArray = initTA(id);

    
    trainingArray.sort(byDifficulty);

    for(let i = 0; i < 3; i++){
        let e = i + 1;
        var slike = id + 'Slike' + e;
        var text = id + 'Text' + e;
        document.getElementById(slike).innerHTML=trainingArray[i].slike;
        document.getElementById(text).innerHTML=trainingArray[i].text;
    }
}


