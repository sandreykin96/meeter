import React from "react";
import { BlockContainer } from "./styled";

interface BlockProps {
    description: string,
    title: string, 
    img: string | undefined,
}

export const Block: React.FC<BlockProps> = ({ description, title, img }) => {
    return(
        <BlockContainer>
            {description}
            {title}
            {img}
        </BlockContainer>
    )
};