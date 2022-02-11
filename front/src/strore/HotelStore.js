import { makeAutoObservable } from 'mobx';

export default class HotelStore {
    constructor() {
        this._types = [
            {id: 1, name: "One room apartment with a double bed"},
            {id: 2, name: "The room has a TV"},
            {id: 3, name: "Air conditioner"},
            {id: 4, name: "Table"},
            {id: 5, name: "Wardrobe"}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    get Types() {
        return this._types
    }
}