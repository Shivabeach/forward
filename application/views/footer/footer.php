  <footer>
    <div id="one" class="box padding-1">

      <?php	foreach($waled as $row):?>
      <?php
				$now = time();
				$date = date("m-Y", $now);
				$distance = round($row->distance, 2);
				if($date == "04-2021"):
					echo "<p>I have walked " . $distance . " miles from August 2020 to April 2021 </p>";
				else:
					echo "No Date";
				endif;
			?>
      <?php endforeach;?>
    </div>
    <div id="two" class="box padding-1">
      <?php foreach ($last as $list):?>
      <p>Last time I walked was <?=nice_date($list->date, "D  M d, Y");?></p>
      <?php endforeach;?>
    </div>
    <div id="three" class="box">

    </div>
    <div id="four" class="box">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio adipisci reiciendis ea unde
        perferendis.</p>
    </div>
  </footer>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"
    integrity="sha256-xNjb53/rY+WmG+4L6tTl9m6PpqknWZvRt0rO1SRnJzw=" crossorigin="anonymous"></script>
  <script src="<?php echo base_url('assets/js/script-dist.js');?>" defer></script>
  </body>