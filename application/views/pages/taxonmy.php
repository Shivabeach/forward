<body id="tax">
	<div id="tax-container">
    <menu id="tax-menu">
      <h2 class="upper">Taxonomy</h2>
      <ul role="list" class="inline-list">
        <li class="inline-list fs-3 white" id="demo12"></li>
        <li class="item-1 inline-list fs-3 shadow"></li>
        <li class="item-2 inline-list fs-3 shadow"></li>
        <li class="item-3 inline-list fs-3 shadow"></li>
        <li class="item-4 inline-list fs-3 shadow"></li>
        <li class="item-5 inline-list fs-3 shadow"></li>
        <li class="item-6 inline-list fs-3 shadow"></li>
      </ul>
    </menu>
    <div class="discuss">
      <p id="today"></p>
      <p>This page is defined as containing words pertinet to weight, Ketosis, foods and any other items of interest to the goals</p>
      <div id="taxColor"></div>
      <p id="location"></p>
    </div>
    <div class="word">
      <h5 class="top-title">Words, Definitions and Details</h5>
      <details>
        <summary>Ketosis</summary>
          <p>Ketosis is a metabolic state characterized by elevated levels of ketone bodies in the blood or urine</p>
      </details>
      <details>
        <summary>Fasting</summary>
          <p>Fasting is the willful refrainment from eating and sometimes drinking. From a purely physiological context, "fasting" may refer to the metabolic status of a person who has not eaten overnight, or to the metabolic state achieved after complete digestion and absorption of a meal.</p>
      </details>
      <details>
        <summary>Map</summary>
          <code>const HeroName = characters.map((character) => character.name);
            m1.innerHTML = heroName.toString();</code>
      </details>
      <details>
        <summary>Reduce</summary>
        <code>const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);
          r1.innerHTML = `The total mass is ${totalMass}`;</code>
      </details>
      <details>
        <summary>Every</summary>
        <code>const allBlueEyes = characters.every((character) => character.eye_color === 'blue');
          e1.innerText = allBlueEyes;</code>
      </details>
      <details>
        <summary>Filter</summary>
        <code>const charactersByMass = characters.filter((character) => character.mass > 100);
        f1.innerHTML = JSON.stringify(charactersByMass);
        //Get characters with height less than 200</code>
      </details>
      <p>See grid generated page</p>
    </div>
    <div class="regex">regex
      <ul class="regy">
        <li>Find a word ending in ing - /\w+(ing)/g</li>
        <li>IP Address - /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g</li>
        <li>Find a word that starts with re - /(?:\bre)\w+\b/g</li>
        <li>Persons name Mr-Mrs-Ms - M(r|s|rs)\.?\s[A-Z]\w*</li>
      </ul>
      <div>
        const string = 'Whatever string'<br>
        const regex = /pattern/<br>
        const exists = regex/test(string)
      </div>
      <p>Below shows how to remove a particular value from an array. theArray = ['one', 'two', 'three'];</p>
      <div class="arra">
        <form action="" id="removal">
          <p><input class="make" type="text" placeholder="make"></p>
          <p><input class="take" type="text" placeholder="take"></p>
          <button type="submit">Submit</button>
        </form>
        <p class="displayArray"></p>
      </div>
      <div>
        <ul>
          <li>Find</li>
          <li>reduce</li>
          <li>Every</li>
          <li>Some</li>
          <li>Filter</li>
          <li>Map</li>
        </ul>
      </div>

    </div>
    <div class="sides">
      <p>There be whales here<br/>
        A study of Regex in use<br/>
        Upon reaching the 1st 4 alphanumeric characters, the regex is satisfied and becomes true
      </p>

      <form action=""><input class="reg" type="text"><button type="submit">Submit</button></form>
      <div id="isItTrue"></div>
    </div>
    <div class="footy">
      <p>Do not use classes more than once when using them in Javascript</p>
      <code>
        Removing item (ECMAScript 6 code)<br>

        let value = 3<br>

        let arr = [1, 2, 3, 4, 5, 3]<br/>

        arr = arr.filter(item => item !== value)<br>

        console.log(arr)<br>
        [ 1, 2, 4, 5 ]

      </code>
    </div>

  </div>
  <!-- <script src="<?php echo base_url('assets/js/script-dist.js');?>" defer></script> -->
  <script src="<?php echo base_url('assets/js/tax-dist.js');?>" defer></script>
</body>