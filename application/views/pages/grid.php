<body id="grid-page">
  <menu class="top">
    <ul role="list" class="inline-list">
      <li class="inline-list fs-3" id="demo12"></li>
      <li class="item-1 inline-list fs-3"></li>
      <li class="item-2 inline-list fs-3"></li>
      <li class="item-3 inline-list fs-3"></li>
      <li class="item-4 inline-list fs-3"></li>
      <li class="item-5 inline-list fs-3"></li>
      <li class="item-6 inline-list fs-3"></li>
      <li class="item-7 inline-list fs-3"></li>
    </ul>
  </menu>
  <!-- <div class="grid-container">
  	<div class="tuts1">Tuts 1</div>
  	<div class="tuts2">tuts 2</div>
  	<div class="tuts3">tuts 3</div>
  	<div class="tuts4">Tuts 1</div>
  	<div class="tuts5">tuts 2</div>
  	<div class="tuts6">tuts 3</div>
  </div>

  <div class="example">
	   <div class="example-item1"> Nankang NS-25 UHP All-Season Radial Tire - 255/40R19 100Y - Asymetrical</div>
	   <div class="example-item2">2</div>
	   <div class="example-item3">3</div>
	   <div class="example-item4">4</div>
	   <div class="example-item4">4</div>
  </div> -->

  <div class="filer">
    <div id="named1" class="names1">
      <ul>
        <li>Fragile State</li>
        <li>SupperClub</li>
        <li>Supperclub Addiction</li>
        <li>SupperClub One World</li>
        <li>SupperClub Rome</li>
        <li>SupperClub The End</li>
        <li>SupperClub 15 Years</li>
        <li>Siddharta Spirit of Buddha</li>
        <li>Om Lounge</li>
        <li>Banco De Gaia</li>
        <li>Baka Beyond</li>
        <li>Dmitri From Paris</li>
        <li>Nacho Sotomayer</li>
        <li></li>
      </ul>
    </div>
    <div id="named2" class="names2">
      Sidebar <span>named 2</span>
      <p class="topColor"></p>
      <h3>Date Routines</h3>
      <p>
        const date = new Date();<br>
        timers.innerHTML = date.toString();
      </p>
      <p id="timers"></p>
      <p>What is my age? <span class="age"> </span></p>
      <p>Below shows duplicates removed in an array (1, 1, 3, 4, 1, 6, 5, 7, 6)</p>
      <code>const array = [1, 1, 3, 4, 1, 6, 5, 7, 6];<br>
      const newArray = array.filter((num, i) => array.indexOf(num) === i);</code>

      <p>Another way
        <code>let arg = [1, 1, 2, 2, 3, 3, 4, 4];<br>
              const sett = [...new Set(arg)];
        </code>
      </p>
      <p id="newArr"></p>

    </div>
    <div id="named3" class="names3 multi">
      <p id="colorDisplay">Color was here</p>
      <p id="showLength"></p>
      <ul id="showMe"></ul>


    </div>
    <div id="named4" class="names4"><span>named 4</span>
      <p>Sukyaki</p>
      <p>I look up while I walk <br>
        So the tears won't fall<br>
        Remembering those spring days<br>
        But tonight I'm all alone
      </p>
      <p>
        I look up while I walk<br>
        Counting the stars with teary eyes<br>
        Remembering those summer days<br>
        But tonight I'm all alone
      </p>
      <p>
        Happiness lies beyond the clouds<br>
        Happiness lies above the sky<br>
        I look up while I walk<br>
        So the tears won't fall
      </p>
      <p>
        I cry while I walk<br>
        For I am alone tonight<br>
        Remembering those autumn days<br>
        But tonight I'm all alone
      </p>
      <p>
        Sadness hides in the shadow of the stars<br>
        Sadness hides in the shadow of the moon<br>
        I look up while I walk<br>
        So the tears won't fall
      </p>
      <p>
        My heart is filled with sorrow<br>
        For tonight I am alone<br>
        For tonight I am alone
      </p>
    </div>

    <div id="named5" class="names5">
      <span>named 5</span>
      <p>Convert Miles to Kilometers</p>
      <form id="conv">
        <input type="text" id="milesToKilo">
        <button>Convert</button>
      </form>
      <p>Convert Kilos to Miles</p>
      <form id="kilos">
        <input type="text" id="kiloToMiles">
        <button>Convert</button>
      </form>
      <p id="convertedMiles"></p>
      <p id="showMiles"></p>
    </div>
  </div>
  <script src="<?php echo base_url('assets/js/script-dist.js');?>"></script>
  <script type="module" src="<?php echo base_url('assets/js/grid.js');?>"></script>