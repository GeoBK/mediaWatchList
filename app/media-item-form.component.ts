import { Component,Inject } from '@angular/core'
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms'
import { MediaItemService } from './media-item.service';
import {lookUpListToken} from './providers';
import {Router} from '@angular/router'

@Component({
    selector: 'mw-media-item-form',
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
    form;
    constructor(private formBuilder:FormBuilder,
                 private mediaItemService:MediaItemService,
                @Inject(lookUpListToken) public lookUpLists,
                private router:Router){}
    ngOnInit() {
        this.form = this.formBuilder.group({
            medium: this.formBuilder.control('Movies'),
            name: this.formBuilder.control('',Validators.compose([Validators.required,Validators.pattern('[\\w\\-\\s\\/]+')])),
            category: this.formBuilder.control(''),
            year: new FormControl('',this.yearValidator),
        })

    }
    yearValidator(control){
        if(control.value.trim().length===0){
            return null;
        }
        let year=parseInt(control.value);
        let minYear=1900;
        let maxYear=2100;
        if(minYear<year && maxYear>year){
            return null;
        }else{
            return {year:true,'minYear':minYear,'maxYear':maxYear};
        }

    }
    onSubmit(mediaItem) {
        this.mediaItemService.add(mediaItem).subscribe(()=>{
            this.router.navigate(['/',mediaItem.medium])
        });
    }

}