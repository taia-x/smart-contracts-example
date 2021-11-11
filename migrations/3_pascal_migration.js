const HelloWorld = artifacts.require('HelloWorldPascal');

module.exports = async (deployer, _network) => {
  const storage = '';
  deployer.deploy(HelloWorld, storage);
};
