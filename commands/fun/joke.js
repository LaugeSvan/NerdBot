import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('joke')
    .setDescription('Fortæller en dum nørdet joke'),
  async execute(interaction) {
    const jokes = [
      'Hvorfor kan programmører ikke lide naturen? Der er for mange bugs.',
      'Der er 10 slags mennesker: dem der forstår binært, og dem der ikke gør.',
      'Jeg ville fortælle en UDP-joke, men du får den måske ikke.'
    ];
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    await interaction.reply(joke);
  }
};