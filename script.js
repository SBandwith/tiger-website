/* .js files add interaction to your website */

var factList = ["India has over half the world’s population of tigers.","All tiger species are endangered, critically endangered, or threatened.","There are less than 4,000 tigers in the world","Tigers are the national animal of India", "Just over a century ago, 100,000 wild tigers roamed across Asia.", "Originally there were nine subspecies of tigers, but over the last 80 years three have become completely extinct", "India has over half the world’s population of tigers.", "On average two tigers are seized from traffickers every week.", "There are more tigers in captivity than there are in the wild.","The TX2, the international tiger conservation goal, is the most ambitious conservation goal for any one species."];

var fact = document.getElementById("fact");

var myButton = document.getElementById("myButton");
var count=0;

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
if (myButton){
  myButton.addEventListener("click", displayFact);
}

