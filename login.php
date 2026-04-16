<?php
$conn = mysqli_connect("localhost","root","","trendwear");

if(!$conn){
    die("Connection Failed");
}

if(isset($_POST['login'])){
    $email = $_POST['email'];
    $pass = $_POST['password'];

    $q = mysqli_query($conn, "SELECT * FROM users WHERE email='$email' AND password='$pass'");

    if(mysqli_num_rows($q) > 0){
        echo "<script>alert('Login Success'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Invalid Login'); window.history.back();</script>";
    }
}
?>