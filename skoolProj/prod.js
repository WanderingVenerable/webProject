//RANDOM NUMBER GENERATOR
const entNum = document.getElementById("inpBox");
const Ent1 = document.getElementById("fenter");
var container;
Ent1.onclick = function () {
  let constr = parseFloat(entNum.value);
  if (!isNaN(constr) && constr > 0) {
    var randomNumber = Math.floor(Math.random() * constr) + 1;
    console.log(randomNumber);
    container = randomNumber;
  }
};
Ent1.addEventListener("click", function () {
  document.getElementById("num_guess").scrollIntoView({ behavior: "smooth" });
});

// THE NUMBER COUNTER
const inc = document.getElementById(`increase`);
const dec = document.getElementById(`decrease`);
const reset = document.getElementById(`reset`);
const disp = document.getElementById(`display`);
const rezDisp = document.getElementById(`resultDisplay`);
const Ent2 = document.getElementById(`lenter`);
const inc10 = document.getElementById(`inc10`);
const dec10 = document.getElementById(`dec10`);

var val = 0;
disp.textContent = `0`;
inc.onclick = function () {
  val += 1;
  disp.textContent = val;
};
dec.onclick = function () {
  val -= 1;
  disp.textContent = val;
};
reset.onclick = function () {
  val = 0;
  disp.textContent = 0;
};
inc10.onclick = function () {
  val += 10;
  disp.textContent = val;
};
dec10.onclick = function () {
  val -= 10;
  disp.textContent = val;
};

const numCapBar = document.getElementById(`bar`);
// THE SECOND ENTER CLICK

Ent2.onclick = function () {
  if (parseInt(val) == container) {
    document.getElementById(`stat`).textContent = `CONGRATULATIONS`;
    numCapBar.textContent = `YOU GUESSED THE NUMBER`;
    rezDisp.textContent = `GREAT ! YOU WON(Click Here)`;
  } else {
    //HIGH OR LOW BAR
    document.getElementById(`stat`).textContent = `YOU FAILED`;
    if (parseInt(val) - container > 0) {
      if (val > container + container / 2) {
        numCapBar.textContent = "YOU ARE VERY HIGH OFF THE NUMBER";
      } else if (
        val > container + container / 4 &&
        val < container + container / 2
      ) {
        numCapBar.textContent = "YOU SOMEWEHRE BETWEEN AND ABOVE THE NUMBER";
      } else if (val < container + container / 4 && val > container) {
        numCapBar.textContent = "YOU ARE JUST A BIT HIGHER THAN THE NUMBER";
      }
    } else if (parseInt(val) - container < 0) {
      if (val < container / 2) {
        numCapBar.textContent = "YOU ARE VERY LOW OFF THE NUMBER";
      } else if (val < container / 4 && val > container / 2) {
        numCapBar.textContent = "YOU SOMEWEHRE BETWEEN AND BELOW THE NUMBER";
      } else if (val > container / 4 && val < container) {
        numCapBar.textContent = "YOU ARE JUST A BIT LOWER THAN THE NUMBER";
      }
    } else {
      numCapBar.textContent = `THAT WAS RANDOM`;
    }
    rezDisp.textContent = `Try Again(CLick Here)`;
  }
};
Ent2.addEventListener("click", function () {
  document.getElementById("ans").scrollIntoView({ behavior: "smooth" });
});
rezDisp.addEventListener("click", function () {
  document.getElementById(`firstHead`).scrollIntoView({ behavior: "smooth" });
});
