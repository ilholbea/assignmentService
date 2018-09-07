import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RestApi} from "../../service/rest-api";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  result: string;
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private restApi: RestApi) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchInputFormControl: [null, [Validators.required]]
    });
  }

  search() {
    this.restApi.getResultsFromBackEnd(this.searchForm.value.searchInputFormControl).subscribe(
      data => {
        this.result = data;
        console.log(this.result);
      }
    )
  }


}


