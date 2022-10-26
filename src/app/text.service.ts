import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextService {
public branch:string = '';
  constructor() { }

  public translate(jiraName: any, jiraNumber: any, jiraTask: any) :Observable<string> {
    const JiraName: string = jiraName.trim().toUpperCase();
    const JiraNumber: string = jiraNumber.trim();

    const JiraTask: string = jiraTask.trim();
    const Toplam: string = JiraName + ' ' + JiraNumber + ' ' + JiraTask
    const reg = /\s/g
    let newStr;
    newStr = Toplam.replace(reg, '_');
    const reg1 = /["'!-.,;:?^]/g
    newStr = newStr.replace(reg1, '');
    const reg2 = /\_/
    this.branch = newStr.replace(reg2, '-');
    return of(this.branch)
  }
}
