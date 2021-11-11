type message = string;

type storage = message;
type returnType = (list(operation), string);

type action = 
 | ChangeMessage(message);

let changeMessage = ((message, storage) : (message, storage)) : returnType => ([] : list(operation), message)

let main = ((action, storage) : (action, storage)) : returnType => {
    switch(action){
        | ChangeMessage (n) => changeMessage(n, storage)
    };
}
