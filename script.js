// // Generate random numbers for bars
let mytextarea=document.getElementById('mytextarea');
    let CopyButton=document.getElementById("CopyButton");

    CopyButton.onclick=function(){
      mytextarea.select();
      document.execCommand("Copy");
      CopyButton.innerText="Code copied!"
    }


function generateRandomNumbers(n) {
     const numbers = [];
     for (let i = 0; i < n; i++) {
       numbers.push(Math.floor(Math.random() * 100) + 1);
     }
     return numbers;
    
   }
createBars();
   // Create bars based on the array
   function createBars(array) {
     const barsContainer = document.getElementById("bars-container");
     barsContainer.innerHTML = "";
     for (const num of array) {
       const bar = document.createElement("div");
       bar.classList.add("bar");
       bar.style.height = num * 2 + "px";
       barsContainer.appendChild(bar);
     }
   }

   // Delay function to simulate animation
   function delay(ms) {
     return new Promise((resolve) => setTimeout(resolve, ms));
   }
   function bubbleCode(){
    document.getElementById('mytextarea').innerHTML=
    "//Bubble Sort Function \nasync function bubbleSort(array) \n{\n   const n = array.length; \n   for (let i = 0; i < n - 1; i++) { \n   for (let j = 0; j < n - i - 1; j++) { \n      if (array[j] > array[j + 1]) { \n          [array[j], array[j + 1]] =  [array[j + 1], array[j]]; \n   createBars(array); \n   await delay(50);\n};\n};\n};\n};"
    
   }
   // Bubble Sort
   async function bubbleSort(array) {
     const n = array.length;
     for (let i = 0; i < n - 1; i++) {
       for (let j = 0; j < n - i - 1; j++) {
         if (array[j] > array[j + 1]) {
           [array[j], array[j + 1]] = [array[j + 1], array[j]];
           createBars(array);
           await delay(50);
         }
       }
     }
   }

   // Merge Sort

   function mergeCode(){
    document.getElementById('mytextarea').innerHTML=
    "//Merge Sort Function \nasync function mergeSort(array){\n   if (array.length <= 1) \n     return array;       \n   const middle = Math.floor(array.length / 2);\n   const left = array.slice(0, middle);         \n   const right = array.slice(middle);          \n   return merge(await mergeSort(left),mergeSort(right))mergeSort(array)\n\n //Recursive merge function\nasync function merge(left, right) {\n   const result = [];\n   let leftIndex = 0;\n   let rightIndex = 0;\n   while (leftIndex < left.length && rightIndex < right.length) {\n     if (left[leftIndex] < right[rightIndex]) {\n       result.push(left[leftIndex]);\n       leftIndex++;\n} \n     else {\n       result.push(right[rightIndex]);\n       rightIndex++;\n}\n}\n   const mergedArray = result.concat(left.s\n(leftIndex)).concat(right.slice(rightIndex));\n   createBars(mergedArray);\n   await delay(50);\n   return mergedArray\n}"
    
   }

   async function mergeSort(array) {
 
     if (array.length <= 1) return array;
     const middle = Math.floor(array.length / 2);
     const left = array.slice(0, middle);
     const right = array.slice(middle);
     return merge(await mergeSort(left), await mergeSort(right));
    

     
   }

   async function merge(left, right) {
     const result = [];
     let leftIndex = 0;
     let rightIndex = 0;
     while (leftIndex < left.length && rightIndex < right.length) {
       if (left[leftIndex] < right[rightIndex]) {
         result.push(left[leftIndex]);
         leftIndex++;
       } else {
         result.push(right[rightIndex]);
         rightIndex++;
       }
     }
     const mergedArray = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
     createBars(mergedArray);
     await delay(50);
     return mergedArray;
   }

   // Quick Sort
   function quickCode(){
    document.getElementById('mytextarea').innerHTML=
    "//Quick sort function \nasync function quickSort(array, left = 0, right = array.length - 1) {\n     if (array.length > 1) {\n       const index = await partition(array, left, right); \n     if (left < index - 1) { \n       await quickSort(array, left, index - 1); \n} \n    if (index < right) { \n       await quickSort(array, index, right); \n}\n}\n    return array;\n}\n//Pivot function\nasync function partition(array, left, right) \n    const pivot = array[Math.floor((left+right) / 2)]\n    let i = left\n    let j = right\n    while (i <= j) \n      i++;\n     while (array[j] > pivot) {\n      j--; \n}\n    if (i <= j) {\n       [array[i], array[j]] = [array[j],array[i]];\n     createBars(array);\n     await delay(50);\n     i++;\n     j--;\n}\n}\n    return i;\n"
    
   }
   async function quickSort(array, left = 0, right = array.length - 1) {
     if (array.length > 1) {
       const index = await partition(array, left, right);
       if (left < index - 1) {
         await quickSort(array, left, index - 1);
       }
       if (index < right) {
         await quickSort(array, index, right);
       }
     }
     return array;
   }

   async function partition(array, left, right) {
     const pivot = array[Math.floor((left + right) / 2)];
     let i = left;
     let j = right;
     while (i <= j) {
       while (array[i] < pivot) {
         i++;
       }
       while (array[j] > pivot) {
         j--;
       }
       if (i <= j) {
         [array[i], array[j]] = [array[j], array[i]];
         createBars(array);
         await delay(50);
         i++;
         j--;
       }
     }
     return i;
   }

   // Visualization entry point
   async function visualizeSorting() {
     const array = generateRandomNumbers(30); // Change the number of bars here
     createBars(array);

     // Bubble Sort
     

     // Merge Sort
     
   }
   async function visualizebubbleSorting() {
     const array = generateRandomNumbers(30); // Change the number of bars here
     createBars(array);

     // Bubble Sort
     await bubbleSort([...array]);

     // Merge Sort
     
   }
   async function visualizemergeSorting() {
     const array = generateRandomNumbers(30); // Change the number of bars here
     createBars(array);

     const sortedArray = await mergeSort([...array]);
     createBars(sortedArray);

     // Merge Sort
     
   }
   async function visualizequickSorting() {
     const array = generateRandomNumbers(25); // Change the number of bars here
     createBars(array);

     await quickSort([...array]);

     // Merge Sort
     
   }
