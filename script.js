/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(function(element){
    if(element.profession === "developer"){
      console.log(element);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(element){
    if(element.profession === "developer"){
      console.log(element);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newId = arr.length + 1;
  let obj = {
    id:newId,name:"susan",age:"20",profession:"intern"
  };
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.filter(function(element){
    if(element.profession !== "admin"){
      console.log(element);
    }
  })
}

function concatenateArray() {
  //Write your code here, just console.log
  let newId = arr.length;
  let employees = [
    { id: ++newId, name: "Accio1", age: "19", profession: "admin" },
    { id: ++newId, name: "Accio2", age: "23", profession: "developer" },
    { id: ++newId, name: "Accio3", age: "20", profession: "developer" }
  ];
  console.log(arr.concat(employees));

}
