
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

// echo $rate;

if($dropd===''){
    $dropd='-';
}


$msg= "Success\nContact:8610080366 Pickup-Location: $pickupl Pickup-Time: $pickupt Droping-Location: $dropl Km:$km   Amount: Rs. $rate  Extra km rs:  Toll, Permit, Hill Charges Extra";

// echo $msg;

$to="onewayhirecab@gmail.com"; // Receiver Email ID, Replace with your email ID
			            	$subject='Customer Request Form - OnewayHire cab';
						
                            $headers="From: No-reply@onewayhirecab.com";
							 
							 $msg2="Name : $name \n\n Contact No: $phone \n\n \n\n Pickup-Location: $pickupl\n\n Droping-Location: $dropl \n\nPickup-Time: $pickupt \n\nPickup-Date: $pickupd\n\n Amount: Rs. $rate\n\n Drop Date: $dropd";
							$retval = mail ($to,$subject,$msg2,$headers);
							if($retval == true){
							echo $msg2;
								
							}
							else{
							echo 'failed';
								
                            }


                            ?>