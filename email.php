
<?php
//post
$phone=$_POST["phone"];
$pickupl = $_POST["pickupl"];
$pickupd = $_POST["pickupd"];
$pickupt = $_POST["pickupt"];
$dropl = $_POST["dropl"];
$dropd = $_POST["dropd"];
$km=$_POST["kms"];
$rate=$_POST["rate"];
$name=$_POST["name"];
$triptype=$_POST["triptype"];
$email=$_POST["email"];

// echo $rate;

if($dropd===''){
    $dropd='-';
}


$htmlContent = '
    <html> 
    <head> 
        <title>Welcome to CodexWorld</title> 
    </head> 
    <body> 
        <h1>Thanks you for joining with us!</h1> 


<table width="100%" cellpadding="0" cellspacing="0" style="min-width:100%;">
    <thead>
      <tr>
        <th scope="col" style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;line-height:30px">Name</th>
        <th scope="col" style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;line-height:30px">Pickup Location</th>
        <th scope="col" style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;line-height:30px">Drop Location</th>
        <th scope="col" style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;line-height:30px">Pickup Time</th>
        <th scope="col" style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;line-height:30px">Total Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td valign="top" style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">{$name}</td>
        <td valign="top" style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">{$pickupl}</td>
        <td valign="top" style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">{$dropl}</td>
        <td valign="top" style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">{$pickupt}</td>
        <td valign="top" style="padding:5px; font-family: Arial,sans-serif; font-size: 16px; line-height:20px;">{$rate}</td>
      </tr>
           
      
    </tbody>
</table>
<p>Toll Permit and Hill charges Extra </p>
    </body> 
    </html>'; 

$msg= "Success\nContact:8610080366 Pickup-Location: $pickupl Pickup-Time: $pickupt Droping-Location: $dropl Km:$km   Amount: Rs. $rate  Extra km rs:  Toll, Permit, Hill Charges Extra";

// echo $msg;

$to="onewayhirecab@gmail.com"; // Receiver Email ID, Replace with your email ID
			            	$subject='Customer Request Form - OnewayHire cab';
						
                            $headers="From: No-reply@onewayhirecab.com";
							 
							 $msg2="Name : $name \n\n Contact No: $phone \n\n Trip-Type: $triptype \n Pickup-Location: $pickupl\n\n Droping-Location: $dropl \n\nPickup-Time: $pickupt \n\nPickup-Date: $pickupd\n\n Amount: Rs. $rate\n\n Drop Date: $dropd";
							$retval = mail ($to,$subject,$htmlContent,$headers);
							if($retval == true){
							echo $msg2;
								
							}
							else{
							echo 'failed';
								
							}
							
if($email===''){
	echo 'no email';
}else{
	$to= $email; // Receiver Email ID, Replace with your email ID
			            	$subject='Trip confirmation Mail - OnewayHire cab';
						
                            $headers="From: onewayhirecab@gmail.com";
							 
							 $msg2="Name : $name \n\n Contact No: $phone \n\n Trip-Type: $triptype \n Pickup-Location: $pickupl\n\n Droping-Location: $dropl \n\nPickup-Time: $pickupt \n\nPickup-Date: $pickupd\n\n Amount: Rs. $rate\n\n Drop Date: $dropd";
							$retval = mail ($to,$subject,$msg2,$headers);
							if($retval == true){
							echo $msg2;
								
							}
							else{
							echo 'failed';
								
							}
}							


                            ?>