<?php

// Tworzymy zmienną dla imienia
$name = $_POST['name'];

// Tworzymy zmienną dla nazwiska
$surname = $_POST['surname'];

// Tworzymy zmienną dla daty urodzin
$birthday = $_POST['birthday'];

// Podajesz płeć
$sex = $_POST['sex']; 

// Tworzymy zmienną dla adresu email
$email = $_POST['email'];

// Tworzymy zmienną dla wiadomości
$message = $_POST['message'];

// Podajesz adres email z którego ma być wysłana wiadomość
$odkogo = "nazwa@gmail.com";

// Podajesz adres email na który chcesz otrzymać wiadomość
$dokogo = "klara.norwag@gmail.com";

// Podajesz tytuł jaki ma mieć ta wiadomość email
$tytul = "Wiadomość z pracy domowej :)";

if (isset($_POST['subscribe']))   
   $newsletter = $_POST['subscribe'];    
else
   $newsletter = "nothing was selected.";


// Przygotowujesz treść wiadomości
$wiadomosc = "";
$wiadomosc .= "Imie: " . $name . "\n";
$wiadomosc .= "Nazwisko: " . $surname . "\n";
$wiadomosc .= "Płeć: " . $sex . "\n";
$wiadomosc .= "Email: " . $email . "\n";
$wiadomosc .= "Wiadomość: " . $message . "\n"; 
$wiadomosc .= "Zapis do newslettera: " . $newsletter . "\n";

// Wysyłamy wiadomość
$sukces = mail($dokogo, $tytul, $wiadomosc, "Od: <$odkogo>", $message);

// Przekierowywujemy na potwierdzenie
if ($sukces){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=potwierdzenie.php\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
}
?>
