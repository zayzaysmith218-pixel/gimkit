def on_mob_killed_chicken():
    pass
mobs.on_mob_killed(CHICKEN, on_mob_killed_chicken)

def on_on_chat():
    pass
player.on_chat("run", on_on_chat)

def on_item_interacted_diamond():
    gameplay.set_game_mode(CREATIVE, mobs.target(NEAREST_PLAYER))
player.on_item_interacted(DIAMOND, on_item_interacted_diamond)

blocks.place(GRASS, pos(0, 0, 0))