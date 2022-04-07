const md5 = require('md5');
const rp = require('request-promise');

iter = 0;
res = 0;

async function loopThrough() {
  while(true) {
    let h = md5(iter.toString());
    //console.log(`'${iter}' | ${h}`);
    if (parseInt(h) == res) {
      console.log(`--> test ${res} (iteration: ${iter})`);
      try {
        let options = {
          method: "GET",
          uri: "https://md5.axa-li-jp-dev-int.pink.ap-southeast-1.aws.openpaas.axa-cloud.com/",
          qs: {
            pass: iter
          },
          rejectUnauthorized: false,
          insecure: true
        };
        let r = await rp(options);
        // let r = await rp.get(`http://localhost:8080/?pass=${iter}`);
        if (r.indexOf('flag') > -1) {
          console.log(r);
          break;
        } else {
          res += 1;
          iter = 0;
        }
      } catch (e) {
        console.error(e)
      }
    } else {
      iter += 1;
    }
  }
}

loopThrough();
