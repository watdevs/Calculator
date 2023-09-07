// Function to count unique pairs
function countUnique(arr) {
    let s = new Set(arr);
    let n = s.size;
  
    if (n < 2) {
      console.log("No unique pairs can be formed.");  // Moved log here
      return 0;  // No pairs can be formed from less than two unique elements
    }
  
    return (n * (n - 1)) / 2;
  }
  
  // Function to generate all combinations of an array
  function generateCombinations(arr) {
    let result = [];
  
    const f = function(prefix, arr) {
      for (let i = 0; i < arr.length; i++) {
        result.push([...prefix, arr[i]]);
        f([...prefix, arr[i]], arr.slice(i + 1));
      }
    }
  
    f([], arr);
    return result;
  }
  
  // This function removes duplicates and calls generateCombinations
  function printCombinations(arr) {
    let s = new Set(arr);
    let uniqueArr = Array.from(s);
  
    let combinations = generateCombinations(uniqueArr);
    console.log("Combinations:", combinations);
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const myButton = document.getElementById("myButton");
    const myTextarea = document.getElementById("numbersContent");
  
    myButton.addEventListener("click", function() {
      const textareaContent = myTextarea.value;
      const arr = textareaContent.split(/\s+|,/).map(x => x.trim()).filter(x => x).map(Number);
      
      // Calculate unique pairs
      const uniquePairsCount = countUnique(arr);
  
      // Print all combinations
      printCombinations(arr);
      
      // Display the unique pairs count
      document.getElementById("uniquePairs").innerText = uniquePairsCount;
  
      console.log("Button was clicked!");
      console.log("The number of unique pairs is:", uniquePairsCount);
    });
  });
  