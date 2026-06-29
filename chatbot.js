(() => {
  const topics = [
    {
      title: "What is SENTIO?",
      keywords: [
        "sentio",
        "company",
        "overview",
        "what",
        "about",
        "summary",
        "ce",
        "este",
        "companie",
        "idee",
        "concept",
      ],
      answer:
        "SENTIO is an early-stage environmental intelligence company building rapidly deployable, attrition-tolerant sensing networks. The idea is simple: deploy one physical sensing infrastructure, then activate different intelligence modules in software.\n\nSENTIO is not just a wildfire sensor, air-quality station, acoustic recorder, or wildlife monitor. It is a deployable network of low-cost capsules, gateways, and software-defined AI modules that turn distributed field telemetry into explainable operational confidence.",
    },
    {
      title: "What problem does SENTIO solve?",
      keywords: [
        "problem",
        "solve",
        "market",
        "why",
        "need",
        "monitoring",
        "infrastructure",
        "environment",
        "disaster",
        "dezastru",
        "problema",
      ],
      answer:
        "Environmental monitoring is often too fixed, too sparse, too expensive, or too slow to install. The places that need data most, such as forests, flood zones, landslides, industrial incidents, wildfire terrain, and search-and-rescue areas, are often the hardest places to access safely.\n\nSENTIO is designed for that gap: fast sensing coverage before permanent infrastructure exists.",
    },
    {
      title: "Why is SENTIO attrition-tolerant?",
      keywords: [
        "attrition",
        "loss",
        "lost",
        "offline",
        "missing",
        "kill",
        "network",
        "lose",
        "pierdere",
        "pierde",
        "mort",
        "offline",
      ],
      answer:
        "SENTIO is designed to lose some nodes without the whole network failing. Individual capsules may be shaded, buried under leaves, damaged, blocked, out of power, or never recovered.\n\nThat is not treated as immediate failure. SENTIO uses density, redundancy, neighbouring-pod agreement, and redeployment buffers so the network can keep producing useful evidence even when some capsules disappear.",
    },
    {
      title: "Why is deployment a core advantage?",
      keywords: [
        "deployment",
        "deploy",
        "fast",
        "rapid",
        "manual",
        "install",
        "coverage",
        "terrain",
        "rapidly",
        "instalare",
        "acoperire",
      ],
      answer:
        "Deployment is not just logistics in SENTIO. It is one of the main advantages.\n\nThe value starts before the AI layer: SENTIO can rapidly create sensing coverage where there is no monitoring infrastructure and where manual installation would be slow, expensive, dangerous, or impossible. The capsule form factor, low unit cost, and loss-tolerant network logic all support that deployment philosophy.",
    },
    {
      title: "What does the capsule do?",
      keywords: [
        "capsule",
        "capsula",
        "pod",
        "node",
        "sensor",
        "sensors",
        "hardware",
        "component",
        "collect",
        "data",
        "detect",
      ],
      answer:
        "The SENTIO capsule is a low-cost data collection node. Its job is to collect compact environmental, acoustic, vibration, power, and radio-health telemetry, then send packets to a gateway.\n\nThe capsule itself does not decide that there is a wildfire, a person, pollution, or illegal logging. The sensors collect evidence. The SENTIO software layer interprets that evidence using AI modules, local baselines, nearby-node agreement, and network confidence scoring.",
    },
    {
      title: "What components are inside the capsule?",
      keywords: [
        "components",
        "inside",
        "stm32",
        "lora",
        "bme688",
        "microphone",
        "accelerometer",
        "battery",
        "solar",
        "mems",
        "parts",
      ],
      answer:
        "The current capsule concept uses an STM32WLE5-class low-power MCU with integrated sub-GHz LoRa, a BME688-class environmental pattern sensor, a low-power MEMS microphone, an ultra-low-power accelerometer, dual solar surfaces, a LiFePO4 battery for early prototypes, low-power regulation, battery protection, ePTFE venting, an acoustic membrane, and a device ID for deployment tracking.\n\nThe design target is a simple, inexpensive, field-deployable capsule rather than a high-value edge-AI computer.",
    },
    {
      title: "Why does the capsule not run all AI locally?",
      keywords: [
        "ai",
        "edge",
        "tinyml",
        "local",
        "software",
        "firmware",
        "model",
        "pod",
        "intelligence",
        "onboard",
      ],
      answer:
        "SENTIO keeps the main intelligence in software because the capsules are meant to be cheap, simple, and acceptable to lose. Captured or damaged capsules should reveal little about mission-specific logic.\n\nNetwork confidence also requires context from nearby pods, which a single capsule does not have. TinyML could later help with compression or local pre-filtering, but the core SENTIO advantage is software-defined interpretation across the network.",
    },
    {
      title: "How does incident confidence work?",
      keywords: [
        "confidence",
        "incident",
        "formula",
        "math",
        "score",
        "neighbour",
        "neighbor",
        "agreement",
        "model",
        "scoring",
        "matematica",
      ],
      answer:
        "SENTIO treats one pod as evidence, not truth. Incident confidence is built from local anomaly evidence, model evidence, neighbouring-pod agreement, and pod health.\n\nSimplified:\n\nLocal evidence = environmental change + acoustic/vibration pattern + model anomaly score\n\nNeighbour agreement = how many nearby pods show related abnormal behaviour\n\nFinal confidence = blended local evidence x neighbour agreement x node health coefficient\n\nThis makes the system conservative about isolated readings and more confident when multiple nearby pods and multiple sensor types agree.",
    },
    {
      title: "What AI stack does SENTIO v0 use?",
      keywords: [
        "river",
        "sklearn",
        "scikit",
        "isolationforest",
        "halfspacetrees",
        "ai",
        "ml",
        "machine",
        "learning",
        "stack",
        "models",
      ],
      answer:
        "SENTIO v0 uses a two-layer anomaly detection approach: scikit-learn IsolationForest for static baseline anomaly scoring and River HalfSpaceTrees for streaming online anomaly scoring.\n\nThe model evidence is combined with heuristic sensor rules, neighbouring-pod agreement, node health discounting, and module-specific interpretation. The goal is not a black-box percentage; the dashboard also shows reasons behind alerts.",
    },
    {
      title: "What is SENTIO v0?",
      keywords: [
        "v0",
        "pilot",
        "demo",
        "software",
        "dashboard",
        "fastapi",
        "react",
        "maplibre",
        "plotly",
        "websocket",
      ],
      answer:
        "SENTIO v0 is the current software pilot. It is not the company name; the company is SENTIO.\n\nSENTIO v0 demonstrates simulated pod telemetry, expected node loss, FastAPI backend, WebSocket live updates, River and scikit-learn anomaly scoring, React dashboard, MapLibre live map, Plotly charts, telemetry table, explainable alerts, CSV export, TXT run logs, PDF evidence reports, SQLite demo storage, and a path toward PostgreSQL/TimescaleDB production storage.",
    },
    {
      title: "What does SENTIO v0 prove?",
      keywords: [
        "prove",
        "validated",
        "validation",
        "working",
        "real",
        "claims",
        "demonstrate",
        "dovada",
        "validat",
      ],
      answer:
        "SENTIO v0 proves that the core software pipeline can exist before final hardware is built. It shows that distributed telemetry can be simulated, scored, spatially validated, visualised, explained, and exported as operational evidence.\n\nIt does not yet prove certified wildfire detection, certified gas detection, waterproofing, LoRa range, battery life, solar performance, enclosure durability, or final manufacturing cost. Those require field testing with physical capsules.",
    },
    {
      title: "What modules can SENTIO support?",
      keywords: [
        "modules",
        "module",
        "marketplace",
        "wildfire",
        "pollution",
        "sar",
        "biodiversity",
        "logging",
        "infrastructure",
        "use",
        "cases",
      ],
      answer:
        "The same physical network can support different software modules: wildfire anomaly monitoring, pollution and air-pattern awareness, search-and-rescue support, illegal logging or human-activity alerts, biodiversity and habitat monitoring, infrastructure disturbance monitoring, and disaster response.\n\nThe business model is modular: customers deploy one physical infrastructure and activate the intelligence modules they need.",
    },
    {
      title: "How does the SAR layer work?",
      keywords: [
        "sar",
        "search",
        "rescue",
        "human",
        "activity",
        "people",
        "person",
        "survivor",
        "salvare",
        "persoana",
      ],
      answer:
        "The SAR layer should be framed carefully. It is human-activity awareness and search-area prioritisation support, not person identification and not a claim that the capsule can precisely locate individuals.\n\nCommercially, the idea is strong because SAR support can be included as a baseline humanitarian layer across deployments, while other mission-specific modules are activated separately.",
    },
    {
      title: "Why is the capsule seed-shaped?",
      keywords: [
        "shape",
        "seed",
        "form",
        "design",
        "orientation",
        "solar",
        "landing",
        "capsule",
        "forma",
      ],
      answer:
        "The seed-shaped capsule is strategic, not just aesthetic. It supports uncertain landing orientation, fast deployment, no manual mounting, and dense distribution across terrain.\n\nThe dual-orientation design means the capsule can still operate after landing on either main side. Solar surfaces on both sides help reduce sensitivity to landing position, although real solar performance still needs field validation.",
    },
    {
      title: "Why not make every capsule expensive and durable?",
      keywords: [
        "cheap",
        "expensive",
        "cost",
        "durable",
        "rugged",
        "asset",
        "protect",
        "price",
        "gbp",
        "30",
        "35",
      ],
      answer:
        "SENTIO is built around network value, not protected individual assets. If each pod is too expensive, loss becomes operational failure. If each pod is low-cost and simple enough, loss can be planned into the deployment budget.\n\nA target pod cost around GBP 30-35 can be credible for early prototypes because it leaves room for real components, enclosure, battery, solar, membranes, assembly, test waste, and small-batch costs. At scale, cost optimisation can push the bill of materials lower.",
    },
    {
      title: "How much area can SENTIO cover?",
      keywords: [
        "coverage",
        "area",
        "100m",
        "spacing",
        "1000",
        "pods",
        "hectare",
        "km2",
        "cover",
        "suprafata",
      ],
      answer:
        "Using a simple 100 m spacing assumption, one capsule represents roughly a 100 m x 100 m cell, or about 1 hectare. A 1000-pod deployment therefore gives a rough theoretical coverage of about 10 square kilometres.\n\nIn real terrain, coverage depends on radio propagation, canopy, slope, gateway position, landing losses, event type, and the required confidence density.",
    },
    {
      title: "What is the 120 percent deployment budget?",
      keywords: [
        "120",
        "20",
        "buffer",
        "redeploy",
        "attrition",
        "budget",
        "loss",
        "lost",
        "pierdere",
      ],
      answer:
        "SENTIO treats planned attrition as part of deployment design. A standard planning assumption is to budget at 120 percent: deploy enough capsules for the target coverage plus a redeployment or loss buffer.\n\nIf 20 percent of capsules are lost, this is not automatically failure. It is acceptable within the SENTIO philosophy, although losses above that may indicate the deployment strategy needs improvement.",
    },
    {
      title: "How would live hardware connect?",
      keywords: [
        "live",
        "hardware",
        "sensor",
        "json",
        "packet",
        "gateway",
        "ingest",
        "node",
        "real",
        "connect",
        "senzor",
      ],
      answer:
        "A live node would send compact telemetry packets to a gateway. The gateway would decode the packet and forward JSON into the SENTIO backend.\n\nA typical packet includes pod_id, temperature, humidity, pressure, voc_index, sound_avg, sound_peak, vibration, battery, solar, RSSI, and optional location metadata. The same scoring stack can then process real telemetry instead of simulated telemetry.",
    },
    {
      title: "What is the production architecture?",
      keywords: [
        "architecture",
        "production",
        "fastapi",
        "websocket",
        "postgres",
        "timescale",
        "react",
        "maplibre",
        "database",
        "backend",
      ],
      answer:
        "A production SENTIO stack separates ingestion, intelligence, storage, and visualisation.\n\nThe intended architecture is: gateway packets -> FastAPI backend -> model scoring -> PostgreSQL/TimescaleDB storage -> WebSocket live updates -> React + MapLibre operational dashboard.\n\nSENTIO v0 already demonstrates this logic locally with FastAPI, WebSockets, React, MapLibre, Plotly, River/scikit-learn, SQLite, and a TimescaleDB-ready schema path.",
    },
    {
      title: "What is the capsule colour strategy?",
      keywords: [
        "colour",
        "color",
        "camouflage",
        "camo",
        "black",
        "heat",
        "forest",
        "arid",
        "urban",
        "pattern",
      ],
      answer:
        "The capsule should adapt to the deployment environment rather than defaulting to black. Pure black can absorb excessive heat, distort temperature readings, stress the battery, and create false environmental patterns.\n\nThe current pattern families are forest canopy, dry grassland/arid, and urban/rubble. The exterior should be matte and low-glare so the capsule is less visible and less affected by reflection or local heating.",
    },
    {
      title: "What are the current limitations?",
      keywords: [
        "limitations",
        "risk",
        "risks",
        "not",
        "claim",
        "certified",
        "problem",
        "weakness",
        "limits",
        "limite",
      ],
      answer:
        "SENTIO should not yet be presented as a certified wildfire detection system, certified gas detector, certified air-quality monitor, person identification system, or finished field hardware platform.\n\nThe current concept still needs physical capsule prototypes, LoRa range testing, power and solar validation, enclosure and membrane testing, impact validation, labelled datasets, and small outdoor field trials.",
    },
    {
      title: "Why is SENTIO different from normal IoT monitoring?",
      keywords: [
        "different",
        "unique",
        "moat",
        "iot",
        "competitor",
        "common",
        "startup",
        "defensible",
        "diferit",
      ],
      answer:
        "The moat is not just AI. SENTIO combines rapid deployment, low-cost capsules, expected node loss, multi-modal data collection, software-defined intelligence modules, gateway architecture, explainable alerts, and network-level confidence scoring.\n\nMany IoT systems try to protect every sensor as a valuable asset. SENTIO is designed around resilient coverage when perfect installation, perfect recovery, and perfect node survival cannot be assumed.",
    },
    {
      title: "What is the next validation step?",
      keywords: [
        "next",
        "roadmap",
        "step",
        "prototype",
        "pilot",
        "validation",
        "essex",
        "university",
        "professor",
        "urmator",
      ],
      answer:
        "The next technical step is one live node producing SENTIO-compatible telemetry, then a gateway adapter sending real packets into the same scoring stack.\n\nAfter that: three to five live capsules for local agreement testing, outdoor trials with controlled environmental changes, LoRa range testing, power and enclosure validation, and finally a small field deployment with exportable telemetry evidence.",
    },
  ];

  const stopWords = new Set([
    "a",
    "an",
    "and",
    "are",
    "as",
    "at",
    "be",
    "but",
    "by",
    "can",
    "do",
    "does",
    "for",
    "from",
    "how",
    "i",
    "in",
    "is",
    "it",
    "of",
    "on",
    "or",
    "that",
    "the",
    "this",
    "to",
    "what",
    "why",
    "with",
    "you",
    "si",
    "sau",
    "ce",
    "cum",
    "de",
    "la",
    "pe",
    "pt",
    "pentru",
    "gen",
    "frate",
    "este",
    "e",
  ]);

  let lastTopic = null;

  const suggestedPrompts = [
    "Why is SENTIO attrition-tolerant?",
    "What does SENTIO v0 prove?",
    "How would live hardware connect?",
    "What are the current limitations?",
  ];

  function normalise(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s.-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function tokenize(value) {
    return normalise(value)
      .split(" ")
      .filter((token) => token.length > 1 && !stopWords.has(token));
  }

  function scoreTopic(question, topic) {
    const q = normalise(question);
    const qTokens = tokenize(q);
    const keywordText = topic.keywords.join(" ");
    const answerText = normalise(`${topic.title} ${topic.answer}`);
    let score = 0;

    topic.keywords.forEach((keyword) => {
      const normalKeyword = normalise(keyword);
      if (!normalKeyword) return;
      if (q === normalKeyword) score += 8;
      if (q.includes(normalKeyword)) score += normalKeyword.includes(" ") ? 5 : 3;
    });

    qTokens.forEach((token) => {
      if (topic.keywords.includes(token)) score += 3;
      if (keywordText.includes(token)) score += 2;
      if (answerText.includes(token)) score += 0.6;
    });

    return score;
  }

  function looksRomanian(q) {
    return /\b(ce|cum|care|poti|poate|raspunde|intrebari|chestii|despre|vreau|spune|explica|frate|este|sunt)\b/.test(q);
  }

  function isCapabilityQuestion(q) {
    return (
      /\b(what|which).*\b(questions|topics|things).*\b(answer|ask|help|know)\b/.test(q) ||
      /\bwhat can you\b/.test(q) ||
      /\bwhat do you know\b/.test(q) ||
      /\bhow can you help\b/.test(q) ||
      /\b(ce poti face|cu ce ma poti ajuta|ce stii sa faci|ce stii despre)\b/.test(q) ||
      /\b(ce|la ce|despre ce|care).*\b(intrebari|subiecte|chestii|lucruri).*\b(poti|stii|raspun|raspunde|ajuta)\b/.test(q) ||
      /\b(poti|stii).*\b(raspunde|ajuta).*\b(intrebari|chestii|subiecte)\b/.test(q)
    );
  }

  function isIdentityQuestion(q) {
    return /\b(who are you|what are you|cine esti|ce esti)\b/.test(q);
  }

  function isAiQuestion(q) {
    return (
      /\b(ai|artificial intelligence|chatgpt|api|llm|model)\b/.test(q) &&
      /\b(are you|esti|use|using|folosesti|real|adevarat)\b/.test(q)
    );
  }

  function isFollowUpQuestion(q) {
    return /\b(tell me more|explain more|more detail|go deeper|detaliaza|mai detaliat|explica mai mult|spune mai mult)\b/.test(q);
  }

  function broadSentioQuestion(q) {
    return (
      /\b(explain|describe|summarise|summarize|tell me about).*\bsentio\b/.test(q) ||
      /\b(explica|descrie|spune|prezinta).*\bsentio\b/.test(q) ||
      /\bsentio.*\b(pe scurt|in short|overall|all about)\b/.test(q)
    );
  }

  function capabilityAnswer(isRo) {
    if (isRo) {
      return (
        "Pot raspunde natural la intrebari despre SENTIO, nu doar la butoanele predefinite.\n\n" +
        "Cele mai bune zone pentru mine sunt: ce este SENTIO, problema pe care o rezolva, capsula si componentele ei, de ce reteaua accepta pierdere de noduri, SENTIO v0, AI stack-ul, formula de incident confidence, modulele comerciale, SAR baseline, cost/coverage, limitari, validare si cum s-ar conecta senzori reali.\n\n" +
        "Poti intreba normal, de exemplu: \"de ce nu ruleaza AI-ul in capsula?\", \"ce ar intreba un profesor?\", \"cum explici confidence score?\" sau \"ce e validat deja si ce nu?\"."
      );
    }

    return (
      "I can answer natural questions about SENTIO, not only the preset buttons.\n\n" +
      "The strongest topics are: what SENTIO is, the problem it solves, the capsule and its components, attrition tolerance, SENTIO v0, the AI/model stack, incident confidence math, commercial modules, SAR baseline support, cost and coverage planning, limitations, validation roadmap, and how real sensor hardware would connect.\n\n" +
      "You can ask normally, for example: \"why keep intelligence in software?\", \"what would a professor challenge?\", \"explain the confidence score\", or \"what is validated already and what still needs field testing?\""
    );
  }

  function identityAnswer(isRo) {
    if (isRo) {
      return (
        "Sunt asistentul local pentru SENTIO. Rolul meu este sa explic proiectul clar pentru vizitatori, mentori, profesori sau potentiali parteneri.\n\n" +
        "Nu sunt conectat la un model AI extern in versiunea asta. Raspund dintr-o baza de cunostinte inclusa in site, ca demo-ul sa fie stabil si usor de publicat."
      );
    }

    return (
      "I am the local SENTIO assistant. My role is to explain the project clearly to visitors, mentors, professors, and potential collaborators.\n\n" +
      "In this version I am not connected to an external AI model. I answer from a curated knowledge base embedded in the website, so the demo stays stable, cheap, and easy to deploy."
    );
  }

  function aiAnswer(isRo) {
    if (isRo) {
      return (
        "Versiunea asta este un chatbot static cu knowledge base local, nu un LLM conectat prin API.\n\n" +
        "Asta e intentionat pentru demo: nu costa nimic, merge pe hosting static si reduce riscul sa inventeze raspunsuri. Mai tarziu poate fi extins cu un chatbot RAG peste documentele SENTIO."
      );
    }

    return (
      "This version is a static knowledge-base chatbot, not an API-connected LLM.\n\n" +
      "That is intentional for the demo: it costs nothing to run, works on static hosting, and reduces the risk of invented answers. Later, it can be upgraded into a RAG assistant over the SENTIO documents."
    );
  }

  function followUpAnswer(isRo) {
    if (!lastTopic) return capabilityAnswer(isRo);
    return isRo
      ? `Sigur. Subiectul cel mai apropiat este "${lastTopic.title}".\n\n${lastTopic.answer}\n\nPoti sa ma intrebi si mai specific: partea tehnica, partea de business, riscurile sau cum ai prezenta asta unui profesor.`
      : `Sure. The closest topic is "${lastTopic.title}".\n\n${lastTopic.answer}\n\nYou can ask me more specifically about the technical side, the business side, the risks, or how to explain this to a professor.`;
  }

  function broadSentioAnswer(isRo) {
    lastTopic = topics[0];
    return isRo
      ? "SENTIO este o companie early-stage de environmental intelligence. Ideea centrala este sa creezi rapid acoperire de senzori in zone unde infrastructura permanenta nu exista, e prea scumpa sau e periculoasa de instalat.\n\nSistemul foloseste capsule simple si ieftine care colecteaza date, gateway-uri care primesc pachetele, si software care interpreteaza datele prin module AI. Diferenta importanta este filosofia: reteaua este proiectata sa piarda noduri fara sa cada complet. SENTIO v0 este pilotul software care arata dashboardul, simularea de poduri, scoring-ul de anomalii, incident confidence si exportul de rezultate."
      : "SENTIO is an early-stage environmental intelligence company. The core idea is to rapidly create sensing coverage in places where permanent infrastructure does not exist, is too expensive, or is unsafe to install.\n\nThe system uses simple low-cost capsules that collect data, gateways that receive packets, and software that interprets the data through AI modules. The important difference is the philosophy: the network is designed to lose some nodes without collapsing. SENTIO v0 is the software pilot that demonstrates the dashboard, simulated pods, anomaly scoring, incident confidence, and exportable results.";
  }

  function naturaliseAnswer(answer, isRo, related) {
    if (!related.length) return answer;
    return isRo
      ? `${answer}\n\nDaca vrei, pot lega asta si de: ${related.join("; ")}.`
      : `${answer}\n\nIf useful, I can also connect this to: ${related.join("; ")}.`;
  }

  function findAnswer(question) {
    const q = normalise(question);
    if (!q) return null;
    const isRo = looksRomanian(q);

    if (/(hello|hi|hey|salut|buna|buna ziua)/.test(q)) return capabilityAnswer(isRo);
    if (isCapabilityQuestion(q)) return capabilityAnswer(isRo);
    if (isIdentityQuestion(q)) return identityAnswer(isRo);
    if (isAiQuestion(q)) return aiAnswer(isRo);
    if (isFollowUpQuestion(q)) return followUpAnswer(isRo);
    if (broadSentioQuestion(q)) return broadSentioAnswer(isRo);

    const scored = topics
      .map((topic) => ({ ...topic, score: scoreTopic(question, topic) }))
      .sort((a, b) => b.score - a.score);

    const best = scored[0];
    if (!best || best.score < 2.8) {
      return isRo
        ? "Nu am inca un raspuns precis pentru intrebarea asta in baza SENTIO.\n\nPot totusi raspunde bine la intrebari despre: capsula, senzori, AI stack, confidence math, attrition tolerance, SENTIO v0, cost, coverage, SAR, limitari si validare. Incearca sa reformulezi cu unul dintre aceste subiecte."
        : "I do not have a precise answer for that yet in the SENTIO knowledge base.\n\nI can still answer well on: capsule design, sensors, AI stack, confidence math, attrition tolerance, SENTIO v0, cost, coverage, SAR, limitations, and validation. Try rephrasing with one of those topics.";
    }

    lastTopic = best;
    const related = scored
      .slice(1, 4)
      .filter((topic) => topic.score >= Math.max(3, best.score * 0.58))
      .map((topic) => topic.title);

    return naturaliseAnswer(best.answer, isRo, related);
  }

  function createMessage(role, text) {
    const message = document.createElement("article");
    message.className = `chat-message ${role}`;

    const label = document.createElement("span");
    label.textContent = role === "bot" ? "SENTIO" : "You";

    const body = document.createElement("p");
    body.textContent = text;

    message.append(label, body);
    return message;
  }

  function initChatbot() {
    const root = document.querySelector("[data-chatbot]");
    if (!root) return;

    const toggle = root.querySelector(".chatbot-toggle");
    const panel = root.querySelector(".chatbot-panel");
    const close = root.querySelector(".chatbot-close");
    const messages = root.querySelector("[data-chat-messages]");
    const form = root.querySelector("[data-chat-form]");
    const input = root.querySelector("[data-chat-input]");
    const promptButtons = root.querySelectorAll("[data-prompt]");

    function setOpen(open) {
      root.classList.toggle("is-open", open);
      panel.setAttribute("aria-hidden", open ? "false" : "true");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) window.setTimeout(() => input.focus(), 60);
    }

    function append(role, text) {
      messages.appendChild(createMessage(role, text));
      messages.scrollTop = messages.scrollHeight;
    }

    function ask(question) {
      const clean = question.trim();
      if (!clean) return;
      append("user", clean);
      input.value = "";

      window.setTimeout(() => {
        append("bot", findAnswer(clean));
      }, 120);
    }

    toggle.addEventListener("click", () => {
      const open = !root.classList.contains("is-open");
      setOpen(open);
    });

    close.addEventListener("click", () => setOpen(false));

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      ask(input.value);
    });

    promptButtons.forEach((button) => {
      button.addEventListener("click", () => ask(button.dataset.prompt || button.textContent));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });

    append(
      "bot",
      "Ask me naturally about SENTIO, the capsule, SENTIO v0, attrition tolerance, AI modules, incident confidence, hardware validation, cost, or deployment strategy."
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initChatbot);
  } else {
    initChatbot();
  }
})();
