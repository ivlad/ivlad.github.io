
<?php
if(isset($_POST['submit'])){
    $to = "w.wisnewsky@gmail.com"; // this is your Email address
    $first_name = $_POST['first_name'];
    $food = $_POST['food'];
    $subject = "Form submission";
    $message = $first_name . " " . $food . " wrote the following:" . "\n\n";
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
  <script src="./main.js" type="module"></script>
  <link rel="stylesheet" media="screen" href="./main.css" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:100,200,300,400,700,800&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Lato:300,700&display=swap" rel="stylesheet">
</head>
<body>
  <section class="hero">
    <div class="hero__intro">
      DALIA IR VLADAS <br>
      <div class="hero__date">
        Liepos 20
      </div>
    </div>
  </section>

  <section class="divider">
    <div class="divider__content">
      Sveiki, džiaugiamės, kad sutikote atvykti į mūsų šventę. Joje prireiks šypsenų, apsikabinimų, rankšluosčio ir dar keleto dalykėlių. Kad nepaklystumėte atvykdami, dalinamės šiek tiek informacijos.
    </div>
  </section>

  <section class="content content--1">
    <div class="content__container">
      <div class="content__left">
        <div class="content__bubble content__bubble--center">
          Ceremonija vyks Bernardinų bažnyčioje Vilniuje, 11h. <br>Po jos pasivaišinsime skanėstais, džiaugsimės, jog jūs atvykote, o mes susituokėme, nusifotografuosime.
        </div>


      <div class="content__bubble content__bubble--center">
        Švęsime Karvio dvare vakare, tad iki šventės pailsėkite.
        <br><br>
        Dvaras – tai veikiau namelis su pieva. Nusiteikite šokti ant žolės šviečiant lempelėms medžiuose. Smailūs aukštakulniai nerekomenduojami. Bet jeigu be jų vakarėlis – ne vakarėlis, naktiniams šokiams galima įsimesti ir sportinius batelius. Jaunoji tikisi, jog jos parinktos dainos patiks ir jums.
      </div>
    </div>
  </section>

  <section class="divider divider--map">
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d147244.59397636077!2d25.04292223456728!3d54.7852968751012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dc40!2sVilnius!3m2!1d54.687155499999996!2d25.2796514!4m5!1s0x46dd8428feebf80b%3A0x8688caf425fd0df8!2sKarvio+Dvaras%2C+E%C5%BEero+g.+6%2C+Karvys+14244!3m2!1d54.8840061!2d25.133639!5e0!3m2!1sen!2slt!4v1562092318492!5m2!1sen!2slt" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  </section>

  <section class="content content--2">
    <div class="content__container">
      <div class="content__left">
        <div class="content__bubble">
          Viskas vyks daugiau mažiau taip: <br>
          <ul>
            <li>Nuo 16 h iki 17h laukiame jūsų atvykstančių. Įsikursite kambariuose, atsipūsite, paplepėsite.</li>
            <li>17h jaunųjų sutikimas, sveikinimai ir fotografavimasis. Darysime tą didelę vestuvinę nuotrauką, kurią močiutės įsidės į albumą.</li>
            <li>18h renkamės salėje vakarienės. Gali būti kalbų, jeigu norėtumėte ką nors pasakyti, o jei ne – tada būtinai kalbos su stalo kaimynais. </li>
            <li>19h pakviesime prisėsti terasoje ir pašokti pievoje.</li>
            <li>22h pjausim tortą, jeigu jis išgyvens vasaros kaitrą.</li>
            <li>Po 22h – šokiai, pieva, kalbos, dainos.</li>
          </ul>
        </div>

        <div class="content__bubble content__bubble--center">
          Šventė su nakvyne, tad nepamirškite mylimiausios naktinės kepuraitės ir dantų šepetėlio.
          <br>
          Atvykstantys su vaikais – priminkite jiems prigriebti mėgstamiausias priemones linksmybėms.
          <br>
          Kad šventė kiekvienam būtų pagal skonį, prašome pasirinkti norimą karštą patiekalą.

          <br><br>
          <form action="/" method="post">
            <label>
              <input type="radio" class="radio" name="food" value="1"> food1<br>
            </label>
            <label>
              <input type="radio" class="radio" name="food" value="2"> food2<br>
            </label>
            <input type="text" class="textfield" name="first_name" placeholder="Vardas">
            <br>
            <input type="submit" class="button" value="pasirinkti">
          </form>
          <br>

          <br>
          Vaikais pasirūpinsime atskirai.
        </div>

        <div class="content__bubble">
          Antra diena
          <br><br>
          10h pusryčiai.
          <br>
          11 h pirtis, ežeras ir kubilas. Prireiks maudymosi kostiumėlio, pripučiamos spurgos ir rankšluosčio (sakėm, kad jo prireiks!).
          <br><br>

        </div>
      </div>
    </div>
  </section>

  <section class="content content--3">
    <div class="content__container">
      <div class="content__left">
        <div class="content__bubble content__bubble--no-shadow">
          Dėl gėlių – tegu jos džiugina augdamos. Dėl dovanų – jūs mums esate dovana. Jei vis viena norisi ką nors padovanoti, lai tai telpa vokelyje.
          <br><br>
          Laukiame jūsų
          <br>
          Dalia ir Vladas
        </div>
      </div>
      <div class="content__right">
        <img src="/images/a-10.jpg" alt="">
      </div>
    </div>
  </section>

</body>

</html>
