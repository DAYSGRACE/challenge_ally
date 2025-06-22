import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'dateOffSet'
})
export class DateOffSetPipe implements PipeTransform {

    transform(value: string | Date | null | undefined): string {
        if (!value) return 'Nunca inició sesión';
        const date = new Date(value);
        if (isNaN(date.getTime())) return 'Fecha inválida';
        return date.toLocaleString(undefined, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

}
