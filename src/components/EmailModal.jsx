import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';

class EmailModal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		}
	}

	showModal = () => {
		this.setState({
			showModal: true
		});
	}

	closeModal = () => {
		this.setState({ 
			showModal: false
		});
	}

	render() {
		return(
			<div>
				<Modal
					onClose={this.closeModal}
					open={this.state.showModal}
				/>
			</div>
		);
	}	
}

export default EmailModal;