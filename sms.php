
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

echo $rate;

$msg= "Success\nContact:8610080366 Pickup-Location: $pickupl Pickup-Time: $pickupt Droping-Location: $dropl Km:$kms   Amount: Rs. $rate  Extra km rs:  Toll, Permit, Hill Charges Extra";

echo $msg;

$url="https://www.sms4india.com/api/v1/sendCampaign";
$message = urlencode($msg);// urlencode your message
$curl = curl_init();
curl_setopt($curl, CURLOPT_POST, 1);// set post data to true
curl_setopt($curl, CURLOPT_POSTFIELDS, "apikey=K8ONYLPMH3I4W2E2G465E8GO9CISWX7I&secret=M2BZSS32X1ERFAAK&usetype=stage&phone=$phone&senderid=oneway&message=$message");// post data
// query parameter values must be given without squarebrackets.
 // Optional Authentication:
curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);
curl_close($curl);
echo $result;
?>