import React from 'react'
import technical from '../texts/technical.json'
import styled from '@emotion/styled';

const Table = (props) => {
    const LeftTable = styled.table`
        text-align: left;
        margin-left: calc(40px + (450 - 40) * ((100vw - 450px) / (1600 - 450)));
        margin-right: calc(40px + (450 - 40) * ((100vw - 450px) / (1600 - 450)));
        border-radius: 5px;
        border: 2px solid black;
    `
    const PadData = styled.td`
        padding-right: calc(15px + (25 - 15) * ((100vw - 25px) / (1600 - 300)));
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: calc(15px + (25 - 15) * ((100vw - 25px) / (1600 - 300)));
    `
    return (
        <div>
            <LeftTable>
                <tbody>
                    {technical.map( (row,index) => {
                        return (
                            <tr key={index}>
                                <PadData><b>{row.name}</b></PadData>
                                <PadData>{row.values.map(value => `${value} `)}</PadData>
                            </tr>
                        )
                    })}
                </tbody>
            </LeftTable>
        </div>
    )
}

export default Table;