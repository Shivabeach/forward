<body id="forms">
  <div class="container">
    <header>
      <h1><?=$title;?></h1>
    </header>
    <div class="container--left">
      <h3 class="headline">Future Links</h3>
      <ul role="list" class="link-list">
        <li class="item" id="demo12"></li>
        <li class="item-1"></li>
        <li class="item-2"></li>
        <li class="item-3"></li>
        <li class="item-4"></li>
        <li class="item-5"></li>
        <li class="item-6"></li>
        <li class="item-7"></li>
      </ul>
    </div>
    <main>
      <div class="card">
        <div class="card--inside">
          <div class="card--inside-header">
            <h4>Blog Form</h4>
          </div>
          <fieldset>
            <legend>Blog</legend>
            <div id="display"></div>
            <p id="error"></p>
            <!-- <p> Words: <span id="counted"></span></p> -->
            <?php
							$form2 = [
								"id" => "weights"
							];
							echo form_open('forms/blogs', $form2);
							$date1 = [
								"id"					=> "date",
								"type"        => "date",
								"class"       => "input-date",
								"name"        => "date",
								"placeholder" => "Date"
							];
							echo "<p>";
							echo form_input($date1);
							echo "</p>";
							$title = [
								"id"          => "title",
								"class"       => "input-med-lg",
								"name"        => "title",
								"placeholder" => "Title"
							];
							echo "<p>";
							echo form_input($title);
							echo "</p>";
							$counts = [
								"id" => "counted",
								"name" => "words"
							];
							echo "<p>";
							echo "Words: ";
							echo form_input($counts);
							echo "</p>";
							$content = [
								"id"          => "content",
								"name"        => "content",
								"placeholder" => "Content",
								"cols"				=> 80,
								"rows"				=> 15
							];
							echo form_textarea($content);
							echo "<br>";
							$type = [
								"" => "Nothing",
								"blog" => "Blog",
								"health" => "Health"
							];
							$argg = [
								"id" => "type",
								"name" => "type",
								"class" => "input-med"
							];
							echo form_dropdown($argg, $type);
							echo "<br>";
							$tags = [
								"id"       => "tags",
								"name"     => "tags",
								"class"    => "input-med"
							];
							$drop = [
								"" => "Pick One",
								"Negative" => "Negative",
								"Positive" => "Positive "
							];
							echo form_dropdown($tags, $drop);
								echo "<br>";
							$keys = [
								"name" => "primeKeys",
								"id" => "primeKeys",
								"class" => "input-large"
							];
							echo form_input($keys);
							echo "<br>";
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
        <div id="display"></div>
        <!--  -->
        <div>
          <p>Multiply</p>
          <form onsubmit="return false" oninput="o.value = parseInt(a.value) * parseInt(b.value)">

            <input class="input-med" name="a" type="number" step="any"> *
            <input class="input-med" name="b" type="number" step="any"> =
            <output name="o"></output>
          </form>
        </div>
        <div>
          <p>Subtract</p>
          <form onsubmit="return false" oninput="o.value = parseInt(a.value) - parseInt(b.value)">
            <input class="input-med" name="a" type="number" step="any"> -
            <input class="input-med" name="b" type="number" step="any"> =
            <output name="o"></output>
          </form>
        </div>
      </div>
    </div>
    <script defer src="<?php echo base_url('assets/js/forms.js');?>"></script>
    <script defer src="<?php echo base_url('assets/js/jquery.js');?>"></script>