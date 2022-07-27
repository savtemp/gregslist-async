import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"
import { houseForm } from "../Models/House.js"

// import load/save state


function _drawHouses(){
  // GET THE HOUSE TEMPLATE
  let template = ''
  let houses = ProxyState.houses
  houses.forEach(h => template += h.houseTemplate)
  document.getElementById('listings').innerHTML = template
}

function _drawHouseForm(){
  document.getElementById('form').innerHTML = houseForm
}



export class HousesController{
  constructor(){
    console.log('houses controller loaded');
    ProxyState.on('houses', _drawHouses)

    _drawHouses()
    _drawHouseForm()
  }

  viewHouses(){
    _drawHouses()
    _drawHouseForm()
  }

  createHouse(){
    console.log('House form submitted');
    window.event.preventDefault()
    let form = window.event.target
    console.log(form);

    let newHouse = {
      name: form.name.value,
      year: form.year.value,
      price: form.price.value,
      img: form.img.value,
      description: form.description.value,
    }

    housesService.createHouse(newHouse)
    form.reset()
  }

  deleteHouse(id){
    console.log('deleting', id);
    housesService.deleteHouse(id)
  }

}