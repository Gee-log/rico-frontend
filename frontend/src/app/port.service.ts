import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class PortService {

    private ROOT_URL = `http://127.0.0.1:8000/`;

    constructor(private http: Http) { }

    getPort() {
        return this.http.get(this.ROOT_URL + 'ports/').map(
            (res) => res.json()
        )
    }

    checkStatus() {
        return this.http.get(this.ROOT_URL + 'checktask/').map(
            (res) => res.json()
        )
    }
}