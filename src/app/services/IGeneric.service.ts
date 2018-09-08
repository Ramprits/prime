import { Observable } from "rxjs";

export interface IGenericService<T, Id> {
	save(t: T): Observable<T>;
	update(id: Id, t: T): Observable<T>;
	findOne(id: Id): Observable<T>;
	findAll(): Observable<T[]>;
    delete(id: Id): Observable<any>;
    
}