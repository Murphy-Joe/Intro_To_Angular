import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-entry',
  templateUrl: './item-entry.component.html',
  styleUrls: ['./item-entry.component.css']
})
export class ItemEntryComponent implements OnInit {

  formats = [
    'YouTube',
    'Pluralsight',
    'Other'
  ];
  form = this.formBuilder.group({
    title: ['', [Validators.required]],
    author: ['', [Validators.required]],
    suggestedBy: [''],
    format: ['', Validators.required],
    link: ['', []]
  })
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
