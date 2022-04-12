import {Component, Input, Output, OnChanges, OnInit, EventEmitter, SimpleChange, SimpleChanges} from "@angular/core";
import {Passengers} from "../../models/Passengers";


@Component({
  selector: 'passenger-detail',
  styleUrls: ['./passenger-detail.component.css'],
  templateUrl: './passenger-detail.html'
})

export class PassengerDetailComponent implements OnChanges{
  @Input()
  detail: Passengers;

  editing: boolean = false;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnChanges(changes) {
     if (changes.detail){
      this.detail = Object.assign({},changes.detail.currentValue);
     }
  }

  onNameChange(value: string) {
    this.detail.fullName = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail)
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail)
  }
}
