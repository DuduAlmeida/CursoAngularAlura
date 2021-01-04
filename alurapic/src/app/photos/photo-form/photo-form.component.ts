import { Validators } from '@angular/forms';
/* #region Imports*/

import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
    private readonly formBuilder: FormBuilder
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

  photoForm: FormGroup;

  /* #endregion Public Properties*/

}
