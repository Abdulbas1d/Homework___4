// 1-Misol

// function getBestStudent(students) {
//     let bestStudent = null;
//     let highestAverage = 0;

//     students.forEach(student => {
//         let totalGrade = student.grades.reduce((acc, curr) => acc + curr, 0);
//         let averageGrade = totalGrade / student.grades.length;

//         if (averageGrade > highestAverage) {
//             highestAverage = averageGrade;
//             bestStudent = student.name;
//         }
//     });

//     return bestStudent;
// }

// const students = [
//     { name: 'Ali', age: 20, grades: [90, 85, 88] },
//     { name: 'Vali', age: 21, grades: [85, 87, 90] },
//     { name: 'Sami', age: 22, grades: [88, 92, 84] }
// ];

// console.log(getBestStudent(students));





// 2-Misol

// const products = [
//     { name: 'Kompyuter', price: 1000, availability: true },
//     { name: 'Telefon', price: 700, availability: false },
//     { name: 'Planshet', price: 500, availability: true },
//     { name: 'Monitor', price: 300, availability: true }
//   ];
  
//   function findExpensiveProduct(products) {
//     let maxPrice = -Infinity;
//     let expensiveProduct = null;
  
//     for (let product of products) {
//       if (product.availability && product.price > maxPrice) {
//         maxPrice = product.price;
//         expensiveProduct = product;
//       }
//     }
  
//     return expensiveProduct;
//   }
  
//   const result = findExpensiveProduct(products);
//   console.log(result);





// 3-Misol

// const students = [
//     { name: "Ali", age: 20, subjects:["Matematika", "Fizika"]},
//     { name: "Vali", age: 21, subjects:["Matematika", "Informatika"]},
//     { name: "Sami", age: 22, subjects:["Fizika", "Informatika"]},
// ]
// function countStudentsBySubject(students) {
//     let subjectsCount = {};

//     students.forEach(student => {
//         student.subjects.forEach(subject => {
//             if (subjectsCount[subject]) {
//                 subjectsCount[subject]++;
//             } else {
//                 subjectsCount[subject] = 1;
//             }
//         });
//     });

//     return subjectsCount;
// };

// const subjectCounts = countStudentsBySubject(students);
// console.log(subjectCounts);





// 4-Misol

// const workers = [
//     { name: 'Ali', position: 'Manager', salary: 2000 },
//     { name: 'Vali', position: 'Developer', salary: 1800 },
//     { name: 'Sami', position: 'Designer', salary: 2200 },
//     { name: 'Qodir', position: 'Manager', salary: 2500 },
//   ];
  
//   function getHighestPaidPosition(workers) {
//     let positions = {};
    
//     workers.forEach(worker => {
//       if (!positions[worker.position]) {
//         positions[worker.position] = {
//           totalSalary: worker.salary,
//           count: 1
//         };
//       } else {
//         positions[worker.position].totalSalary += worker.salary;
//         positions[worker.position].count++;
//       }
//     });
    
//     let highestPaidPosition = '';
//     let highestSalary = 0;
    
//     for (let position in positions) {
//       if (positions[position].totalSalary > highestSalary) {
//         highestSalary = positions[position].totalSalary;
//         highestPaidPosition = position;
//       }
//     }
    
//     return {position: highestPaidPosition, numberOfEmployees: positions[highestPaidPosition].count};
//   }
  
//   const result = getHighestPaidPosition(workers);
//   console.log(result);





// 5-Misol

// const products = [
//     { name: 'Kompyuter', category: 'Elektronika', price: 1000 },
//     { name: 'Telefon', category: 'Elektronika', price: 700 },
//     { name: 'Stol', category: 'Mebel', price: 200 },
//     { name: 'Stul', category: 'Mebel', price: 100 },
//     { name: 'Lampochka', category: 'Elektronika', price: 10 }
// ];
  
// function calculatePriceCategory(products) {
//     const averagePrices = {};
    
//     products.forEach(product => {
//       if (!averagePrices[product.category]) {
//         averagePrices[product.category] = {
//           total_price: product.price,
//           count: 1
//         };
//       } else {
//         averagePrices[product.category].total_price += product.price;
//         averagePrices[product.category].count++;
//       }
//     });
    
//     for (const category in averagePrices) {
//       const avgPrice = averagePrices[category].total_price / averagePrices[category].count;
//       console.log(`Average price for ${category}: $${avgPrice.toFixed(2)}`);
//     }
// }
  
// calculatePriceCategory(products);  