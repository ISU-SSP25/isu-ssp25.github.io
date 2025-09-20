import React, { useState, useEffect } from 'react';
import './LunarLinkCalculatorEmbed.css';

export function LunarLinkCalculatorEmbed() {
  const [formData, setFormData] = useState({
    frequencySelect: '',
    customFrequency: '',
    pathType: '0',
    distance: '100',
    dataRate: '10000',
    txAntennaType: '',
    txGain: '',
    txPower: '',
    rxAntennaType: '',
    rxGain: '',
    systemNoiseTemp: '390',
    requiredSnr: '12'
  });

  const [results, setResults] = useState(null);
  const [isCalculatorEnabled, setIsCalculatorEnabled] = useState(false);

  const antennaGains = {
    '30': {
      'omni': [
        {value: 0, label: '0 dBi: Low Gain Dipole'},
        {value: 2, label: '2 dBi: Standard Whip'},
        {value: 4, label: '4 dBi: Optimized Monopole'}
      ],
      'directional': [],
      'highlyDirectional': []
    },
    '400': {
      'omni': [
        {value: 2, label: '2 dBi: Simple Dipole'},
        {value: 4, label: '4 dBi: Turnstile Antenna'},
        {value: 6, label: '6 dBi: Quadrifilar Helix'}
      ],
      'directional': [
        {value: 8, label: '8 dBi: Small Yagi Array'},
        {value: 10, label: '10 dBi: High Gain Yagi'}
      ],
      'highlyDirectional': []
    },
    '1200': {
      'omni': [
        {value: 3, label: '3 dBi: Simple Antenna'},
        {value: 5, label: '5 dBi: Omni-directional'}
      ],
      'directional': [
        {value: 8, label: '8 dBi: Helical Antenna'},
        {value: 12, label: '12 dBi: Small Horn'},
        {value: 15, label: '15 dBi: Phased Array'}
      ],
      'highlyDirectional': [
        {value: 18, label: '18 dBi: Reflector Dish'}
      ]
    },
    '2400': {
      'omni': [
        {value: 4, label: '4 dBi: Basic Omni'},
        {value: 6, label: '6 dBi: Standard Omni'}
      ],
      'directional': [
        {value: 8, label: '8 dBi: Horn Antenna'},
        {value: 12, label: '12 dBi: Medium Gain Patch'},
        {value: 15, label: '15 dBi: Parabolic Reflector'}
      ],
      'highlyDirectional': [
        {value: 18, label: '18 dBi: High Gain Dish'},
        {value: 22, label: '22 dBi: Large Parabolic Reflector'}
      ]
    },
    '8000': {
      'omni': [
        {value: 5, label: '5 dBi: Basic Omni'}
      ],
      'directional': [
        {value: 10, label: '10 dBi: Standard Horn'},
        {value: 15, label: '15 dBi: Medium Gain Dish'},
        {value: 20, label: '20 dBi: Large Horn'}
      ],
      'highlyDirectional': [
        {value: 25, label: '25 dBi: High Gain Dish'},
        {value: 30, label: '30 dBi: Large Dish Antenna'},
        {value: 35, label: '35 dBi: Extremely High Gain Reflector'}
      ]
    }
  };

  const txPowerLevels = {
    '30': [
      {value: -10, label: '-10 dBW (0.1 W): Small Rover Radio'},
      {value: -3, label: '-3 dBW (0.5 W): Astronaut Suit Radio'},
      {value: 0, label: '0 dBW (1 W): Large Rover Radio'},
      {value: 10, label: '10 dBW (10 W): Base Station Radio'},
      {value: 20, label: '20 dBW (100 W): Fixed Infrastructure Radio'}
    ],
    '400': [
      {value: -10, label: '-10 dBW (0.1 W): Small Rover Radio'},
      {value: -3, label: '-3 dBW (0.5 W): Astronaut Suit Radio'},
      {value: 0, label: '0 dBW (1 W): Large Rover Radio'},
      {value: 10, label: '10 dBW (10 W): Base Station Radio'},
      {value: 20, label: '20 dBW (100 W): Fixed Infrastructure Radio'}
    ],
    '1200': [
      {value: -10, label: '-10 dBW (0.1 W): Small Rover Radio'},
      {value: -3, label: '-3 dBW (0.5 W): Astronaut Suit Radio'},
      {value: 0, label: '0 dBW (1 W): Large Rover Radio'},
      {value: 10, label: '10 dBW (10 W): Base Station Radio'},
      {value: 20, label: '20 dBW (100 W): Fixed Infrastructure Radio'}
    ],
    '2400': [
      {value: -7, label: '-7 dBW (0.2 W): Small Rover Radio'},
      {value: -3, label: '-3 dBW (0.5 W): Astronaut Suit Radio'},
      {value: 0, label: '0 dBW (1 W): Large Rover Radio'},
      {value: 7, label: '7 dBW (5 W): Base Station Radio'},
      {value: 10, label: '10 dBW (10 W): Fixed Infrastructure Radio'}
    ],
    '8000': [
      {value: -7, label: '-7 dBW (0.2 W): Small Rover Radio'},
      {value: -3, label: '-3 dBW (0.5 W): Astronaut Suit Radio'},
      {value: 0, label: '0 dBW (1 W): Large Rover Radio'},
      {value: 7, label: '7 dBW (5 W): Base Station Radio'},
      {value: 10, label: '10 dBW (10 W): Fixed Infrastructure Radio'},
      {value: 15, label: '15 dBW (32 W): Fixed Infrastructure Radio'},
      {value: 20, label: '20 dBW (100 W): Fixed Infrastructure Radio'}
    ]
  };

  const snrOptions = {
    'general': [
      {value: 6, label: '6 dB: Basic Data (Telemetry, Command, PNT)'},
      {value: 9, label: '9 dB: Clear Voice & Low-Res Imaging'},
      {value: 12, label: '12 dB: SD Video & Real-Time Data'},
      {value: 15, label: '15 dB: HD Video & High-Throughput Data'}
    ],
    '30': [
      {value: 6, label: '6 dB: Basic Data (Telemetry, Command, PNT)'}
    ],
    '400': [
      {value: 6, label: '6 dB: Basic Data (Telemetry, Command, PNT)'},
      {value: 9, label: '9 dB: Clear Voice & Low-Res Imaging'}
    ],
    '10000': [
      {value: 6, label: '6 dB: Basic Data (Telemetry, Command, PNT)'},
    ],
    '100000': [
      {value: 6, label: '6 dB: Basic Data (Telemetry, Command, PNT)'},
      {value: 9, label: '9 dB: Clear Voice & Low-Res Imaging'}
    ]
  };

  // Get available antenna types for selected frequency
  const getAvailableAntennaTypes = (freq) => {
    if (!freq || freq === 'custom') return [];
    const types = [];
    if (antennaGains[freq]) {
      Object.keys(antennaGains[freq]).forEach(type => {
        if (antennaGains[freq][type].length > 0) {
          types.push({
            value: type,
            label: type.charAt(0).toUpperCase() + type.slice(1) + 
                  ' (' + (type === 'omni' ? 'No Focus' : 
                          type === 'directional' ? 'Focused' : 'Very Focused') + ')'
          });
        }
      });
    }
    return types;
  };

  // Get available gains for selected antenna type and frequency
  const getAvailableGains = (freq, antennaType) => {
    if (!freq || !antennaType || freq === 'custom') return [];
    return antennaGains[freq]?.[antennaType] || [];
  };

  // Get available power levels for selected frequency
  const getAvailablePowerLevels = (freq) => {
    if (!freq || freq === 'custom') return [];
    return txPowerLevels[freq] || [];
  };

  // Get available SNR options
  const getAvailableSnrOptions = (dataRateValue, freqValue) => {
    const dataRateKey = String(dataRateValue);
    let options = snrOptions.general;

    if (freqValue === '30' && snrOptions[freqValue]) {
      options = snrOptions[freqValue];
    } else if (freqValue === '400' && snrOptions[freqValue]) {
      options = snrOptions[freqValue];
    } else if (snrOptions[dataRateKey]) {
      options = snrOptions[dataRateKey];
    }

    return options;
  };

  // Handle frequency selection change
  const handleFrequencyChange = (value) => {
    setFormData(prev => ({
      ...prev,
      frequencySelect: value,
      customFrequency: value === 'custom' ? '' : value,
      txAntennaType: '',
      txGain: '',
      txPower: '',
      rxAntennaType: '',
      rxGain: ''
    }));

    if (value === '') {
      setIsCalculatorEnabled(false);
    } else {
      setIsCalculatorEnabled(true);
      
      // Set default data rate based on frequency limitations
      if (value === '30') {
        setFormData(prev => ({ ...prev, dataRate: '10000' }));
      } else if (value === '400') {
        setFormData(prev => ({ ...prev, dataRate: '100000' }));
      }
    }
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Calculate link budget
  const calculateLinkBudget = () => {
    const txPower = parseFloat(formData.txPower);
    const txGain = parseFloat(formData.txGain);
    const rxGain = parseFloat(formData.rxGain);
    const pathLoss = parseFloat(formData.pathType);
    const assumedCableLoss = 2;
    const frequencyMHz = parseFloat(formData.frequencySelect === 'custom' ? formData.customFrequency : formData.frequencySelect);
    const distanceKm = parseFloat(formData.distance);
    const systemNoiseTemp = parseFloat(formData.systemNoiseTemp);
    const requiredSnr = parseFloat(formData.requiredSnr);
    const dataRate = parseFloat(formData.dataRate);

    if (isNaN(txPower) || isNaN(txGain) || isNaN(rxGain) || isNaN(pathLoss) || 
        isNaN(frequencyMHz) || isNaN(distanceKm) || isNaN(systemNoiseTemp) || 
        isNaN(requiredSnr) || isNaN(dataRate) || frequencyMHz <= 0 || distanceKm <= 0) {
      setResults({ error: 'Please enter valid, non-zero numbers for all fields.' });
      return;
    }

    const k = 1.38e-23;
    const fspl = 32.44 + (20 * Math.log10(distanceKm)) + (20 * Math.log10(frequencyMHz));
    const receivedPower = txPower + txGain + rxGain - assumedCableLoss - assumedCableLoss - fspl - pathLoss;
    const thermalNoisePower = 10 * Math.log10(k) + 10 * Math.log10(systemNoiseTemp) + 10 * Math.log10(dataRate);
    const requiredReceivedPower = requiredSnr + thermalNoisePower;
    const linkMargin = receivedPower - requiredReceivedPower;

    let marginClass = '#FCA5A5'; // red
    let message = 'Link is NOT viable. Margin is negative.';
    if (linkMargin >= 3) {
      marginClass = '#86EFAC'; // green
      message = 'Link is viable with good margin.';
    } else if (linkMargin >= 0) {
      marginClass = '#FDE047'; // yellow
      message = 'Link is marginally viable. Additional margin is recommended.';
    }

    setResults({
      fspl: fspl.toFixed(2),
      receivedPower: receivedPower.toFixed(2),
      thermalNoisePower: thermalNoisePower.toFixed(2),
      requiredReceivedPower: requiredReceivedPower.toFixed(2),
      linkMargin: linkMargin.toFixed(2),
      marginClass,
      message
    });
  };

  return (
    <div className="lunar-calculator">
      <div className="lunar-calculator-container">
        <h1 className="lunar-calculator-title">Lunar Link Budget Calculator</h1>
        <p className="lunar-calculator-subtitle">
          A simplified tool for non-communications professionals to assess the viability of a connectivity link by adjusting key parameters based on several assumptions
        </p>

        <div className="lunar-calculator-card">
          <h2 className="lunar-calculator-section-title">Input Parameters</h2>
          
          {/* Path & Data Section */}
          <div>
            <h3 className="lunar-calculator-subsection-title">Path & Data</h3>
            <div className="lunar-calculator-grid">
              <div className="lunar-calculator-input-group">
                <label className="lunar-calculator-label">Frequency Band</label>
                <select 
                  value={formData.frequencySelect} 
                  onChange={(e) => handleFrequencyChange(e.target.value)}
                  className="lunar-calculator-select"
                >
                  <option value="">Select a frequency band...</option>
                  <option value="30">HF (30 MHz)</option>
                  <option value="400">UHF (400 MHz)</option>
                  <option value="1200">L-band (1.2 GHz)</option>
                  <option value="2400">S-band (2.4 GHz)</option>
                  <option value="8000">X-band (8 GHz)</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
              
              {formData.frequencySelect === 'custom' && (
                <div className="lunar-calculator-input-group">
                  <label className="lunar-calculator-label">Frequency (MHz)</label>
                  <input 
                    type="number" 
                    value={formData.customFrequency}
                    onChange={(e) => handleInputChange('customFrequency', e.target.value)}
                    className="lunar-calculator-input"
                  />
                </div>
              )}
              
              <div className="lunar-calculator-input-group">
                <label className="lunar-calculator-label">Path Type</label>
                <select 
                  value={formData.pathType}
                  onChange={(e) => handleInputChange('pathType', e.target.value)}
                  className="lunar-calculator-select"
                >
                  <option value="0">Unobstructed direct line of site</option>
                  <option value="15">Mountainous with minor potential obstruction</option>
                  <option value="40">Crater or lava tube communications</option>
                </select>
              </div>
              
              <div className="lunar-calculator-input-group">
                <label className="lunar-calculator-label">Distance (km)</label>
                <input 
                  type="number" 
                  value={formData.distance}
                  onChange={(e) => handleInputChange('distance', e.target.value)}
                  className="lunar-calculator-input"
                />
              </div>
              
              <div className="lunar-calculator-input-group">
                <label className="lunar-calculator-label">Data Rate</label>
                <select 
                  value={formData.dataRate}
                  onChange={(e) => handleInputChange('dataRate', e.target.value)}
                  className="lunar-calculator-select"
                  disabled={!isCalculatorEnabled}
                >
                  <option value="10000">1: 10 kbps - Basic PNT and telemetry</option>
                  <option value="100000">2: 100 kbps - Scientific data collection</option>
                  <option value="1000000" disabled={formData.frequencySelect === '30' || formData.frequencySelect === '400'}>3: 1 Mbps - Limited surface operations</option>
                  <option value="100000000" disabled={formData.frequencySelect === '30' || formData.frequencySelect === '400'}>4: 100 Mbps - Moderate surface operations</option>
                  <option value="1000000000" disabled={formData.frequencySelect === '30' || formData.frequencySelect === '400'}>5: 1 Gbps - High intensity surface operations</option>
                </select>
              </div>
            </div>

            {/* Transmitter & Receiver Section */}
            <div className={isCalculatorEnabled ? '' : 'lunar-calculator-section-disabled'}>
              {/* Transmitter */}
              <div>
                <h3 className="lunar-calculator-subsection-title">Transmitter</h3>
                <p className="lunar-calculator-assumption-text">Assumed cable loss: 2 dB</p>
                <div className="lunar-calculator-grid">
                  <div className="lunar-calculator-input-group">
                    <label className="lunar-calculator-label">Tx Antenna Type</label>
                    <select 
                      value={formData.txAntennaType}
                      onChange={(e) => handleInputChange('txAntennaType', e.target.value)}
                      className="lunar-calculator-select"
                      disabled={!isCalculatorEnabled}
                    >
                      <option value="">Select type...</option>
                      {getAvailableAntennaTypes(formData.frequencySelect).map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="lunar-calculator-input-group">
                    <label className="lunar-calculator-label">Tx Antenna Gain (dBi)</label>
                    <select 
                      value={formData.txGain}
                      onChange={(e) => handleInputChange('txGain', e.target.value)}
                      className="lunar-calculator-select"
                      disabled={!isCalculatorEnabled || !formData.txAntennaType}
                    >
                      <option value="">Select gain...</option>
                      {getAvailableGains(formData.frequencySelect, formData.txAntennaType).map(gain => (
                        <option key={gain.value} value={gain.value}>{gain.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="lunar-calculator-input-group">
                    <label className="lunar-calculator-label">Tx Power (dBW)</label>
                    <select 
                      value={formData.txPower}
                      onChange={(e) => handleInputChange('txPower', e.target.value)}
                      className="lunar-calculator-select"
                      disabled={!isCalculatorEnabled}
                    >
                      <option value="">Select Tx Power...</option>
                      {getAvailablePowerLevels(formData.frequencySelect).map(power => (
                        <option key={power.value} value={power.value}>{power.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Receiver */}
              <div>
                <h3 className="lunar-calculator-subsection-title">Receiver</h3>
                <p className="lunar-calculator-assumption-text">Assumed cable loss: 2 dB</p>
                <div className="lunar-calculator-grid">
                  <div className="lunar-calculator-input-group">
                    <label className="lunar-calculator-label">Rx Antenna Type</label>
                    <select 
                      value={formData.rxAntennaType}
                      onChange={(e) => handleInputChange('rxAntennaType', e.target.value)}
                      className="lunar-calculator-select"
                      disabled={!isCalculatorEnabled}
                    >
                      <option value="">Select type...</option>
                      {getAvailableAntennaTypes(formData.frequencySelect).map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="lunar-calculator-input-group">
                    <label className="lunar-calculator-label">Rx Antenna Gain (dBi)</label>
                    <select 
                      value={formData.rxGain}
                      onChange={(e) => handleInputChange('rxGain', e.target.value)}
                      className="lunar-calculator-select"
                      disabled={!isCalculatorEnabled || !formData.rxAntennaType}
                    >
                      <option value="">Select gain...</option>
                      {getAvailableGains(formData.frequencySelect, formData.rxAntennaType).map(gain => (
                        <option key={gain.value} value={gain.value}>{gain.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="lunar-calculator-input-group">
                    <label className="lunar-calculator-label">System Noise Temperature (K)</label>
                    <select 
                      value={formData.systemNoiseTemp}
                      onChange={(e) => handleInputChange('systemNoiseTemp', e.target.value)}
                      className="lunar-calculator-select"
                    >
                      <option value="25">25 K: Permanently Shadowed Region (PSR)</option>
                      <option value="250">250 K: Partial Sun Exposure</option>
                      <option value="390">390 K: Full Sun Exposure</option>
                    </select>
                  </div>
                  
                  <div className="lunar-calculator-input-group">
                    <label className="lunar-calculator-label">Required SNR (dB)</label>
                    <select 
                      value={formData.requiredSnr}
                      onChange={(e) => handleInputChange('requiredSnr', e.target.value)}
                      className="lunar-calculator-select"
                    >
                      {getAvailableSnrOptions(formData.dataRate, formData.frequencySelect).map(snr => (
                        <option key={snr.value} value={snr.value}>{snr.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lunar-calculator-button-container">
            <button 
              onClick={calculateLinkBudget}
              className="lunar-calculator-button"
              disabled={!isCalculatorEnabled}
            >
              Calculate
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div className="lunar-calculator-card">
          <h2 className="lunar-calculator-section-title">Calculation Results</h2>
          <div>
            {!results ? (
              <div className="lunar-calculator-placeholder">
                Enter parameters and click 'Calculate' to see results.
              </div>
            ) : results.error ? (
              <div className="lunar-calculator-error">
                {results.error}
              </div>
            ) : (
              <>
                <div className="lunar-calculator-results-grid">
                  <div className="lunar-calculator-result-item">
                    <p className="lunar-calculator-result-label">Free Space Path Loss (FSPL):</p>
                    <p className="lunar-calculator-result-value">{results.fspl} dB</p>
                  </div>
                  <div className="lunar-calculator-result-item">
                    <p className="lunar-calculator-result-label">Received Power:</p>
                    <p className="lunar-calculator-result-value">{results.receivedPower} dBW</p>
                  </div>
                  <div className="lunar-calculator-result-item">
                    <p className="lunar-calculator-result-label">Thermal Noise Power:</p>
                    <p className="lunar-calculator-result-value">{results.thermalNoisePower} dBW</p>
                  </div>
                  <div className="lunar-calculator-result-item">
                    <p className="lunar-calculator-result-label">Required Received Power:</p>
                    <p className="lunar-calculator-result-value">{results.requiredReceivedPower} dBW</p>
                  </div>
                </div>
                <div className="lunar-calculator-final-result">
                  <p className="lunar-calculator-final-label">Final Link Margin:</p>
                  <p className={`lunar-calculator-final-value ${
                    results.linkMargin >= 3 ? 'result-color-green' : 
                    results.linkMargin >= 0 ? 'result-color-yellow' : 'result-color-red'
                  }`}>
                    {results.linkMargin} dB
                  </p>
                  <p className="lunar-calculator-final-message">
                    {results.message}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Footnotes */}
        <div className="lunar-calculator-footnote">
          <p><b>Frequency Band Footnotes</b></p>
          <p>HF is likely only suitable for Data rate 1, and UHF is only suitable for up to Data rate 2 due to limited bandwidth and path loss characteristics.</p>
          <p><b>Path Type Footnotes</b></p>
          <p>The assumed path loss for each terrain type is an additional loss applied to the free space path loss to account for obstructions and signal scattering.</p>
          <ul>
            <li><b>Unobstructed direct line of site:</b> Assumes 0 dB of additional loss.</li>
            <li><b>Mountainous with minor potential obstruction:</b> Assumes 15 dB of additional loss due to diffraction and multipath.</li>
            <li><b>Crater or lava tube communications:</b> Assumes 40 dB of additional loss due to significant signal blockage and interference.</li>
          </ul>
          <p><b>Data Rate Footnotes</b></p>
          <p>Increased data rates have additional energy requirements, and therefore capacity may be limited or reduced during periods of lower solar power generation.</p>
          <p><b>1:</b> High-latency data with limited file size.</p>
          <p><b>3:</b> Includes astronaut voice communications and basic support to rover functions.</p>
          <p><b>5:</b> Includes multiple rovers operating, video streaming, full navigation services, telemetry and control.</p>
          <p><b>Required SNR Footnotes</b></p>
          <p>Required SNR (Signal-to-Noise Ratio) is the minimum signal quality needed for reliable communication. Higher SNR values are required for more complex applications.</p>
          <p><b>System Noise Footnotes</b></p>
          <p>System noise temperature depends on the operational environment and where a rover is deployed. This ranges from the coldest regions in permanently shadowed craters to areas of full sun exposure.</p>
        </div>
      </div>
    </div>
  );
}