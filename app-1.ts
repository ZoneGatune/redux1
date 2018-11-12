console.log("hola mundo");

interface Action {
    type: string;
    payload: any;

}



function reduce(state = 10, action: Action){

    // if( action.type === 'INCREMENTAR'){
    //     return state += 1;
    // }
    // return state;
    switch(action.type){
        case 'INCREMENTAR':
            return state = +1;
        case 'DISMINUR':
            return state = -1;

        default:
            return state;
    }
}

const incrementadorAction: Action = {
    type: 'INCREMENTAR',
    payload: ''
};

console.log(reduce(10,incrementadorAction));
const decrementadorAction: Action = {
    type: 'DISMINUIR',
    payload: ''
};

console.log(reduce(10,decrementadorAction));