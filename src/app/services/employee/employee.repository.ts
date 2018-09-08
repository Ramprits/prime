import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IGenericService } from "../IGeneric.service";

export abstract class EmployeeRepository<T, Id> implements IGenericService<T, Id> {
  constructor(private http: HttpClient) {}
  save(t: T): Observable<T> {
    throw new Error("Method not implemented.");
  }
  update(id: Id, t: T): Observable<T> {
    throw new Error("Method not implemented.");
  }
  findOne(id: Id): Observable<T> {
    throw new Error("Method not implemented.");
  }
  findAll(): Observable<T[]> {
    return this.http.get<T[]>(``);
  }
  delete(id: Id): Observable<any> {
    throw new Error("Method not implemented.");
  }
}