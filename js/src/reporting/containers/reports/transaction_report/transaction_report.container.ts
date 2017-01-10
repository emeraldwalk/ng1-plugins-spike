import { template } from './transaction_report.container.tpl';
import { IReport } from '../../../shared/services/report.service';

export const transactionReport: IReport = {
	id: 'transactionReport',
	name: 'Transaction Report',
	component: {
		bindings: {},
		template,
		controller: class {
		}
	}
}