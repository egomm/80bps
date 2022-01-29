# Please read
WARNING: This script was made in under a day and is scuffed - it should work if you manage to set it up correctly - also RGA's 80bps only works when the player has 220 speed or less

1. Download the recommended version of 1.8.9 forge at: https://files.minecraftforge.net/net/minecraftforge/forge/index_1.8.9.html
2. Once 1.8.9 forge is installed download these mods: 
- Supporter version of RoseGoldAddons ($1 USD): https://discord.com/invite/qol (must join the RoseGoldAddons discord server to receive your role so you can download the mod) https://sellix.io/product/61e8bf54dd6f6 (purchase the mod here) - message sincerity#0001 for support)
- JsMacros 1.6.2 for 1.8.9 (REQUIRED): https://www.curseforge.com/minecraft/mc-mods/jsmacros/files/3501267 (Please do not use version 1.6.3/1.6.4 or newer because the script will not work - JsMacros discord server: https://discord.gg/NcfnTJkxwt - you don't need to join but just incase you are paranoid that it is a rat for some reason - the script WILL NOT work without this mod)
- Schematica for 1.8.9 (necessary if you are building the farm): https://www.curseforge.com/minecraft/mc-mods/schematica/files/2279147
- Lunatrius Core for 1.8.9 (required if you are running schematica): https://www.curseforge.com/minecraft/mc-mods/lunatriuscore/files/2272942
- Optifine for 1.8.9 (not required at all but it's nice for fps boost etc): https://optifine.net/adloadx?f=OptiFine_1.8.9_HD_U_M5.jar&x=cbfd
- Patcher for 1.8.9 (not required at all but it's nice to have): https://static.sk1er.club/repo/mods/patcher/1.8.0/1.8.9/Patcher-1.8.0%20(1.8.9).jar
- You can also use any other 1.8.9 mods with this mod 
4. Go into your .minecraft folder by typing in search %appdata% then go to .minecraft, then go to your mods folder, once you have opened your mods folder, drag all the mods you have just downloaded into there
5. Now launch 1.8.9 forge, once launched you may close it again
6. Next scroll up in the GitHub respiratory and click on Code ![image](https://user-images.githubusercontent.com/96357544/151512271-9e47197f-a85c-43b3-a2f9-71e3603b5e71.png) a Download ZIP option should appear, press this button and wait until the ZIP has downloaded
7. Once the ZIP has downloaded open the ZIP, in the ZIP you will find a folder called jsMacros, open your .minecraft folder again using the aforementioned instructions, and then open the folder called config, once the config folder is open drag the jsMacros folder into the config folder
8. If you are not using schematica skip this step, else drag the schematicas folder directly into your .minecraft folder
9. Once all the mods are installed, and all the macros are installed into the config folder, launch minecraft 1.8.9 forge for a second time 
10. Once minecraft is launched you can log onto hypixel - due to the script being shit (as it was only made for testing purposes and was intended to be private) the lobby failsafe will only run if you have full hype or unclaimed leveling rewards, although the skyblock failsafe will run no matter what
11. If you want to disable the failsafe press k to open the JsMacros settings then at the top left press Events ![image](https://user-images.githubusercontent.com/96357544/151514172-2686a113-4646-40a6-97c9-834c31ed88e9.png), then press the Enabled button next to all events until they all become disabled - should look like this ![image](https://user-images.githubusercontent.com/96357544/151514315-f7a600ee-e144-47e9-9147-a18119c7cd0c.png)
12. If you are not using schematica skip to step 14, go to your skyblock island and press escape then go into controls, once in controls scroll down to schematica and bind a control for Load schematic (should be the first one under the sub category schematica), then press escape and press the keybind, now you should be in a menu which says Select schematic file at the top ![2022-01-28_21 42 44](https://user-images.githubusercontent.com/96357544/151515086-820a0834-b841-4327-89dd-0c20a9fb8e86.png) - now click on the schematic labelled as 80bps and press done
13. Now the schematic should be loaded, open your controls again and bind a key to Manipulate schematic (should be second down), now press escape and press this keybind and move the schematic to X: -80 Y: any value greater than 1, Z: -80 ![image](https://user-images.githubusercontent.com/96357544/151516746-73f3ba12-7ea1-41cd-b9c7-5581f7fcb85b.png)
- make sure printer is off otherwise you will be banned, now just build the farm manually with a builders wand, infinite dirt wand, magical water bucket, and sugar cane
14. Once on your island press J to start the macro (will only work if you're holding a variant of a diamond hoe eg. sugar cane hoe, regular diamond hoe, NOT A ROOKIE HOE
15. To stop the current macro switch your hotbar slot to an EMPTY slot and the script will stop within 100ms
16. If you are trying to run multiple installations of this then use MultiMc https://multimc.org/
17. Now everything should be setup, if you have any more questions surrounding the macro msg egom#0555 on discord

# Extra info
- The number being logged in chat is the amount of rows the player has completed - if people actually download this then ill make it look nice + do actual changes to this mod so that it functions better but right now i really dont care and this feature is not toggleable at the moment 
- If you are wondering why the code is shit its because this code was rushed within a day for a funny test hence the code being formatted horribily and written very very badly (but it works and that's all that matters to me atm)
- If you get stuck in a block just swap from a diamond hoe to a empty hotbar slot and then swap back to a diamond hoe and press J to start the script

# Patch notes
- v1.0.0 (January 28th 2022) Initial release
- v1.0.1 (January 28th 2022) Fixed schematic
- v1.0.2 (January 28th 2022) Added failsafes for being warped to the hub and being warped to the prototype/main lobby
- v1.0.3 (January 28th 2022) Added anti stuck
- v1.0.4 (January 29th 2022) Fixed the last layer of the farm (redid the schematic so the script can function with it) + added better logging for which row the player is on
