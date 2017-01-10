import { IReportConfig } from '../../../shared/services/report.service';
import { transactionReportContainer } from './transaction_report.container';
import { transactionReportControls } from './transaction_report_controls.container';
import { TransactionReportService } from './transaction_report.service';

export const transactionReportConfig: IReportConfig = {
	id: 'txn',
	name: 'Transaction Report',
	main: transactionReportContainer,
	controls: transactionReportControls,
	service: TransactionReportService
};