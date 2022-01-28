var held = Player.getPlayer().getMainHand().getItemID()
while (held == "minecraft:diamond_hoe") {
    var PlayerXPos = Player.getPlayer().getX()
    var firstroundPlayerXPos = PlayerXPos.toFixed(0)
    var PlayerYPos = Player.getPlayer().getY()
    var firstroundPlayerYPos = PlayerYPos.toFixed(0)
    var PlayerZPos = Player.getPlayer().getZ()
    var firstroundPlayerZPos = PlayerZPos.toFixed(0)
    var held = Player.getPlayer().getMainHand().getItemID()
    Time.sleep(1000)
    var PlayerXPos = Player.getPlayer().getX()
    var secondroundPlayerXPos = PlayerXPos.toFixed(0)
    var PlayerYPos = Player.getPlayer().getY()
    var secondroundPlayerYPos = PlayerYPos.toFixed(0)
    var PlayerZPos = Player.getPlayer().getZ()
    var secondroundPlayerZPos = PlayerZPos.toFixed(0)
    var held = Player.getPlayer().getMainHand().getItemID()
    if (firstroundPlayerXPos == secondroundPlayerXPos && firstroundPlayerYPos == secondroundPlayerYPos && firstroundPlayerZPos == secondroundPlayerZPos) {
        Chat.say("/l")
    }
}
