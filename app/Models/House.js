
export class House{
    constructor({id, bedrooms, bathrooms, levels, year, price, imgUrl, description}){
        this.id = id
        this.bedrooms = bedrooms || ''
        this.bathrooms = bathrooms || ''
        this.levels = levels || ''
        this.year = year || 200
        this.price = price || 1000
        this.img = imgUrl || ''
        this.description = description || ''
    }


    get houseTemplate(){
        return `
        <div class="col-4 p-3">
            <div class="bg-white elevation-2">
                <img class="img-fluid" src="${this.img}" alt="">
                <div class="p-2">
                    <h4 class="text-center">${this.bedrooms} | ${this.bathrooms} | ${this.levels}</h4>
                    <p>${this.year}</p>
                    <p>${this.description}</p>
                    <p class="text-end text-success m-0">$<b>${this.price}</b></p>
                    <button class="btn btn-info" onclick="app.housesController.adjustHouse('${this.id}')">Adjust House Settings</button> 
                    <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">delete me</button> 
                </div>
            </div>
        </div>
        `
    }
}