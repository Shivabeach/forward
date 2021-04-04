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
      <?php foreach($health as $row): ?>
      <?php $output = $row->date;
				$final = date('M d, Y', strtotime($output));?>
      <div class="card--inside">
        <h2 class="card--inside-header"><?php echo anchor("pages/singles/$row->id", ucwords($row->title));?></h2>
        <div class="date fs-2"><?php echo $final;?></div>
        <div class="blog-content">
          <p><?php echo word_limiter($row->content, 40);?>
          </p>
        </div>
        <div class="tags bold-8 fs-2"><?=$row->tags;?></div>
      </div>
      <?php endforeach;?>

    </div>
  </main>

  <div class="container--right">
    <div class="card--inside">
      <h5 class="headline fs-3 bold-6">Health Keys</h5>
      <ul class="link-list" role="list">
        <?php foreach($healthkeys as $row):?>
        <li><?=$row->primeKeys;?> </li>
        <?php endforeach;?>
      </ul>
    </div>
  </div>