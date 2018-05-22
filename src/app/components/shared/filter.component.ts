import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'filter',
  template: ` 
  <div class="input-group">
    <div class="input-group-prepend">
        <div class="btn btn-secondary input-group-text" id="btnGroupAddon" >Filter</div>
    </div>
    <input type="text" name="search" class="form-control" placeholder="Naam" [(ngModel)]="searchValue" (ngModelChange)="onValueChange($event)">
  </div>
  `
})
export class FilterComponent {
  private searchValue: string = '';

  @Output()
  public onChange: EventEmitter<string> = new EventEmitter();

  public onValueChange(newValue: string): void {
    this.onChange.emit(newValue);
  }
}
