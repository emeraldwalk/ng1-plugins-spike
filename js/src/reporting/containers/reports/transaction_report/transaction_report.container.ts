import { template } from './transaction_report.container.tpl';
import { TransactionReportService } from './transaction_report.service';

export const transactionReportContainer = {
	selector: 'transaction-report',
	bindings: {},
	template,
	controller: class {
		static $inject = [TransactionReportService.injectAs];
		constructor(transactionReportService: TransactionReportService) {
		}
	}
};