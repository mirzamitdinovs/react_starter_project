import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
	const navigate = useNavigate();
	let USER = localStorage.getItem('user');
	if (USER) {
		USER = JSON.parse(USER);
	}

	return (
		<div>
			<h1>Dashboard</h1>
			<h3>Name: {USER.name}</h3>
			<h3>Email: {USER.email}</h3>
			<h3>Password: {USER.password}</h3>
			<Button
				onClick={() => {
					localStorage.removeItem('user');
					navigate('/');
				}}
				variant='success'
			>
				Success
			</Button>
		</div>
	);
};

export default DashboardPage;
