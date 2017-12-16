import { Component, Input, OnInit, OnChanges, DoCheck, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { ViewChildren } from '@angular/core';
import * as $ from 'jquery';
import { ViewCell } from 'ng2-smart-table';


@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: [
        'data-table.scss'
    ]

})
export class DataTableComponent implements OnInit, OnChanges, DoCheck, AfterViewInit {
    @Input() settings;
    @Input() tableData;
    @Input() pageSizes = [10, 20, 30, 50, 100];
    numberOfPage: number;
    numberOfRecordOfThisPage: number;
    pages: any[];
    source: any;
    oldFilteredAndSorted: any[];

    constructor() { }
    ngOnInit() {
        this.source.setPaging(1, this.settings.pager.perPage);
        this.pages = this.getNumberOfPages();
    }

    ngOnChanges(changes: any) {
        // console.log(changes.source.currentValue);
        this.source = new LocalDataSource(this.tableData);
        this.source.setPaging(1, this.settings.pager.perPage);
        this.pages = this.getNumberOfPages();
        // $('input-filter input').attr('placeholder', 'Filter');
    }

    ngDoCheck() {
        if (this.source.filteredAndSorted !== this.oldFilteredAndSorted) {
            this.oldFilteredAndSorted = this.source.filteredAndSorted;
            this.pages = this.getNumberOfPages();
        }
    }

    ngAfterViewInit() {
        $('input-filter input').attr('placeholder', 'Filter');
        // Component views are initialized
        // this.chref.detectChanges();
    }

    getNumberOfPages() {

        this.numberOfPage = Math.ceil(this.source.filteredAndSorted.length / this.source.pagingConf.perPage);
        this.numberOfRecordOfThisPage = !this.numberOfPage ? 0 : this.source.pagingConf.perPage * (this.source.pagingConf.page - 1) + 1;
        const pages = [];
        const currentPage = this.source.pagingConf.page;
        for (let i = 1; i <= this.numberOfPage; i++) {
            if (i === 1
                || i === 2
                || i === this.numberOfPage
                || i === this.numberOfPage - 1
                || Math.abs(i - currentPage) <= 2) {
                pages.push(i);
            } else {
                const lastPage = pages[pages.length - 1];
                if (lastPage !== -1) {
                    pages.push(-1);
                }
            }
        }
        return pages;
    }

    setNumberItemOfPage(numberItemOfPage) {
        let pageToGo = this.source.pagingConf.page;
        while (Math.ceil(this.source.filteredAndSorted.length / numberItemOfPage) < pageToGo) {
            --pageToGo;
        }
        this.source.setPaging(pageToGo, numberItemOfPage);
    }
}



@Component({
    template: `
    <div [innerHtml]="value"></div>`,
})
export class HTMLRenderComponent implements ViewCell, OnInit {

    renderValue: string;

    @Input() value: string | number;
    @Input() rowData: any;

    ngOnInit() {
        this.renderValue = this.value.toString();
    }
}

