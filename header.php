<!DOCTYPE html>
<html>
<?php
    include '../config.php';
    

?>
<head>
  <title></title>
  <link rel="stylesheet" type="text/css" href="../public/css/vi.css">
  <script type="text/javascript" src="../public/js/xhr.js"></script>
  <script type="text/javascript" src="../public/js/vi.js"> </script>
  <script type="text/javascript" src="../public/js/validation.js"></script>
      <script type="text/javascript">

          window.onerror = function(msg, url, linenumber) {
              alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
              return false;
          }
          //incorrect;
      </script>
</head>
<body onload = "getContent('registration.php','content') ">
  
  
    <div id="menu">
      <ul>
        <li><a href="#" onClick = "getContent('registration.php','content') ">REGISTRATION </a></li>
        <li><a href="#" onClick = "getContent('admin.php','content');">ADMIN</a></li>
      </ul>
    </div>
  <div id="clear"></div> 
  <br /> 
  <div id="body">
    <div id="clear" />
    <div id="content" /> 
    <div id="here" /> 
  </div>     
  

</body>
</html>










