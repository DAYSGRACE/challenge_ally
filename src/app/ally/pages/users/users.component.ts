import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {PaginationRequest} from "../../../shared/interfaces/generic.interface";
import {UserInfo} from "../../interfaces/user.interface";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    currentPage: number = 1;

    users: UserInfo[] = [];

    isLoading: boolean = true;

    showError: boolean = true;

    totalItems: number = 0;

    pageSize: number = 10;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.getUsersInfo();
    }

    getUsersInfo() {
        this.isLoading = true;
        const requestPagination: PaginationRequest = {
            page: this.currentPage - 1,
            pageSize: this.pageSize,
        }
        this.userService.getListOfUsersPaginated(requestPagination).subscribe({
            next: response => {
                this.users = response.content;
                this.totalItems = response.totalElements;
            },
            error: error => {
                this.isLoading = false;
                this.showError = true;
            },
            complete: () => this.isLoading = false
        })
    }

    onPageChange(page: number) {
        this.currentPage = page;
        this.getUsersInfo();
    }


}


