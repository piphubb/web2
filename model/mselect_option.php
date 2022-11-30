 <?php
    //include '../config.php';
    function attendee($id,$field,$table,$where=""){    
    	include '../config.php';
        $queri  = "SELECT `$id`,`$field` FROM `$table` $where";
        $sql    = mysqli_query($dbConnect, $queri);
        if(!$sql)
            die("<p>query is notavailable.</p>");
        $opt = "";
        while($row = mysqli_fetch_assoc($sql)){
            $opt.= "
                   <option value={$row[$id]}>
                        {$row[$field]}
                    </option>
                   ";                   
        }
     return $opt;
     }


     function search_type($id,$field,$table){    
        include '../config.php';
        $queri  = "SELECT `$id`,`$field` FROM `$table`";
        $sql    = mysqli_query($dbConnect, $queri);
        if(!$sql)
            die("<p>query is notavailable.</p>");
        $t_radio = '';
        while($row = mysqli_fetch_assoc($sql)){
            $t_radio= "
                   <input type='radio' name='role' value={$row[$id]}>
                        All {$row[$field]}
                    </input>
                   ";                    
        }
     return $t_radio;   
     }


    function getByRecord($id,$field,$table,$where=''){    
        include '../config.php';
        $queri  = "SELECT `$id`,`$field` FROM `$table` $where";
        $sql    = mysqli_query($dbConnect, $queri);
        if(!$sql)
            die("<p>query is notavailable.</p>");
        $opt = "";
        while($row = mysqli_fetch_assoc($sql)){
            $opt.= "
                   <option value={$row[$id]}>
                        {$row[$field]}
                    </option>
                   ";                   
        }
     return $opt;
    }
?>

