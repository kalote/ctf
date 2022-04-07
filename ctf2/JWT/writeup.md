# JWT Write up

- we want to get admin perm
- first we start with:
```json
{
  "perms": "user",
  "secretid": 1,
  "rolled": "no"
}
```
- vulnerability is that `jwt.sign()` doesn't specify the algorithm
- JWT = JWT_HEADER + JWT_BODY + JWT_SIGNATURE. We can specify 'none' as algorithm in the header, and no signature. Let's try... No luck, why?
  - it's probably because the `jwt.verify` method try to decode my cookie (alg: none) with a provided secret (`secrets[sid]`)
- let's create a file to test some stuff:
  - test the `jwt.verify` method with `undefined` => it works
  - so the challenge is to pass the if test
- let's play with array
- so if we pass a string (provided it's not in the array), it will pass the test (as it will be defined), but it will return undefined, which will result in verifying our payload and gives us admin access

