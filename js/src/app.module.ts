import * as angular from 'angular';
import { IStateProvider } from 'angular-ui-router';
import { appContainer } from './app.container';
import { reportListContainer } from './reporting/containers/report_list/report_list.container';
import { transactionReportConfig } from './reporting/containers/reports/transaction_report/transaction_report.config';
import { IReportConfig, registerReport, ReportService } from './reporting/shared/services/report.service';

export let appModule = angular.module('app.module', ['ui.router']);

appModule.service('reportService', ReportService);

appModule
	.component('appContainer', appContainer)
	.component('reportList', reportListContainer);

const reports: Array<IReportConfig> = [
	transactionReportConfig
];

reports.forEach(report => {
	registerReport(appModule, report);
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
					templateProvider: (
						$stateParams: { id: string },
						reportService: ReportService) => {

						let id = $stateParams.id;
						if (!id) {
							return '';
						}

						let selector = reportService.listReports().filter(rpt => rpt.id === id)[0].controls.selector;
						return `<${selector}></${selector}>`;
					}
				},
				'main': {
					templateProvider: (
						$stateParams: { id: string },
						reportService: ReportService) => {

						let id = $stateParams.id;
						if (!id) {
							return '';
						}

						let selector = reportService.listReports().filter(rpt => rpt.id === id)[0].main.selector;
						return `<${selector}></${selector}>`;
					}
				}
			}
		}
	];

	stateConfig.forEach(state => $stateProvider.state(state));
});