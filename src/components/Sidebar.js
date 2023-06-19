import React, { useState } from 'react'
import "../styles/sidebar.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import { data } from '../constants';
import { Checkbox } from '@mui/material';
const Sidebar = () => {
    const [expandedPanels, setExpandedPanels] = useState([]);
    const handleClick = (panelIndex) => {
        const newExpandedPanels = expandedPanels.includes(panelIndex)
            ? expandedPanels.filter((index) => index !== panelIndex)
            : [...expandedPanels, panelIndex];
        setExpandedPanels(newExpandedPanels);
    };
    return (
        <div className='sidebar'>
            <div className='side_upper'>
                <div>
                    <QueryStatsIcon />
                    <h4>Statistics</h4>
                </div>
            </div>
            {data.map((sampledata, index) => (
                <div key={index} className='side_below'>
                    <div>
                        <Accordion
                            expanded={expandedPanels.includes(index)}
                            onChange={() => handleClick(index)}
                            style={{
                                background: expandedPanels.includes(index) ? "#4BA3DF" : "#070927", color: "white", boxShadow: 'none', borderRadius: "0", borderBottom: expandedPanels.includes(index) ? "1px solid #3F445D" : "1px solid #121337",
                            }}
                        >
                            <AccordionSummary
                                className="asummary"
                                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                                aria-controls={`panel${index}a-content`}
                                id={`panel${index}a-header`}
                            >
                                <Typography>
                                    <Checkbox size="small" style={{ color: "white", marginTop: "-4px" }} />
                                    {sampledata.label}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{ background: "#0F1332" }}>
                                <div className='expand'>
                                    <div className='flexCol'>
                                        {sampledata.nodes[0].nodes.map((innerData, innerIndex) => (
                                            <div style={{ height: "32px" }}>
                                                <Checkbox size="small" style={{ color: "white" }} />
                                                <span key={innerIndex}>
                                                    {innerData.label}
                                                </span>
                                            </div>
                                        ))}
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


