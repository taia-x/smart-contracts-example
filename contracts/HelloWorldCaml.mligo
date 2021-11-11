type message = string

type storage = message
type returnType = (operation list) * storage

type action = 
 | ChangeMessage of message

let changeMessage(message, storage : message * storage) = ([] : operation list), (message : storage)

let main (action, store : action * storage) : returnType = 
    match action with 
        | ChangeMessage n -> changeMessage(n, store)
