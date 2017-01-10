const reportRegistry: {[id: string]: IReportConfig} = {};

export interface IReportConfig {
	id: string;
	name: string;
	main: ng.IComponentOptions & {selector: string};
	controls: ng.IComponentOptions & {selector: string};
	service: ng.Injectable<Function> & {injectAs: string}
}

function toCamelCase(dashCase: string): string {
	return dashCase.replace(/(-)(.)/g, (match, dash, char: string) => {
		return char.toUpperCase();
	});
}

export function registerReport(ngModule: ng.IModule, report: IReportConfig): void {
	reportRegistry[report.id] = report;
	ngModule.service(report.service.injectAs, report.service);
	ngModule.component(toCamelCase(report.main.selector), report.main);
	ngModule.component(toCamelCase(report.controls.selector), report.controls);
}

export class ReportService {
	public listReports(): Array<IReportConfig> {
		return Object.keys(reportRegistry).map(id => reportRegistry[id]);
	}
}