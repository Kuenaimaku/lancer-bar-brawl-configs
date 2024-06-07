// Run this as a script macro in a world to set up the barbrawl defaults for that world, reset all actors' bars to that and set all places tokens to the new bars.
const bars = {
  bar1: {
    id: "bar1",
    ignoreMin: true,
    ignoreMax: false,
    mincolor: "#FF0000",
    maxcolor: "#80FF00",
    position: "bottom-inner",
    attribute: "hp",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.OWNER,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.NONE,
    indentLeft: 30,
    indentRight: null,
    shareHeight: true,
  },

  structure: {
    id: "structure",
    attribute: "structure",
    mincolor: "#1F9EFF",
    maxcolor: "#1F9EFF",
    position: "bottom-inner",
    attribute: "structure",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    indentLeft: null,
    indentRight: 70,
    shareHeight: true,
    subdivisions: 4,
    subdivisionsMatchesMax: true,
    subdivisionsOwner: true,
  },
  stress: {
    id: "stress",
    mincolor: "#FF7B00",
    maxcolor: "#FF7B00",
    position: "bottom-outer",
    attribute: "stress",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    indentLeft: null,
    indentRight: 70,
    shareHeight: true,
    subdivisions: 4,
    subdivisionsMatchesMax: true,
    subdivisionsOwner: true,
  },
  bar2: {
    id: "bar2",
    ignoreMax: true,
    ignoreMin: false,
    mincolor: "#700000",
    maxcolor: "#ff0000",
    position: "bottom-outer",
    attribute: "heat",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.NONE,
    indentLeft: 30,
    indentRight: 0,
    shareHeight: true,
  },
  burn: {
    id: "burn",
    mincolor: "#992222",
    maxcolor: "#992222",
    position: "top-outer",
    attribute: "burn",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.NONE,
  },
  overshield: {
    id: "overshield",
    mincolor: "#222299",
    maxcolor: "#222299",
    position: "top-outer",
    attribute: "overshield.value",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.NONE,
  },
};


const barConfig = game.settings.get("barbrawl", "defaultTypeResources") ?? {};
barConfig['mech'] = bars;
barConfig['npc'] = bars;
barConfig['pilot'] = bars;
barConfig['deployable'] = bars;

await game.settings.set("barbrawl", "defaultTypeResources", bars);

// :warning: Reset all actors' prototype token bars
await Promise.all(game.actors.map(a => a.update({ "token.flags.barbrawl.-=resourceBars": null })));

// Reset the bars on all existing tokens
await Promise.all(
  game.scenes.map(s => {
    const updates = s.tokens.map(t => {
      return {
        _id: t.id,
        "flags.barbrawl.resourceBars": bars,
      };
    });
    return s.updateEmbeddedDocuments("Token", updates);
  })
);

ui.notifications.info("Done");