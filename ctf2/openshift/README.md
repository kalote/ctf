# Installation on Openshift

## Prerequisite
- create a secret to access github.axa.com: `oc secrets new-basicauth basicsecret --username your-username --password $(cat ~/github.txt)`
- allow service account builder to access secret: `oc secrets link serviceaccount/builder secret/basicsecret`
- create the nodeJS template: `oc create -f openshift/nodejs.yaml`

## Starter

`oc process -p NAME=starter -p PORT=8080 -p CURRENT_NAMESPACE=$(oc project -q) -p SOURCE_REPOSITORY_URL=GITHUB_URL -p SECRETNAME=basicsecret -p CONTEXT_DIR=ctf2/STARTER nodejs-app | oc create -f -`

## Path

- create service account: `oc create serviceaccount vulnerable-account`
- create app: `oc process -p NAME=path -p PORT=8080 -p CURRENT_NAMESPACE=$(oc project -q) -p SOURCE_REPOSITORY_URL=GITHUB_URL -p SECRETNAME=basicsecret -p CONTEXT_DIR=ctf2/PATH nodejs-app | oc create -f -`
- change the dc to use the service account
- create another openpaas project ("project2") and select it (`oc project project2`)
- add admin role to serviceaccount on project2 (`oc create -f openshift/rb.yaml`)
- create the secret: `oc create secret generic companyctf --from-literal=flag=companyctf{ev3n_kub3rne7es_1s_not_s4fe}`

## MD5

`oc process -p NAME=md5 -p PORT=8080 -p CURRENT_NAMESPACE=$(oc project -q) -p SOURCE_REPOSITORY_URL=GITHUB_URL -p SECRETNAME=basicsecret -p CONTEXT_DIR=ctf2/MD5 nodejs-app | oc create -f -`

## JWT

`oc process -p NAME=jwt -p PORT=8080 -p CURRENT_NAMESPACE=$(oc project -q) -p SOURCE_REPOSITORY_URL=GITHUB_URL -p SECRETNAME=basicsecret -p CONTEXT_DIR=ctf2/JWT nodejs-app | oc create -f -`

## JWT3

`oc process -p NAME=jwt3 -p PORT=8080 -p CURRENT_NAMESPACE=$(oc project -q) -p SOURCE_REPOSITORY_URL=GITHUB_URL -p SECRETNAME=basicsecret -p CONTEXT_DIR=ctf2/JWT3 nodejs-app | oc create -f -`

## FUN3

`oc process -p NAME=fun3 -p PORT=8080 -p CURRENT_NAMESPACE=$(oc project -q) -p SOURCE_REPOSITORY_URL=GITHUB_URL -p SECRETNAME=basicsecret -p CONTEXT_DIR=ctf2/FUN3 nodejs-app | oc create -f -`

## NOSQL

- create mongodb ephemeral: `oc process -p MONGODB_DATABASE="nosequel" openshift//mongodb-ephemeral | oc create -f -`
- associate secret to default SA: `oc secrets link serviceaccount/default secret/mongodb`
- create app: `oc process -p NAME=nosql -p PORT=8080 -p CURRENT_NAMESPACE=$(oc project -q) -p SOURCE_REPOSITORY_URL=GITHUB_URL -p SECRETNAME=basicsecret -p CONTEXT_DIR=ctf2/NOSQL nodejs-app | oc create -f -`
- add env var: `oc set env dc/nosql MONGOURI=NEW_URI`
