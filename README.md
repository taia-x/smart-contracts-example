# 'Hello World' Example

## A smart contract example that takes a string and saves it to the storage

#### Source Code:

- **Caml:** [CalculatorCaml.mligo](https://gitlab.com/tezosisrael/smart-contracts-examples/-/blob/master/examples/hello-example/contracts/HelloWorldCaml.mligo)
- **Pascal:** [CalculatorPascal](https://gitlab.com/tezosisrael/smart-contracts-examples/-/blob/master/examples/hello-example/contracts/HelloWorldPascal.ligo)
- **Reason:** [CalculatorReason](https://gitlab.com/tezosisrael/smart-contracts-examples/-/blob/master/examples/hello-example/contracts/HelloWorldReason.religo)

#### Contract addresses:

- **Caml:** [KT1TPaPD5iDrCTkv7gpCCsqCS7bhDHrsGr5v](https://better-call.dev/florencenet/KT1TPaPD5iDrCTkv7gpCCsqCS7bhDHrsGr5v/operations)
- **Pascal:** [KT1LuEn6D9g6GDzb2ife2FBbXRZj4h8G55RH](https://better-call.dev/florencenet/KT1LuEn6D9g6GDzb2ife2FBbXRZj4h8G55RH/operations)
- **Reason:** [KT19rHjy8WX5hAAiMza4nTQdQCVigxmDbjR8](https://better-call.dev/florencenet/KT19rHjy8WX5hAAiMza4nTQdQCVigxmDbjR8/operations)

### API:

#### Entry points:

`ChangeMessage(string)`

#### Storage:

`string`

#### Errors:

##### While In Progress:

- "NotDefined": main entry-point gets the command to call an entry-point, but the entry-point doesn't exist yet.
- "NotImplemented": the entry-point is defined, but not functional yet.

---

#### Contributors:

- **Caml:** Aharon Lando [@ahla85](https://gitlab.com/ahla85)

- **Pascal:** Ameed Jadallah [@ameedjadallah](https://gitlab.com/ameedjadallah)

- **Reason:** Aharon Lando [@ahla85](https://gitlab.com/ahla85)

- **DApp:** Ameed Jadallah [@ameedjadallah](https://gitlab.com/ameedjadallah)
