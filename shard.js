const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./index.js', {
 token:    "NzYyMTU2Nzc1NzE2OTQ1OTgz.X3lDzw.wLMN4DZACYJrl9Bbzer7o6bkAmY",
 totalShards: 'auto',
 execArgv: ['--trace-warnings'],
 shardArgs: ['--ansi', '--color'],
 shardList: 'auto',
 mode: 'process',
 respawn: true,
});

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn(20)