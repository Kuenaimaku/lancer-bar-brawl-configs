// Run this as a script macro in a world to set up the barbrawl defaults for that world, reset all actors' bars to that and set all places tokens to the new bars.
const bars = {
  bar1: {
    id: "bar1",
    attribute: "hp",
    ignoreMin: true,
    ignoreMax: false,
    mincolor: "#FF0000",
    maxcolor: "#80FF00",
    position: "bottom-inner",
    ownerVisibility: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.OWNER,
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
    otherVisibility: CONST.TOKEN_DISPLAY_MODES.OWNER,
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
  }
};

const barConfig = game.settings.get("barbrawl", "defaultTypeResources") ?? {};
barConfig['mech'] = bars;
barConfig['npc'] = bars;
barConfig['pilot'] = bars;
barConfig['deployable'] = bars;

await game.settings.set("barbrawl", "defaultTypeResources", barConfig);

// :warning: Reset all actors' prototype token bars
await Promise.all(game.actors.map(a => {
  let target;
  const v = game.version
  if (v < "12" && v >= "11") {
    target = a
  } else if (v >= "12") {
    target = a.prototypeToken
  }
  // Get existing flags to preserve them
  const existingFlags = target.flags || {};
  return target.update({
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
// vim:ft=javascript: