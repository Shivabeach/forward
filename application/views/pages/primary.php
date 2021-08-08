<body id="primary">
  <div class="container">
    <header>
      <h1><?=$title;?></h1>
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
        </ul>
        <hr class="rule">
        <ol role="list" class="link-list">
          <?php foreach($bt as $row):?>
          <li><?php echo anchor("pages/single/$row->id", ucwords($row->title));?></li>
          <?php endforeach;?>
        </ol>

      </div>
    </div>

    <main>
      <div class="card">
        <?php foreach($blog as $row): ?>
        <?php $output = $row->date;
				$final = date('M d, Y', strtotime($output));?>
        <div class="card--inside">
          <h2 class="card--inside-header"><?php echo anchor("pages/single/$row->id", ucwords($row->title));?></h2>
          <div class="date fs-2"><?php echo $final;?></div>
          <div class="blog-content">
            <p><?php echo word_limiter($row->content, 40);?>
            </p>
          </div>
          <div class="tags bold-8 fs-2"><?=$row->tags;?></div>
          <hr class="rule">
        </div>
        <?php endforeach;?>


      </div>
    </main>

    <div class="container--right">
      <div class="card--inside">
        <h3 class="headline bold-6">Keys</h3>
        <ul class="link-list" role="list">
          <?php foreach($keys as $row):?>
          <li><?=$row->primeKeys;?> </li>
          <?php endforeach;?>
        </ul>
      </div>
    </div>