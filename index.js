const chalk = require('chalk');
const { Scanner, Utils } = require('spherov2.js');

const purples = [
  [218,112,214],
  [255,0,255],
  [255,0,255],
  [186,85,211],
  [138,43,226],
  [148,0,211],
  [153,50,204],
  [139,0,139],
  [128,0,128],
  [75,0,130],
];

makeSoMuchPurple();
async function makeSoMuchPurple () {
  const sphero = await getSphero();
  let purpleIndex = 0;
  while (true) {
    const currentPurple = purples[purpleIndex];
    logPurple(currentPurple);
    await sphero.setMainLedColor(...currentPurple);
    await Utils.wait(250);
    purpleIndex = (purpleIndex + 1) % purples.length;
  }
};

function logPurple(purple) {
  console.log(chalk.rgb(...purple)(`purple: ${purple}`));
}

async function getSphero () {
  const sphero = await Scanner.findSpheroMini();
  if (!sphero) return console.log('sphero mini not available!');
  return sphero;
}