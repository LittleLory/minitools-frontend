import { Injectable } from '@angular/core';
@Injectable()
export class Logger {
  debug(msg: any) {console.log(msg);}
  info(msg: any) {console.log(msg);}
  error(msg: any) {console.error(msg);}
  warn(msg: any) {console.warn(msg);}
}
