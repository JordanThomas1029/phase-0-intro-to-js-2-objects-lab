// Write your solution in this file!

const employee = {
    street: "28 McArdle Avenue",
    name: "Jordan"
};

employee;

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee = {...obj}
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee[key] = value;
    return employee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    delete employee.name;
    return employee;
}

function deleteFromEmployeeByKey(obj, key, value){
    const newHire = {...obj};
    delete newHire.name;
    return newHire;
}