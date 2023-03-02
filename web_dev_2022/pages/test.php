<?php
$fd = fopen("data.txt", "w");

$txt = "test string";
echo $txt;

fwrite($fd, $txt);
fclose($fd);

echo "program ended prooperly";

?>