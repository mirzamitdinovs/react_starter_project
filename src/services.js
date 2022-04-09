import axios from 'axios';
const baseUrl = 'http://localhost:4000/api';

export const SIGN_IN = async ({ email, password }) => {
	try {
		const res = await axios({
			url: `http://localhost:4000/login`,
			method: 'POST',
			data: {
				email,
				password,
			},
			headers: {
				'Content-Type': 'application/json',
			},
		});

		return res.data;
	} catch (err) {
		console.log('err: ', err.message);
	}
};
