mobs.onMobKilled(CHICKEN, function () {
    blocks.print(
    "HELLO",
    GRASS,
    pos(0, 0, 0),
    WEST
    )
})
player.onDied(function () {
    player.say(":)")
})
blocks.onBlockBroken(GRASS, function () {
    mobs.spawn(mobs.monster(ZOMBIE), pos(0, 0, 0))
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(NEAREST_PLAYER)
    )
})
player.onChat("jump", function () {
    player.say(player.name())
})
blocks.onBlockPlaced(IRON_BLOCK, function () {
    agent.teleportToPlayer()
})
player.onItemInteracted(DIAMOND, function () {
    gameplay.setGameMode(
    CREATIVE,
    mobs.target(NEAREST_PLAYER)
    )
})
blocks.place(GRASS, pos(0, 0, 0))
player.teleport(pos(0, 0, 0))
