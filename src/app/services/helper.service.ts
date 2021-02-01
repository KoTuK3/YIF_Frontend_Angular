import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { PageSettings } from '../interfaces/pageSettings';
import { Filter } from '../interfaces/filter';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  getParams(filter?: Filter, settings?: PageSettings): HttpParams {
    let params = new HttpParams();

    if (settings) {
      if (settings.page)
        params = params.append("page", settings.page.toString());

      if (settings.pageSize)
        params = params.append("pageSize", settings.pageSize.toString());
    }

    if (filter) {
      if (filter.directionName)
        params = params.append("directionName", filter.directionName);

      if (filter.specialityName)
        params = params.append("specialityName", filter.specialityName);

      if (filter.universityName)
        params = params.append("universityName", filter.universityName);

      if (filter.universityAbbreviation)
        params = params.append("universityAbbreviation", filter.universityAbbreviation);
    }

    return params;
  }
}
