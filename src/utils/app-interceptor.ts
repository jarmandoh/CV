import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SpinnerService } from "src/app/services/spinner.service";


@Injectable()
export class AppInterceptor implements HttpInterceptor{
	constructor(_spinner: SpinnerService){
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		console.log("interceptando...")
		const httpReq  =  req.clone({
			url: req.url.replace("http://", "https://")
		});
		return next.handle(httpReq)
	}
}