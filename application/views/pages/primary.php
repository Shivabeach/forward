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
      <?php foreach($blog as $row): ?>
      <?php $output = $row->date;
				$final = date('M d, Y', strtotime($output));?>
      <div class="card--inside">
        <h2 class="card--inside-header"><?php echo anchor("pages/single/$row->id", $row->title);?></h2>
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
      <h5 class="headline fs-3 bold-6">Keys</h5>
      <ul class="link-list" role="list">
        <?php foreach($keys as $row):?>
        <li><?=$row->primeKeys;?> </li>
        <?php endforeach;?>
      </ul>
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