import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StickyScrollDirective } from '@core/directives/sticky-scroll.directive';
import { MobileMenuComponent } from "../mobile-menu/mobile-menu.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-topbar',
    imports: [MobileMenuComponent, CommonModule, StickyScrollDirective, RouterLink, CommonModule],
    templateUrl: './topbar.component.html',
    styles: ``
})
export class TopbarComponent {
    isActive = false;

    @Input() headerClass!: string
    @Input() mobileHeaderClass!: string
    @Input() mobileLogo!: string
    @Input() mobileSidebarClass!: string
    @Input() btnClass!: string
    @Input() logo!: string
    @Input() isAlert?: boolean


    programasMenuItems = [
        { title: 'Todos los programas', link: '/cursos' },
        { title: 'Cursos',              link: '/cursos' },
        { title: 'Diplomados',          link: '/cursos' },
        { title: 'Posgrados',           link: '/cursos' },
        { title: 'Formación continua',  link: '/cursos' },
    ];

    institucionalMenuItems = [
        { title: 'Acreditación',      link: '/nosotros' },
        { title: 'Docentes',          link: '/docentes' },
        { title: 'Noticias',          link: '/noticias' },
        { title: 'Preguntas frecuentes', link: '/faq' },
    ];



}
