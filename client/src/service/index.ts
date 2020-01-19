import axios from 'axios';

const API_ENDPOINT = 'http://localhost:9090';

export async function fetchData() {
	const response = await axios.get(API_ENDPOINT);
	return response;
}

export async function updateData(currentSetpoint: number) {
	const response = await axios.patch(API_ENDPOINT, {
		currentSetpoint
	});
	return response;
}
