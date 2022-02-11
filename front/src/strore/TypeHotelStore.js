import { makeAutoObservable } from 'mobx';

export default class TypeHotelStore {
  constructor() {
    this._type = [
      {id:1, name:'All Hotels'},
      {id:2, name:'Business Hotels'},
      {id:3, name:'Resorts'},
      {id:4, name:'Special Offers'},
      {id:5, name:'Contacts'}
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