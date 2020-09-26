import React from 'react';
import '../style.scss';
import Dropzone from './Dropzone';

class App extends React.Component {
	componentDidMount() {
		let themeColor = document.querySelector( 'html' );
		themeColor.classList.add( 'theme-blue' );
	}

	render() {
		return (
			<div>
				<div id="form-builder-container">
					<h1>Form Builder</h1>
					<div class="select-arrow hidden">&larr;</div>
					<div id="drag-and-drop-box">
						<div class="col-1-2">
							<div class="left-column-container">
								<h2>Drop Zone <small>- the fields in this dropzone are sortable.</small></h2>
								<Dropzone/>
							</div>
						</div>
						<div class="col-1-2">
							<div class="right-column-container">
								<div class="form-fields-toggle" data-index="1">
									<h2 class="toggle-trigger">Normal Fields<span class="dashicons caret dashicons-arrow-down"></span></h2>
									<ul class="add_fields_ul content_1">
										<li><input type="button" id="cdc-single-text" class="button copy-btn" data-type="text" value="Single Line Text"/></li>
										<li><input type="button" id="cdc-textarea" class="button copy-btn" data-type="textarea" value="Paragraph Text"/></li>
										<li><input type="button" id="cdc-select" class="button copy-btn" data-type="select" value="Drop Down"/></li>
										<li><input type="button" id="cdc-checkbox" class="button copy-btn" data-type="checkbox" value="Checkboxes"/></li>
										<li><input type="button" id="cdc-radio" class="button copy-btn" data-type="radio" value="Radio Buttons"/></li>
										<li><input type="button" id="cdc-multi-select" class="button copy-btn" data-type="multiselect" value="Multi Select"/></li>
									</ul>
								</div>
								<div id="settings-waypoint-container">
									<h2>Settings</h2>
									<div id="settings-container"></div>
								</div>
							</div>
						</div>
						<div class="waypoint-trigger-end"><br/></div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
