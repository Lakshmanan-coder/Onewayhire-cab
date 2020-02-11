
<?php
//post
$phone=$_POST["phone"];
$pickupl = $_POST["pickupl"];
$pickupd = $_POST["pickupd"];
$pickupt = $_POST["pickupt"];
$dropl = $_POST["dropl"];
$dropd = $_POST["dropd"];
$dropt = $_POST["dropt"];

$msg="Pickup Location: $pickupl \n\n Pickup date: $pickupd Pickup Time: $pickupt \n\n \n\n Drooping Location: $dropl \n\n Drooping date: $dropd Drooping Time: $dropt";

echo $msg
$url="https://www.sms4india.com/api/v1/sendCampaign";
$message = urlencode($msg);// urlencode your message
$curl = curl_init();
curl_setopt($curl, CURLOPT_POST, 1);// set post data to true
curl_setopt($curl, CURLOPT_POSTFIELDS, "apikey=[7H05EN9RGMFYV3QB995QQMP473OO9MMT]&secret=[Q9JHEPEP0124TH5P]&usetype=[string]&phone=[$phone]&senderid=[onewayhirecab]&message=[$message]");// post data
// query parameter values must be given without squarebrackets.
 // Optional Authentication:
curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);
curl_close($curl);
echo $result;
?>