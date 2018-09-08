import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IGenericService } from "../IGeneric.service";

export abstract class EmployeeRepository<T, Id> implements IGenericService<T, Id> {
  constructor(private http: HttpClient) {}
  save(_t: T): Observable<T> {
    throw new Error("Method not implemented.");
  }
  update(_id: Id, _t: T): Observable<T> {
    throw new Error("Method not implemented.");
  }
  findOne(_id: Id): Observable<T> {
    throw new Error("Method not implemented.");
  }
  findAll(): Observable<T[]> {
    return this.http.get<T[]>(``);
  }
  delete(_id: Id): Observable<any> {
    throw new Error("Method not implemented.");
  }
}