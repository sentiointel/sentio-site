(function () {
  const planner = document.querySelector("[data-planner]");
  if (!planner) return;

  const inputs = {
    areaKm2: planner.querySelector('[data-planner-input="areaKm2"]'),
    spacingM: planner.querySelector('[data-planner-input="spacingM"]'),
    costGbp: planner.querySelector('[data-planner-input="costGbp"]'),
    attritionPercent: planner.querySelector('[data-planner-input="attritionPercent"]'),
  };

  const ranges = {
    areaKm2: planner.querySelector('[data-planner-range="areaKm2"]'),
    spacingM: planner.querySelector('[data-planner-range="spacingM"]'),
    costGbp: planner.querySelector('[data-planner-range="costGbp"]'),
    attritionPercent: planner.querySelector('[data-planner-range="attritionPercent"]'),
  };

  const outputs = {
    baseCapsules: planner.querySelector('[data-planner-output="baseCapsules"]'),
    deploymentBudget: planner.querySelector('[data-planner-output="deploymentBudget"]'),
    bufferedCapsules: planner.querySelector('[data-planner-output="bufferedCapsules"]'),
    lossCapacity: planner.querySelector('[data-planner-output="lossCapacity"]'),
    summary: planner.querySelector('[data-planner-output="summary"]'),
    map: planner.querySelector("[data-planner-map]"),
  };

  const numberFormat = new Intl.NumberFormat("en-GB");
  function clamp(value, min, max, fallback) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) return fallback;
    return Math.min(max, Math.max(min, parsed));
  }

  function valueFor(key) {
    const input = inputs[key];
    return clamp(input.value, Number(input.min), Number(input.max), Number(input.defaultValue));
  }

  function updateRangeFill(range) {
    const min = Number(range.min);
    const max = Number(range.max);
    const value = clamp(range.value, min, max, min);
    const progress = ((value - min) / (max - min)) * 100;
    range.style.setProperty("--range-progress", `${progress}%`);
  }

  function syncRange(key, value) {
    const range = ranges[key];
    if (!range) return;
    range.value = value;
    updateRangeFill(range);
  }

  function renderMap(attritionPercent) {
    const totalDots = 72;
    const lossDots = Math.round((totalDots * attritionPercent) / 100);
    const bufferDots = Math.max(0, Math.round(totalDots * 0.2));
    outputs.map.replaceChildren();

    for (let index = 0; index < totalDots; index += 1) {
      const dot = document.createElement("span");
      if (index >= totalDots - lossDots) dot.className = "is-loss";
      else if (index >= totalDots - lossDots - bufferDots) dot.className = "is-buffer";
      outputs.map.appendChild(dot);
    }
  }

  function updatePlanner() {
    const areaKm2 = valueFor("areaKm2");
    const spacingM = valueFor("spacingM");
    const costGbp = valueFor("costGbp");
    const attritionPercent = valueFor("attritionPercent");

    const areaM2 = areaKm2 * 1_000_000;
    const nominalCellM2 = spacingM * spacingM;
    const baseCapsules = Math.max(1, Math.ceil(areaM2 / nominalCellM2));
    const bufferedCapsules = Math.ceil(baseCapsules * (1 + attritionPercent / 100));
    const lossCapacity = Math.max(0, bufferedCapsules - baseCapsules);
    const deploymentBudget = bufferedCapsules * costGbp;
    const hectaresPerCapsule = nominalCellM2 / 10_000;

    outputs.baseCapsules.textContent = numberFormat.format(baseCapsules);
    outputs.bufferedCapsules.textContent = numberFormat.format(bufferedCapsules);
    outputs.lossCapacity.textContent = `${numberFormat.format(lossCapacity)} pods`;
    outputs.deploymentBudget.textContent = `GBP ${numberFormat.format(deploymentBudget)}`;
    outputs.summary.textContent =
      `At ${numberFormat.format(spacingM)} m spacing, each capsule represents approximately ` +
      `${hectaresPerCapsule.toFixed(2)} ha of nominal coverage. ` +
      `A ${numberFormat.format(attritionPercent)}% buffer plans for ` +
      `${numberFormat.format(lossCapacity)} capsules to be lost, shaded, blocked or redeployed without treating that as mission failure.`;

    renderMap(attritionPercent);
  }

  Object.entries(inputs).forEach(([key, input]) => {
    input.addEventListener("input", () => {
      if (input.value !== "") syncRange(key, valueFor(key));
      updatePlanner();
    });
    input.addEventListener("blur", () => {
      input.value = valueFor(key);
      syncRange(key, input.value);
      updatePlanner();
    });
  });

  Object.entries(ranges).forEach(([key, range]) => {
    range.addEventListener("input", () => {
      inputs[key].value = range.value;
      updateRangeFill(range);
      updatePlanner();
    });
    updateRangeFill(range);
  });

  updatePlanner();
})();
