import ldap, { SubstringFilter } from 'ldapjs';

export const ldapClient = ldap.createClient({
	url: ['ldap://172.16.100.6:389'],
});

export const ldapSearch = async (searchName: string) => {
	return new Promise((resolve, reject) => {
		ldapClient.search(
			'ou=People,dc=iitj,dc=ac,dc=in',
			{
				filter: new SubstringFilter({
					attribute: 'uid',
					initial: searchName,
				}),
				scope: 'sub',
			},
			(err, res) => {
				if (err) {
					reject(err.message);
				}

				res.on('searchEntry', (entry) => {
					resolve(entry.object);
				});
			}
		);
	});
};
