import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NodeService {

    constructor(private http: HttpClient) {}

    getFiles() {
        return this.http.get<any>('assets/layout/data/files.json')
                    .toPromise()
                    .then(res => <any[]> res.data)
                    .then(data => data);
    }

    getFilesystem() {
        return this.http.get<any>('assets/layout/data/filesystem.json')
                    .toPromise()
                    .then(res => <any[]> res.data)
                    .then(data => data);
    }
}
