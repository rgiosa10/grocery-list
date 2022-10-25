window.addEventListener("load", function() {
  let form = document.querySelector("form#grocery-list");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const userSelections = document.querySelectorAll("input:checked");
    const userSelectionsArray = Array.from(userSelections);

    // create results heading
    const resultsHeading = document.createElement("h2");
    resultsHeading.append("Here are the items that you picked up from the grocery store:");
    document.body.append(resultsHeading);

    userSelectionsArray.forEach(function(element) {
      const paragraph = document.createElement("p");
      paragraph.append(element.value);
      document.body.append(paragraph);
    });
  });
});