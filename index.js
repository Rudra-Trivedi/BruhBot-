const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();


client.on("ready", () => {
    console.log(client.user.tag + " Online !");
});

client.on("message", msg =>{

    if(msg.channel.id === config.channeid)
    {
        //my id
        if(msg.author.id === config.myid)
        {
            msg.reply("bro");
        }

        // tarush id
        if(msg.author.id === config.tarushid)
        {
            msg.reply("boo");
        }

        //babli id 
        if(msg.author.id === config.babliid)
        {
            msg.reply("babli yaar");
        }

        // chari id 
        if(msg.author.id === config.cahriid)
        {
            const replymsg = AltCapsFunnction(msg.content);
            msg.reply(replymsg);
        }


        // sangh id 
        if(msg.author.id === config.sanghid )
        {
            msg.reply("man sangh get a life");
        }

        // rishi id
        if(msg.author.id === config.rishiid)
        {
            msg.reply("ah man rishi don't try this hard");
        }
    }

});

// helper function alt caps
function AltCapsFunnction(msgstring = "cHarI")
{
    msgstring = msgstring.toLowerCase();
    const characters = msgstring.split("");

    return characters.map((value, index) => {
        return index % 2 ? value.toUpperCase() : value.toLowerCase();
    }).join("");

}



client.login(config.token);