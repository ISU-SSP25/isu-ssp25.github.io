import { useState } from "react";
import { WebsiteNavbar, Footer } from "../components";
import { antennaGains, txPowerLevels, snrOptions } from "./linkBudgetOptions";
import "./LunarLinkBudget.css";

const bands = [
  ["30", "HF (30 MHz)"], ["400", "UHF (400 MHz)"],
  ["1200", "L-band (1.2 GHz)"], ["2400", "S-band (2.4 GHz)"],
  ["8000", "X-band (8 GHz)"], ["custom", "Custom frequency"],
];
const rates = [
  [10000, "10 kbps — Basic PNT and telemetry"],
  [100000, "100 kbps — Scientific data collection"],
  [1000000, "1 Mbps — Limited surface operations"],
  [100000000, "100 Mbps — Moderate surface operations"],
  [1000000000, "1 Gbps — High intensity surface operations"],
];
const paths = [[0, "Unobstructed line of sight"], [15, "Mountainous, minor obstruction"], [40, "Crater or lava tube"]];
const temperatures = [[25, "25 K — Permanently shadowed region"], [250, "250 K — Partial sun exposure"], [390, "390 K — Full sun exposure"]];
const typeLabels = { omni: "Omnidirectional", directional: "Directional", highlyDirectional: "Highly directional" };

function Field({ label, id, children, hint }) {
  return <div className="link-field"><label htmlFor={id}>{label}</label>{children}{hint && <small>{hint}</small>}</div>;
}
function Select({ id, value, onChange, options, placeholder, disabled }) {
  return <select id={id} value={value} onChange={e => onChange(e.target.value)} disabled={disabled} required>
    {placeholder && <option value="">{placeholder}</option>}
    {options.map(([val, label]) => <option key={val} value={val}>{label}</option>)}
  </select>;
}
function NumberField({ id, value, onChange, min, step = "any", placeholder }) {
  return <input id={id} type="number" value={value} onChange={e => onChange(e.target.value)} min={min} step={step} placeholder={placeholder} required />;
}
const pairOptions = options => options.map(({ value, label }) => [value, label]);

export function LunarLinkBudget() {
  const [band, setBand] = useState("");
  const [frequency, setFrequency] = useState("");
  const [distance, setDistance] = useState("100");
  const [pathLoss, setPathLoss] = useState("0");
  const [rate, setRate] = useState("10000");
  const [txType, setTxType] = useState("");
  const [rxType, setRxType] = useState("");
  const [txGain, setTxGain] = useState("");
  const [rxGain, setRxGain] = useState("");
  const [txPower, setTxPower] = useState("");
  const [temperature, setTemperature] = useState("390");
  const [snr, setSnr] = useState("6");
  const [result, setResult] = useState(null);

  const rateOptions = rates.slice(0, band === "30" ? 1 : band === "400" ? 2 : 5);
  const snrChoices = band === "30" || band === "400"
    ? snrOptions[band]
    : snrOptions[rate] || snrOptions.general;
  const snrValues = pairOptions(snrChoices);
  const types = band !== "custom" && band
    ? Object.keys(typeLabels).filter(type => antennaGains[band]?.[type]?.length).map(type => [type, typeLabels[type]])
    : [];

  function changeBand(value) {
    setBand(value); setFrequency(value === "custom" ? "" : value);
    const nextRate = value === "400" ? "100000" : "10000";
    setRate(nextRate); setSnr("6");
    setTxType(""); setRxType(""); setTxGain(""); setRxGain(""); setTxPower(""); setResult(null);
  }
  function changeRate(value) {
    setRate(value);
    const available = band === "30" || band === "400" ? snrOptions[band] : snrOptions[value] || snrOptions.general;
    if (!available.some(option => String(option.value) === snr)) setSnr(String(available[0].value));
    setResult(null);
  }
  function calculate(event) {
    event.preventDefault();
    const f = Number(frequency), d = Number(distance), power = Number(txPower), tg = Number(txGain), rg = Number(rxGain);
    if (![f, d, power, tg, rg].every(Number.isFinite) || f <= 0 || d <= 0 ||
        txPower === "" || txGain === "" || rxGain === "") {
      setResult({ error: "Enter valid values for frequency, distance, power, and both antenna gains." });
      return;
    }
    const fspl = 32.44 + 20 * Math.log10(d) + 20 * Math.log10(f);
    const received = power + tg + rg - 4 - fspl - Number(pathLoss);
    const noise = 10 * Math.log10(1.38e-23 * Number(temperature) * Number(rate));
    const required = noise + Number(snr);
    setResult({ fspl, received, noise, required, margin: received - required });
  }
  return <div className="PageContainer">
    <WebsiteNavbar />
    <main className="link-page">
      <header className="link-intro">
        {/* <p className="link-eyebrow">Lunar communications tool</p> */}
        <h1>Lunar Link Budget Calculator</h1>
        <p>A simplified tool for non-communications professionals to assess the viability of a connectivity link by adjusting key parameters based on several assumptions.</p>
      </header>
      <div className="link-layout">
        <form className="link-card" onSubmit={calculate}>
          <h2>Input parameters</h2>
          <fieldset><legend>Path and data</legend><div className="link-grid">
            <Field id="band" label="Frequency band"><Select id="band" value={band} onChange={changeBand} options={bands} placeholder="Select a band…" /></Field>
            {band === "custom" && <Field id="frequency" label="Frequency (MHz)"><NumberField id="frequency" value={frequency} onChange={v => { setFrequency(v); setResult(null); }} min="0.001" /></Field>}
            <Field id="path" label="Path type"><Select id="path" value={pathLoss} onChange={setPathLoss} options={paths} /></Field>
            <Field id="distance" label="Distance (km)"><NumberField id="distance" value={distance} onChange={setDistance} min="0.001" /></Field>
            <Field id="rate" label="Data rate"><Select id="rate" value={rate} onChange={changeRate} options={rateOptions} disabled={!band} /></Field>
          </div></fieldset>
          <fieldset disabled={!band}><legend>Transmitter</legend><p className="link-note">Assumed cable loss: 2 dB</p><div className="link-grid">
            {band === "custom" ? <>
              <Field id="txGain" label="Tx antenna gain (dBi)"><NumberField id="txGain" value={txGain} onChange={setTxGain} placeholder="e.g. 10" /></Field>
              <Field id="txPower" label="Tx power (dBW)"><NumberField id="txPower" value={txPower} onChange={setTxPower} placeholder="e.g. 0" /></Field>
            </> : <>
              <Field id="txType" label="Tx antenna type"><Select id="txType" value={txType} onChange={v => { setTxType(v); setTxGain(""); }} options={types} placeholder="Select type…" /></Field>
              <Field id="txGain" label="Tx antenna gain"><Select id="txGain" value={txGain} onChange={setTxGain} options={pairOptions(antennaGains[band]?.[txType] || [])} placeholder="Select gain…" disabled={!txType} /></Field>
              <Field id="txPower" label="Tx power"><Select id="txPower" value={txPower} onChange={setTxPower} options={pairOptions(txPowerLevels[band] || [])} placeholder="Select power…" /></Field>
            </>}
          </div></fieldset>
          <fieldset disabled={!band}><legend>Receiver</legend><p className="link-note">Assumed cable loss: 2 dB</p><div className="link-grid">
            {band === "custom" ? <Field id="rxGain" label="Rx antenna gain (dBi)"><NumberField id="rxGain" value={rxGain} onChange={setRxGain} placeholder="e.g. 10" /></Field> : <>
              <Field id="rxType" label="Rx antenna type"><Select id="rxType" value={rxType} onChange={v => { setRxType(v); setRxGain(""); }} options={types} placeholder="Select type…" /></Field>
              <Field id="rxGain" label="Rx antenna gain"><Select id="rxGain" value={rxGain} onChange={setRxGain} options={pairOptions(antennaGains[band]?.[rxType] || [])} placeholder="Select gain…" disabled={!rxType} /></Field>
            </>}
            <Field id="temperature" label="System noise temperature"><Select id="temperature" value={temperature} onChange={setTemperature} options={temperatures} /></Field>
            <Field id="snr" label="Required SNR"><Select id="snr" value={snr} onChange={setSnr} options={snrValues} /></Field>
          </div></fieldset>
          <button className="link-submit" type="submit" disabled={!band}>Calculate link margin</button>
        </form>
        <section className="link-assumptions" aria-labelledby="calculator-notes">
  <h2 id="calculator-notes">Calculator notes</h2>

  <h3>Frequency bands</h3>
  <p>
    HF is likely suitable only for data rate 1, and UHF only up to data
    rate 2, due to bandwidth and propagation constraints.
  </p>

  <h3>Path types</h3>
  <p>
    Each terrain type adds an illustrative loss to the free space path loss
    to account for obstruction and scattering.
  </p>
  <ul>
    <li><strong>Unobstructed line of sight:</strong> 0 dB additional loss.</li>
    <li><strong>Mountainous terrain:</strong> 15 dB additional loss.</li>
    <li><strong>Crater or lava tube:</strong> 40 dB additional loss.</li>
  </ul>

  <h3>Data rates</h3>
  <p>
    Higher data rates require more energy, so available capacity may fall
    when power generation is limited.
  </p>
  <ul>
    <li><strong>1:</strong> Basic telemetry and small files.</li>
    <li><strong>3:</strong> Astronaut voice and basic rover support.</li>
    <li><strong>5:</strong> Multiple rovers, video, navigation, telemetry, and control.</li>
  </ul>

  <h3>Required SNR</h3>
  <p>
    Signal-to-noise ratio is the minimum signal quality assumed for the
    selected application. More demanding applications use higher values.
  </p>

  <h3>System noise temperature</h3>
  <p>
    The presets represent different assumed operating environments, from
    permanently shadowed regions to full sun exposure.
  </p>
</section>
        <aside className="link-side">
          <section className="link-card link-results" aria-live="polite" aria-atomic="true">
            <h2>Calculation results</h2>
            {!result && <p>Choose a frequency band and complete the inputs to see the estimated margin.</p>}
            {result?.error && <p role="alert" className="link-error">{result.error}</p>}
            {result && !result.error && <>
              <p className={`link-margin ${result.margin >= 10 ? "good" : result.margin >= 0 ? "caution" : "poor"}`}>{result.margin.toFixed(2)} <span>dB</span></p>
              <p>{result.margin >= 10 ? "Positive margin of at least 10 dB" : result.margin >= 0 ? "Positive margin below 10 dB" : "Negative margin"}</p>
              <dl className="link-metrics">
                <div><dt>Free space path loss</dt><dd>{result.fspl.toFixed(2)} dB</dd></div>
                <div><dt>Received power</dt><dd>{result.received.toFixed(2)} dBW</dd></div>
                <div><dt>Thermal noise power</dt><dd>{result.noise.toFixed(2)} dBW</dd></div>
                <div><dt>Required received power</dt><dd>{result.required.toFixed(2)} dBW</dd></div>
              </dl>
            </>}
          </section>
          <section className="link-card link-assumptions">
            <h2>How this estimate works</h2>
            <p>It subtracts free space loss, terrain loss, and 2 dB of cable loss at each end from transmitted power plus antenna gains. It compares received power with thermal noise over a bandwidth assumed equal to the selected data rate, plus the selected SNR.</p>
            <p>Terrain adds 0, 15, or 40 dB of illustrative loss. HF is limited here to 10 kbps, and UHF to 100 kbps. Antenna gains, power choices, noise temperatures, and required SNR values are simplified presets from the supplied calculator.</p>
            <p>Real links also depend on visibility, terrain geometry, antenna pointing, modulation, coding, receiver noise figure, interference, and implementation losses. A positive result alone cannot establish a working link through an obstructed path.</p>
          </section>
        </aside>
      </div>
    </main>
    <Footer />
  </div>;
}
