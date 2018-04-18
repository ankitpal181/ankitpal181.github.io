<?php
    function send_data_database($productName, $productSize, $productMaterial, $customerName, $customerNumber, $customerEmailAddress, $customerResidence){
		
		$sent = "tru";
		if($sent == "true"){
			send_mail_customer($productName, $productSize, $productMaterial, $customerName, $customerNumber, $customerEmailAddress, $customerResidence);
			return "Done";
		}
		else{
			return "Failed";
		}
	}
    function send_mail_customer($productName, $productSize, $productMaterial, $customerName, $customerNumber, $customerEmailAddress, $customerResidence){
		
		$sent = "true";
		if($sent == "true"){
			return "Done";
		}
		else{
			return "Failed";
		}
	}
    function send_mail_sales($productName, $productSize, $productMaterial, $customerName, $customerNumber, $customerEmailAddress, $customerResidence){
		$to = $customerEmailAddress;
		$subject = "Order";
		$message = "<center>
		                <img src='https://ankitpal181.github.io/urbexinn/images/logo-black.png' width='' height=''>
						<br>
						<p style='font-family: gotham; font-size: 15px;'>Hello ".$customerName."</p>
						<br>
						<p style='font-family: gotham; font-size: 15px;'>We have received your order for ".$productName."(".$productSize.", ".$productMaterial."). We will contact you soon for the updates on your order. Thank You for placing an order with us.</p>
						<br>
						<img src='https://ankitpal181.github.io/urbexinn/images/facebook.png' width='' height=''>
						<img src='https://ankitpal181.github.io/urbexinn/images/twitter.png' width='' height=''>
						<img src='https://ankitpal181.github.io/urbexinn/images/instagram.png' width='' height=''>
						<img src='https://ankitpal181.github.io/urbexinn/images/youtube.png' width='' height=''>
					</center>
		";
		$header = "From:www.Urbexinn.com \r\n MIME-Version:1.0 \r\n Content-Type:text/html \r\n";
		mail($to, $subject, $message, $header);
		$sent = "tru";
		if($sent == "true"){
			send_data_database($productName, $productSize, $productMaterial, $customerName, $customerNumber, $customerEmailAddress, $customerResidence);
			return "Done";
		}
		else{
			return "Failed";
		}
	}
    if(isset($_POST['confirmBtn'])){
        $productName = $_POST['productName'];
        $productSize = $_POST['productSize'];
        $productMaterial = $_POST['productMaterial'];
        $customerName = $_POST['customerName'];
	    $customerNumber = $_POST['customerNumber'];
	    $customerEmailAddress = $_POST['customerEmailAddress'];
	    $customerResidence = $_POST['customerResidence'];
		echo send_mail_sales($productName, $productSize, $productMaterial, $customerName, $customerNumber, $customerEmailAddress, $customerResidence);
	}
?>