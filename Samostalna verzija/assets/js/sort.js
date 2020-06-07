var klasican = {
    naslov: 'klasican',
    tezina: 4.5,
    trajanje: 30,
    slike: `<div data-toggle="modal" data-target="#klasicanModal">
    <div class="carousel-item active">
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
</div></div>`,
    text: `<br>

    <h2>
        CLASICAL PILATES
    </h2>

    <p class="description">
    Pilates is a refined form of exercise that simultaneously develops specific muscle strength as well
    as flexibility of muscles and joints, thereby achieving optimal body balance. 
   Pilates lengthens and tones the body, influences elegant posture, relieves stress, 
   contributes to greater self-control and greater self-confidence. 
   This program concentrates on internal muscle-holders that are important for keeping the body in balance, 
   and are essential for maintaining the normal condition of the spinal column.
   <br>
   Training sessions last 30 minuta.
</p>
    </p>
    <div class="row">
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Difficulty: &nbsp;&nbsp; 4.5
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark btn-pos2"
                onclick=" displayComents_en('pilatesCom1')">
                Comments
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos2" onclick="mark_en('pilatesCom1')">
                Rate
            </button>
        </div>
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Rate: &nbsp;&nbsp;
                <span id=pilatesCom1Mark> 5</span>

            </p>
        </div>

    </div>
    <form action="" name="cardioKom2">
        <div class="row">
            <div class="col-12 form-group" id="pilatesCom1">



            </div>
            <div class="col-12 form-group">
                 <span id=ocenaFailpilatesCom1>
                                                
                </span>
            </div>
        </div>
    </form>`
}

var stott = {
    naslov: 'stott',
    tezina: 5,
    trajanje: 30,
    slike: `<div data-toggle="modal" data-target="#stottModal">
    <div class="carousel-item active">
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
</div></div>`,
    text: `<br>

    <h2>
        STOTT PILATES
    </h2>

    <p class="description">
    The emphasis of the <b>Stott pilates</b>  method is on preserving the natural curve of the spine, 
    stabilizing the center of the body and shoulder girdle, neutral positioning of the joints and proper breathing. 
    Balancing between muscle strength and flexibility, stott pilates will certainly improve your posture, 
    reduce back pain and tension in your pelvic muscles. 
    This kind of training will build a body of lean muscle tone, enviable strength and mobility, and above all a healthy spirit.
    <br>
    Training sessions last 30 minuta.

    </p>
    <div class="row">
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Difficulty: &nbsp;&nbsp; 5
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark float-left btn-pos2"
                onclick=" displayComents_en('pilatesCom2')">
                Comments
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos2" onclick="mark_en('pilatesCom2')">
                Rate
            </button>
        </div>
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Rate: &nbsp;&nbsp;
                <span id=pilatesCom2Mark> 5</span>
            </p>
        </div>
    </div>
    <form action="" name="cardioKom2">
        <div class="row">
            <div class="col-12 form-group" id="pilatesCom2">

            </div>
            <div class="col-12 form-group">
                 <span id=ocenaFailpilatesCom2>
                                                
                </span>
            </div>
        </div>
    </form>`
}

var reformer = {
    naslov: 'reformer',
    tezina: 3.5,
    trajanje: 30,
    slike: `<div data-toggle="modal" data-target="#reformerModal">
    <div class="carousel-item">
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
</div></div>`,
    text: `<br>

    <h2>
        REFORMER PILATES
    </h2>

    <p class="description">
    The very idea of a reformer came about during World War I, when J. Pilates constructed smaller springs, fenders, 
    and straps on hospital beds, which helped the wounded, who were then tied to hospital beds, recover faster than those 
    who had just rested. 
    The advantage of the reformer exercise in symmetry, that is equal to the load of the left and right side during exercise.
    <br>
    Training sessions last 30 minuta.
    </p>

    <div class="row">
        <div class="col-sm-12 col-md-3 description">
            <p class="description text-center">
                Difficulty: &nbsp;3.5
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark float-left btn-pos2"
                onclick="displayComents_en('pilatesCom3')">
                Comments
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos2" onclick="mark_en('pilatesCom3')">
                Rate
            </button>
        </div>

        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Rate: &nbsp;&nbsp;
                <span id=pilatesCom3Mark> 5</span>
            </p>
        </div>
    </div>

    <form action="" name="cardioKom3">
        <div class="row">
            <div class="col-12 form-group" id="pilatesCom3">

            </div>
            <div class="col-12 form-group">
                 <span id=ocenaFailpilatesCom3>
                                                
                </span>
            </div>
        </div>
    </form>`
}

var cxworx = {
    naslov: 'cxworx',
    tezina: 5,
    trajanje: 30,
    slike: `<div data-toggle="modal" data-target="#cxworxModal">
    <div class="carousel-item ">
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
</div></div>`,
    text: `<br>

    <h2>
        CXWORX
    </h2>

    <p class="description">
    <b>CXWORX</b> focuses on the torso and the muscles that connect the upper and lower body. 
    It is ideal for tightening the abdomen and buttocks, for improving functional strength as well as for preventing injuries. 
    It consists of thirty-minute workouts that use body weight, resistance straps and weights to tighten and tone your muscles. 
    The straps are wrapped around the body in various ways to give the body maximum resistance when performing the exercises.
    <br>
    Training sessions last 30 minutes.
    </p>
    <div class="row">

        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Difficulty: &nbsp;&nbsp; 5
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark btn-pos2"
                onclick=" displayComents_en('coreCom1')">
                Comments
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos2" onclick="mark_en('coreCom1')">
                Rate
            </button>
        </div>
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Rate: &nbsp;&nbsp;
                <span id=coreCom1Mark> 5</span>

            </p>

        </div>
    </div>
    <form action="" name="cardioKom2">
        <div class="row">
            <div class="col-12 form-group" id="coreCom1">



            </div>
            <div class="col-12 form-group">
                 <span id=ocenaFailcoreCom1>
                                                
                </span>
            </div>
        </div>
    </form>`
}

var bodyweight = {
    naslov: 'bodyweight',
    tezina: 4,
    trajanje: 45,
    slike: `<div data-toggle="modal" data-target="#bodyweightModal">
    <div class="carousel-item active">
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
</div></div>`,
    text: `<br>

    <h2>
        BODYWEIGHT
    </h2>

    <p class="description">
    <b>Bodyweight</b> training is about developing your body using only its own weight. 
    These trainings are very good as they can be carried out at home. 
    No additional equipment is needed. 
    These trainings can be both individual and group. 
    The most common exercises in this group are the abdomen and the back.
    <br>
    Training sessions last do 45 minutes.

    </p>
    <div class="row">
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Difficulty: &nbsp;&nbsp; 4
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark float-left btn-pos2"
                onclick=" displayComents_en('coreCom2')">
                Comments
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos2" onclick="mark_en('coreCom2')">
                Rate
            </button>
        </div>
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Rate: &nbsp;&nbsp;
                <span id=coreCom2Mark> 4.5</span>
            </p>
        </div>
    </div>
    <form action="" name="coreKom2">
        <div class="row">
            <div class="col-12 form-group" id="coreCom2">

            </div>
            <div class="col-12 form-group">
                 <span id=ocenaFailcoreCom2>
                                                
                </span>
            </div>
        </div>
    </form>`
}

var plank = {
    naslov: 'plank',
    tezina: 4.5,
    trajanje: 20,
    slike: `<div data-toggle="modal" data-target="#plankModal">
    <div class="carousel-item active">
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
</div></div>`,
    text: ` <br>

    <h2>
        PLANK
    </h2>

    <p class="description">
    <b>Plank</b> is a workout that tests your endurance. 
    With each workout, we push the limits of your endurance more and more. 
    During these workouts, the abdominal muscles exert the most strain to keep your body in proper position. 
    In addition to the usual elbow-rested legs with the legs extended, 
    various movements are performed during training to target all the muscles of the body.
    <br>
    Training sessions last 20 minutes.
    </p>

    <div class="row">
        <div class="col-sm-12 col-md-3 description">
            <p class="description text-center">
                Difficulty: &nbsp;4.5
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark float-left btn-pos2"
                onclick="displayComents_en('coreCom3')">
                Comments
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos2" onclick="mark_en('coreCom3')">
                Rate
            </button>
        </div>

        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Rate: &nbsp;&nbsp;
                <span id=coreCom3Mark> 3.5</span>
            </p>
        </div>
    </div>

    <form action="" name="cardioKom3">
        <div class="row">
            <div class="col-12 form-group" id="coreCom3">

            </div>
            <div class="col-12 form-group">
                 <span id=ocenaFailcoreCom3>
                                                
                </span>
            </div>
        </div>
    </form>`
}

var prenatal = {
    naslov: 'prenatalna',
    tezina: 5,
    trajanje: 30,
    slike: `<div data-toggle="modal" data-target="#prenatalModal">
    <div class="carousel-item">
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
</div></div>`,
    text: `<br>

    <h2>
        PRENATALNA YOGA
    </h2>

    <p class="description">
    <b>Prenatal yoga</b> is the perfect activity for pregnant women because it provides psychophysical
    preparation for childbirth, relaxes and calms the body, teaches proper posture and what is perhaps
     the most beautiful is meeting a bunch of moms who share the same concerns as you! 
     The Prenatal Yoga program is adaptable to the trimester you are currently in, so you will always 
     exercise safely and within the limits of your current condition and ability.
   <br>
   Training sessions last 30 minutes.
    </p>

    <div class="row">
        <div class="col-sm-12 col-md-3 description">
            <p class="description text-center">
                Difficulty: &nbsp;5
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark float-left btn-pos2"
                onclick="displayComents_en('yogaCom3')">
                Comments
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos2" onclick="mark_en('yogaCom3')">
                Rate
            </button>
        </div>

        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Rate: &nbsp;&nbsp;
                <span id=yogaCom3Mark> 5</span>
            </p>
        </div>
    </div>

    <form action="" name="cardioKom3">
        <div class="row">
            <div class="col-12 form-group" id="yogaCom3">

            </div>
            <div class="col-12 form-group">
                 <span id=ocenaFailyogaCom3>
                                                
                </span>
            </div>
        </div>
    </form>`

}

var yin = {
    naslov: 'yin',
    tezina: 3.5,
    trajanje: 30,
    slike: `<div data-toggle="modal" data-target="#yinModal">
    <div class="carousel-item active">
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
</div></div>`,
    text: `<br>

    <h2>
        YIN YOGA
    </h2>

    <p class="description">
    <b>Yin Yoga </b> focuses on your deep connective tissues, such as fascia, ligaments, joints and bones. 
    It is slower and more meditative giving you space to turn inward and regulate both your mind 
    and your body's physical sensations. By holding a pose for longer than other traditional types of yoga, 
    yin yoga helps you stretch and stretch those rarely used tissues while teaching you how to 
    breathe through the discomfort and sit with your thoughts.
    <br>
    Training sessions last 30 minutes.


    </p>
    <div class="row">
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Difficulty: &nbsp;&nbsp; 3.5
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark float-left btn-pos2"
                onclick=" displayComents_en('yogaCom2')">
                Comments
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos2" onclick="mark_en('yogaCom2')">
                Rate
            </button>
        </div>
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Rate: &nbsp;&nbsp;
                <span id=yogaCom2Mark> 4.5</span>
            </p>
        </div>
    </div>
    <form action="" name="cardioKom2">
        <div class="row">
            <div class="col-12 form-group" id="yogaCom2">

            </div>
            <div class="col-12 form-group">
                 <span id=ocenaFailyogaCom2>
                                                
                </span>
            </div>
        </div>
    </form>`

}

var bikram = {
    naslov: 'bikram',
    tezina: 4.5,
    trajanje: 35,
    slike: `<div data-toggle="modal" data-target="#bikramModal">
    <div class="carousel-item active">
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
</div></div>`,
    text: `<br>

    <h2>
        BIKRAM YOGA
    </h2>

    <p class="description">
    <b>Bikram yoga</b> is named after Bikram Chouduri and contains a number 
    of set poses in a room such as a sauna - usually set at 105 degrees and 40% humidity. 
    Choudhuri has faced U.S. sexual assault and harassment lawsuits and fled to Mexico in 2017. 
    Many studios that used to be Bikram studios are now practicing hot yoga, in an effort to separate themselves from the founders.
    <br>
    Training sessions last 35 minutes.

    </p>
    <div class="row">
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Difficulty: &nbsp;&nbsp; 4.5
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark btn-pos2"
                onclick=" displayComents_en('yogaCom1')">
                Comments
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos2" onclick="mark_en('yogaCom1')">
                Rate
            </button>
        </div>
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Rate: &nbsp;&nbsp;
                <span id=yogaCom1Mark> 2.5</span>

            </p>
        </div>

    </div>
    <form action="" name="yogaKom2">
        <div class="row">
            <div class="col-12 form-group" id="yogaCom1">



            </div>
            <div class="col-12 form-group">
            <span id=ocenaFailyogaCom1>
                                           
           </span>
       </div>
        </div>
    </form>`

}


var bodyCombat = {
    naslov: 'bodyCombat',
    tezina: 5,
    slike: `<div data-toggle="modal" data-target="#combatModal">
    <div class="carousel-item active">
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
            </div>
        </div>`,
    text: `<br>

    <h2>
        BODY COMBAT
    </h2>

    <p class="description">
    <b> Body Combat </b> is a vigorous workout that combines multiple martial arts movements to help you be fit, 
    fast and strong. After training Body Combat, you feel empowered and powerful.Body Combat uses the elements of 
    karate, tequondo, boxing, muai taia, capoeira and kung fu. But don’t worry, you don’t need any martial arts 
    experience - during warm-ups, instructors will show you all the moves. 
    You will be strengthened through various kicks, uppercut and crochets. 
    Exercises such as stepping, squats and push ups are also done.
    <br>
    Training sessions last 55 minutes.
    </p>

    <div class="row">
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Difficulty: &nbsp;&nbsp; 5
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark btn-pos2"
                onclick=" displayComents_en('cardioCom1')">
                Comments
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos2" onclick="mark_en('cardioCom1')">
                Rate
            </button>
        </div>
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Rate: &nbsp;&nbsp;
                <span id=cardioCom1Mark> 5</span>

            </p>
        </div>

    </div>
    <form action="" name="cardioKom2">
        <div class="row">
            <div class="col-12 form-group" id="cardioCom1">



            </div>
            <div class="col-12 form-group">
                 <span id=ocenaFailcardioCom1>
                                                
                </span>
            </div>
        </div>
    </form>`,
    trajanje: 55
}

var rpm = {
    naslov:'rpm',
    tezina: 4,
    slike: `<div data-toggle="modal" data-target="#RPMModal">
    <div class="carousel-item active">
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
</div>
</div`,
    text: `<br>
    <br>

    <h2>
        RPM
    </h2>

    <p class="description">
    <b>RPM </b> is a fantastic, thoughtfully designed workout on bikes, 
    one that will satisfy you on several levels - it will burn a calorie burn, 
    will make you a fitness machine, and will keep you in the mood for more and more! 
    RPM is a cycling training that happens with the most powerful music you can think of. 
    Thanks to a coach who encourages and inspires, you are constantly under the impression 
    that you drive through mountains, hills and through forests. 
    Discover the athlete in you - burn to raise endorphins to unprecedented limits.
    <br>
    Training sessions last 30 minutes.

    </p>

    <div class="row">
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Difficulty: &nbsp;&nbsp; 4
            </p>
        </div>
        <div class="col-sm-12 col-md-6 text-center">
            <button type="button" class="btn bg-dark float-left btn-pos2"
                onclick=" displayComents_en('cardioCom2')">
                Comments
            </button>
            &nbsp;
            &nbsp;
            <button type="button" class="btn bg-dark btn-pos2" onclick="mark_en('cardioCom2')">
                Rate
            </button>
        </div>
        <div class="description col-sm-12 col-md-3 text-center">
            <p class="description text-center">
                Rate: &nbsp;&nbsp;
                <span id=cardioCom2Mark> 5</span>
            </p>
        </div>
    </div>
    <form action="" name="cardioKom2">
        <div class="row">
            <div class="col-12 form-group" id="cardioCom2">

            </div>
        </div>
        <div class="col-12 form-group">
                 <span id=ocenaFailcardioCom2>
                                                
                </span>
            </div>
    </form>`,
    trajanje: 30
}

var bodyStep = {
    naslov: 'bodyStep',
    tezina: 3.5,
    trajanje: 45,
    slike: `<div data-toggle="modal" data-target="#stepModal">
    <div class="carousel-item active">
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
</div>
</div>`,
text: `<br>

<h2>
    BODY STEP
</h2>

<p class="description">
<b>Body step</b> is a vigorous workout with a stepper that makes you feel free during your workout. 
If you put together adjustable steppers, simple steps (over or around the steppers) with great music 
that everyone sings and an accomplished instructor who you can easily follow will have a great workout. 
Cardi O blocks will wake up your calorie burning system and inject it into the next gear, 
all accompanied by conditioning songs that will shape your body. 
For anyone who would like to increase their training intensity and achieve phenomenal results - 
Circular Functional Body Step Training is the ideal choice.
<br>
Training sessions last 45 minutes.
</p>

<div class="row">
    <div class="col-sm-12 col-md-3 description">
        <p class="description text-center">
            Difficulty: &nbsp;3.5
        </p>
    </div>
    <div class="col-sm-12 col-md-6 text-center">
        <button type="button" class="btn bg-dark float-left btn-pos2"
            onclick="displayComents_en('cardioCom3')">
            Comments
        </button>
        &nbsp;
        &nbsp;
        <button type="button" class="btn bg-dark btn-pos2" onclick="mark_en('cardioCom3')">
            Rate
        </button>
    </div>

    <div class="description col-sm-12 col-md-3 text-center">
        <p class="description text-center">
            Rate: &nbsp;&nbsp;
            <span id=cardioCom3Mark> 5</span>
        </p>
    </div>
</div>

<form action="" name="cardioKom3">
    <div class="row">
        <div class="col-12 form-group" id="cardioCom3">

        </div>
        <div class="col-12 form-group">
                 <span id=ocenaFailcardioCom3>
                                                
                </span>
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
    loadMark('cardioCom1Mark'); 
    loadMark('cardioCom2Mark'); 
    loadMark('cardioCom3Mark');
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
    loadMark('cardioCom1Mark'); 
    loadMark('cardioCom2Mark'); 
    loadMark('cardioCom3Mark');
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
    loadMark('cardioCom1Mark'); 
    loadMark('cardioCom2Mark'); 
    loadMark('cardioCom3Mark');
}


