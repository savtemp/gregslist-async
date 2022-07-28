import { generateId } from "../Utils/generateId.js"


export class Job{
    constructor({name, experience, pay, img, description}){
        this.id= generateId()
        this.name = name
        this.experience = experience
        this.pay = pay
        this.img = img
        this.description = description
    }


    get jobTemplate(){
        return `
        <div class="col-4 p-3">
          <div class="bg-white elevation-2">
            <img class="img-fluid" src="${this.img}" alt="">
            <div class="p-2">
              <h4 class="text-center">${this.name} | ${this.experience}</h4>
              <p>${this.description}</p>
              <p class="text-end text-success m-0">$<b>${this.pay}</b></p>
              <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">delete me</button> 
            </div>
          </div>
        </div>
        `
    }
}

export const jobForm = `
<form class="col-10 bg-white p-3 elevation-2" onsubmit="app.jobsController.createJob()">
          <h3 class="text-primary">List Your Job</h3>
          <div class="row">
            <div class="col-4">
              <label class="form-label" for="name">Job Name</label>
              <input class="form-control" type="text" minlength="5" id="name" name="name">
            </div>
            <div class="col-4">
              <label class="form-label" for="experience">Desired Experience</label>
              <input class="form-control" type="number" id="experience" name="experience">
            </div>
            <label class="form-label" for="pay">Pay</label>
            <input class="form-control" type="number" min="1" id="pay" name="pay">
            <label class="form-label" for="img">Job Image</label>
            <input class="form-control" type="text" id="img" name="img">
            <label class="form-label" for="description">Job Description</label>
            <textarea class="w-100 form-control" name="description" id="description" rows="5"></textarea>
            <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
        </form>
`