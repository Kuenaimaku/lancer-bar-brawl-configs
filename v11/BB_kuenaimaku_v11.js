const bars = {
  bar1: {
    id: "bar1",
    ignoreMin: true,
    ignoreMax: false,
    mincolor: "#FF0000",
    maxcolor: "#80FF00",
    position: "bottom-inner",
    attribute: "hp",
    indentLeft: 30,
    indentRight: null,
    shareHeight: true,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.HOVER,
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.INHERIT,
    gmVisibility: CONST.TOKEN_DISPLAY_MODES.INHERIT,
    style: "fraction",
    label: "",
    invert: false,
    subdivisions: null,
    subdivisionsOwner: false,
    fgImage: "",
    bgImage: "",
    opacity: null,
    max: null
  },
  structure: {
    id: "structure",
    attribute: "structure",
    mincolor: "#1F9EFF",
    maxcolor: "#1F9EFF",
    position: "bottom-inner",
    indentLeft: null,
    indentRight: 70,
    shareHeight: true,
    subdivisions: 4,
    subdivisionsOwner: true,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.HOVER,
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.INHERIT
  },
  stress: {
    id: "stress",
    mincolor: "#FF7B00",
    maxcolor: "#FF7B00",
    position: "bottom-outer",
    attribute: "stress",
    indentLeft: null,
    indentRight: 70,
    shareHeight: true,
    subdivisions: 4,
    subdivisionsOwner: true,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.HOVER,
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.INHERIT
  },
  bar2: {
    id: "bar2",
    ignoreMax: true,
    ignoreMin: false,
    mincolor: "#700000",
    maxcolor: "#ff0000",
    position: "bottom-outer",
    attribute: "heat",
    indentLeft: 30,
    indentRight: 0,
    shareHeight: true,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.HOVER,
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.INHERIT,
    gmVisibility: CONST.TOKEN_DISPLAY_MODES.INHERIT,
    style: "fraction",
    label: "",
    invert: false,
    subdivisions: null,
    subdivisionsOwner: false,
    fgImage: "",
    bgImage: "",
  },
  burn: {
    id: "burn",
    mincolor: "#992222",
    maxcolor: "#992222",
    position: "top-outer",
    attribute: "burn",
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.INHERIT
  },
  overshield: {
    id: "overshield",
    mincolor: "#222299",
    maxcolor: "#222299",
    position: "top-outer",
    attribute: "overshield.value",
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.INHERIT
  }
};

const barConfig = game.settings.get("barbrawl", "defaultTypeResources") ?? {};
barConfig['mech'] = bars;
barConfig['npc'] = bars;
barConfig['pilot'] = bars;
barConfig['deployable'] = bars;

await game.settings.set("barbrawl", "defaultTypeResources", bars);

// :warning: Reset all actors' prototype token bars
await Promise.all(game.actors.map(a => {
  // Get existing flags to preserve them
  const existingFlags = a.flags || {};
  return a.update({
    "flags.barbrawl.resourceBars": bars,
    flags: {
      ...existingFlags, // Merge existing flags
      barbrawl: {
        ...existingFlags.barbrawl,
        resourceBars: bars
      }
    }
  }, { 'diff': false, 'recursive': false });
}));

// Reset the bars on all existing tokens
await Promise.all(
  game.scenes.map(s => {
    const updates = s.tokens.filter(t => t.actor).map(t => {
      return {
        _id: t.id,
        "flags.barbrawl.resourceBars": bars,
        flags: {
          ...t.flags, // Preserve existing token flags
          barbrawl: {
            ...t.flags?.barbrawl,
            resourceBars: bars
          }
        }
      };
    });
    return s.updateEmbeddedDocuments("Token", updates, { 'diff': false, 'recursive': false });
  })
);

ui.notifications.info("Done");