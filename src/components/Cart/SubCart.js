import React from "react";
import styled from "styled-components";

const SubItem = styled.div`
    border: 1px solid black;
`;

export class SubCart extends React.Component {
    render(){
        return(
        <SubItem>
            <h2>{this.props.title}</h2>
        </SubItem>
        )
    }
}