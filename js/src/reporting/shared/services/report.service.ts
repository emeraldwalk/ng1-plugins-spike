const reportRegistry: {[id: string]: IReport} = {};

export interface IReport {
	id: string;
	name: string;
	component: ng.IComponentOptions
}

export function registerReport(report: IReport): void {
	reportRegistry[report.id] = report;
}

export class ReportService {
	public listReports(): Array<IReport> {
		return Object.keys(reportRegistry).map(id => reportRegistry[id]);
	}
}