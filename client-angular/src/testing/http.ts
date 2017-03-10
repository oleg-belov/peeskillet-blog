import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';


export function httpFactory(backend: XHRBackend, options: RequestOptions): Http {
  return new Http(backend, options);
}

@NgModule({
  imports: [ HttpModule ],
  providers: [
    MockBackend,
    BaseRequestOptions,
    {
      provide: Http,
      deps: [MockBackend, BaseRequestOptions],
      useFactory: httpFactory
    }
  ]
})
export class HttpTestingModule {}

