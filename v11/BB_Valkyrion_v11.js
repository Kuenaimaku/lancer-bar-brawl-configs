// Run this as a script macro in a world to set up the barbrawl defaults for that world, reset all actors' bars to that and set all places tokens to the new bars.
const mechBars = {
  bar1: {
    id: "bar1",
    ignoreMin: true,
    ignoreMax: false,
    mincolor: "#FF0000",
    maxcolor: "#80FF00",
    position: "bottom-inner",
    attribute: "hp",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    indentLeft: 30,
    indentRight: null,
    shareHeight: true,
    label: null,
    style: null
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
    invertDirection: true,
    subdivisions: 4,
    subdivisionsMatchesMax: true,
    subdivisionsOwner: true,
    label: null,
    style: null
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
    invertDirection: true,
    subdivisions: 4,
    subdivisionsMatchesMax: true,
    subdivisionsOwner: true,
    label: null,
    style: null
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
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    indentLeft: 30,
    indentRight: 0,
    shareHeight: true,
    label: null,
    style: null
  },
  burn: {
    id: "burn",
    mincolor: "#992222",
    maxcolor: "#992222",
    position: "top-outer",
    attribute: "burn",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
  },
  overshield: {
    id: "overshield",
    mincolor: "#222299",
    maxcolor: "#222299",
    position: "top-outer",
    attribute: "overshield.value",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
  },
};

const npcBars = {
  bar1: {
    id: "bar1",
    ignoreMin: true,
    ignoreMax: false,
    mincolor: "#FF0000",
    maxcolor: "#80FF00",
    position: "bottom-inner",
    attribute: "hp",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    indentLeft: 30,
    indentRight: null,
    shareHeight: true,
    subdivisions: 4,
    hideFull: true,
    label: null,
    style: "none"
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
    invertDirection: true,
    subdivisions: 4,
    subdivisionsMatchesMax: true,
    subdivisionsOwner: true,
    label: null,
    style: null
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
    invertDirection: true,
    subdivisions: 4,
    subdivisionsMatchesMax: true,
    subdivisionsOwner: true,
    label: null,
    style: null
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
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    indentLeft: 30,
    indentRight: 0,
    shareHeight: true,
    subdivisions: 4,
    hideEmpty: true,
    label: null,
    style: "none"
  },
  burn: {
    id: "burn",
    mincolor: "#992222",
    maxcolor: "#992222",
    position: "top-outer",
    attribute: "burn",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
  },
  overshield: {
    id: "overshield",
    mincolor: "#222299",
    maxcolor: "#222299",
    position: "top-outer",
    attribute: "overshield.value",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
  },
};

const pilotBars = {
  bar1: {
    id: "bar1",
    ignoreMin: true,
    ignoreMax: false,
    mincolor: "#FF0000",
    maxcolor: "#80FF00",
    position: "bottom-inner",
    attribute: "hp",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    label: null,
    style: null
  },
  burn: {
    id: "burn",
    mincolor: "#992222",
    maxcolor: "#992222",
    position: "top-outer",
    attribute: "burn",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
  },
  overshield: {
    id: "overshield",
    mincolor: "#222299",
    maxcolor: "#222299",
    position: "top-outer",
    attribute: "overshield.value",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
  },
};

const deployableBars = {
  bar1: {
    id: "bar1",
    ignoreMin: true,
    ignoreMax: false,
    mincolor: "#FF0000",
    maxcolor: "#80FF00",
    position: "bottom-inner",
    attribute: "hp",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    label: null,
    style: null
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
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    label: null,
    style: null
  },
  burn: {
    id: "burn",
    mincolor: "#992222",
    maxcolor: "#992222",
    position: "top-outer",
    attribute: "burn",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
  },
  overshield: {
    id: "overshield",
    mincolor: "#222299",
    maxcolor: "#222299",
    position: "top-outer",
    attribute: "overshield.value",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
  },
};

const barConfig = game.settings.get("barbrawl", "defaultTypeResources") ?? {};
barConfig['mech'] = mechBars;
barConfig['npc'] = npcBars;
barConfig['pilot'] = pilotBars;
barConfig['deployable'] = deployableBars;

await game.settings.set("barbrawl", "defaultTypeResources", barConfig);

// :warning: Reset all actors' prototype token bars
await Promise.all(game.actors.map(a => a.update({ "prototypeToken.flags.barbrawl.-=resourceBars": null })));

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
    a.update({ "prototypeToken.flags.barbrawl.resourceBars": barSettings })
  })
);

ui.notifications.info("PrototypeToken bar resources updated!");

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
    return s.updateEmbeddedDocuments("Token", updates);
  })
);

ui.notifications.info("Token bar resources updated!");