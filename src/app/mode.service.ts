import { BehaviorSubject, Observable } from "rxjs";

export class ModeService{
  
    private viewmode: boolean = true;
    private _isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isAuthenticatedObs: Observable<boolean> = this._isAuthenticatedSubject.asObservable();  
    public getViewmode(): boolean {
        console.log('service getviewmode:', this.viewmode);
        return this.viewmode;
    }
    public setViewmode(viewmode: boolean){
        this.viewmode = viewmode;
        console.log('service setviewmode:', this.viewmode);
        this._isAuthenticatedSubject.next(viewmode);
    }
}