/* Create a prompt to enter ice cream flavors - vanilla,vanilla,vanilla,strawberry,coffee,coffee */
let froyoFlavors = prompt(
    "Enter a list of comma-separated froyo flavors!"
  );

  const flavorArray = froyoFlavors.split(",");

console.log(flavorArray);

//create a function that shows the frequency of the items in the array
function flavorFrequency(numOfEach) {
  const froyo = {};
  for (let i = 0; i < numOfEach.length; i++) {
    if (froyo[numOfEach[i]] === undefined) {
      froyo[numOfEach[i]] = 1;
    } else {
      froyo[numOfEach[i]] += 1;
    }
  }
  console.log(froyo);
}

console.table(flavorFrequency(flavorArray));
