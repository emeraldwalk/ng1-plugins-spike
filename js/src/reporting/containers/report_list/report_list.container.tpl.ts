export const template =
`<div>Report list
	<ul>
		<li ng-repeat="report in $ctrl.list">
			<a ui-sref="app.report({id: report.id})">{{report.name}}</a>
		</li>
	</ul>
</div>`;