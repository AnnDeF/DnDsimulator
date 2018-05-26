import { Component, EventEmitter, Output, Input } from "@angular/core";

@Component({
    selector: 'btn-save',
    template: `
    <button type="button" class="btn btn-primary" (click)="save()">
        <span class="fa fa-floppy-o"></span>
        &nbsp;{{title}}
    </button>
    `
})
export class BtnSaveComponent {
    @Input()
    public title: string = 'Opslaan';

    @Output()
    public onClick: EventEmitter<void> = new EventEmitter();

    public save(): void {
        this.onClick.emit();
    }
}