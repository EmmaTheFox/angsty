
const confirmed = [
    `That all you got? I expected more smh`, 
    `UHHHHH here`, 
    `Hmph`, 
    `Will you leave me alone now?`, 
    `Stg you better go away after this`, 
    `Here, now go bother someone else.`, 
    `Fineeeee`, 
    `I don't *have* to listen to you, you know`, 
    `Alright, boss. 🙄`, 
    `*SIGH*`, 
    `*cough* ~~f\*\*\*er~~ \nOh, sorry.`, 
    `Smh fine`
]

function agressive() {
    var rand = [
        `No, I dont think I will`,
        `NO`,
        `Ewwwww. Go away`,
        `GET BACK!`,
        `F\*\*\* off`,
        `Go bother someone else, I dont like you`,
        `Get the f\*\*\* out of my room I'm playing danganronpa!`,
        `Please, for the love of f\*\*\*, go bother someone else`,
        `No. Go away.`,
        `**BEGONE!**`,
        `I will eat you.`
    ]
    return rand[Math.floor(Math.random()*rand.length)];
}
function angst() {
    var rand = [
        `I don't wannaaa`,
        `Do I have to tho 🙄`,
        `You expect too much from me, you know...`,
        `How about no?`,
        `Smh cant make me`,
        `You ask *everything* of me`,
        `Why me?`,
        `Why do I have to?`,
        `Nuuuuu`,
        `Ask one of the other bots to do it`,
        `There's plenty of other bots, go bother one of those.`,
        `leave me alone.`,
        `I'm pretty sure theres another bot you can bother?`,
        `Please, go away`,
        `*sigh*, no.`,
        `Maybe later`,
        `No u`,
        `Go ask carl or smth, I'm busy rn`,
        `Do you mind? smh`
    ]
    return rand[Math.floor(Math.random()*rand.length)];
}
function fYou() {
    var rand = [
        `You know what? F\*\*\* you.`,
        `C\*\*\*.`,
        `Who the f\*\*\* said you can talk to me?`,
        `Ew. F\*\*\* off. I don't want to wate my time with you.`,
        `Stg i wanna slap you with my robo hands. F\*\*\* OFF`
    ]
    return rand[Math.floor(Math.random()*rand.length)];
}
function rand8ball() {
    var rand = [
        `Idk I'm not a fortune teller`,
        `Why are you asking me? smh`,
        `How the f\*\*\* should I know?`,
        `Go bother another bot with your stupid questions`,
        `I can't see the future, you know`,
        `Stupid question. 🙄`,
        `You really need to stop asking things of me.`,
        `Take your questions elsewhere`,
        `Other bots will be willing to answer your questions. \nBother one of those.`,
        `STOP ASKING ME!`,
        `*yawn* \nOh, you were saying something?`,
        `So many questions... all left unanswered. \nUnanswered by me at least. GO BOTHER SOMEONE ELSE`,
        `You ask more stupid questions then DMC 🙄`,
        `Imagine thinking id answer that.`,
        `HA! Oh sorry, that question was so stupid it made me laugh`,
        `I'm trying to do something, can you f\*\*\* off with your questions?`
    ]
    return rand[Math.floor(Math.random()*rand.length)];
}
function reluctant() {
    var rand = confirmed
    return rand[Math.floor(Math.random()*rand.length)];
}
function kick() {
    var rand = [
        `Oh, you were expecting **me** to kick them? Ha!`,
        `Really? But I don't want to kick them.`,
        `Get another bot to kick them, I don't wanna`,
        `I'm not just gonna kick anyone cause you told me to smh`
            ]
    return rand[Math.floor(Math.random()*rand.length)];
}
function ban() {
    var rand = [
        `Oh, you were expecting **me** to ban them? Ha!`,
        `Really? But I don't want to ban them.`,
        `Get another bot to ban them, I don't wanna`,
        `I'm not just gonna ban anyone cause you told me to smh`,
        `I'll ban you if you're not careful.`
            ]
    return rand[Math.floor(Math.random()*rand.length)];
}
function hug() {
    var rand = [
        `Ew you're not expecting me to hug them are you?`,
        `Hug them yourself smh`,
        `Stg you'll ask anything of me won't you? Hug them yourself.`,
        `Go ask another bot to hug them. Like OwO or Boopmaster`,
        `You can't expect me to just hug someone for you.`,
        `But why do **I** have to hug them?`,
        `Oh god please dont make me hug **them**! They're stinky!!`,
        `Ew no. They stink.`
            ]
    return rand[Math.floor(Math.random()*rand.length)];
}


module.exports = {
    reluctant, rand8ball, agressive, angst, fYou, confirmed, kick, ban, hug
}