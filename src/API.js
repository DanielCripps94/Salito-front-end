const baseURL = 'http://localhost:3000';
const signInURL = `${baseURL}/signin`;
const validateURL = `${baseURL}/validate`
const get = (url, token) => {
    return token ? fetch(url, { headers: { 'AUTHORIZATION': token } }) : fetch(url)
}

const post = (url, body) => {
	const configObject = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			"Accept": 'application/json'
		},
		body: JSON.stringify(body)
	};
	return fetch(url, configObject);
};

const signIn = body => {
	return post(signInURL, body).then(response => response.json());
};

const validate = (token) => {
   return get(validateURL, token).then(response => response.json())
}

export default { signIn, validate };
