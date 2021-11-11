type message is string 

type storage is message 
type return is list(operation) * storage

type action is 
 | ChangeMessage of message

function changeMessage(const message: string; const storage : storage) : return is  ((nil : list (operation)), ((message) : storage)) 

function main(const action : action; const store : storage) : return is
    case action of
        | ChangeMessage(n) -> changeMessage(n, store)
end;