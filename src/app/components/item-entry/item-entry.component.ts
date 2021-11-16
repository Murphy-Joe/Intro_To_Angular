import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
type FieldWithErors = (AbstractControl & { errors: any }) | null;
@Component({
  selector: 'app-item-entry',
  templateUrl: './item-entry.component.html',
  styleUrls: ['./item-entry.component.css']
})
export class ItemEntryComponent implements OnInit {


  formats = [
    '',
    'YouTube',
    'Pluralsight',
    'Other'
  ];
  form = this.formBuilder.group({
    title: ['', [Validators.required, Validators.maxLength(100)]],
    author: ['', [Validators.required]],
    suggestedBy: [''],
    format: ['', Validators.required],
    link: ['', []]
  });

  get title() { return this.form.get('title') as FieldWithErors; }
  get author() { return this.form.get('author') as FieldWithErors; }
  get format() { return this.form.get('format') as FieldWithErors; }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
    else {
      console.log('The Form is Not Valid')
    }
  }
}
