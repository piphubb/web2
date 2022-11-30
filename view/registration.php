<?php include '../model/mselect_option.php'; ?>
<form>  
<table>
    <tr>
        <td>
            <h3>Registration information</h3>
        </td>
    </tr>

    <tr>
        <td>        
            <label>Attendees_type:</label>
        </td>   
        <td>
            <select name="ntype" id="type" 
            onchange="getTypeStudent('type');">
                <option>None</option>    
                <?php echo attendee('atid','attendee','attendees'); ?>
            </select>
            
        </td>
        <td>
            <span id="vtype" style="font-size:80%"></span>
        </td>
    </tr>   

    <tr>
        <td>
            <label>Extra guests:</label>
        </td>
        <td>    
            <input id="ext_guest" type="text" name="ext_guest" value="0" />
        </td>
        <td>
            <span id="vext_guest" style="font-size:80%"></span>
        </td>
    </tr>
    <tr>
        <td>    
            <label>Attending dinner:</label>
        </td>
        <td>    
            <input type="checkbox" id='ch1' name="check1" value="" />
        </td>
    </tr>
    <tr>
        <td>
            <label>Receiving paper:</label>
        </td>
        <td id="tch">   
            <input type="checkbox" id='ch2' name="check2" value="" />
        </td>
        <td>
            <span id="vInvite" style="font-size:80%"></span>
        </td>

    </tr>


    <tr>
        <td>
            <h3 font color="#FF3300" size="5">Personal information</font></h3>
        </td>
    </tr>

    <tr>
        <td>    
            <label>Name:</label>
        </td>
        <td>
            <input type="text" id="name" name="namef"/>
        </td>   
        <td>
            <span id="vname" style="font-size:80%"></span>
        </td>
    </tr>
    <tr>
        <td>
            <label>Address:</label>
        </td>
        <td>    
            <input type="text" id="address" name="address" value="" />
        </td>
        <td>
            <span id="vaddress" style="font-size:80%"></span>
        </td>

    </tr>
    <tr>
        <td>    
            <label>Telephone number:</label>
        </td>
        <td>    
            <input type="text" id="phone" name="phone" value="" />
        </td>
        <td>
            <span id="vphone" style="font-size:80%"></span>
        </td>
    </tr>
    <tr>
        <td>    
            <label>Email:</label>
        </td>

        <td>    
            <input type="text" id="email" name="email" value="" />
        </td>
        <td>
            <span id="vemail" style="font-size:80%"></span>
        </td>
    </tr>
    <tr>
        <td>    
            <label>Attendees' job</label>
        </td>
        <td>    
            <select name="job" id="job">
                <option value=""></option>
                <?php echo attendee('pid','possition','possitions'); ?>
            </select>
            <span id='job1'></span>
        </td>
    </tr>
    <tr>
        <td>    
            <input type="button" name="confirm" value="confirm" 
            onclick="iCheck(); "
            />
            <br/><br/>
            <span id="reg" style="font-size:80%; color:#0000FF"></span>
        </td>
    </tr>

</table>    
</form>