function maxColBal(arr) {
  let max = 0;
  let result = [];
  arr.forEach((element) => {
    if (element.score > max) {
      max = element.score;
      result = [];
      result.push(element.name);
    } else if (element.score == max) {
      result.push(element.name);
    }
  });
  //console.log(`Congratulations ${result}! You have max ball`);
  console.log(result)
  return result;
}

/*function sortMax(arra) {
  arra.forEach((el) => {
    //console.log(maxColBal(el))
    let tot = maxColBal(el)
    return tot;
    
  });
}*/

const arr1 = [
  { name: "Ivan", score: 5, date: "2022-10-11" },
  { name: "Maria", score: 5, date: "2022-10-10" },
  { name: "Olga", score: 0, date: "" },
  { name: "Stepan", score: 35, date: "2022-10-12" },
  { name: "Oleg", score: 9, date: "2022-10-01" },
  { name: "Zanna", score: 35, date: "2022-10-11" },
];

maxColBal(arr1);

const studentsData = [
  [
    { name: "Ivan", score: 35, date: "2022-10-11" },
    { name: "Maria", score: 5, date: "2022-10-10" },
    { name: "Olga", score: 0, date: "" },
    { name: "Stepan", score: 35, date: "2022-10-12" },
    { name: "Oleg", score: 9, date: "2022-10-01" },
    { name: "Zanna", score: 15, date: "2022-10-11" },
  ],
  [
    { name: "Margo", score: 0, date: "2022-10-11" },
    { name: "Natalia", score: 25, date: "2022-10-10" },
    { name: "Marina", score: 25, date: "2022-10-01" },
    { name: "Dmitry", score: 25, date: "2022-10-12" },
    { name: "Denis", score: 0, date: "2022-10-02" },
    { name: "Vadimyr", score: 1, date: "2022-10-11" },
  ],
  [
    { name: "Irina", score: 0, date: "2022-10-11" },
    { name: "Vasily", score: 0, date: "2022-10-10" },
    { name: "David", score: 0, date: "2022-10-11" },
    { name: "Kristina", score: 0, date: "2022-10-12" },
    { name: "Varvara", score: 0, date: "2022-10-01" },
    { name: "Tanya", score: 0, date: "2022-10-11" },
  ],
];

//sortMax(studentsData)


module.exports = maxColBal;
