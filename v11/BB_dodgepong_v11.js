// Run this as a script macro in a world to set up the barbrawl defaults for that world, reset all actors' bars to that and set all places tokens to the new bars.
const mechBars = {
  bar1: {
    id: "bar1",
    attribute: "hp",
    ignoreMin: true,
    ignoreMax: false,
    mincolor: "#FF0000",
    maxcolor: "#80FF00",
    position: "bottom-inner",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    indentLeft: 30,
    indentRight: null,
    shareHeight: true,
    label: "HP",
    style: "fraction",
  },

  structure: {
    id: "structure",
    attribute: "structure",
    mincolor: "#1F9EFF",
    maxcolor: "#1F9EFF",
    position: "bottom-inner",
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
    attribute: "stress",
    mincolor: "#FF7B00",
    maxcolor: "#FF7B00",
    position: "bottom-outer",
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
    attribute: "heat",
    ignoreMax: true,
    ignoreMin: false,
    mincolor: "#700000",
    maxcolor: "#ff0000",
    position: "bottom-outer",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    indentLeft: 30,
    indentRight: 0,
    shareHeight: true,
    label: "Heat",
    style: "fraction",
  },
  burn: {
    id: "burn",
    attribute: "burn",
    ignoreMax: true,
    ignoreMin: false,
    style: "none",
    hideCombat: true,
    hideNoCombat: true,
    mincolor: "#992222",
    maxcolor: "#992222",
    position: "top-outer",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS
  },
  overshield: {
    id: "overshield",
    attribute: "overshield.value",
    ignoreMax: true,
    ignoreMin: false,
    style: "none",
    hideCombat: true,
    hideNoCombat: true,
    mincolor: "#222299",
    maxcolor: "#222299",
    position: "top-outer",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS
  },
};

const npcBars = {
  bar1: {
    id: "bar1",
    attribute: "hp",
    ignoreMin: true,
    ignoreMax: false,
    mincolor: "#FF0000",
    maxcolor: "#80FF00",
    position: "bottom-inner",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.NONE,
    indentLeft: 30,
    indentRight: null,
    shareHeight: true,
    label: "HP",
    style: "fraction",
  },
  structure: {
    id: "structure",
    attribute: "structure",
    mincolor: "#1F9EFF",
    maxcolor: "#1F9EFF",
    position: "bottom-inner",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.NONE,
    indentLeft: null,
    indentRight: 70,
    shareHeight: true,
    subdivisions: 4,
    subdivisionsMatchesMax: true,
    subdivisionsOwner: true,
  },
  stress: {
    id: "stress",
    attribute: "stress",
    mincolor: "#FF7B00",
    maxcolor: "#FF7B00",
    position: "bottom-outer",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.NONE,
    indentLeft: null,
    indentRight: 70,
    shareHeight: true,
    subdivisions: 4,
    subdivisionsMatchesMax: true,
    subdivisionsOwner: true,
  },
  bar2: {
    id: "bar2",
    attribute: "heat",
    ignoreMax: true,
    ignoreMin: false,
    mincolor: "#700000",
    maxcolor: "#ff0000",
    position: "bottom-outer",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.NONE,
    indentLeft: 30,
    indentRight: 0,
    shareHeight: true,
    label: "Heat",
    style: "fraction",
  },
  burn: {
    id: "burn",
    attribute: "burn",
    ignoreMax: true,
    ignoreMin: false,
    style: "none",
    hideCombat: true,
    hideNoCombat: true,
    mincolor: "#992222",
    maxcolor: "#992222",
    position: "top-outer",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.OWNER
  },
  overshield: {
    id: "overshield",
    attribute: "overshield.value",
    ignoreMax: true,
    ignoreMin: false,
    style: "none",
    hideCombat: true,
    hideNoCombat: true,
    mincolor: "#222299",
    maxcolor: "#222299",
    position: "top-outer",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.OWNER
  },
};

const pilotBars = {
  bar1: {
    id: "bar1",
    attribute: "hp",
    ignoreMin: true,
    ignoreMax: false,
    mincolor: "#FF0000",
    maxcolor: "#80FF00",
    position: "bottom-inner",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    indentLeft: null,
    indentRight: null,
    shareHeight: true,
    label: "HP",
    style: "fraction",
  },
  overshield: {
    id: "overshield",
    attribute: "overshield.value",
    mincolor: "#222299",
    maxcolor: "#222299",
    position: "top-outer",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS
  },
};

const deployableBars = {
  bar1: {
    id: "bar1",
    attribute: "hp",
    ignoreMin: true,
    ignoreMax: false,
    mincolor: "#FF0000",
    maxcolor: "#80FF00",
    position: "bottom-inner",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    indentLeft: null,
    indentRight: null,
    shareHeight: true,
    label: "HP",
    style: "fraction",
  },
  bar2: {
    id: "bar2",
    attribute: "heat",
    ignoreMax: true,
    ignoreMin: false,
    mincolor: "#700000",
    maxcolor: "#ff0000",
    position: "bottom-outer",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    indentLeft: null,
    indentRight: null,
    shareHeight: true,
    label: "Heat",
    style: "fraction",
  },
  burn: {
    id: "burn",
    attribute: "burn",
    style: "none",
    hideCombat: true,
    hideNoCombat: true,
    mincolor: "#992222",
    maxcolor: "#992222",
    position: "top-outer",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.OWNER
  },
  overshield: {
    id: "overshield",
    attribute: "overshield.value",
    style: "none",
    hideCombat: true,
    hideNoCombat: true,
    mincolor: "#222299",
    maxcolor: "#222299",
    position: "top-outer",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.OWNER
  },
};

const barConfig = game.settings.get("barbrawl", "defaultTypeResources") ?? {};
barConfig['mech'] = mechBars;
barConfig['npc'] = npcBars;
barConfig['pilot'] = pilotBars;
barConfig['deployable'] = deployableBars;

await game.settings.set("barbrawl", "defaultTypeResources", barConfig);

// Reset the bars on all existing actor Prototype Tokens
await Promise.all(
  game.actors.map(a => {
    let barSettings = mechBars;
    switch (a.type) {
      case 'npc':
        barSettings = npcBars;
        break;
      case 'pilot':
        barSettings = pilotBars;
        break;
      case 'deployable':
        barSettings = deployableBars;
        break;

      default:
        break;
    }
    a.update({ "prototypeToken.flags.barbrawl.resourceBars": barSettings }, {'diff': false, 'recursive': false})
  })
);

// Reset the bars on all existing tokens
await Promise.all(
  game.scenes.map(s => {
    const updates = s.tokens.filter(t => t.actor).map(t => {
      let barSettings = mechBars;
      switch (t.actor.type) {
        case 'npc':
          barSettings = npcBars;
          break;
        case 'pilot':
          barSettings = pilotBars;
          break;
        case 'deployable':
          barSettings = deployableBars;
          break;

        default:
          break;
      }
      return {
        _id: t.id,
        "flags.barbrawl.resourceBars": barSettings,
      };
    });
    return s.updateEmbeddedDocuments("Token", updates, {'diff': false, 'recursive': false});
  })
);

ui.notifications.info("Done");
// vim:ft=javascript: