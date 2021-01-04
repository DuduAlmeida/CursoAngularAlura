/* #region Imports*/

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from './../user/user.service';
import { User } from '../user/user';

/* #endregion Imports*/

/*** 
 * O componente que representa o rodapé da aplicação
 */
@Component({
  selector: 'ap-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  /* #region Constructor*/

  constructor(
    private readonly userService: UserService,
  ) { }

  /* #endregion Constructor*/

  /* #region LifeCycle Events*/

  /*** 
   * Evento chamado ao inicializar o componente
   */
  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }

  /* #endregion LifeCycle Events*/

  /* #region Public Properties*/

  public user$: Observable<User>;

  /* #endregion Public Properties*/
}
