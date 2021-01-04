/* #region Imports*/

import { Directive, ElementRef } from '@angular/core';

import { OnInit } from '@angular/core';
import { PlatformDetectorService } from './../../../core/plataform-detector/platform-detector.service';

/* #endregion Imports*/

@Directive({
    selector: '[immediateClick]',
})
export class ImmediateClickDirective implements OnInit {

    /* #region Constructor Padrão*/

    constructor(
        private readonly element: ElementRef<any>,
        private readonly platformDetector: PlatformDetectorService,
    ) { }

    /* #endregion Constructor Padrão*/

    /* #region LifeCycle Events*/

    ngOnInit(): void {

        this.platformDetector.isPlatformBrowser &&
            this.element.nativeElement.click();
    }

    /* #endregion LifeCycle Events*/

}