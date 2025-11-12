import { Client, GatewayIntentBits, Collection } from 'discord.js';
import 'dotenv/config';
import fs from 'fs';
import path from 'path';

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.commands = new Collection();

// Load commands
const foldersPath = path.join(process.cwd(), 'commands');
for (const folder of fs.readdirSync(foldersPath)) {
  const commandsPath = path.join(foldersPath, folder);
  for (const file of fs.readdirSync(commandsPath).filter(f => f.endsWith('.js'))) {
    const command = (await import(`./commands/${folder}/${file}`)).default;
    client.commands.set(command.data.name, command);
  }
}

client.once('ready', () => {
  console.log(`✅ NerdBot er logget ind som ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  try {
    await command.execute(interaction);
  } catch (err) {
    console.error(err);
    await interaction.reply({ content: 'Der gik noget galt 🧠', ephemeral: true });
  }
});

client.login(process.env.BOT_TOKEN);