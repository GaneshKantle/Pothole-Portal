<?php
$name=$_POST['name'];
$email=$_POST['email'];
$password=$_POST['password'];
if(!empty($name)||empty($password)||empty($email)){
    $host="localhost";
    $dbUserame="root";
    $dbPassword=" ";
    $dbname="login"
    $conn=new mysqli($host,$dbUserame,$dbPassword,$dbname)
    if(mysqli_connect_error()){
        die('Connect Error('.mysqli_connect_error().')'.mysqli_connect_error());
    }
    else{
        $SELECT="SELECT email from register where email=?Limit 1";
        $INSERT="INSERT Into register (name,password,email)values (?,?,?,?,?)";
        $stmt=$conn->prepare($SELECT);
        $stmt->bind_param("s",$email);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum=$stmt->num_rows;

        if($rnum=0){
            $stmt->close();
            $stmt=$conn->prepare($INSERT)
            $stmt->bind_param("ssssii",$username,$password,$email)
            $stmt->execute();
            echo"New Record inserted sucessfully";

        }else{
            echo"Someone already  register using this email ";
        }
        $stmt->close();
        $conn->close();

    }
    }
}else{
    echo"All field are required";
    die();
}
?>