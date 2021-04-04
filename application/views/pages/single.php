<div class="container">
  <?php foreach($single as $row): ?>
  <header>
    <h1><?=ucwords($row->title);?></h1>
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

      <?php $output = $row->date;
				$final = date('M d, Y', strtotime($output));?>
      <div class="card--inside">

        <div class="date fs-2 bold-7"><?php echo $final;?></div>
        <div class="blog-content">
          <p><?php echo auto_typography($row->content);?>
          </p>
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