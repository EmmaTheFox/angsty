const { angst, agressive, fYou, reluctant, kick, ban, hug } = require("./responses");

function rng() {
    var rand = [
        angst(), agressive(), fYou(), reluctant(), angst()
    ]
    return rand[Math.floor(Math.random()*rand.length)];
}
function banRng() {
    var rand = [
        angst(), agressive(), fYou(), reluctant(), ban(), angst()
    ]
    return rand[Math.floor(Math.random()*rand.length)];
}
function kickRng() {
    var rand = [
        angst(), agressive(), fYou(), reluctant(), kick(), angst()
    ]
    return rand[Math.floor(Math.random()*rand.length)];
}
function hugRng() {
    var rand = [
        hug(), reluctant(), hug()
    ]
    return rand[Math.floor(Math.random()*rand.length)];
}


module.exports = { rng, banRng, kickRng, hugRng }