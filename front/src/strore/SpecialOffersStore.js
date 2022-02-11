import { makeAutoObservable } from 'mobx';

export default class SpecialOffersStore {
  constructor() {
    this._type = [
      {id:1, name:'Family tours to the Carpathians'},
      {id:2, name:'Batch offer "Healthy Polyana"'},
      {id:3, name:'Batch offer "Healthy Polyana"'},
      {id:4, name:'Special Offer for accomodation'},
    ]
    makeAutoObservable(this)
  }

  setType(types) {
    this._type = types
  }

  get Type() {
    return this._type
  }
}