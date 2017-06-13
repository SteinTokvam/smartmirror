<?php
$myfile = fopen("newfil.txt", "w") or die("Unable to open file!");
$txt = "1";
fwrite($myfile, $txt);
fclose($myfile);
echo "Sucess";
