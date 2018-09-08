import {Pipe, PipeTransform} from '@angular/core';
import {ExternalResponse} from "../model/external-response";

@Pipe({
  name: 'sortAlpha'
})
export class SortAlpha implements PipeTransform {
  transform(responseList: ExternalResponse[], path: string[], order: number): ExternalResponse[] {
    if (!responseList || !path || !order) return responseList;
    return responseList.sort((a: ExternalResponse, b: ExternalResponse) => {
      path.forEach(property => {
        a = a[property];
        b = b[property];
      })
      return a > b ? order : order * (-1);
    })
  }

}
