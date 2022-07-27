import { generateId } from '../Utils/generateId.js'


export class House{
    constructor({name, year, price, img, description}){
        this.id = generateId()
        this.name = name
        this.year = year
        this.price = price
        this.img = img
        this.description = description
    }


    get houseTemplate(){
        return `
        <div class="col-4 p-3">
            <div class="bg-white elevation-2">
                <img class="img-fluid" src="${this.img}" alt="">
                 <div class="p-2">
                    <h4 class="text-center">${this.name} | ${this.year}</h4>
                     <p>${this.description}</p>
                     <p class="text-end text-success m-0">$<b>${this.price}</b></p>
                    <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">delete me</button> 
                </div>
            </div>
        </div>
        `
    }
}

export const houseForm = `
<form class="col-10 bg-white p-3 elevation-2" onsubmit="app.housesController.createHouse()">
          <h3 class="text-primary">List Your House</h3>
          <div class="row">
            <div class="col-4">
              <label class="form-label" for="name">House Name</label>
              <input class="form-control" type="text" minlength="5" id="name" name="name">
            </div>
            <div class="col-4">
              <label class="form-label" for="year">Year</label>
              <input class="form-control" type="number" id="year" name="year">
            </div>
            <label class="form-label" for="price">Price</label>
            <input class="form-control" type="number" min="1" id="price" name="price">
            <label class="form-label" for="img">Image</label>
            <input class="form-control" type="text" id="img" name="img">
            <label class="form-label" for="description">Description</label>
            <textarea class="w-100 form-control" name="description" id="description" rows="5"></textarea>
            <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
        </form>
`