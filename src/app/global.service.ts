import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  currQuarterProjectsData: Array<any> = [];

  constructor() { }
}
