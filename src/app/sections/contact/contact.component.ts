import { Component } from '@angular/core';

const CONTACT_LINKS = [
    { label: 'Email', key: 'greg.marut@gmail.com', href: 'mailto:greg.marut@gmail.com' },
    { label: 'LinkedIn', key: '/in/greg-marut-73541612', href: 'https://linkedin.com/in/greg-marut-73541612' },
    { label: 'GitHub', key: 'gregmarut', href: 'https://github.com/gregmarut' },
    { label: 'Joust', key: 'joustip.com', href: 'https://www.joustip.com' },
];

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
})
export class ContactComponent {
    readonly links = CONTACT_LINKS;
}
