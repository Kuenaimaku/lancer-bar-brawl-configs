// the bars we're going to change
let barId = "unownedHeat";
let barId2 = "unownedHp";

// update them to be visible to players
token.document.update({ [`flags.barbrawl.resourceBars.${barId}.style`]: "fraction" });
token.document.update({ [`flags.barbrawl.resourceBars.${barId2}.style`]: "fraction" });