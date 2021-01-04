/* #region Imports*/

import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { PhotoService } from './../photo/photo.service';
import { Router } from '@angular/router';

/* #endregion Imports*/

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
})
export class PhotoFormComponent implements OnInit {

  /* #region Constructor*/

  /*** 
   * Construtor padrão
   */
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly photoService: PhotoService,
    private readonly router: Router,
  ) { }

  /* #endregion Constructor*/

  /* #region LifeCycle Events*/

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  /* #endregion LifeCycle Events*/

  /* #region Public Properties*/

  public photoForm: FormGroup;
  public file: File;

  /* #endregion Public Properties*/

  /* #region Public Methods*/

  public upload() {
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;

    return void this.photoService
      .upload(description, allowComments, this.file)
      .subscribe(() => this.router.navigate(['']));
  }

  /* #endregion Public Methods*/

}
