
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
$phone2 =8072395501;

// echo $rate;



$msg= "OneWayHireCabs\nContact:8610080366 Pickup-Location: $pickupl Pickup-Time: $pickupt Droping-Location: $dropl Km:$km   Amount: Rs. $rate  Toll-Permit, Hill Charges Extra";
$msg2= "New order placed \nContact:$phone Pickup-Location: $pickupl Pickup-Time: $pickupt Droping-Location: $dropl Km:$km   Amount: Rs. $rate ";

// echo $msg;

// $to="onewayhirecab@gmail.com"; // Receiver Email ID, Replace with your email ID
// 			            	$subject='Customer Request Form - OnewayHire cab';
						
//                             $headers="From: ".$email;
							 
// 							 $msg2="Name : $name \n\n Contact No: $phone \n\n \n\n Pickup-Location: $pickupl\n\n Droping-Location: $dropl \n\nPickup-Time: $pickupt \n\n Amount: Rs. $rate\n\n Drop Date: $dropd";
// 							$retval = mail ($to,$subject,$msg2,$headers);
// 							if($retval == true){
// 							echo 'success';
								
// 							}
// 							else{
// 							echo 'failed';
								
// 							}

$url="https://www.sms4india.com/api/v1/sendCampaign";
$message = urlencode($msg);// urlencode your message
$curl = curl_init();
curl_setopt($curl, CURLOPT_POST, 1);// set post data to true
curl_setopt($curl, CURLOPT_POSTFIELDS, "apikey=8SXV8QM7KI2Q2APPKOCFOZGWUOPYOF8E&secret=0TGRHVX6MVO4FP9X&usetype=prod&phone=$phone&senderid=WAYCAB&message=$message");// post data
// query parameter values must be given without squarebrackets.
 // Optional Authentication:
curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);
curl_close($curl);
echo $result;

$url="https://www.sms4india.com/api/v1/sendCampaign";
$message = urlencode($msg2);// urlencode your message
$curl = curl_init();
curl_setopt($curl, CURLOPT_POST, 1);// set post data to true
curl_setopt($curl, CURLOPT_POSTFIELDS, "apikey=8SXV8QM7KI2Q2APPKOCFOZGWUOPYOF8E&secret=0TGRHVX6MVO4FP9X&usetype=prod&phone=$phone2&senderid=WAYCAB&message=$message");// post data
// query parameter values must be given without squarebrackets.
 // Optional Authentication:
curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);
curl_close($curl);
echo $result;

?>