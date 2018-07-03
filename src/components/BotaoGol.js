import React from 'react'; 

export default class Time extends React.Component{
		handleClick(event){
			event.preventDefault();
			this.props.marcarGol();
		}

	render(){
		return(
				<div>
					<button onClick={this.handleClick.bind(this)}>GOL</button>
				</div>
			);
	}
}