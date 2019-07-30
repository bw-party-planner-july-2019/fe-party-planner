import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	button   : {
		margin : '1rem',
	},
	fieldset : {
		display       : 'flex',
		flexDirection : 'column',
		textAlign     : 'center',
	},
	form     : {
		width     : '300px',
		textAlign : 'center',
	},
}));

export default function DisplayList({ party_id, list }) {
	const classes = useStyles();
	const listOfItems = list.filter((item) => (item.party_id = party_id));
	console.log('new list ', listOfItems);

	const statusOfItems = {};
	listOfItems.map((item) => Object.assign(statusOfItems, { [item.item]: item.purchased }));

	console.log('filtered list ', statusOfItems);
	const [ state, setState ] = React.useState(statusOfItems);
	const handleChange = (name) => (event) => {
		setState({ ...state, [name]: event.target.checked });
	};
	function handleSubmit(event) {
		event.preventDefault();
		console.log('triggered checkbox', state);
	}
	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			<fieldset className={classes.fieldset}>
				<h1>List</h1>
				{listOfItems.map((item) => {
					return (
						<div>
							<label>{item.item}</label>
							<Checkbox
								checked={state[item.purchased]}
								onChange={handleChange(item.item)}
								value={item.party_id}
								color='primary'
								inputProps={{
									'aria-label' : 'secondary checkbox',
								}}
							/>
						</div>
					);
				})}
				<div>
					<Button type='submit' variant='contained' color='primary' className={classes.button}>
						Submit
					</Button>
				</div>
			</fieldset>
		</form>
	);
}
