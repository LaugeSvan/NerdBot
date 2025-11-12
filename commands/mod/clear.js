import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Sletter et antal beskeder')
    .addIntegerOption(opt =>
      opt.setName('antal').setDescription('Antal beskeder').setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
  async execute(interaction) {
    const amount = interaction.options.getInteger('antal');
    const channel = interaction.channel;
    await channel.bulkDelete(amount, true);
    await interaction.reply({ content: `🧹 Slettede ${amount} beskeder.`, ephemeral: true });
  }
};