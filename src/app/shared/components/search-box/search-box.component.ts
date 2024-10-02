import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
    @Input() public placeholder:string = '';
    @Output() public onValue:EventEmitter<string> = new EventEmitter<string>();
    @ViewChild('simpleSearch') public tagInput!: ElementRef<HTMLInputElement>;
    @ViewChild('buttonSearch') public buttonInput!: ElementRef<HTMLButtonElement>;

    constructor(){

    }
    public searchTag():void{
      const newSearch = this.tagInput?.nativeElement.value || this.buttonInput?.nativeElement.value;
      this.onValue.emit(newSearch);
      this.tagInput.nativeElement.value ='';
    }
}
