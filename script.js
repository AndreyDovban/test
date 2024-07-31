import { json2csv } from 'json-2-csv';
import ex from './example.json';
import ex2 from './example2.json';

const but = document.querySelector('.but');
const pre = document.querySelector('.pre');

but.onclick = save_report;

function save_report() {
	let result = { rows: [] };

	for (let el of ex) {
		console.log(el.obj_name);
		result.rows.push({
			dn: el.obj_name,
			type: el.change_type,
			'givenname old value': el.changed_attributes['givenname']
				? el.all_attributes['givenname'].backup_values.join('|')
				: '',
			'givenname new value': el.changed_attributes['givenname']
				? el.all_attributes['givenname'].ldap_values.join('|')
				: '',
			'displayName old value': el.changed_attributes['displayName']
				? el.all_attributes['displayName'].backup_values.join('|')
				: '',
			'displayName new value': el.changed_attributes['displayName']
				? el.all_attributes['displayName'].ldap_values.join('|')
				: '',
			'cn old value': el.changed_attributes['cn'] ? el.all_attributes['cn'].backup_values.join('|') : '',
			'cn new value': el.changed_attributes['cn'] ? el.all_attributes['cn'].ldap_values.join('|') : '',
			'sn old value': el.changed_attributes['sn'] ? el.all_attributes['sn'].backup_values.join('|') : '',
			'sn new value': el.changed_attributes['sn'] ? el.all_attributes['sn'].ldap_values.join('|') : '',
			'uid old value': el.changed_attributes['uid'] ? el.all_attributes['uid'].backup_values.join('|') : '',
			'uid new value': el.changed_attributes['uid'] ? el.all_attributes['uid'].ldap_values.join('|') : '',
			'title old value': el.changed_attributes['title'] ? el.all_attributes['title'].backup_values.join('|') : '',
			'title new value': el.changed_attributes['title'] ? el.all_attributes['title'].ldap_values.join('|') : '',
			'initials old value': el.changed_attributes['initials']
				? el.all_attributes['initials'].backup_values.join('|')
				: '',
			'initials new value': el.changed_attributes['initials']
				? el.all_attributes['initials'].ldap_values.join('|')
				: '',
			'uidnumber old value': el.changed_attributes['uidnumber']
				? el.all_attributes['uidnumber'].backup_values.join('|')
				: '',
			'uidnumber new value': el.changed_attributes['uidnumber']
				? el.all_attributes['uidnumber'].ldap_values.join('|')
				: '',
			'gidnumber old value': el.changed_attributes['gidnumber']
				? el.all_attributes['gidnumber'].backup_values.join('|')
				: '',
			'gidnumber new value': el.changed_attributes['gidnumber']
				? el.all_attributes['gidnumber'].ldap_values.join('|')
				: '',
			'rbtadp old value': el.changed_attributes['rbtadp']
				? el.all_attributes['rbtadp'].backup_values.join('|')
				: '',
			'rbtadp new value': el.changed_attributes['rbtadp']
				? el.all_attributes['rbtadp'].ldap_values.join('|')
				: '',
			'rbtaou old value': el.changed_attributes['rbtaou']
				? el.all_attributes['rbtaou'].backup_values.join('|')
				: '',
			'rbtaou new value': el.changed_attributes['rbtaou']
				? el.all_attributes['rbtaou'].ldap_values.join('|')
				: '',
			'memberOf old value': el.changed_attributes['memberOf']
				? el.all_attributes['memberOf'].backup_values.join('|')
				: '',
			'memberOf new value': el.changed_attributes['memberOf']
				? el.all_attributes['memberOf'].ldap_values.join('|')
				: '',
			'street old value': el.changed_attributes['street']
				? el.all_attributes['street'].backup_values.join('|')
				: '',
			'street new value': el.changed_attributes['street']
				? el.all_attributes['street'].ldap_values.join('|')
				: '',
			'l old value': el.changed_attributes['l'] ? el.all_attributes['l'].backup_values.join('|') : '',
			'l new value': el.changed_attributes['l'] ? el.all_attributes['l'].ldap_values.join('|') : '',
			'postalCode old value': el.changed_attributes['postalCode']
				? el.all_attributes['postalCode'].backup_values.join('|')
				: '',
			'postalCode new value': el.changed_attributes['postalCode']
				? el.all_attributes['postalCode'].ldap_values.join('|')
				: '',
			'mobile old value': el.changed_attributes['mobile']
				? el.all_attributes['mobile'].backup_values.join('|')
				: '',
			'mobile new value': el.changed_attributes['mobile']
				? el.all_attributes['mobile'].ldap_values.join('|')
				: '',
			'pager old value': el.changed_attributes['pager'] ? el.all_attributes['pager'].backup_values.join('|') : '',
			'pager new value': el.changed_attributes['pager'] ? el.all_attributes['pager'].ldap_values.join('|') : '',
			'facsimileTelephoneNumber old value': el.changed_attributes['facsimileTelephoneNumber']
				? el.all_attributes['facsimileTelephoneNumber'].backup_values.join('|')
				: '',
			'facsimileTelephoneNumber new value': el.changed_attributes['facsimileTelephoneNumber']
				? el.all_attributes['facsimileTelephoneNumber'].ldap_values.join('|')
				: '',
			'ou old value': el.changed_attributes['ou'] ? el.all_attributes['ou'].backup_values.join('|') : '',
			'ou new value': el.changed_attributes['ou'] ? el.all_attributes['ou'].ldap_values.join('|') : '',
			'carLicense old value': el.changed_attributes['carLicense']
				? el.all_attributes['carLicense'].backup_values.join('|')
				: '',
			'carLicense new value': el.changed_attributes['carLicense']
				? el.all_attributes['carLicense'].ldap_values.join('|')
				: '',
			'ipaUserAuthType old value': el.changed_attributes['ipaUserAuthType']
				? el.all_attributes['ipaUserAuthType'].backup_values.join('|')
				: '',
			'ipaUserAuthType new value': el.changed_attributes['ipaUserAuthType']
				? el.all_attributes['ipaUserAuthType'].ldap_values.join('|')
				: '',
			'departmentNumber old value': el.changed_attributes['departmentNumber']
				? el.all_attributes['departmentNumber'].backup_values.join('|')
				: '',
			'departmentNumber new value': el.changed_attributes['departmentNumber']
				? el.all_attributes['departmentNumber'].ldap_values.join('|')
				: '',
			'employeeNumber old value': el.changed_attributes['employeeNumber']
				? el.all_attributes['employeeNumber'].backup_values.join('|')
				: '',
			'employeeNumber new value': el.changed_attributes['employeeNumber']
				? el.all_attributes['employeeNumber'].ldap_values.join('|')
				: '',
			'employeeType old value': el.changed_attributes['employeeType']
				? el.all_attributes['employeeType'].backup_values.join('|')
				: '',
			'employeeType new value': el.changed_attributes['employeeType']
				? el.all_attributes['employeeType'].ldap_values.join('|')
				: '',
			'preferredLanguage old value': el.changed_attributes['preferredLanguage']
				? el.all_attributes['preferredLanguage'].backup_values.join('|')
				: '',
			'preferredLanguage new value': el.changed_attributes['preferredLanguage']
				? el.all_attributes['preferredLanguage'].ldap_values.join('|')
				: '',
			'loginshell old value': el.changed_attributes['loginshell']
				? el.all_attributes['loginshell'].backup_values.join('|')
				: '',
			'loginshell new value': el.changed_attributes['loginshell']
				? el.all_attributes['loginshell'].ldap_values.join('|')
				: '',
			'mail old value': el.changed_attributes['mail'] ? el.all_attributes['mail'].backup_values.join('|') : '',
			'mail new value': el.changed_attributes['mail'] ? el.all_attributes['mail'].ldap_values.join('|') : '',
			'homedirectory old value': el.changed_attributes['homedirectory']
				? el.all_attributes['homedirectory'].backup_values.join('|')
				: '',
			'homedirectory new value': el.changed_attributes['homedirectory']
				? el.all_attributes['homedirectory'].ldap_values.join('|')
				: '',
			'telephonenumber old value': el.changed_attributes['telephonenumber']
				? el.all_attributes['telephonenumber'].backup_values.join('|')
				: '',
			'telephonenumber new value': el.changed_attributes['telephonenumber']
				? el.all_attributes['telephonenumber'].ldap_values.join('|')
				: '',
			'ipaNTSecurityIdentifier old value': el.changed_attributes['ipaNTSecurityIdentifier']
				? el.all_attributes['ipaNTSecurityIdentifier'].backup_values.join('|')
				: '',
			'ipaNTSecurityIdentifier new value': el.changed_attributes['ipaNTSecurityIdentifier']
				? el.all_attributes['ipaNTSecurityIdentifier'].ldap_values.join('|')
				: '',
			'proxyAddresses old value': el.changed_attributes['proxyAddresses']
				? el.all_attributes['proxyAddresses'].backup_values.join('|')
				: '',
			'proxyAddresses new value': el.changed_attributes['proxyAddresses']
				? el.all_attributes['proxyAddresses'].ldap_values.join('|')
				: '',
			'mepManagedEntry old value': el.changed_attributes['mepManagedEntry']
				? el.all_attributes['mepManagedEntry'].backup_values.join('|')
				: '',
			'mepManagedEntry new value': el.changed_attributes['mepManagedEntry']
				? el.all_attributes['mepManagedEntry'].ldap_values.join('|')
				: '',
			'krbExtraData old value': el.changed_attributes['krbExtraData']
				? el.all_attributes['krbExtraData'].backup_values.join('|')
				: '',
			'krbExtraData new value': el.changed_attributes['krbExtraData']
				? el.all_attributes['krbExtraData'].ldap_values.join('|')
				: '',
			'krbLastPwdChange old value': el.changed_attributes['krbLastPwdChange']
				? el.all_attributes['krbLastPwdChange'].backup_values.join('|')
				: '',
			'krbLastPwdChange new value': el.changed_attributes['krbLastPwdChange']
				? el.all_attributes['krbLastPwdChange'].ldap_values.join('|')
				: '',
			'krbPasswordExpiration old value': el.changed_attributes['krbPasswordExpiration']
				? el.all_attributes['krbPasswordExpiration'].backup_values.join('|')
				: '',
			'krbPasswordExpiration new value': el.changed_attributes['krbPasswordExpiration']
				? el.all_attributes['krbPasswordExpiration'].ldap_values.join('|')
				: '',
			'gecos old value': el.changed_attributes['gecos'] ? el.all_attributes['gecos'].backup_values.join('|') : '',
			'gecos new value': el.changed_attributes['gecos'] ? el.all_attributes['gecos'].ldap_values.join('|') : '',
			'objectClass old value': el.changed_attributes['objectClass']
				? el.all_attributes['objectClass'].backup_values.join('|')
				: '',
			'objectClass new value': el.changed_attributes['objectClass']
				? el.all_attributes['objectClass'].ldap_values.join('|')
				: '',
			'xaldusermacmax old value': el.changed_attributes['xaldusermacmax']
				? el.all_attributes['xaldusermacmax'].backup_values.join('|')
				: '',
			'xaldusermacmax new value': el.changed_attributes['xaldusermacmax']
				? el.all_attributes['xaldusermacmax'].ldap_values.join('|')
				: '',
			'xaldusermacmin old value': el.changed_attributes['xaldusermacmin']
				? el.all_attributes['xaldusermacmin'].backup_values.join('|')
				: '',
			'xaldusermacmin new value': el.changed_attributes['xaldusermacmin']
				? el.all_attributes['xaldusermacmin'].ldap_values.join('|')
				: '',
			'ipaUniqueID old value': el.changed_attributes['ipaUniqueID']
				? el.all_attributes['ipaUniqueID'].backup_values.join('|')
				: '',
			'ipaUniqueID new value': el.changed_attributes['ipaUniqueID']
				? el.all_attributes['ipaUniqueID'].ldap_values.join('|')
				: '',
			'krbPrincipalKey old value': el.changed_attributes['krbPrincipalKey']
				? el.all_attributes['krbPrincipalKey'].backup_values.join('|')
				: '',
			'krbPrincipalKey new value': el.changed_attributes['krbPrincipalKey']
				? el.all_attributes['krbPrincipalKey'].ldap_values.join('|')
				: '',
			'nsaccountlock old value': el.changed_attributes['nsaccountlock']
				? el.all_attributes['nsaccountlock'].backup_values.join('|')
				: '',
			'nsaccountlock new value': el.changed_attributes['nsaccountlock']
				? el.all_attributes['nsaccountlock'].ldap_values.join('|')
				: '',
			'krbcanonicalname old value': el.changed_attributes['krbcanonicalname']
				? el.all_attributes['krbcanonicalname'].backup_values.join('|')
				: '',
			'krbcanonicalname new value': el.changed_attributes['krbcanonicalname']
				? el.all_attributes['krbcanonicalname'].ldap_values.join('|')
				: '',
			'krbprincipalname old value': el.changed_attributes['krbprincipalname']
				? el.all_attributes['krbprincipalname'].backup_values.join('|')
				: '',
			'krbprincipalname new value': el.changed_attributes['krbprincipalname']
				? el.all_attributes['krbprincipalname'].ldap_values.join('|')
				: '',
			'x-ald-user-mac old value': el.changed_attributes['x-ald-user-mac']
				? el.all_attributes['x-ald-user-mac'].backup_values.join('|')
				: '',
			'x-ald-user-mac new value': el.changed_attributes['x-ald-user-mac']
				? el.all_attributes['x-ald-user-mac'].ldap_values.join('|')
				: '',
			'x-ald-aud-mask old value': el.changed_attributes['x-ald-aud-mask']
				? el.all_attributes['x-ald-aud-mask'].backup_values.join('|')
				: '',
			'x-ald-aud-mask new value': el.changed_attributes['x-ald-aud-mask']
				? el.all_attributes['x-ald-aud-mask'].ldap_values.join('|')
				: '',
		});
	}
	console.log(result);

	let t = json2csv([result], {
		unwindArrays: true,
		prependHeader: true,
		arrayIndexesAsKeys: false,
		checkSchemaDifferences: false,
		delimiter: {
			field: ',',
			wrap: '"',
			eol: '\n',
		},
		emptyFieldValue: '*********',
		escapeHeaderNestedDots: true,
		excelBOM: true,
		expandNestedObjects: true,
		expandArrayObjects: true,
	}).replace(/rows\./g, '');

	pre.innerText = t;

	let date = new Date().toLocaleDateString('ru-Ru').replace(/\./g, '-');
	let time = new Date().toLocaleTimeString('ru-Ru').replace(/:/g, '-');
	let file = new File([t], `pdf_diff_report_${date}-${time}.csv`);

	let link = document.createElement('a');
	link.download = file.name;

	link.href = URL.createObjectURL(file);
	link.click();
	URL.revokeObjectURL(link.href);
}

function save_diff() {
	let result = { rows: [] };

	for (let el of ex) {
		console.log(el.obj_name);
		result.rows.push({
			dn: el.obj_name,
			type: el.change_type,
			'givenname old value': el.changed_attributes['givenname']
				? el.all_attributes['givenname'].backup_values.join('|')
				: '',
			'givenname new value': el.changed_attributes['givenname']
				? el.all_attributes['givenname'].ldap_values.join('|')
				: '',
			'displayName old value': el.changed_attributes['displayName']
				? el.all_attributes['displayName'].backup_values.join('|')
				: '',
			'displayName new value': el.changed_attributes['displayName']
				? el.all_attributes['displayName'].ldap_values.join('|')
				: '',
			'cn old value': el.changed_attributes['cn'] ? el.all_attributes['cn'].backup_values.join('|') : '',
			'cn new value': el.changed_attributes['cn'] ? el.all_attributes['cn'].ldap_values.join('|') : '',
			'sn old value': el.changed_attributes['sn'] ? el.all_attributes['sn'].backup_values.join('|') : '',
			'sn new value': el.changed_attributes['sn'] ? el.all_attributes['sn'].ldap_values.join('|') : '',
			'uid old value': el.changed_attributes['uid'] ? el.all_attributes['uid'].backup_values.join('|') : '',
			'uid new value': el.changed_attributes['uid'] ? el.all_attributes['uid'].ldap_values.join('|') : '',
			'title old value': el.changed_attributes['title'] ? el.all_attributes['title'].backup_values.join('|') : '',
			'title new value': el.changed_attributes['title'] ? el.all_attributes['title'].ldap_values.join('|') : '',
			'initials old value': el.changed_attributes['initials']
				? el.all_attributes['initials'].backup_values.join('|')
				: '',
			'initials new value': el.changed_attributes['initials']
				? el.all_attributes['initials'].ldap_values.join('|')
				: '',
			'uidnumber old value': el.changed_attributes['uidnumber']
				? el.all_attributes['uidnumber'].backup_values.join('|')
				: '',
			'uidnumber new value': el.changed_attributes['uidnumber']
				? el.all_attributes['uidnumber'].ldap_values.join('|')
				: '',
			'gidnumber old value': el.changed_attributes['gidnumber']
				? el.all_attributes['gidnumber'].backup_values.join('|')
				: '',
			'gidnumber new value': el.changed_attributes['gidnumber']
				? el.all_attributes['gidnumber'].ldap_values.join('|')
				: '',
			'rbtadp old value': el.changed_attributes['rbtadp']
				? el.all_attributes['rbtadp'].backup_values.join('|')
				: '',
			'rbtadp new value': el.changed_attributes['rbtadp']
				? el.all_attributes['rbtadp'].ldap_values.join('|')
				: '',
			'rbtaou old value': el.changed_attributes['rbtaou']
				? el.all_attributes['rbtaou'].backup_values.join('|')
				: '',
			'rbtaou new value': el.changed_attributes['rbtaou']
				? el.all_attributes['rbtaou'].ldap_values.join('|')
				: '',
			'memberOf old value': el.changed_attributes['memberOf']
				? el.all_attributes['memberOf'].backup_values.join('|')
				: '',
			'memberOf new value': el.changed_attributes['memberOf']
				? el.all_attributes['memberOf'].ldap_values.join('|')
				: '',
			'street old value': el.changed_attributes['street']
				? el.all_attributes['street'].backup_values.join('|')
				: '',
			'street new value': el.changed_attributes['street']
				? el.all_attributes['street'].ldap_values.join('|')
				: '',
			'l old value': el.changed_attributes['l'] ? el.all_attributes['l'].backup_values.join('|') : '',
			'l new value': el.changed_attributes['l'] ? el.all_attributes['l'].ldap_values.join('|') : '',
			'postalCode old value': el.changed_attributes['postalCode']
				? el.all_attributes['postalCode'].backup_values.join('|')
				: '',
			'postalCode new value': el.changed_attributes['postalCode']
				? el.all_attributes['postalCode'].ldap_values.join('|')
				: '',
			'mobile old value': el.changed_attributes['mobile']
				? el.all_attributes['mobile'].backup_values.join('|')
				: '',
			'mobile new value': el.changed_attributes['mobile']
				? el.all_attributes['mobile'].ldap_values.join('|')
				: '',
			'pager old value': el.changed_attributes['pager'] ? el.all_attributes['pager'].backup_values.join('|') : '',
			'pager new value': el.changed_attributes['pager'] ? el.all_attributes['pager'].ldap_values.join('|') : '',
			'facsimileTelephoneNumber old value': el.changed_attributes['facsimileTelephoneNumber']
				? el.all_attributes['facsimileTelephoneNumber'].backup_values.join('|')
				: '',
			'facsimileTelephoneNumber new value': el.changed_attributes['facsimileTelephoneNumber']
				? el.all_attributes['facsimileTelephoneNumber'].ldap_values.join('|')
				: '',
			'ou old value': el.changed_attributes['ou'] ? el.all_attributes['ou'].backup_values.join('|') : '',
			'ou new value': el.changed_attributes['ou'] ? el.all_attributes['ou'].ldap_values.join('|') : '',
			'carLicense old value': el.changed_attributes['carLicense']
				? el.all_attributes['carLicense'].backup_values.join('|')
				: '',
			'carLicense new value': el.changed_attributes['carLicense']
				? el.all_attributes['carLicense'].ldap_values.join('|')
				: '',
			'ipaUserAuthType old value': el.changed_attributes['ipaUserAuthType']
				? el.all_attributes['ipaUserAuthType'].backup_values.join('|')
				: '',
			'ipaUserAuthType new value': el.changed_attributes['ipaUserAuthType']
				? el.all_attributes['ipaUserAuthType'].ldap_values.join('|')
				: '',
			'departmentNumber old value': el.changed_attributes['departmentNumber']
				? el.all_attributes['departmentNumber'].backup_values.join('|')
				: '',
			'departmentNumber new value': el.changed_attributes['departmentNumber']
				? el.all_attributes['departmentNumber'].ldap_values.join('|')
				: '',
			'employeeNumber old value': el.changed_attributes['employeeNumber']
				? el.all_attributes['employeeNumber'].backup_values.join('|')
				: '',
			'employeeNumber new value': el.changed_attributes['employeeNumber']
				? el.all_attributes['employeeNumber'].ldap_values.join('|')
				: '',
			'employeeType old value': el.changed_attributes['employeeType']
				? el.all_attributes['employeeType'].backup_values.join('|')
				: '',
			'employeeType new value': el.changed_attributes['employeeType']
				? el.all_attributes['employeeType'].ldap_values.join('|')
				: '',
			'preferredLanguage old value': el.changed_attributes['preferredLanguage']
				? el.all_attributes['preferredLanguage'].backup_values.join('|')
				: '',
			'preferredLanguage new value': el.changed_attributes['preferredLanguage']
				? el.all_attributes['preferredLanguage'].ldap_values.join('|')
				: '',
			'loginshell old value': el.changed_attributes['loginshell']
				? el.all_attributes['loginshell'].backup_values.join('|')
				: '',
			'loginshell new value': el.changed_attributes['loginshell']
				? el.all_attributes['loginshell'].ldap_values.join('|')
				: '',
			'mail old value': el.changed_attributes['mail'] ? el.all_attributes['mail'].backup_values.join('|') : '',
			'mail new value': el.changed_attributes['mail'] ? el.all_attributes['mail'].ldap_values.join('|') : '',
			'homedirectory old value': el.changed_attributes['homedirectory']
				? el.all_attributes['homedirectory'].backup_values.join('|')
				: '',
			'homedirectory new value': el.changed_attributes['homedirectory']
				? el.all_attributes['homedirectory'].ldap_values.join('|')
				: '',
			'telephonenumber old value': el.changed_attributes['telephonenumber']
				? el.all_attributes['telephonenumber'].backup_values.join('|')
				: '',
			'telephonenumber new value': el.changed_attributes['telephonenumber']
				? el.all_attributes['telephonenumber'].ldap_values.join('|')
				: '',
			'ipaNTSecurityIdentifier old value': el.changed_attributes['ipaNTSecurityIdentifier']
				? el.all_attributes['ipaNTSecurityIdentifier'].backup_values.join('|')
				: '',
			'ipaNTSecurityIdentifier new value': el.changed_attributes['ipaNTSecurityIdentifier']
				? el.all_attributes['ipaNTSecurityIdentifier'].ldap_values.join('|')
				: '',
			'proxyAddresses old value': el.changed_attributes['proxyAddresses']
				? el.all_attributes['proxyAddresses'].backup_values.join('|')
				: '',
			'proxyAddresses new value': el.changed_attributes['proxyAddresses']
				? el.all_attributes['proxyAddresses'].ldap_values.join('|')
				: '',
			'mepManagedEntry old value': el.changed_attributes['mepManagedEntry']
				? el.all_attributes['mepManagedEntry'].backup_values.join('|')
				: '',
			'mepManagedEntry new value': el.changed_attributes['mepManagedEntry']
				? el.all_attributes['mepManagedEntry'].ldap_values.join('|')
				: '',
			'krbExtraData old value': el.changed_attributes['krbExtraData']
				? el.all_attributes['krbExtraData'].backup_values.join('|')
				: '',
			'krbExtraData new value': el.changed_attributes['krbExtraData']
				? el.all_attributes['krbExtraData'].ldap_values.join('|')
				: '',
			'krbLastPwdChange old value': el.changed_attributes['krbLastPwdChange']
				? el.all_attributes['krbLastPwdChange'].backup_values.join('|')
				: '',
			'krbLastPwdChange new value': el.changed_attributes['krbLastPwdChange']
				? el.all_attributes['krbLastPwdChange'].ldap_values.join('|')
				: '',
			'krbPasswordExpiration old value': el.changed_attributes['krbPasswordExpiration']
				? el.all_attributes['krbPasswordExpiration'].backup_values.join('|')
				: '',
			'krbPasswordExpiration new value': el.changed_attributes['krbPasswordExpiration']
				? el.all_attributes['krbPasswordExpiration'].ldap_values.join('|')
				: '',
			'gecos old value': el.changed_attributes['gecos'] ? el.all_attributes['gecos'].backup_values.join('|') : '',
			'gecos new value': el.changed_attributes['gecos'] ? el.all_attributes['gecos'].ldap_values.join('|') : '',
			'objectClass old value': el.changed_attributes['objectClass']
				? el.all_attributes['objectClass'].backup_values.join('|')
				: '',
			'objectClass new value': el.changed_attributes['objectClass']
				? el.all_attributes['objectClass'].ldap_values.join('|')
				: '',
			'xaldusermacmax old value': el.changed_attributes['xaldusermacmax']
				? el.all_attributes['xaldusermacmax'].backup_values.join('|')
				: '',
			'xaldusermacmax new value': el.changed_attributes['xaldusermacmax']
				? el.all_attributes['xaldusermacmax'].ldap_values.join('|')
				: '',
			'xaldusermacmin old value': el.changed_attributes['xaldusermacmin']
				? el.all_attributes['xaldusermacmin'].backup_values.join('|')
				: '',
			'xaldusermacmin new value': el.changed_attributes['xaldusermacmin']
				? el.all_attributes['xaldusermacmin'].ldap_values.join('|')
				: '',
			'ipaUniqueID old value': el.changed_attributes['ipaUniqueID']
				? el.all_attributes['ipaUniqueID'].backup_values.join('|')
				: '',
			'ipaUniqueID new value': el.changed_attributes['ipaUniqueID']
				? el.all_attributes['ipaUniqueID'].ldap_values.join('|')
				: '',
			'krbPrincipalKey old value': el.changed_attributes['krbPrincipalKey']
				? el.all_attributes['krbPrincipalKey'].backup_values.join('|')
				: '',
			'krbPrincipalKey new value': el.changed_attributes['krbPrincipalKey']
				? el.all_attributes['krbPrincipalKey'].ldap_values.join('|')
				: '',
			'nsaccountlock old value': el.changed_attributes['nsaccountlock']
				? el.all_attributes['nsaccountlock'].backup_values.join('|')
				: '',
			'nsaccountlock new value': el.changed_attributes['nsaccountlock']
				? el.all_attributes['nsaccountlock'].ldap_values.join('|')
				: '',
			'krbcanonicalname old value': el.changed_attributes['krbcanonicalname']
				? el.all_attributes['krbcanonicalname'].backup_values.join('|')
				: '',
			'krbcanonicalname new value': el.changed_attributes['krbcanonicalname']
				? el.all_attributes['krbcanonicalname'].ldap_values.join('|')
				: '',
			'krbprincipalname old value': el.changed_attributes['krbprincipalname']
				? el.all_attributes['krbprincipalname'].backup_values.join('|')
				: '',
			'krbprincipalname new value': el.changed_attributes['krbprincipalname']
				? el.all_attributes['krbprincipalname'].ldap_values.join('|')
				: '',
			'x-ald-user-mac old value': el.changed_attributes['x-ald-user-mac']
				? el.all_attributes['x-ald-user-mac'].backup_values.join('|')
				: '',
			'x-ald-user-mac new value': el.changed_attributes['x-ald-user-mac']
				? el.all_attributes['x-ald-user-mac'].ldap_values.join('|')
				: '',
			'x-ald-aud-mask old value': el.changed_attributes['x-ald-aud-mask']
				? el.all_attributes['x-ald-aud-mask'].backup_values.join('|')
				: '',
			'x-ald-aud-mask new value': el.changed_attributes['x-ald-aud-mask']
				? el.all_attributes['x-ald-aud-mask'].ldap_values.join('|')
				: '',
		});
	}
	console.log(result);

	let t = json2csv([result], {
		unwindArrays: true,
		prependHeader: true,
		arrayIndexesAsKeys: false,
		checkSchemaDifferences: false,
		delimiter: {
			field: ',',
			wrap: '"',
			eol: '\n',
		},
		emptyFieldValue: '*********',
		escapeHeaderNestedDots: true,
		excelBOM: true,
		expandNestedObjects: true,
		expandArrayObjects: true,
	}).replace(/rows\./g, '');

	pre.innerText = t;

	let date = new Date().toLocaleDateString('ru-Ru').replace(/\./g, '-');
	let time = new Date().toLocaleTimeString('ru-Ru').replace(/:/g, '-');
	let file = new File([t], `pdf_diff_report_${date}-${time}.csv`);

	let link = document.createElement('a');
	link.download = file.name;

	link.href = URL.createObjectURL(file);
	link.click();
	URL.revokeObjectURL(link.href);
}
