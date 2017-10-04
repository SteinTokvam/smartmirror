<?php
$myfile = fopen("newfil.txt", "w") or die("Unable to open file!");
$txt = " Mouse\n";
fwrite($myfile, $txt);
$txt = "Minnie Mouse\n";
fwrite($myfile, $txt);
fclose($myfile);
echo "sucess";
