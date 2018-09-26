import { Receipe } from '../interface/receipe.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public receipe: Receipe;
}
