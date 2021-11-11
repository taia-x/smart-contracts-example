const HelloWorld = artifacts.require('HelloWorldCaml');

module.exports = async (deployer, _network) => {
  const storage = '';
  deployer.deploy(HelloWorld, storage);
};
