import React from "react";
import Manapip from "./manapip";
const ManaCost: React.FC<{mana_cost:string}> = ({ mana_cost}) => {

const matches = mana_cost.match(/\{(.*?)\}/g)?.map(match => match.slice(1, -1))
return (
<div>
{matches?.map((pip, index) => (<Manapip key={index} size={25} colour={pip} />))}
</div>
);
};

export default ManaCost;
