const HelloWorld = artifacts.require('HelloWorldReason');

module.exports = async (deployer, _network) => {
  const storage = '';
  deployer.deploy(HelloWorld, storage);
};
