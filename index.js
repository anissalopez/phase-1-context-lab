/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(array){
    let employeeRecord = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []

}
    return employeeRecord;
       
}


function createEmployeeRecords(array){
    return array.map(function (elements){
        return createEmployeeRecord(elements)
    })
}

function createTimeInEvent(date){
  let splitDate = date.split(" ");
  this.timeInEvents.push({type: "TimeIn", hour: (+splitDate[1]), date: splitDate[0]});
  return this;
}

function createTimeOutEvent(date){
    let splitDate = date.split(" ");
    this.timeOutEvents.push({type: "TimeOut", hour: (+splitDate[1]), date: splitDate[0]});
    return this;
  }

function hoursWorkedOnDate(date){

    let timeInEvent = this.timeInEvents.find(function (element){
        return element.date === date
    })
    let timeOutEvent = this.timeOutEvents.find(function (element){
        return element.date === date
    })

    return (timeOutEvent.hour - timeInEvent.hour)/100

}

function wagesEarnedOnDate(date){
 return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function findEmployeeByFirstName (srcArray, firstName){
    let matchingObject = srcArray.find(function (element) {
      return element.firstName === firstName;
    })
  return matchingObject;
  }

function calculatePayroll(array){
    
    let totalPay = array.reduce(function (accumulator, array){
        return accumulator + allWagesFor.apply(array);
    }, 0);
    return totalPay;
}



const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

