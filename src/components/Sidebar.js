import React, { useState } from 'react';
import "../styles/sidebar.css";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { data, panelClick } from '../constants';
import Summary from '../ui/Summary';

const Sidebar = () => {
    const [expandedPanels, setExpandedPanels] = useState([]);

    const handlePanelClick = (panelIndex, state, setState) => {
        const newExpandedPanels = panelClick(panelIndex, state, setState)
        setState(newExpandedPanels);
    };

    const renderAccordion = (dataArray, state, setState) => {
        return dataArray.map((sampledata, index) => (
            <div key={index} className='side_below'>
                <div>
                    <Accordion
                        expanded={state.includes(index)}
                        onChange={() => handlePanelClick(index, state, setState)}
                        style={{
                            background: state.includes(index) ? "#4BA3DF" : "#070927",
                            color: "white",
                            boxShadow: 'none',
                            borderRadius: "0",
                            borderBottom: state.includes(index) ? "1px solid #3F445D" : "1px solid #121337",
                        }}
                    >
                        <Summary data={sampledata} index={index} />
                        <AccordionDetails style={{ background: "#0F1332" }}>
                            <div className='expand'>
                                <div className='flexCol'>
                                    {sampledata?.nodes?.length > 0 && sampledata?.nodes?.map((innerData, innerIndex) => (
                                        <RecursiveAccordion
                                            key={innerIndex}
                                            data={innerData}
                                            index={innerIndex}
                                            state={state}
                                            setState={setState}
                                        />
                                    ))}
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        ));
    };

    return (
        <div className='sidebar'>
            <div className='side_upper'>
                <div>
                    <QueryStatsIcon />
                    <h4>Statistics</h4>
                </div>
            </div>
            {renderAccordion(data, expandedPanels, setExpandedPanels)}
        </div>
    );
};

const RecursiveAccordion = ({ data, index, state, setState }) => {
    const [childPanels, setChildPanels] = useState([]);

    const handlePanelClick = (panelIndex, childPanels, setChildPanels) => {
        const newExpandedPanels = panelClick(panelIndex, childPanels, setChildPanels)
        setChildPanels(newExpandedPanels);
    };

    return (
        <Accordion
            expanded={childPanels.includes(index)}
            onChange={() => {
                if (data?.nodes?.length > 0) {
                    handlePanelClick(index, childPanels, setChildPanels);
                }
            }}
            style={{
                background: state.includes(index) ? "#0F1332" : "#0F1332",
                color: "white",
                boxShadow: 'none',
                borderRadius: "0",
            }}
        >
            <Summary data={data} index={index} />
            <AccordionDetails>
                <div className='expand'>
                    <div className='flexCol'>
                        {data?.nodes?.length > 0 && data?.nodes?.map((nestedData, nestedIndex) => (
                            <RecursiveAccordion
                                key={nestedIndex}
                                data={nestedData}
                                index={nestedIndex}
                                state={state}
                                setState={setState}
                            />
                        ))}
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    );
};

export default Sidebar;
