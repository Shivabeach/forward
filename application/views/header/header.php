<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>
    <?php echo $title;?>
  </title>
  <link rel="stylesheet" href="<?php echo base_url('assets/css/main.min.css');?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/ui-darkness/jquery-ui.css" media="all"
    onload="this.media='all'">
  <script src="<?php echo base_url('assets/js/script-dist.js');?>" defer></script>

  <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
  <!-- <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png"> -->
  <!--   <base target="_blank"> -->
  <script>
  let FF_FOUC_FIX;
  </script>
</head>