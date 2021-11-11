['Caml', 'Pascal', 'Reason'].forEach((lang) => {
  const contractName = 'HelloWorld' + lang;
  const HelloWorld = artifacts.require(contractName);
  const assert = require('assert');

  contract(contractName, async function () {
    let instance = null;

    before(async () => {
      instance = await HelloWorld.deployed();
    });

    it('...should store a string.', async () => {
      await instance.main('');
      const storedString = await instance.storage();
      assert.strictEqual(storedString, '', 'The tests should pass');
    });
  });
});
