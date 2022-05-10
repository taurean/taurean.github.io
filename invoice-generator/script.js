const elCustomServiceName = document.querySelector("#customServiceName")
const elCustomServiceValue = document.querySelector("#customServiceValue")
const elAddCustomServiceBtn = document.querySelector("#addCustomService")
const elRemoveCustomServicesBtn = document.querySelector("#removeAllCustomServices")
const elAllServicesAvailableBtnList = document.querySelector("#allServicesAvailableBtnList")

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

let allServicesAvailable = [...defaultServicesAvailable, ...customServicesAvailable]

function renderServiceButtons() {
  let serviceBtnListHTML = ''
  for (let i = 0; i < allServicesAvailable.length; i++) {
    let serviceNameI = allServicesAvailable[i].service 
    let serviceCostI = allServicesAvailable[i].value 
    serviceBtnListHTML += `
      <li>
        <button>${serviceNameI}: $${serviceCostI}</button>
        <button>
          <span>&times;</span>
          <span> remove</span>
      </li>
    `
  }

  elAllServicesAvailableBtnList.innerHTML = serviceBtnListHTML
}

renderServiceButtons()

elAddCustomServiceBtn.addEventListener("click", function(){
  let serviceNameValue = elCustomServiceName.value
  let serviceCostValue = parseInt(elCustomServiceValue.value)

  if (serviceNameValue && serviceCostValue) {
    let customService = {
      service: serviceNameValue,
      value: serviceCostValue
    }

    customServicesAvailable.push(customService)
    allServicesAvailable.push(customService)
  }

  // merges both arrays into a single array
  allServicesAvailable = [...defaultServicesAvailable, ...customServicesAvailable]
  renderServiceButtons()
})

elRemoveCustomServicesBtn.addEventListener("click", function() {
  customServicesAvailable = []
  allServicesAvailable = [...defaultServicesAvailable, ...customServicesAvailable]
  renderServiceButtons()
})

