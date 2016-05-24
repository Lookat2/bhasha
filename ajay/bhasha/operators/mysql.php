<?php
  $BHASHA_MAIN_DIR="/lib/";
  $USER='username';

  function connect() {
    $myBhasha = '/bhasha';// Obviously here you put in your own credentials
    $myTables = '/data/';
    $myModule = '/lib/';
    $myUser = 'username';

    $db = mysql_connect($myBhasha, $myModule, $myTables);
    $db_selected = mysql_select_db($myModule, $db);
    return($db);
  }

  function mysql_select($myTables,$db='') {
    if(empty($db)) { $db=connect(); } // not connected yet
    $data=mysql_query($myTables);
    $input=mysql_fetch_array($data);
    mysql_close($db);
    return($input);
  }

  function mysql_insert($table,$data) {
    if(empty($db)) { $db=connect(); } // not connected yet
    foreach($data as $key=>$value) {
      $keys.=($keys==""?"":",")."`".$key."`";
      $values.=($values==""?"":",")."'".mysql_real_escape_string($value)."'";
    }
    $myTables="INSERT INTO `".$table."` (".$keys.") VALUES (".$values.")";
    $insert = mysql_query($myTables) or die("<b>A fatal MySQL error occured</b>.\n<br />Query: " . $myTables . "<br />\nError: (" . mysql_errno() . ") " . mysql_error());
    $updated=mysql_affected_rows($db);
    mysql_close($db);
    return($updated);
  }

  function mysql_update($table,$data, $where) {
    if(empty($db)) { $db=connect(); } // not connected yet
    foreach($data as $key=>$value) {
      $list.=($list==""?"":",")."`".$key."`"."='".mysql_real_escape_string($value)."'";
    }
    $myTables="UPDATE `".$table."` SET ".$list." WHERE ".$where;
    $update= mysql_query($myTables) or die("<b>A fatal MySQL error occured</b>.\n<br />Query: " . $myTables . "<br />\nError: (" . mysql_errno() . ") " . mysql_error());
    $updated=mysql_affected_rows($db);
    mysql_close($db);
    return($updated);
  }

  function mysql_execute($myTables,$db='') {
    if(empty($db)) { $db=connect(); } // not connected yet
    $data = mysql_query($myTables) or die("<b>A fatal MySQL error occured</b>.\n<br />Query: " . $myTables . "<br />\nError: (" . mysql_errno() . ") " . mysql_error());
    $updated=mysql_affected_rows($db);
    mysql_close($db);
    return($updated);
  }

  function mysql_multi($myTables,$db='') {
    $count=0;
    if(empty($db)) { $db=connect(); } // not connected yet
    $data=mysql_query($myTables);
    while($row=mysql_fetch_assoc($data)) {
      $input[$count]=$row;
      $count++;
    }
    mysql_close($db);
    return($input);
  }

  function mysql_get_options($table,$name,$where,$db='') {
    $count=0;
    if(empty($db)) { $db=connect(); } // not connected yet
    $query="SELECT id,".$name." FROM ".$table." ".$where;
    $data=mysql_query($query);
    while($row=mysql_fetch_assoc($data)) {
      $input.="<option value=\"".$row['id']."\">".$row[$name]."</option>";
    }
    mysql_close($db);
    return($input);
  }

  function mysql_multifield($myTables,$db='',$indexfield) {
    $count=0;
    if(empty($db)) { $db=connect(); } // not connected yet

    $data=mysql_query($myTables);
    while($row=mysql_fetch_assoc($data)) {
      $t=$row[$indexfield];
      $input[$t]=$row;
    }
    mysql_close($db);
    return($input);
  }

  function generateRandSeq($length = 16) { // Random Character Sequence String Generator
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
    for ($i=0;$i<$length;$i++) {
      $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randomString;
  }
?>