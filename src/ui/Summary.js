import { AccordionSummary, Checkbox, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Summary = (props) => {
    return (
        <AccordionSummary
            className="asummary"
            expandIcon={props?.data?.nodes?.length === 0 ? "" : <ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls={`panel${props.innerInd}a-content`}
            id={`panel${props.innerInd}a-header`}
        >
            <Typography>
                <Checkbox size="small" style={{ color: "white", marginTop: "-4px" }} />
                {props.data?.label}
            </Typography>
        </AccordionSummary>
    )
}

export default Summary
