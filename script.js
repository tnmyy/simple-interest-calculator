console.log(`Simple Interest Calculator`);

let btn = document.getElementById("btn");

// Declaring Variables

let principalInput = document.getElementById("principal");
let rateInput = document.getElementById("rate");
let timeInput = document.getElementById("time");
let timePeriodInput = document.getElementById("timePeriod");

let principalOutput = document.getElementById("principalOutput");
let rateOutput = document.getElementById("interestOutput");
let amountOutput = document.getElementById("amountOutput");

// Button Eventlistener

btn.addEventListener("click", (event) => {
  event.preventDefault();

  let principal = Number.parseInt(principalInput.value);
  let rate = Number.parseInt(rateInput.value);
  let time = Number.parseInt(timeInput.value);
  let timePeriod = timePeriodInput.value;

  //   console.log(principal);
  //   console.log(rate);
  //   console.log(time);
  //   console.log(timePeriod);

  //   Applying Formulae

  let totalInterest;
  let totalAmount;

  if (timePeriod === "year") {
    console.log(`Value is Year`);

    totalInterest = (principal * rate * time) / 100;
  } else {
    console.log(`Value is Month`);

    // time = time / 12;
    totalInterest = (principal * rate * time) / (12 * 100);
  }

  console.log(`Total Interest ${totalInterest}`);

  totalAmount = totalInterest + principal;
  console.log(`Total Amount ${totalAmount}`);

  //   Entering Output Data

  principalOutput.innerHTML = `₹${principal}`;
  rateOutput.innerHTML = `₹${totalInterest.toFixed(2)}`;
  amountOutput.innerHTML = `₹${totalAmount.toFixed(2)}`;

  event.preventDefault();
});

// si = p.r.t/100
