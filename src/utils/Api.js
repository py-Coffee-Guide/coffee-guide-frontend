class Api {
	constructor({ baseUrl, headers }) {
		this._baseUrl = baseUrl;
		this._headers = headers;
	}

	_isResOk() {
		if (this.ok) {
			return this.json();
		}
		return Promise.reject(new Error(`Error: ${this.status}`));
	}

	getOrganizations() {
		return fetch(`${this._baseUrl}/api/v1/cafe/`, {
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(res => this._isResOk(res));
	}

	getCurrentOrganiztion(id) {
		return fetch(`${this._baseUrl}/api/v1/users/${id}`, {
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(res => this._isResOk(res));
	}

	deleteOrganization(id) {
		return fetch(`${this._baseUrl}/api/v1/users/${id}`, {
			body: JSON.stringify({ id }),
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(res => this._isResOk(res));
	}

	getCurrentUser() {
		return fetch(`${this._baseUrl}/api/v1/users/me`, {
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(res => this._isResOk(res));
	}
}

export const api = new Api({
	baseUrl: 'http://localhost:8000/',
	headers: {
		'Content-Type': 'application/json',
	},
});
