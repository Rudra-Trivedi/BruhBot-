const Discord = require("discord.js");
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



client.login("ODQzMDMyMjQ5ODc1ODI0NjUw.YJ989w.2FGsObRh6aE1h3Z8nEUqXE82P_s");