const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();


client.on("ready", () => {
    console.log(client.user.tag + " Online !");

});

client.on("message", msg =>{
    if(msg.author.tag === "chikoo#3169")
    {
        msg.reply("mah man !");
    }
});



client.login(config.token);