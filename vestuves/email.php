<?php
if(isset($_POST['submit'])){
    $to = "w.wisnewsky@gmail.com"; // this is your Email address
    $first_name = $_POST['first_name'];
    $food = $_POST['food'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . $food . " wrote the following:" . "\n\n";

    $headers = "From:";
    mail($to,$subject,$message,$headers);

    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>
