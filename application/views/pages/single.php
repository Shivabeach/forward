<body id="single">
  <div class="container">
    <?php foreach($single as $row): ?>
    <header>
      <h1><?=ucwords($row->title);?></h1>
    </header>

    <div class="container--left">
      <div class="card--inside">
        <h3 class="headline">Future Links</h3>
        <ul role="list" class="link-list">
          <li id="demo12"></li>
          <li class="item-1"></li>
          <li class="item-2"></li>
          <li class="item-3"></li>
          <li class="item-4"></li>
          <li class="item-5"></li>
          <li class="item-6"></li>
          <li class="item-7"></li>
          <li class="item-8"></li>
        </ul>
        <hr class="rule">
      </div>
    </div>

    <main>
      <div class="card">

        <?php $output = $row->date;
				$final = date('M d, Y', strtotime($output));?>
        <div class="card--inside">

          <div class="date fs-2 bold-7"><?php echo $final;?></div>
          <div class="words fs2 bold7">Words: <?php echo $row->words;?> </div>
          <div class="blog-content">
            <?php echo auto_typography($row->content);?>
          </div>
          <div class="blog--keys"><span class="hidden"><?php echo $row->primeKeys;?></span> </div>
          <div class="tags bold-8 fs-2"><?=$row->tags;?></div>
        </div>
        <?php endforeach;?>

      </div>
    </main>

    <div class="container--right">
      <div class="card--inside">
        <h5 class="headline fs-3 bold-6">Keys</h5>
        <ul class="link-list" role="list">
          <?php
        if(isset($healthKeys)){
          foreach($healthKeys as $row) {
            echo "<li>$row->primeKeys </li>";
          }
        }else {
          foreach($keys as $row) {
            echo "<li>$row->primeKeys</li>";
          }
        }
        ?>
        </ul>
      </div>
    </div>