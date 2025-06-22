import {
    Component,
    ContentChild,
    EventEmitter,
    Input, OnChanges,
    Output,
    SimpleChanges,
    TemplateRef
} from '@angular/core';

@Component({
    selector: 'app-table-generic',
    templateUrl: './table-generic.component.html',
    styleUrls: ['./table-generic.component.scss']
})
export class TableGenericComponent implements OnChanges {
    @Input() columns: string[] = [];
    @Input() data: any[] = [];
    @Input() pageSize: number = 10;
    @Input() totalItems: number = 0;
    @Input() isLoading!: boolean;

    @Output() pageChange = new EventEmitter<number>();

    @ContentChild('cell') cellTemplate: TemplateRef<any> | null = null;

    currentPage = 1;

    get totalPages(): number {
        return Math.ceil(this.totalItems / this.pageSize);
    }

    get showingFrom(): number {
        return this.totalItems === 0 ? 0 : ((this.currentPage - 1) * this.pageSize) + 1;
    }

    get showingTo(): number {
        const max = this.currentPage * this.pageSize;
        return max > this.totalItems ? this.totalItems : max;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['data']) {
            if (this.currentPage > this.totalPages && this.totalPages > 0) {
                this.currentPage = 1;
                this.pageChange.emit(this.currentPage);
            }
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.pageChange.emit(this.currentPage);
        }
    }

    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.pageChange.emit(this.currentPage);
        }
    }

    get fakeRows(): any[] {
        return Array(this.pageSize).fill(null);
    }

}
