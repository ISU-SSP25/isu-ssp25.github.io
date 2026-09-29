export const antennaGains = {
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

export const txPowerLevels = {
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

export const snrOptions = {
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
