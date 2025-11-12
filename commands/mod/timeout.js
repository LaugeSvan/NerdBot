import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('timeout')
    .setDescription('Sætter en bruger i timeout')
    .addUserOption(opt => opt.setName('bruger').setDescription('Brugeren der skal timeoutes').setRequired(true))
    .addIntegerOption(opt => opt.setName('sekunder').setDescription('Varighed i sekunder').setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
  async execute(interaction) {
    const member = interaction.options.getMember('bruger');
    const seconds = interaction.options.getInteger('sekunder');
    await member.timeout(seconds * 1000, 'Timeout via NerdBot');
    await interaction.reply(`⏳ ${member.user.tag} er i timeout i ${seconds} sek.`);
  }
};