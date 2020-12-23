export const listMinolta = [
    { 
        "name": "AccurioPrint C759", 
        "id": "1",
        "errors": {
            "C0002": {
                "description": "Paper feed communication error. When the paper feed/transport drive board (PFTDB) is receiving data, a communication error is detected.",
                "causes": "Paper feed/transport drive board (PFTDB)MFP board (MFPB)",
                "remedy": "1. Turn OFF the main power switch, disconnect and then connect the power cord. Wait for 10 sec. or more after connect the power cord, and turn ON the main power switch.2. Correct the harness connection between MFPB CN2E-PFTDB CN4 if faulty.3. Rewrite the firmware.4. PFTDB F3 conduction check5. Replace PFTDB.6. MFPB F2E conduction check7. Replace MFPB.",
            },

        }
    },
    {
        "name": "Bizhub C280", 
        "id":"2",
        "errors": {
            "C2254": {
                "description": "some descript",
                "remedy": "some remedy"
            },
            "C2255": {
                "description": "some descript 2 ",
                "remedy": "some remedy 2"
            }
        }
    }

]