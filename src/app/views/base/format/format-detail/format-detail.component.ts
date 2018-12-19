import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { auditformat } from '../../../../models/index_audit';
import { FormatService } from '../../../../services/audits/format.service';

@Component({
  selector: 'app-format-detail',
  templateUrl: './format-detail.component.html',
  styleUrls: ['./format-detail.component.css']
})
export class FormatDetailComponent implements OnInit {
  public label_id: string;
  public label_name: string;
  public label_code: string;
  public label_version: string;

  @Input() public format: auditformat;

  constructor() {
    this.label_name = "Formato";
    this.label_code = "Código";
    this.label_version = "Versión";
  }

  ngOnInit() {
  }

}
