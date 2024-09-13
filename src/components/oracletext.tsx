import React from "react";
import Manapip from "./manapip";
const OracleText: React.FC<{description:string}> = ({ description}) => {

return (
    <div>
    {description
        .split(/(\{.*?\}|\n)/) // Split by either the `{...}` pattern or `\n`
        .map((segment, index) => {
        if (segment === '\n') {
          // Handle line breaks
        return <br key={index} />;
        }

        const match = segment.match(/\{(.*?)\}/); // Check if the segment matches the `{...}` pattern
        if (match) {
        return (
            <Manapip key={index} size={20} colour={match[1]} /> // Render the `Manapip` component for the matched text
        );
        }

        // Render normal text
        return (
        <React.Fragment key={index}>
            {segment}
        </React.Fragment>
        );
    })}
</div>
);
};

export default OracleText;
