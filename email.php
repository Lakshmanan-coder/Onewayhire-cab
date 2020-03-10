
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
$cartype=$_POST["cartype"];

// echo $rate;
if($triptype==="droptrip" && $cartype==="sedan"){
	$fare = "Rs.12/km";
  }else if($triptype==="droptrip" && $cartype==="suv") {
	  $fare = "Rs.15/km";
  }else if ($triptype==="droptrip" && $cartype==="suv"){
	  $fare = "Rs.10/km";
  }else{
	  $fare = "Rs.13/km";
  }
if($dropd===''){
    $dropd='-';
}

$message = '<html><body>';
$message .= "<h1>Customer Trip Requestation </h1>";
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . $name . "</td></tr>";
$message .= "<tr><td><strong>Pickup Location:</strong> </td><td>" . $pickupl . "</td></tr>";
$message .= "<tr><td><strong>Drop Location:</strong> </td><td>" .$dropl . "</td></tr>";
$message .= "<tr><td><strong>Trip Type:</strong> </td><td>" . $triptype . "</td></tr>";
$message .= "<tr><td><strong>Pickup Date:</strong> </td><td>" . $pickupd . "</td></tr>";
$message .= "<tr><td><strong>Fare:</strong> </td><td>" . $fare . "</td></tr>";
$message .= "<tr><td><strong>Total Kms:</strong> </td><td>" . $km . "</td></tr>";
$message .= "<tr><td><strong>Total Rate:</strong> </td><td>" . $rate . "</td></tr>";
$message .= "</table>";
$message .= "<p><strong>Toll Permits , Hill Charges Extra</strong></p>";
$message .= "</body></html>";


// $msg= "Success\nContact:8610080366 Pickup-Location: $pickupl Pickup-Time: $pickupt Droping-Location: $dropl Km:$km   Amount: Rs. $rate  Extra km rs:  Toll, Permit, Hill Charges Extra";

// echo $msg;

$to="onewayhirecab@gmail.com"; // Receiver Email ID, Replace with your email ID
			            	$subject='Customer Request Form - OnewayHire cab';
						
							$headers="From: No-reply@onewayhirecab.com \r\n";
							$headers .= "MIME-Version: 1.0\r\n";
                           
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
							 
							 $msg2="Name : $name \n\n Contact No: $phone \n\n Trip-Type: $triptype \n Pickup-Location: $pickupl\n\n Droping-Location: $dropl \n\nPickup-Time: $pickupt \n\nPickup-Date: $pickupd\n\n Amount: Rs. $rate\n\n Drop Date: $dropd";
							$retval = mail ($to,$subject,$message,$headers);
							if($retval == true){
							echo $message;
								
							}
							else{
							echo 'failed';
								
							}
							
if($email===''){
	echo 'no email';
}else{

  $messag = '<html><body>';
$messag .= '<h1>Mail Confirmation Regarding Trip</h1>';
$messag .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$messag .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . $name . "</td></tr>";
$messag .= "<tr><td><strong>Pickup Location:</strong> </td><td>" . $pickupl . "</td></tr>";
$messag .= "<tr><td><strong>Drop Location:</strong> </td><td>" .$dropl . "</td></tr>";
$messag .= "<tr><td><strong>Trip Type:</strong> </td><td>" . $triptype . "</td></tr>";
$messag .= "<tr><td><strong>Pickup Date:</strong> </td><td>" . $pickupd . "</td></tr>";
$messag .= "<tr><td><strong>Fare:</strong> </td><td>" . $fare . "</td></tr>";
$messag .= "<tr><td><strong>Total Kms:</strong> </td><td>" . $km . "</td></tr>";
$messag .= "<tr><td><strong>Total Rate:</strong> </td><td>" . $rate . "</td></tr>";
$messag .= "</table>";
$messag .= "<p><strong>Toll Permits , Hill Charges Extra</strong></p>";
$messag .= "</body></html>";
	$to= $email; // Receiver Email ID, Replace with your email ID
			            	$subject='Trip confirmation Mail - OnewayHire cab';
						
							$headers="From: onewayhirecab@gmail.com \r\n";
							$headers .= "MIME-Version: 1.0\r\n";
                            
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
							 
							//  $msg2="Name : $name \n\n Contact No: $phone \n\n Trip-Type: $triptype \n Pickup-Location: $pickupl\n\n Droping-Location: $dropl \n\nPickup-Time: $pickupt \n\nPickup-Date: $pickupd\n\n Amount: Rs. $rate\n\n Drop Date: $dropd";
							$retval = mail ($to,$subject,$messag,$headers);
							if($retval == true){
							echo $messag;
								
							}
							else{
							echo 'failed';
								
							}
}							


                            ?>