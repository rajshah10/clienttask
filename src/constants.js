export const data = [
    {
        key: "pointof",
        label: "Point Of Interests",
        nodes: [
            {
                key: "district",
                label: "District",
                nodes: [],
                url: "https://www.google.com/search?q=dog"
            },
            {
                key: "schools",
                label: "schools",
                nodes: [],
                url: "https://www.google.com/search?q=fox"
            },
            {
                key: "cp",
                label: "Capex Projects",
                nodes: [],
                url: "https://www.google.com/search?q=wolf"
            }


        ],
        url: "https://www.google.com/search?q=mammal"
    },
    {
        key: "challenges",
        label: "Challenges",
        nodes: [
            {
                key: "2022",
                label: "2022",
                nodes: [
                    {
                        key: "highways",
                        label: "Highways",
                        nodes: [
                            {
                                key: "morning",
                                label: "Morning Congestion",
                                nodes: []
                            },
                            {
                                key: "morning",
                                label: "Morning Congestion",
                                nodes: []
                            }
                        ]
                    },
                    {
                        key: "junctions",
                        label: "Junctions",
                        nodes: []
                    },
                    {
                        key: "bridges",
                        label: "Bridges",
                        nodes: []
                    },

                ],
                url: "https://www.google.com/search?q=dog"
            },
            {
                key: "2025",
                label: "2025",
                nodes: [],
                url: "https://www.google.com/search?q=fox"
            },


        ],
        url: "https://www.google.com/search?q=mammal"
    },
]



export const panelClick = (panelIndex, state, setState) => {
    const newExpandedPanels = state.includes(panelIndex)
        ? state.filter((index) => index !== panelIndex)
        : [...state, panelIndex];

    return newExpandedPanels
}