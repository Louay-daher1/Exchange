import { Injectable } from "@angular/core";
import { HttpInterceptor,HttpEvent,HttpRequest,HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class MyInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const Apirequest = request.url.startsWith('https://api.fastforex.io/currencies?');
        if(Apirequest){
            request =request.clone({
                setParams:{
                    'api_key':'edb4dc58dc-2ed3ebc5a6-s0irqa'
                }
            });
        }
        return next.handle(request);
    }

}