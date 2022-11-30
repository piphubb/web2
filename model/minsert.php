 <?php
    
    function iregister($name,$address,$phone,$email,$aJob,$aType,$ext_guest,$invite,$date){
   include '../config.php';
    $queri      ="INSERT INTO infor(`name`, `address`, `phone`, `email`, `job`, `type`, `ext_guest`, `invite`, `date`) 
                  VALUES('$name', '$address', '$phone', '$email', '$aJob', '$aType', '$ext_guest', '$invite', '$date')";
    $sql        = mysqli_query($dbConnect, $queri);    
   		 mysql_query($sql);

    }

?>


