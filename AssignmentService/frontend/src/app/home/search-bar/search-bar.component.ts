import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RestApi} from "../../service/rest-api";
import {ExternalResponse} from "../../model/external-response";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  googleApiCallResults: ExternalResponse[];
  iTunesApiCallResults: ExternalResponse[];
  searchForm: FormGroup;
  googleCheckBox: boolean = true;
  iTunesCheckBox: boolean = true;
  noResultsMessage: string = 'The search has not returned any results';

  constructor(private formBuilder: FormBuilder, private restApi: RestApi) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchInputFormControl: [null, [Validators.required]]
    });
  }

  search() {
    this.googleApiCallResults = [];
    this.iTunesApiCallResults = [];
    if (this.googleCheckBox === true) {
      this.restApi.getResultsFromBackendGoogle(this.searchForm.value.searchInputFormControl).subscribe(
        data => {
          this.googleApiCallResults = data;
        }
      )
    }
    if (this.iTunesCheckBox === true) {
      this.restApi.getResultsFromBackendiTunes(this.searchForm.value.searchInputFormControl).subscribe(
        data => {
          this.iTunesApiCallResults = data;
        }
      )
    }
  }


}


