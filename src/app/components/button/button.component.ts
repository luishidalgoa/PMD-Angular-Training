import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  /**
   * Otra forma de declarar los inputs
  @Input()
  clase: string = 'p-2 bg-red-500 text-white rounded-md';
  @Input()
  texto: string = 'Botón';
   */
  @Input({alias: 'ClassName',required:true}) class!: string ;
  @Input({alias:'TextName',required:true}) texto!: string ;

}
