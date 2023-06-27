import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  m_Init: IInit | undefined;
  ApiUrl: string = environment.host;

  constructor(private p_Http: HttpClient) {
    this.getSetting();
    this.setFileReader();
  }

  public getSetting() {
    return this.getJSON().subscribe((res: IInit) => {
      this.m_Init = res;
    });
  }

  public getJSON(): Observable<any> {
    return this.p_Http.get(`${this.ApiUrl}`);
  }
  public getInit() {
    return this.m_Init;
  }

  private setFileReader() {
    if (FileReader.prototype.readAsBinaryString === undefined) {
      FileReader.prototype.readAsBinaryString = function (p_FileData) {
        var v_Binary = '';
        var v_Pt = this;
        var v_Reader = new FileReader();
        v_Reader.onload = function (p_Event) {
          var bytes = new Uint8Array(v_Reader.result as any);
          var length = bytes.byteLength;
          for (var i = 0; i < length; i++) {
            v_Binary += String.fromCharCode(bytes[i]);
          }
        };
        v_Reader.readAsArrayBuffer(p_FileData);
      };
    }
  }
}

interface IInit {
  API_URL: string;
  SEARCH_TOP: number;
  API_URL_QA: string;
}
