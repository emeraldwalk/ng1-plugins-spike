import { template } from './report_list.container.tpl';
import { IReport, ReportService } from '../../shared/services/report.service';

export const reportListContainer: ng.IComponentOptions = {
	bindings: {},
	template,
	controller: class {
		static $inject = ['reportService'];
		constructor(private _reportService: ReportService) {
		}

		public $onInit(): void {
			this.list = this._reportService
				.listReports()
				.map(report => {
					let id = report.id.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase();
					return { ...report, ...{ id } };
				});
		}

		public list: Array<IReport>;
	}
};