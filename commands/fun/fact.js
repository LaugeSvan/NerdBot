import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('fact')
    .setDescription('Giver et tilfældigt nørdfact'),
  async execute(interaction) {
    const facts = [
      'NASA’s første computer var på størrelse med et rumskib – nu har du mere kraft i din lomme.',
      'Den første copmutermus blev opfundet i 1964 og var lavet af træ.',
      'Python er opkaldt efter Monty Python, ikke slangen.'
    ];
    const fact = facts[Math.floor(Math.random() * facts.length)];
    await interaction.reply(fact);
  }
};