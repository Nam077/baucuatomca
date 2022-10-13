import React, {useState} from 'react';
import './App.css';
import XucXac from "./components/xucxac";
import {arrXucXac} from "./utils";

let xucXac1 = arrXucXac[0];
let xucXac2 = arrXucXac[0];
let xucXac3 = arrXucXac[0];

function App() {
    const [current, setCurrent] = useState({
        xucXac1: xucXac1,
        xucXac2: xucXac2,
        xucXac3: xucXac3
    });
    const [result, setResult] = useState({
        countBau: 0,
        countCa: 0,
        countCua: 0,
        countTom: 0,
        countNai: 0,
        countGa: 0,
    });

    function handleButtonXucXac() {
        const intervalRandom = setInterval(() => {
            const random1 = Math.floor(Math.random() * 6);
            const random2 = Math.floor(Math.random() * 6);
            const random3 = Math.floor(Math.random() * 6);
            setCurrent({
                xucXac1: arrXucXac[random1],
                xucXac2: arrXucXac[random2],
                xucXac3: arrXucXac[random3],
            });
            xucXac1 = arrXucXac[random1];
            xucXac2 = arrXucXac[random2];
            xucXac3 = arrXucXac[random3];
        }, 100);
        setTimeout(() => {
            clearInterval(intervalRandom);
            const rs = getResult();
            let ketQua = '';
            rs.forEach((item: any) => {
                    ketQua += item.name + ' ' + item.count + ' lần, ';
                }
            );
            alert(ketQua);

        }, 1500);

        function getResult() {
            const arrResult = [xucXac1, xucXac2, xucXac3];
            const arrCount = [0, 0, 0, 0, 0, 0];
            arrResult.forEach((item) => {
                switch (item.id) {
                    case 1:
                        arrCount[0]++;
                        break;
                    case 2:
                        arrCount[1]++;
                        break;
                    case 3:
                        arrCount[2]++;
                        break;
                    case 4:
                        arrCount[3]++;
                        break;
                    case 5:
                        arrCount[4]++;
                        break;
                    case 6:
                        arrCount[5]++;
                        break;
                    default:
                        break;
                }
            });
            let resultReturn: any = [];
            arrCount.forEach((item, index) => {
                    if (item !== 0) {
                        resultReturn.push({
                            id: index + 1,
                            count: item,
                            name: arrXucXac[index].name,
                        });
                    }
                }
            );
            return resultReturn;
        }
    }


    return (

        <div className="App">
            <XucXac xucxac1={current.xucXac1} xucxac2={current.xucXac2} xucxac3={current.xucXac3}
                    handleButtonXucXac={handleButtonXucXac}/>

        </div>

    );
}

export default App;
