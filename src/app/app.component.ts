import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: `app.component.html`,
  styleUrls: ["app.component.css"],
})
export class AppComponent implements OnInit {
  str: string = '';
  form: FormGroup;

  constructor(
    private appService: AppService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {

    this.form =  this.formBuilder.group({
      nome: ['', [Validators.required]]
    })

    
    // throw new Error('Method not implemented.');
  }
  
  OnSubmit(): void {
    const valido = this.form.valid
    if(valido){
      this.appService.saveAnyString(this.form.value.nome);
    }
    this.form.reset();
    this.str = this.appService.getStringFromLocalStorage();
  }
}
