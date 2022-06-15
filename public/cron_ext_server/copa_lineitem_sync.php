<?php
ini_set('memory_limit', '2048M');
$xml_req = 
        '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions"><soapenv:Header/><soapenv:Body><urn:ZAS_FM_LINE_ITEM_KE24><RG_POSID><item><SIGN>I</SIGN><OPTION>EQ</OPTION><LOW>H-002599</LOW></item></RG_POSID></urn:ZAS_FM_LINE_ITEM_KE24></soapenv:Body></soapenv:Envelope>';

$URL = "http://192.168.242.122:50100/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_COPA_LINE_ITEM&receiverParty=&receiverService=&interface=SI_COPA_LINE_ITEM&interfaceNamespace=urn:gmf-aeroasia.co.id:COPA_Line_Item";

$ch = curl_init($URL);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: text/xml', 
    'SOAPAction: "http://sap.com/xi/WebService/soap1.1"'
));


curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "$xml_req");
curl_setopt($ch, CURLOPT_USERPWD, 'APL_MDR' . ":" . 'Welcome1');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLINFO_HEADER_OUT, true);
//$output = curl_getinfo($ch);
$output = curl_exec($ch);
//$output = curl_getinfo($ch);
curl_close($ch);


$xml_resp = $output;
$xml_resp = preg_replace("/(<\/?)(\w+):([^>]*>)/", '$1$2$3', $xml_resp);
$xml_resp = simplexml_load_string($xml_resp);
$json = json_encode($xml_resp);
//$responseArray = json_decode($json,true);

var_dump($json);
?>