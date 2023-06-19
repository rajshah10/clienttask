import React, { useState } from 'react'
import "../styles/sidebar.css"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { data } from '../constants';
import { Checkbox } from '@mui/material';
import CheckComponent from '../ui/CheckComponent';
import Summary from '../ui/Summary';
const Sidebar = () => {
    const [expandedPanels, setExpandedPanels] = useState([]);
    const [childPanles, setChildPanels] = useState([])
    const [innerChildPanels, setInnerChildPanels] = useState([])
    const handlePanelClick = (panelIndex, state, setState) => {
        const newExpandedPanels = state.includes(panelIndex)
            ? state.filter((index) => index !== panelIndex)
            : [...state, panelIndex];
        setState(newExpandedPanels);
    };

    return (
        <div className='sidebar'>
            <div className='side_upper'>
                <div>
                    <QueryStatsIcon />
                    <h4>Statistics</h4>
                </div>
            </div>
            {data?.map((sampledata, index) => (
                <div key={index} className='side_below'>
                    <div>
                        <Accordion
                            expanded={expandedPanels.includes(index)}
                            onChange={() => handlePanelClick(index, expandedPanels, setExpandedPanels)
                            }
                            style={{
                                background: expandedPanels.includes(index) ? "#4BA3DF" : "#070927", color: "white", boxShadow: 'none', borderRadius: "0", borderBottom: expandedPanels.includes(index) ? "1px solid #3F445D" : "1px solid #121337",
                            }}
                        >
                            <Summary data={sampledata} index={index} />
                            <AccordionDetails style={{ background: "#0F1332" }}>
                                <div className='expand'>
                                    <div className='flexCol'>
                                        {sampledata.nodes[0].nodes[0]?.nodes?.length === 0 ?
                                            sampledata.nodes[0].nodes.map((innerData, innerIndex) => (
                                                <CheckComponent data={innerData} index={innerIndex} />
                                            )) :
                                            sampledata.nodes[0]?.nodes?.map((data, innerInd) => (
                                                <Accordion
                                                    expanded={childPanles.includes(innerInd)}
                                                    onChange={() => handlePanelClick(innerInd, childPanles, setChildPanels)
                                                    }
                                                    style={{
                                                        background: expandedPanels.includes(innerInd) ? "#0F1332" : "#0F1332", color: "white", boxShadow: 'none', borderRadius: "0",
                                                    }}
                                                >
                                                    <Summary data={data} index={innerInd} />
                                                    <AccordionDetails>
                                                        <div className='expand'>
                                                            <div className='flexCol'>
                                                                {data.nodes.length === 0 ?
                                                                    <>
                                                                        {data.nodes.map((data, index) => (
                                                                            <div style={{ height: "32px" }}>
                                                                                <Checkbox size="small" style={{ color: "white" }} />
                                                                                <span key={index}>
                                                                                    {data?.label}
                                                                                </span>
                                                                            </div>
                                                                        ))}
                                                                    </> : <>
                                                                        {
                                                                            data.nodes.map((data, index) => (
                                                                                <Accordion
                                                                                    expanded={innerChildPanels.includes(index)}
                                                                                    onChange={() => handlePanelClick(index, innerChildPanels, setInnerChildPanels)
                                                                                    }
                                                                                    style={{
                                                                                        background: innerChildPanels.includes(index) ? "#0F1332" : "#0F1332", color: "white", boxShadow: 'none', borderRadius: "0",
                                                                                    }}

                                                                                >
                                                                                    <Summary data={data} index={index} />
                                                                                    <AccordionDetails>
                                                                                        <div className='expand'>
                                                                                            <div className='flexCol'>
                                                                                                {
                                                                                                    data.nodes.length === 0 ? "" :
                                                                                                        <>
                                                                                                            {data.nodes.map((data, index) => (
                                                                                                                <CheckComponent index={index} data={data} />
                                                                                                            ))}
                                                                                                        </>
                                                                                                }
                                                                                            </div>

                                                                                        </div>
                                                                                    </AccordionDetails>
                                                                                </Accordion>
                                                                            ))
                                                                        }
                                                                    </>}
                                                            </div>
                                                        </div>
                                                    </AccordionDetails>
                                                </Accordion>
                                            ))
                                        }
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Sidebar


