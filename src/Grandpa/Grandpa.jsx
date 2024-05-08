import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css"

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(100); 

const Grandpa = () => {
    const asset = 'diamond';
    const [money, setMoney] = useState(1000);
    return (
        <div className="grandpa">
            <h2>Grand Pa</h2>
            <p>Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
            
        </div>
    );
};

export default Grandpa;