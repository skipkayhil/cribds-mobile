
class fetcher {

	static loginFetcher(username, password, instance) {
		return username === 'user' && password === 'pass';
		/*
		var usernamesA = [user, user1];
		var passwordA = [pass, pass1]; 

		var usernamesE = [euser, euser1];
		var passwordE = [pass, pass1];

		var usernamesR = [ruser, ruser1];
		var passwordR = [pass, pass1];

		if (instance == 'Admin') {
			var user = usernamesA.indexOf(username);
			if (user == -1) {
				return false;
			} else {
				return passwordA[user] == password;
			}

		} else if (instance == 'Employee') {
			var user = usernamesE.indexOf(username);
			if (user == -1) {
				return false;
			} else {
				return passwordE[user] == password;
			}

		} else {
			var user = usernamesR.indexOf(username);
			if (user == -1) {
				return false;
			} else {
				return passwordR[user] == password;
			}

		}
		return false;
		*/

	}

	signup(username, password, instance) {
		//TODO
	}
	
}