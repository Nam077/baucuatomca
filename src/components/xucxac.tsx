import React, {FunctionComponent} from 'react';
import { XucXacI} from "../utils";
import Anhxucxac from "./anhxucxac";

export interface OwnProps {
    xucxac1: XucXacI,
    xucxac2: XucXacI,
    xucxac3: XucXacI,
    handleButtonXucXac: () => void
}

type Props = OwnProps;

const XucXac: FunctionComponent<Props> = (props) => {

    return (
        <div>
            <div className="row">
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Anhxucxac img={props.xucxac1.img} name={props.xucxac1.name} id={props.xucxac1.id}/>
                    <Anhxucxac img={props.xucxac2.img} name={props.xucxac2.name} id={props.xucxac2.id}/>
                    <Anhxucxac img={props.xucxac3.img} name={props.xucxac3.name} id={props.xucxac3.id}/>
                </div>
                <div className="col-4">
                    <button className="btn btn-success" onClick={props.handleButtonXucXac}>Xúc xắc</button>
                </div>
            </div>
        </div>

    );
};

export default XucXac;
