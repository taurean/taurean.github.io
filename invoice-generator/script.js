const elCustomServiceName = document.querySelector("#customServiceName")
const elCustomServiceValue = document.querySelector("#customServiceValue")
const elAddCustomServiceBtn = document.querySelector("#addCustomService")
const elRemoveCustomServicesBtn = document.querySelector("#removeAllCustomServices")

let defaultServicesAvailable = [
  {
    service: "wash Car",
    value: 10
  },
  {
    service: "Mow Lawn",
    value: 20
  },
  {
    service: "Pull Weeds",
    value: 30
  }
]

let customServicesAvailable = []

let allServicesAvailable = []

elAddCustomServiceBtn.addEventListener("click", function(){
  let serviceNameValue = elCustomServiceName.value
  let serviceCostValue = elCustomServiceValue.value

  if (serviceNameValue && serviceCostValue) {
    let customService = {
      service: serviceNameValue,
      value: serviceCostValue
    }
    customServicesAvailable.push(customService)
    allServicesAvailable.push(customService)
  } else {
    
  }

  // merges both arrays into a single array
  allServicesAvailable = [...defaultServicesAvailable, ...customServicesAvailable]
  console.log(allServicesAvailable)
})


