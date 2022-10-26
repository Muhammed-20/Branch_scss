import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TextService } from '../text.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  public branch: any = '';
  public loginForm = new FormGroup({
    jiraName: new FormControl('', [Validators.required, Validators.pattern(/^\D+$/)]),

    jiraNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),

    jiraTask: new FormControl('', [Validators.required])
  })
  constructor(public translateService: TranslateService,private services:TextService) {

    this.translateService.addLangs(["tr", "en"]);
  }
  public onChange(selectedLanguage: string): void {

    this.translateService.use(selectedLanguage)
  }
  ngOnInit(): void {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls
  }
  get form() {
    return this.loginForm.value
  }
  public translate(jiraName: any, jiraNumber: any, jiraTask: any) {
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
  }
  public edit() {
    this.services.translate(this.form.jiraName, this.form.jiraNumber, this.form.jiraTask).subscribe(res => {
      this.branch = res
    })
    
   
  }
}
