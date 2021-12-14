const Discord = require("discord.js");
const { ping, help, info, rngsus, botinfo, invite, list, ban, kick, getguild, hugs } = require("./aliases");
const config = require("./config.json");
const { confirmed, reluctant, rand8ball } = require("./responses");
const { rng, banRng, kickRng, hugRng } = require("./rng");
const client = new Discord.Client();
const prefix = "angsty ";

client.on("message", function(message)
{client.user.setActivity("Danganronpa", { type: "PLAYING"})
if (message.author.bot) return;
const commandBody = message.content.slice(prefix.length);
const args = commandBody.split(' ');
const command = args.shift().toLowerCase();
const devID = [`439402194362433536`, `812568737869332491`];

if (message.content.startsWith(prefix)) {

function getUserFromMention(mention) {
    if (!mention) return;

    if (mention.startsWith('<@') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);
    
        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }
    
        return client.users.cache.get(mention);
}}


if (ping.includes(command)) {
    message.channel.send(rng()).then(msg => {
        if (confirmed.includes(msg.content)) return msg.edit(new Discord.MessageEmbed().setTitle("Ping").setDescription(`Command latency: ${Date.now() - message.createdTimestamp}ms \nDiscord API latency: ${Math.round(client.ws.ping)}ms`).setColor("RANDOM"))
    }
    )
}

if (help.includes(command)) {
    message.channel.send(reluctant()).then(m => m.edit(new Discord.MessageEmbed()
    .setColor("RANDOM").setTitle("So you need help, huh?")
    .setDescription("Well, heres a list of commands, if you need more help with them, [go ask someone else](https://discord.gg/xg4z4DRNWe). \n\n`ping` -If you need help with this, who let you on discord!? \n`help` -What I need to deal with you. \n`info` -Oh look, new person, lets see their info! \n`8ball` -Does exactly what you'd expect, if you're expecting nothing. \n`stats` -Shows *my* stats, not yours or any other human's. \n`invite` -Stg if you dont know what this does.... \n`kick` -May kick a user. If i feel like it. \n`ban` -Same as kick, but with a little more force. \n`hug` -Please don't make me hug someone stinky")))
}

if (info.includes(command)) {
    message.channel.send(rng()).then(msg => {
        if (confirmed.includes(msg.content)) {
            const user = getUserFromMention(args[0]);
            if (args[0]) {
                if (!user) {
                    let user = message.guild.members.cache.find(member => member.id === `${args}`)
                    if (devID.includes(user.id)) {
                        const userInfEmbed3 = new Discord.MessageEmbed()
                        .setTitle(`${user.user.username}#${user.user.discriminator}`)
                        .setThumbnail(`${user.user.displayAvatarURL({ dynamic: true })}`)
                        .setDescription(`**ID:** ${user.id}
                
                **Creation date:** ${user.user.createdAt}
                
                **Join Date:** ${user.joinedAt}
                
                **Role count:** ${user.roles.cache.size -1}
                
                
                *~This member is the bot dev*`)
                .setColor(`RANDOM`)
                return message.channel.send(userInfEmbed3)
                    }
                    else {
                        const userInfEmbed1 = new Discord.MessageEmbed()
                        .setTitle(`${user.user.username}#${user.user.discriminator}`)
                        .setThumbnail(`${user.user.displayAvatarURL({ dynamic: true })}`)
                        .setDescription(`**ID:** ${user.id}
                
                **Creation date:** ${user.user.createdAt.getDate(1210981217*1000)}
                
                **Join Date:** ${user.joinedAt}
                
                **Role count:** ${user.roles.cache.size -1}
                `)
                .setColor(`RANDOM`)
                return message.channel.send(userInfEmbed1)
                        }
                
            
                } 
                if (user) {
                if (devID.includes(user.id)) {
                    const userInfEmbed3 = new Discord.MessageEmbed()
                    .setTitle(`${user.username}#${user.discriminator}`)
                    .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)
                    .setDescription(`**ID:** ${user.id}
            
            **Creation date:** ${message.guild.member(message.mentions.users.first()).user.createdAt}
            
            **Join Date:** ${message.guild.member(message.mentions.users.first()).joinedAt}
            
            **Role count:** ${message.guild.member(message.mentions.users.first()).roles.cache.size -1}
            
            
            *~This member is the bot dev*`)
            .setColor(`RANDOM`)
            return message.channel.send(userInfEmbed3)
                }
                else {
                const userInfEmbed1 = new Discord.MessageEmbed()
                .setTitle(`${user.username}#${user.discriminator}`)
                .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)
                .setDescription(`**ID:** ${user.id}
        
        **Creation date:** ${message.guild.member(message.mentions.users.first()).user.createdAt}
        
        **Join Date:** ${message.guild.member(message.mentions.users.first()).joinedAt}
        
        **Role count:** ${message.guild.member(message.mentions.users.first()).roles.cache.size -1}
        `)
        .setColor(`RANDOM`)
        return message.channel.send(userInfEmbed1)
                }}
                else message.channel.send(`You need to mention a valid user`)
            }
        else {
            const userInfEmbed2 = new Discord.MessageEmbed()
            .setTitle(`${message.author.username}#${message.author.discriminator}`)
            .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
            .setDescription(`**ID:** ${message.author.id}
        
        **Creation date:** ${message.author.createdAt}
        
        **Join Date:** ${message.guild.member(message.author).joinedAt}
        
        **Role count:** ${message.guild.member(message.author).roles.cache.size -1}
        `)
        .setColor(`RANDOM`)
        return message.channel.send(userInfEmbed2)
        }
    }
    })
}

if (rngsus.includes(command)) {
    if (!args[0]) return message.reply("You need to ask me something dumbass. \nBetter yet, don't.")
    message.reply(rand8ball())
}

if (botinfo.includes(command)) {
    const infoEmbed = new Discord.MessageEmbed()
    .setTitle(`Annoying ${client.users.cache.size} users across ${client.guilds.cache.size} servers`)
    .setColor(`RANDOM`)
    .setDescription(`**Bot Devs:**
\`${client.users.cache.find(user => user.id === "812568737869332491").tag}\` aka ${client.users.cache.find(user => user.id === "812568737869332491")},
\`${client.users.cache.find(user => user.id === "439402194362433536").tag}\` aka ${client.users.cache.find(user => user.id === "439402194362433536")}

[Vote for me, you know you want to](https://discordbotlist.com/bots/angsty/upvote)

I was made on ${client.user.createdAt}`)

message.channel.send(infoEmbed)
}

if (invite.includes(command)) {
    message.channel.send(reluctant()).then(msg => { msg.edit(new Discord.MessageEmbed()
        .setTitle("Want to drag me off to some other server? Smh.").setColor("RANDOM")
        .setDescription("Fineeee... \n[Click Here](https://discord.com/api/oauth2/authorize?client_id=918978217505861703&permissions=137640668359&scope=bot) then."))})
}

if (list.includes(command)) {
    if (devID.includes(message.author.id)) {
        message.channel.send(new Discord.MessageEmbed().setTitle(`Server ID - Server Name`)
.setDescription(`\`${client.guilds.cache.map(guild => [guild.id, guild.name].join(`\` **-** \``)).join(`\` \n \``)}\``))
    }
}

if (ban.includes(command)) {
    message.channel.send(banRng()).then(msg => {
        if (confirmed.includes(msg.content)) {      
    const user = getUserFromMention(args[0])
    if (devID.includes(message.author.id)) {
        if (!user) try { 
            let user = message.guild.members.cache.find(member => member.id === `${args}`)
            const banEmbed = new Discord.MessageEmbed()
            .setTitle(`${user.user.username} was banned by ${message.author.username}`)
            .setColor(`RED`)
        message.channel.send(banEmbed)
        message.guild.member(user).ban();

            }
            catch { message.channel.send(`You need to mention a valid user to ban them`)
            }
        else if (user) {
            let banReason = args.join(" ").slice(22);
        if (!banReason) {
        banReason = "None"
        }
        const banEmbed = new Discord.MessageEmbed()
            .setTitle(`${user.username} was banned by ${message.author.username}`)
            .setColor(`RED`)
        message.channel.send(banEmbed)
        message.guild.member(user).ban();
    }
    else message.channel.send(`You need to mention a valid user to ban them`)
}
    else {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")
    if (!user) try { 
        let user = message.guild.members.cache.find(member => member.id === `${args}`)
        const banEmbed = new Discord.MessageEmbed()
        .setTitle(`${user.user.username} was banned by ${message.author.username}`)
        .setColor(`RED`)
    message.channel.send(banEmbed)
    message.guild.member(user).ban()

    }
    catch(error) { message.channel.send(`You need to mention a valid user to ban them`)
        }
    else if (user) {
    if (devID.includes(user.id)) return message.channel.send(`I... I cannot ban them, they're the dev...`)
    if (message.author === user) return message.channel.send(`I'm not letting you ban yourself <:foxCry:842117713328472135>`)
    let banReason = args.join(" ").slice(22);
    if (!banReason) {
    banReason = "None"
    }
    const banEmbed = new Discord.MessageEmbed()
        .setTitle(`${user.username} was banned by ${message.author.username}`)
        .setColor(`RED`)
    message.channel.send(banEmbed)
    message.guild.member(user).ban()
}
else message.channel.send(`You need to mention a valid user to ban them`)
}
}
})
}

if (kick.includes(command)) {
    message.channel.send(kickRng()).then(msg => {
        if (confirmed.includes(msg.content)) {      
    const user = getUserFromMention(args[0])
    if (devID.includes(message.author.id)) {
        if (!user) try { 
            let user = message.guild.members.cache.find(member => member.id === `${args}`)
            const kickEmbed = new Discord.MessageEmbed()
            .setTitle(`${user.user.username} was kicked by ${message.author.username}`)
            .setColor(`#ffa621`)
        message.channel.send(kickEmbed)
        message.guild.member(user).kick();

            }
            catch { message.channel.send(`You need to mention a valid user to kick them`)
            }
        else if (user) {
        const kickEmbed = new Discord.MessageEmbed()
            .setTitle(`${user.username} was kicked by ${message.author.username}`)
            .setColor(`#ffa621`)
        message.channel.send(kickEmbed)
        message.guild.member(user).kick()
    }
    else message.channel.send(`You need to mention a valid user to kick them`)
}
    else {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Invalid Permissions")
    if (!user) try { 
        let user = message.guild.members.cache.find(member => member.id === `${args}`)
        const kickEmbed = new Discord.MessageEmbed()
        .setTitle(`${user.user.username} was kicked by ${message.author.username}`)
        .setColor(`#ffa621`)
    message.channel.send(kickEmbed)
    message.guild.member(user).kick();

        }
        catch { message.channel.send(`You need to mention a valid user to kick them`)
        }
    else if (user) {
if (devID.includes(user.id)) return message.channel.send(`I... I cannot kick them, they're the dev...`)
    if (message.author === user) return message.channel.send(`I'm not letting you kick yourself <:foxCry:842117713328472135>`)
    const kickEmbed = new Discord.MessageEmbed()
        .setTitle(`${user.username} was banned by ${message.author.username}`)
        .setColor(`RED`)
    message.channel.send(kickEmbed)
    message.guild.member(user).kick()
}
else message.channel.send(`You need to mention a valid user to kick them`)
    }
}
})
}

if (getguild.includes(command)) {
    if (devID.includes(message.author.id)) {
        let guildinf = client.guilds.cache.find(guild => guild.id === `${args}`)
        let guildEmbed = new Discord.MessageEmbed()
        .setTitle(guildinf.name)
        .setThumbnail(guildinf.iconURL({ dynamic: true }))
        .setDescription(`
ID: ${guildinf.id}

Member count: ${guildinf.members.cache.filter(member => !member.user.bot).size}

Bot count: ${guildinf.members.cache.filter(member => member.user.bot).size}

Role count: ${guildinf.roles.cache.size}

Owner: ${guildinf.owner.user.tag}

Owner ID: ${guildinf.ownerID}

Creation date: ${guildinf.createdAt}

Join date: ${guildinf.joinedAt}`)
.setColor(`#00ffb9`)
message.channel.send(guildEmbed)
    }
    else message.channel.send(`You aren't authorised to use this command. Sorry`)

}
if (hugs.includes(command)) {
    if (!args[0]) return message.channel.send(`Yeah you can hug me, sure. *hugs*`);
    const user = getUserFromMention(args[0])
    function hugMsg() {
        var rand = [
            `${user} hugggssss from ${message.author}`,
            `${message.author} sent hugs to ${user}!`,
            `${user} heres some hugs from ${message.author}!`,
            `I was forced to do this against my will... *Hugs ${user}*`
        ]
        return rand[Math.floor(Math.random()*rand.length)];
    }
    message.channel.send(hugRng()).then(msg => {
        if (confirmed.includes(msg.content)) return msg.edit(new Discord.MessageEmbed().setColor("RANDOM").setTitle(`Hugs`).setDescription(hugMsg()))
    })
}


}})
client.login(config.BOT_TOKEN)