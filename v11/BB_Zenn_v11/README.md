DISCLAIMER
This configuration uses custom assets for all player Mech and NPC stat bars.  
The included macro assumes that all the assets will be in ``Data/assets/bars`` If you place the assets somewhere else, the configuration will not render.
If you would like to place the assets somewhere else, you'll need to adjust the ``fgImage`` and ``bgImage`` properties in the included macro.

INSTALL STEPS

1. Save the .svg files to your ``Data/assets/bars`` folder
2. Open ``ZennBarBrawlConfigV11.js`` and copy the contents. 
3. Paste them to a new macro in Foundry, make sure to select ``Script`` from the Type dropdown.
4. Save and Execute the macro. 

NOTES
o It will take some time for the macro to run. More time if there are more actors in the world. 
o It will update actors as well as tokens in scenes, but not tokens or actors stored in compendiums.
o It currently returns a bunch of errors to the console when running. I'm not sure why, but it updates all the bars you'd expect.