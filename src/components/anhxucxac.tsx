import React, { FunctionComponent } from 'react';
import {XucXacI} from "../utils";

interface OwnProps extends XucXacI{

}


type Props = OwnProps;

const Anhxucxac: FunctionComponent<Props> = (props) => {

  return (
    <div style={{margin: '0 10px', padding: '10px', border: '1px solid #000'}}>
        <img src={props.img} alt={props.name} style={{width: '100px', height: '100px'}}/>
    </div>
    );
};


export default Anhxucxac;
