import * as angular from 'angular';
import { IStateProvider } from 'angular-ui-router';
import { appContainer } from './app.container';
import { reportListContainer } from './reporting/containers/report_list/report_list.container';
import { transactionReport } from './reporting/containers/reports/transaction_report/transaction_report.container';
import { IReport, registerReport, ReportService } from './reporting/shared/services/report.service';

export let appModule = angular.module('app.module', ['ui.router']);

appModule.service('reportService', ReportService);

appModule
	.component('appContainer', appContainer)
	.component('reportList', reportListContainer);

const reports: Array<IReport> = [
	transactionReport
];

reports.forEach(report => {
	registerReport(report);
	appModule.component(report.id, report.component);
});

appModule.config(($stateProvider: IStateProvider) => {
	let stateConfig: Array<ng.ui.IState> = [
		{
			name: 'app',
			abstract: true,
			url: '',
			template: '<app-container></app-container>'
		},
		{
			name: 'app.list',
			url: '/',
			data: {
				showSidebar: true
			},
			views: {
				'sidebar': {
					template: 'List Sidebar'
				},
				'main': {
					templateProvider: () => {
						return '<report-list></report-list>';
					}
				}
			}
		},
		{
			name: 'app.report',
			url: '/report/:id',
			data: {
				showSidebar: true
			},
			views: {
				'sidebar': {
					template: 'Report Sidebar'
				},
				'main': {
					templateProvider: ($stateParams: { id: string }) => {
						let id = $stateParams.id;
						if(!id) {
							return '';
						}
						return `<${id}></${id}>`;
					}
				}
			}
		}
	];

	stateConfig.forEach(state => $stateProvider.state(state));
});