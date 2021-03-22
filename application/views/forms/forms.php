<div class="container">
  <header>
    <h1><?=$title;?></h1>
  </header>

  <div class="container--left">
    <h3>Future Links</h3>
    <ul role="list" class="link-list">
      <li class="item-1"></li>
      <li class="item-2"></li>
      <li class="item-3"></li>
      <li class="item-4"></li>
    </ul>

  </div>

  <main>
    <div class="card">
      <div class="card--inside">
        <div class="card--inside-header">
          <h5>Exercise Form</h5>
        </div>
        <fieldset>
          <legend>Walking Record</legend>
          <!-- date time place -->
          <?php
							$form1 = [
								"id" => "weight"
							];
							echo form_open('forms/walk', $form1);
							$date1 = [
								"type"        => "date",
								"class"       => "input-med",
								"name"        => "date",
								"placeholder" => "Date"
							];
							echo form_input($date1);
							$distance = [
								"id"          => "distance",
								"class"       => "input-med",
								"name"        => "distance",
								"placeholder" => "distance"
							];
							echo form_input($distance);

							$place = [
								"id"          => "place",
								"class"       => "input-med",
								"name"        => "place",
								"placeholder" => "place"
							];
							echo form_input($place);
							echo "<br>";
							echo "<button type='submit' value='Submit'>Submit</button>";
						echo "<button type='reset' value='Reset'>Reset</button>";
							echo form_close();
						?>
        </fieldset>
      </div>

      <div class="card--inside">
        <div class="card--inside-header">
          <h5>Blog Form</h5>
        </div>

        <fieldset>
          <legend>Blog</legend>
          <div id="display"></div>

          <!-- date time place -->
          <?php
							$form2 = [
								"id" => "weight"
							];
							echo form_open('forms/blogs', $form2);
							$date1 = [
								"type"        => "date",
								"class"       => "input-med",
								"name"        => "date",
								"placeholder" => "Date"
							];
							echo form_input($date1);
							echo "<br>";
							$title = [
								"id"          => "title",
								"class"       => "input-med-lg",
								"name"        => "title",
								"placeholder" => "Title"
							];
							echo form_input($title);
							echo "<br>";?>
          <span role="alert" id="nameError" aria-hidden="true"> Entry is required </span>
          <?php echo "<br>";
							$content = [
								"id"          => "content",
								"name"        => "content",
								"placeholder" => "Content",
								"cols"				=> 80,
								"rows"				=> 15
							];
							echo form_textarea($content);
							echo "<br>";?>
          <span role="alert" id="contentError" aria-hidden="true"> Entry is required </span>
          <?php echo "<br>";
							$tags = [
								"id"       => "tags",
								"name"     => "tags",
								"class"    => "input-med",
								"required" => true
							];
							$drop = [
								"" => "",
								"Negative" => "Negative",
								"Positive" => "Positive "
							];
							echo form_dropdown($tags, $drop);
								echo "<br>";?>
          <span role="alert" id="tagsError" aria-hidden="true"> Entry is required </span>
          <?php echo "<br>";
							$keys = [
								"name" => "primeKeys",
								"id" => "primeKeys",
								"class" => "input-large"
							];
							echo form_input($keys);
							echo "<br>";?>
          <span role="alert" id="primeError" aria-hidden="true"> Entry is required </span>
          <?php echo "<br>";

							echo "<button id='blogger' type='submit' value='Submit'>Submit</button>";
						echo "<button type='reset' value='Reset'>Reset</button>";
							echo form_close();
						?>
        </fieldset>
      </div>
    </div>
  </main>
  <div class="container--right">
    <div class="card--inside">
      <h5 class="headline fs-3 bold-6">Keys</h5>

    </div>
  </div>

  <footer>
    <div class="box">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit labore delectus accusantium dolor
      nisi aperiam.</div>
    <div class="box">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio adipisci reiciendis ea unde
        perferendis.</p>
    </div>
    <div class="box">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio adipisci reiciendis ea unde
        perferendis.</p>
    </div>
    <div class="box">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio adipisci reiciendis ea unde
        perferendis.</p>
    </div>
  </footer>
</div>