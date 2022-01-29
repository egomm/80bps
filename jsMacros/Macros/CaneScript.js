i = 0
JsMacros.runScript("Stuck.js")
var held = Player.getPlayer().getMainHand().getItemID()
var PlayerXPos = Player.getPlayer().getX()
var roundPlayerXPos = PlayerXPos.toFixed(1)
var PlayerZPos = Player.getPlayer().getZ()
var roundPlayerZPos = Math.floor(PlayerZPos)
while (held == "minecraft:diamond_hoe") {
    var held = Player.getPlayer().getMainHand().getItemID()
    var PlayerXPos = Player.getPlayer().getX()
    var roundPlayerXPos = PlayerXPos.toFixed(1)
    var PlayerZPos = Player.getPlayer().getZ()
    var roundPlayerZPos = Math.floor(PlayerZPos)
    leftdirt = false
    rightdirt = false
    leftnotdirt = false
    rightnotdirt = false
    evenlayer = false
    oddlayer = false
    var PlayerXPos = Player.getPlayer().getX()
    var roundPlayerXPos = PlayerXPos.toFixed(1)
    var floorPlayerXPos = Math.floor(PlayerXPos)
    var PlayerYPos = Player.getPlayer().getY()
    var roundPlayerYPos = PlayerYPos.toFixed(0)
    var PlayerZPos = Player.getPlayer().getZ()
    var roundPlayerZPos = Math.floor(PlayerZPos)
    var newYPos = roundPlayerYPos-1
    if (floorPlayerXPos == -79 && roundPlayerZPos == 79) {
    var endportal = World.getBlock(floorPlayerXPos, newYPos, roundPlayerZPos).getName()
    if (endportal == "End Portal") {
        oddlayer = true
    }
    }
    if (roundPlayerXPos > 0.0 && roundPlayerZPos > 0) {
    var rightblock = World.getBlock(79, newYPos, 79).getName()
        if (rightblock == "Dirt") {
            rightdirt = true 
        } else {
            rightnotdirt = true
        }
    }
    if (roundPlayerXPos > 0.0 && roundPlayerZPos < 0) {
    var rightblock = World.getBlock(79, newYPos, -79).getName()
        if (rightblock == "Dirt") {
            rightdirt = true 
        } else {
            rightnotdirt = true
        }
    }
    if (roundPlayerXPos < 0.0 && roundPlayerZPos > 0) {
    var leftblock = World.getBlock(-79, newYPos, 79).getName()
        if (leftblock == "Dirt") {
            leftdirt = true 
        } else {
            leftnotdirt = true
        }
    }
    if (roundPlayerXPos < 0.0 && roundPlayerZPos < 0) {
    var leftblock = World.getBlock(-79, newYPos, -79).getName()
        if (leftblock == "Dirt") {
            leftdirt = true 
        } else {
            leftnotdirt = true
        }
    }
    if (leftdirt == true) {
        oddlayer = true
    } else if (rightdirt == true) {
        evenlayer = true
    } else if (leftnotdirt) {
        evenlayer = true
    } else if (rightnotdirt) {
        oddlayer = true
    }
    var PlayerZPos = Player.getPlayer().getZ()
    var roundPlayerZPos = Math.floor(PlayerZPos)
    if (roundPlayerZPos == 79 && oddlayer == true) {
        var PlayerXPos = Player.getPlayer().getX()
        var roundPlayerXPos = PlayerXPos.toFixed(1)
        var nextrow = parseFloat(roundPlayerXPos, 10)
        var coordsnextrow = -74.7
        var PlayerXPos = Player.getPlayer().getX()
        var roundPlayerXPos = PlayerXPos.toFixed(1)
        while (roundPlayerXPos < coordsnextrow) {
            const inp = Player.createPlayerInput(1, -1, 260, 0, false, false, true);
            Player.addInput(inp)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = PlayerZPos.toFixed(0)
            Time.sleep(50)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = PlayerZPos.toFixed(0)
        }
        Chat.say("/setspawn")
    } else if (roundPlayerZPos == -79 && oddlayer == true) {
        var PlayerXPos = Player.getPlayer().getX()
        var roundPlayerXPos = PlayerXPos.toFixed(1)
        var nextrow = parseFloat(roundPlayerXPos, 10)
        var coordsnextrow = -74.4
        var PlayerXPos = Player.getPlayer().getX()
        var roundPlayerXPos = PlayerXPos.toFixed(1)
        while (roundPlayerXPos < coordsnextrow) {
            const inp = Player.createPlayerInput(1, 1, 310, 0, false, false, true);
            Player.addInput(inp)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = PlayerZPos.toFixed(0)
            Time.sleep(50)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = PlayerZPos.toFixed(0)
        }
        Chat.say("/setspawn")
        while (roundPlayerZPos != 79 && PlayerXPos < 78.000) {
            const inp = Player.createPlayerInput(1, 1, 40, 0, false, false, true);
            Player.addInput(inp)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
            Time.sleep(50)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
        }
        var PlayerXPos = Player.getPlayer().getX()
        var roundPlayerXPos = PlayerXPos.toFixed(1)
        var nextrow = parseFloat(roundPlayerXPos, 10)
        var PlayerXPos = Player.getPlayer().getX()
        var roundPlayerXPos = PlayerXPos.toFixed(1)
        var coordsnextrow = nextrow+7.6
        i = i + 1
        Chat.log(`Rows farmed: ${i}`)
        while (roundPlayerXPos < coordsnextrow && PlayerXPos < 78.000) {
            const inp = Player.createPlayerInput(1, -1, 260, 0, false, false, true);
            Player.addInput(inp)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
            Time.sleep(50)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
        }
        Chat.say("/setspawn")
    }
    var PlayerXPos = Player.getPlayer().getX()
    var roundPlayerXPos = PlayerXPos.toFixed(1)
    var floorPlayerXPos = Math.floor(PlayerXPos)
    var PlayerYPos = Player.getPlayer().getY()
    var roundPlayerYPos = PlayerYPos.toFixed(0)
    var PlayerZPos = Player.getPlayer().getZ()
    var roundPlayerZPos = Math.floor(PlayerZPos)
    if (roundPlayerZPos == 79 && evenlayer == true) {
        while (roundPlayerXPos > 76.5) {
            const inp = Player.createPlayerInput(1, 1, 130, 0, false, false, true);
            Player.addInput(inp)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
            Time.sleep(50)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
        }
    }
    if (roundPlayerZPos == -79 && evenlayer == true) {
        while (roundPlayerXPos > 76.7) {
            const inp = Player.createPlayerInput(1, -1, 50, 0, false, false, true);
            Player.addInput(inp)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
            Time.sleep(50)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
        }
            while (roundPlayerZPos != 79 && PlayerXPos > -78.000) {
            const inp = Player.createPlayerInput(1, 1, 40, 0, false, false, true);
            Player.addInput(inp)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
            Time.sleep(50)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
        }
        var PlayerXPos = Player.getPlayer().getX()
        var roundPlayerXPos = PlayerXPos.toFixed(1)
        var nextrow = parseFloat(roundPlayerXPos, 10)
        var PlayerXPos = Player.getPlayer().getX()
        var roundPlayerXPos = PlayerXPos.toFixed(1)
        var coordsnextrow = nextrow-9.3
        i = i + 1
        Chat.log(`Rows farmed: ${i}`)
        var held = Player.getPlayer().getMainHand().getItemID()
        while (roundPlayerXPos > coordsnextrow && PlayerXPos > -78.000) {
            const inp = Player.createPlayerInput(1, 1, 130, 0, false, false, true);
            Player.addInput(inp)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
            Time.sleep(50)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
        }
        Chat.say("/setspawn")
    }
    leftdirt = false
    rightdirt = false
    leftnotdirt = false
    rightnotdirt = false
    evenlayer = false
    oddlayer = false
    var PlayerXPos = Player.getPlayer().getX()
    var roundPlayerXPos = PlayerXPos.toFixed(1)
    var floorPlayerXPos = Math.floor(PlayerXPos)
    var PlayerYPos = Player.getPlayer().getY()
    var roundPlayerYPos = PlayerYPos.toFixed(0)
    var PlayerZPos = Player.getPlayer().getZ()
    var roundPlayerZPos = Math.floor(PlayerZPos)
    var newYPos = roundPlayerYPos-1
    if (floorPlayerXPos == -79 && roundPlayerZPos == 79) {
    var endportal = World.getBlock(floorPlayerXPos, newYPos, roundPlayerZPos).getName()
    if (endportal == "End Portal") {
        oddlayer = true
    }
    }
    if (roundPlayerXPos > 0.0 && roundPlayerZPos > 0) {
    var rightblock = World.getBlock(79, newYPos, 79).getName()
        if (rightblock == "Dirt") {
            rightdirt = true 
        } else if (rightblock != "End Portal") {
            rightnotdirt = true
        }
    }
    if (roundPlayerXPos > 0.0 && roundPlayerZPos < 0) {
    var rightblock = World.getBlock(79, newYPos, -79).getName()
        if (rightblock == "Dirt") {
            rightdirt = true 
        } else if (rightblock != "End Portal") {
            rightnotdirt = true
        }
    }
    if (roundPlayerXPos < 0.0 && roundPlayerZPos > 0) {
    var leftblock = World.getBlock(-79, newYPos, 79).getName()
        if (leftblock == "Dirt") {
            leftdirt = true 
        } else if (leftblock != "End Portal") {
            leftnotdirt = true
        }
    }
    if (roundPlayerXPos < 0.0 && roundPlayerZPos < 0) {
    var leftblock = World.getBlock(-79, newYPos, -79).getName()
        if (leftblock == "Dirt") {
            leftdirt = true 
        } else if (leftblock != "End Portal") {
            leftnotdirt = true
        }
    }
    if (leftdirt == true) {
        oddlayer = true
    } else if (rightdirt == true) {
        evenlayer = true
    } else if (leftnotdirt) {
        evenlayer = true
    } else if (rightnotdirt) {
        oddlayer = true
    }
    if (oddlayer == true) {
        while (held == "minecraft:diamond_hoe" && PlayerXPos < 78.000) {
            // walk down first row
            while (roundPlayerZPos != -79 && PlayerXPos < 78.000) {
                const inp = Player.createPlayerInput(1, 1, 220, 0, false, false, true);
                Player.addInput(inp)
                var held = Player.getPlayer().getMainHand().getItemID()
                var PlayerXPos = Player.getPlayer().getX()
                var roundPlayerXPos = PlayerXPos.toFixed(1)
                var PlayerZPos = Player.getPlayer().getZ()
                var roundPlayerZPos = Math.floor(PlayerZPos)
                Time.sleep(50)
                var held = Player.getPlayer().getMainHand().getItemID()
                var PlayerXPos = Player.getPlayer().getX()
                var roundPlayerXPos = PlayerXPos.toFixed(1)
                var PlayerZPos = Player.getPlayer().getZ()
                var roundPlayerZPos = Math.floor(PlayerZPos)
            }
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var nextrow = parseFloat(roundPlayerXPos, 10)
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var coordsnextrow = nextrow+9.3
            i = i + 1
            Chat.log(`Rows farmed: ${i}`)
                    // transition to next row
            while (roundPlayerXPos < coordsnextrow && PlayerXPos < 78.000) {
                const inp = Player.createPlayerInput(1, 1, 310, 0, false, false, true);
                Player.addInput(inp)
                var held = Player.getPlayer().getMainHand().getItemID()
                var PlayerXPos = Player.getPlayer().getX()
                var roundPlayerXPos = PlayerXPos.toFixed(1)
                var PlayerZPos = Player.getPlayer().getZ()
                var roundPlayerZPos = Math.floor(PlayerZPos)
                Time.sleep(50)
                var held = Player.getPlayer().getMainHand().getItemID()
                var PlayerXPos = Player.getPlayer().getX()
                var roundPlayerXPos = PlayerXPos.toFixed(1)
                var PlayerZPos = Player.getPlayer().getZ()
                var roundPlayerZPos = Math.floor(PlayerZPos)
            }
            Chat.say("/setspawn")
                // walk down second row
            while (roundPlayerZPos != 79 && PlayerXPos < 78.000) {
                const inp = Player.createPlayerInput(1, 1, 40, 0, false, false, true);
                Player.addInput(inp)
                var held = Player.getPlayer().getMainHand().getItemID()
                var PlayerXPos = Player.getPlayer().getX()
                var roundPlayerXPos = PlayerXPos.toFixed(1)
                var PlayerZPos = Player.getPlayer().getZ()
                var roundPlayerZPos = Math.floor(PlayerZPos)
                Time.sleep(50)
                var held = Player.getPlayer().getMainHand().getItemID()
                var PlayerXPos = Player.getPlayer().getX()
                var roundPlayerXPos = PlayerXPos.toFixed(1)
                var PlayerZPos = Player.getPlayer().getZ()
                var roundPlayerZPos = Math.floor(PlayerZPos)
            }
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var nextrow = parseFloat(roundPlayerXPos, 10)
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var coordsnextrow = nextrow+7.6
            i = i + 1
            Chat.log(`Rows farmed: ${i}`)
            // transition to next row
                while (roundPlayerXPos < coordsnextrow && PlayerXPos < 78.000) {
                const inp = Player.createPlayerInput(1, -1, 260, 0, false, false, true);
                Player.addInput(inp)
                var held = Player.getPlayer().getMainHand().getItemID()
                var PlayerXPos = Player.getPlayer().getX()
                var roundPlayerXPos = PlayerXPos.toFixed(1)
                var PlayerZPos = Player.getPlayer().getZ()
                var roundPlayerZPos = Math.floor(PlayerZPos)
                Time.sleep(50)
                var held = Player.getPlayer().getMainHand().getItemID()
                var PlayerXPos = Player.getPlayer().getX()
                var roundPlayerXPos = PlayerXPos.toFixed(1)
                var PlayerZPos = Player.getPlayer().getZ()
                var roundPlayerZPos = Math.floor(PlayerZPos)
                }
                Chat.say("/setspawn")
            }
    }
    if (evenlayer == true) {
        var PlayerXPos = Player.getPlayer().getX()
        var roundPlayerXPos = PlayerXPos.toFixed(1)
        var PlayerZPos = Player.getPlayer().getZ()
        var roundPlayerZPos = Math.floor(PlayerZPos)
        var held = Player.getPlayer().getMainHand().getItemID()
        // first row
        while (held == "minecraft:diamond_hoe" && PlayerXPos > -78.000) {
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
            while (roundPlayerZPos != -79 && PlayerXPos > -78.000) {
                const inp = Player.createPlayerInput(1, 1, 220, 0, false, false, true);
                Player.addInput(inp)
                var held = Player.getPlayer().getMainHand().getItemID()
                var PlayerXPos = Player.getPlayer().getX()
                var roundPlayerXPos = PlayerXPos.toFixed(1)
                var PlayerZPos = Player.getPlayer().getZ()
                var roundPlayerZPos = Math.floor(PlayerZPos)
                Time.sleep(50)
                var held = Player.getPlayer().getMainHand().getItemID()
                var PlayerXPos = Player.getPlayer().getX()
                var roundPlayerXPos = PlayerXPos.toFixed(1)
                var PlayerZPos = Player.getPlayer().getZ()
                var roundPlayerZPos = Math.floor(PlayerZPos)
            }
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var nextrow = parseFloat(roundPlayerXPos, 10)
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var coordsnextrow = nextrow-7.6
            i = i + 1
            Chat.log(`Rows farmed: ${i}`)
            var held = Player.getPlayer().getMainHand().getItemID()
            // first transition
            while (roundPlayerXPos > coordsnextrow && PlayerXPos > -78.000) {
                const inp = Player.createPlayerInput(1, -1, 50, 0, false, false, true);
                Player.addInput(inp)
                var held = Player.getPlayer().getMainHand().getItemID()
                var PlayerXPos = Player.getPlayer().getX()
                var roundPlayerXPos = PlayerXPos.toFixed(1)
                var PlayerZPos = Player.getPlayer().getZ()
                var roundPlayerZPos = Math.floor(PlayerZPos)
                Time.sleep(50)
                var held = Player.getPlayer().getMainHand().getItemID()
                var PlayerXPos = Player.getPlayer().getX()
                var roundPlayerXPos = PlayerXPos.toFixed(1)
                var PlayerZPos = Player.getPlayer().getZ()
                var roundPlayerZPos = Math.floor(PlayerZPos)
            }
            Chat.say("/setspawn")
            // secondrow
            while (roundPlayerZPos != 79 && PlayerXPos > -78.000) {
                const inp = Player.createPlayerInput(1, 1, 40, 0, false, false, true);
                Player.addInput(inp)
                var held = Player.getPlayer().getMainHand().getItemID()
                var PlayerXPos = Player.getPlayer().getX()
                var roundPlayerXPos = PlayerXPos.toFixed(1)
                var PlayerZPos = Player.getPlayer().getZ()
                var roundPlayerZPos = Math.floor(PlayerZPos)
                Time.sleep(50)
                var held = Player.getPlayer().getMainHand().getItemID()
                var PlayerXPos = Player.getPlayer().getX()
                var roundPlayerXPos = PlayerXPos.toFixed(1)
                var PlayerZPos = Player.getPlayer().getZ()
                var roundPlayerZPos = Math.floor(PlayerZPos)
            }
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var nextrow = parseFloat(roundPlayerXPos, 10)
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var coordsnextrow = nextrow-9.3
            i = i + 1
            Chat.log(`Rows farmed: ${i}`)
            var held = Player.getPlayer().getMainHand().getItemID()
            // second transition
            while (roundPlayerXPos > coordsnextrow && PlayerXPos > -78.000) {
                const inp = Player.createPlayerInput(1, 1, 130, 0, false, false, true);
                Player.addInput(inp)
                var held = Player.getPlayer().getMainHand().getItemID()
                var PlayerXPos = Player.getPlayer().getX()
                var roundPlayerXPos = PlayerXPos.toFixed(1)
                var PlayerZPos = Player.getPlayer().getZ()
                var roundPlayerZPos = Math.floor(PlayerZPos)
                Time.sleep(50)
                var held = Player.getPlayer().getMainHand().getItemID()
                var PlayerXPos = Player.getPlayer().getX()
                var roundPlayerXPos = PlayerXPos.toFixed(1)
                var PlayerZPos = Player.getPlayer().getZ()
                var roundPlayerZPos = Math.floor(PlayerZPos)
            }
            Chat.say("/setspawn")
        }
    }
    var held = Player.getPlayer().getMainHand().getItemID()
    var PlayerXPos = Player.getPlayer().getX()
    var roundPlayerXPos = PlayerXPos.toFixed(1)
    var PlayerZPos = Player.getPlayer().getZ()
    var roundPlayerZPos = Math.floor(PlayerZPos)
    leftdirt = false
    rightdirt = false
    leftnotdirt = false
    rightnotdirt = false
    evenlayer = false
    oddlayer = false
    var PlayerXPos = Player.getPlayer().getX()
    var roundPlayerXPos = PlayerXPos.toFixed(1)
    var floorPlayerXPos = Math.floor(PlayerXPos)
    var PlayerYPos = Player.getPlayer().getY()
    var roundPlayerYPos = PlayerYPos.toFixed(0)
    var PlayerZPos = Player.getPlayer().getZ()
    var roundPlayerZPos = Math.floor(PlayerZPos)
    var newYPos = roundPlayerYPos-1
    if (floorPlayerXPos == -79 && roundPlayerZPos == 79) {
    var endportal = World.getBlock(floorPlayerXPos, newYPos, roundPlayerZPos).getName()
    if (endportal == "End Portal") {
        oddlayer = true
    }
    }
    if (roundPlayerXPos > 0.0 && roundPlayerZPos > 0) {
    var rightblock = World.getBlock(79, newYPos, 79).getName()
        if (rightblock == "Dirt") {
            rightdirt = true 
        } else if (rightblock != "End Portal") {
            rightnotdirt = true
        }
    }
    if (roundPlayerXPos > 0.0 && roundPlayerZPos < 0) {
    var rightblock = World.getBlock(79, newYPos, -79).getName()
        if (rightblock == "Dirt") {
            rightdirt = true 
        } else if (rightblock != "End Portal") {
            rightnotdirt = true
        }
    }
    if (roundPlayerXPos < 0.0 && roundPlayerZPos > 0) {
    var leftblock = World.getBlock(-79, newYPos, 79).getName()
        if (leftblock == "Dirt") {
            leftdirt = true 
        } else if (leftblock != "End Portal") {
            leftnotdirt = true
        }
    }
    if (roundPlayerXPos < 0.0 && roundPlayerZPos < 0) {
    var leftblock = World.getBlock(-79, newYPos, -79).getName()
        if (leftblock == "Dirt") {
            leftdirt = true 
        } else if (leftblock != "End Portal") {
            leftnotdirt = true
        }
    }
    if (leftdirt == true) {
        oddlayer = true
    } else if (rightdirt == true) {
        evenlayer = true
    } else if (leftnotdirt) {
        evenlayer = true
    } else if (rightnotdirt) {
        oddlayer = true
    }
    var PlayerYPos = Player.getPlayer().getY()
    var roundPlayerYPos = PlayerYPos.toFixed(0)
    var nextYPos = roundPlayerYPos-5
    var tpYPos = roundPlayerYPos+5
    var PlayerZPos = Player.getPlayer().getZ()
    var roundPlayerZPos = Math.floor(PlayerZPos)
    if (oddlayer == true && roundPlayerZPos == -79) {
        while (roundPlayerYPos != nextYPos && roundPlayerYPos < tpYPos) {
            const inp = Player.createPlayerInput(1, 1, 310, 0, false, false, true);
            Player.addInput(inp)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerYPos = Player.getPlayer().getY()
            var roundPlayerYPos = PlayerYPos.toFixed(0)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
            Time.sleep(50)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerYPos = Player.getPlayer().getY()
            var roundPlayerYPos = PlayerYPos.toFixed(0)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
        }
    } else if (evenlayer == true && roundPlayerZPos == -79) {
        while (roundPlayerYPos != nextYPos && roundPlayerYPos < tpYPos) {
            const inp = Player.createPlayerInput(1, -1, 50, 0, false, false, true);
            Player.addInput(inp)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerYPos = Player.getPlayer().getY()
            var roundPlayerYPos = PlayerYPos.toFixed(0)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
            Time.sleep(50)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerYPos = Player.getPlayer().getY()
            var roundPlayerYPos = PlayerYPos.toFixed(0)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
        }
    } else if (oddlayer == true && roundPlayerZPos == 79) {
        while (roundPlayerYPos != nextYPos && roundPlayerYPos < tpYPos) {
            const inp = Player.createPlayerInput(1, -1, 260, 0, false, false, true);
            Player.addInput(inp)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerYPos = Player.getPlayer().getY()
            var roundPlayerYPos = PlayerYPos.toFixed(0)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
            Time.sleep(50)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerYPos = Player.getPlayer().getY()
            var roundPlayerYPos = PlayerYPos.toFixed(0)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
        }
    } else if (evenlayer == true && roundPlayerZPos == 79) {
        while (roundPlayerYPos != nextYPos && roundPlayerYPos < tpYPos) {
            const inp = Player.createPlayerInput(1, 1, 130, 0, false, false, true);
            Player.addInput(inp)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerYPos = Player.getPlayer().getY()
            var roundPlayerYPos = PlayerYPos.toFixed(0)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
            Time.sleep(50)
            var held = Player.getPlayer().getMainHand().getItemID()
            var PlayerXPos = Player.getPlayer().getX()
            var roundPlayerXPos = PlayerXPos.toFixed(1)
            var PlayerYPos = Player.getPlayer().getY()
            var roundPlayerYPos = PlayerYPos.toFixed(0)
            var PlayerZPos = Player.getPlayer().getZ()
            var roundPlayerZPos = Math.floor(PlayerZPos)
        }
    }
}
