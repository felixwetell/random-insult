'use strict';

const insults = require('./collection.json')


function me()
{
    return insult[Math.floor(Math.random() * items.length)];

}

let insult = 
[
    "Fuck you!",
    "I am do not like you.",
    "You are a moron.",
    "YOU. ARE. AN. ASSHOLE."
]

export {
    me
}

