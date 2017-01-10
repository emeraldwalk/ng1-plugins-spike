export const template = `
<div class="container-fluid">
	<div class="row">
		<div class="col-12">
			<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
				<div class="collapse navbar-collapse">
					<div class="navbar-nav">
						<a class="nav-item nav-link active"
						   ui-sref="app.list"
						   ui-sref-active="active">Home</a>
						<a class="nav-item nav-link"
						   ui-sref="app.report"
						   ui-sref-active="active">Reports</a>
					</div>
				</div>
			</nav>
		</div>
	</div>
	<div class="row">
		<div class="col-3">
			<div class="card">
				<div class="card-block">
					<div ui-view="sidebar"></div>
				</div>
			</div>
		</div>
		<div class="col-9">
			<div class="card">
				<div class="card-block">
					<div ui-view="main"></div>
				</div>
			</div>
		</div>
	</div>
</div>`;