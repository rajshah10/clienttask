import { Checkbox } from '@mui/material'
import React from 'react'

const CheckComponent = (props) => {
    return (
        <div style={{ height: "36px" }}>
            <Checkbox size="small" style={{ color: "white" }} />
            <span key={props.index}>
                {props.data.label}
            </span>
        </div>
    )
}

export default CheckComponent
