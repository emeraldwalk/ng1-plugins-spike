import { template } from './transaction_report_controls.container.tpl';
import { TransactionReportService } from './transaction_report.service';

export const transactionReportControls = {
	selector: 'transaction-report-controls',
	bindings: {},
	template,
	controller: class {
		static $inject = [TransactionReportService.injectAs];
		constructor(transactionReportService: TransactionReportService) {
		}
	}
};