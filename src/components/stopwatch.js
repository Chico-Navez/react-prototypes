import React, { Component } from 'react';





class stopwatch extends Component {
	constructor(props){
		super(props);
		this.state = {
			status:'stopped',
			start:null,
			elapsed:0
		}
		this.start = () => {};
	}
	render(){
		const {elapsed, status} = this.state; //why inside render and not outside?

		return (<div>
			<h1>{elapsed}</h1>
			<p>{status}</p>
		</div>)
	};
}

export default stopwatch 