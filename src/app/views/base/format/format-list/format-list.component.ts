import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { auditformat } from '../../../../models/index_audit';
import { FormatService } from '../../../../services/audits/format.service';

@Component({
  selector: 'app-format-list',
  templateUrl: './format-list.component.html',
  styleUrls: ['./format-list.component.css'
             ]
})
export class FormatListComponent implements OnInit {


    public label_title: string;
    public label_name: string;
    public label_id: string;
    public label_code: string;
    public label_version: string;
    public label_format: string;
    public status: string;
    public status_message: string;
    public format: auditformat;
    public formats: auditformat;
    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _formatService: FormatService

    ) {
      this.label_title = 'Nuevo Formato';
      this.label_name = 'Nombre';
      this.label_id = '#';
      this.label_code = 'Código';
      this.label_version = 'Version';
    }


  private newMethod(): string {
    return '../../../../styles/global/tables.css';
  }

    ngOnInit() {
      console.log('format.list component cargado correctamente');
      this.getFormats();
    }

    getFormats(){
      this._formatService.getFormats().subscribe(
        response =>{

          if(response.status == 'success'){
            console.log(response.formats);
            this.formats = response.formats;
            console.log(this.formats);
          }
        },
        error=>{
            console.log(error);
        }
      );
    }

    delete(id){
      this._formatService.delete(id).subscribe(
        response => {
          this.getFormats();
          this.status = 'success';
          this.status_message = 'El formato se elimino correctamente.';
        },
        error=>{
          console.log(error);
          this.status = 'error';
          this.status_message = 'El error al borrar el formato. Intente nuevamente.';
        }
      );
    }

}
