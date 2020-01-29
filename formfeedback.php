<?php
$name=$_POST["Firstname"];
$lname=$_POST["Lastname"];
$email=$_POST["email"];
$phone=$_POST["phone"];
$safety=$_POST["safety"];
$travel=$_POST["travel"];
$refer=$_POST["refer"];


// $phone=$_POST["phone"];
$message=$_POST["message"];
$to="lakshvj21@gmail.com"; // Receiver Email ID, Replace with your email ID
			            	$subject='Feedback form Submit from OnewayHire cab';
						
                            $headers="From: ".$email;
							 
							 $msg="Name : $name $lname \n\n Email: $email \n\n \n\n Phone:$phone \n\n Safety,politness & performance $safety\n\n Would you travel again with oneway hire cab in future $travel \n\n Would you refer to others $refer \n\n Feedback: $message";
							$retval = mail ($to,$subject,$msg,$headers);
							if($retval == true){
							echo 'success feedback';
								
							}
							else{
							echo 'failed';
								
							}
?>