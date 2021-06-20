const util = require('util');
const exec = util.promisify(require('child_process').exec);

const regex = /record\s{\s\"(.*)\";\srecord\s{\s.*\s=\s\"(.*)\"/gm;


const makeProxy = ({ subdomain, canister }) => `
${subdomain}.ic.cafe {
  reverse_proxy https://${canister}.raw.ic0.app:443 {
    header_up Host "${canister}.raw.ic0.app"
  }
}

`;

const main = async () => {
  const records = [];
  const { stdout, stderr } = await exec('dfx canister --network ic call subdomains getAll');
  if (stderr) {
    console.log(stderr);
  }

  let match;
  match = regex.exec(stdout);
  while (match != null) {
    if (match.length > 1) {
      const [_, subdomain, canister] = match;

      records.push({
        subdomain,
        canister,
      });
    }
    match = regex.exec(stdout);
  }


  let config = '';

  records.forEach((record) => {
    config += makeProxy(record);
  });

  console.log(config);
};

main();
