# GeoClim East Africa — NanoBanana Pro Image Prompt Pack
Prepared by NAVAC Global · September 2026

Seven prompts, matched exactly to the seven photography slots the Content Architecture spec and Claude Code session prompts define — six sector pages plus the Company/About page. No other page in this build calls for photography: the hero, Platform, Proof, Insights, Contact and Where-We-Work pages are deliberately photography-free per the locked design system (their visual device is the wireframe globe or the annotated data panel, not imagery — see Dossier §16/§17). Do not generate images beyond this list without updating the Content Architecture spec first; the image budget is a deliberate restraint decision, not an oversight.

**Standing art direction, applies to every prompt below** (from the locked Design Direction Dossier, §24): documentary, not marketing. Real field conditions, real infrastructure, real agricultural and urban East African environments. Always specific enough to caption with a real place-type and purpose. **Never**: stereotypical "Africa rising" imagery, lions, sunsets, flags, stacked-hands-huddle, hologram globes, generic laptop-at-desk shots, drone-shot-from-space cliché, oversaturated travel-brochure colour grading, posed/smiling-at-camera subjects. Colour grading should sit naturally alongside the site's white/indigo palette — natural, slightly desaturated, documentary-photojournalism tonality, not a warm Instagram-travel grade.

Aspect ratio for all seven: **3:2 landscape**, minimum 2400×1600px, JPEG.

---

## 1. `sector-agriculture-food-systems-01.jpg`
**Page/location**: `/sectors/agriculture-food-systems`, photography slot (§4.2 step 6 of the Content Architecture spec).

**Prompt**: A documentary photograph of a working irrigated farm plot in the East African highlands — rows of drip-irrigated horticulture crops (e.g. French beans or kale) receding toward a low ridge line, mid-morning flat light, slightly overcast. A single farm worker is visible mid-task in the middle distance, unposed, back partially turned, tending the irrigation line — not looking at camera, not smiling for camera. Visible drip-irrigation tubing and a small water-storage tank in frame ground the image in real infrastructure, not generic farmland. Colour grading: natural, slightly muted greens and red-brown soil tones, no golden-hour warmth. Shot at a slight elevation (waist-to-shoulder height, not drone-from-space), documentary depth of field. No people looking at the camera, no stock-photo "farmer holding produce toward camera" pose, no sunset.

**Future caption** (once live, Planet-discipline specificity): "Highland horticulture plot under drip irrigation — Central Kenya."

---

## 2. `sector-utilities-infrastructure-01.jpg`
**Page/location**: `/sectors/utilities-infrastructure`, photography slot.

**Prompt**: A documentary photograph of a mid-voltage electrical substation or water-pumping station in a peri-urban East African setting — visible transformers/switchgear or pump housing, chain-link perimeter fencing, overhead transmission lines receding into the frame, dry-season vegetation at the base. Overcast or flat midday light, industrial-documentary tone (think utility-company annual-report photography, not stock "energy" imagery). No people required in this frame — if included, one technician in plain workwear, mid-task, not posed. No glowing energy-effect overlays, no futuristic UI graphics composited into the shot, no lens flare.

**Future caption**: "Regional distribution infrastructure — asset condition monitored across a wide service territory."

---

## 3. `sector-government-public-sector-01.jpg`
**Page/location**: `/sectors/government-public-sector`, photography slot.

**Prompt**: A documentary photograph of an active urban infrastructure or land-survey site in an East African city — a municipal engineer or land surveyor in plain, real workwear (hi-vis vest, no branded logos) examining a printed map or handheld GPS unit at a road-construction or land-boundary site, mid-task, three-quarter back or side angle, not facing camera. Background shows real urban East African context — under-construction road, utility trenching, or a planning-office exterior — not a generic government building stock photo, not a boardroom. Natural daylight, documentary colour grading. No flags, no government seals, no posed handshake.

**Future caption**: "Land-boundary verification supporting a municipal infrastructure project."

---

## 4. `sector-climate-environment-01.jpg`
**Page/location**: `/sectors/climate-environment`, photography slot.

**Prompt**: A documentary landscape photograph showing a visible land-use boundary — the edge between cultivated land and remaining forest or wetland, or a river showing a visible erosion/sediment line — in an East African setting (e.g. a Rift Valley escarpment edge or a Lake Victoria basin wetland margin). Wide documentary landscape framing, natural midday or overcast light, true-to-life colour (real greens and browns, not an enhanced "lush jungle" grade). No dramatic storm clouds, no wildlife, no "before/after climate disaster" staging — the image should read as calm, factual field documentation, consistent with the site's evidence-first tone.

**Future caption**: "Land-cover boundary under seasonal monitoring — Rift Valley basin."

---

## 5. `sector-insurance-risk-01.jpg`
**Page/location**: `/sectors/insurance-risk`, photography slot.

**Prompt**: A documentary photograph grounding location-based risk in a concrete, real scene — a cracked, dry cultivated field showing visible drought stress on crops, shot at ground-to-knee height with the cracked earth texture prominent in the foreground and a working farm plot receding behind it. Alternative acceptable subject: a flood high-water mark visible on a culvert or roadside structure in a rural East African setting. Flat, documentary daylight — no dramatic storm lighting, no disaster-film colour grading (avoid teal-orange or desaturated-apocalyptic grading). The image should read as sober field evidence, not a disaster photo.

**Future caption**: "Drought-stress indicators on cultivated land — ground assessment context."

---

## 6. `sector-transport-logistics-01.jpg`
**Page/location**: `/sectors/transport-logistics`, photography slot.

**Prompt**: A documentary photograph of a real East African transport corridor — an elevated view (from a pedestrian bridge or roadside rise, not a drone-from-space shot) of a highway interchange, a freight corridor with visible trucks in transit, or a logistics/freight yard with containers and trucks staged for loading. Midday, slightly overcast light, natural colour grading, real traffic and infrastructure visible (road markings, signage in a real regional language/script is fine and adds authenticity — do not invent fictional signage). No motion-blur "speed" cliché, no futuristic overlay graphics.

**Future caption**: "Regional freight corridor — congestion and routing context."

---

## 7. `company-about-01.jpg`
**Page/location**: `/company`, photography slot (§7.1 step 4 of the Content Architecture spec).

**Prompt**: A documentary photograph of a small technical team engaged in real fieldwork or operations coordination — two or three people in plain workwear reviewing a printed map or a tablet showing map data, on location at a real field site (not a generic office desk), mid-conversation, candid framing, none looking at camera. Setting should read as East African and specific (natural outdoor light, a visible real landscape or worksite in the background — e.g. the edge of a survey site or field-monitoring location) rather than an anonymous conference room. This is the one moment the site shows "people," so it must avoid every corporate-stock cliché: no stacked hands, no staged handshake, no boardroom huddle, no forced diversity-brochure framing, no laptop-and-coffee-cup desk shot.

**Future caption**: "GeoClim field team reviewing site data — East Africa operations."

---

## Delivery notes
- Drop each generated file into `/public/images/` under the exact filename above — no code change is required in the Next.js build, since every `<img>` slot already references these paths (see the Session 2 and Session 5 Claude Code prompts).
- If any generated image doesn't clear the "documentary, not marketing" bar on review, regenerate rather than settle — a single weak image undercuts the honesty positioning the rest of the site is built on more than an empty placeholder would.
- None of these prompts include real GeoClim staff, real named locations tied to unverified claims, or any specific client — they are representative environmental photography, consistent with every image on this site being either real GeoClim material (once supplied) or honestly generic-but-specific documentary photography, never a stand-in for a claim that hasn't been confirmed.
