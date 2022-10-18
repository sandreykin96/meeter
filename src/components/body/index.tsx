import React, { PureComponent } from 'react'
import {initialData} from './../../data';
import { Block } from './Block';

export const Body = () => {
    return(
        <div>
            {initialData.map((element, i) => {
                return(
                    <Block
                        description={element.description}
                        img={element.img}
                        title={element.title}
                    />
                )
            })}
        </div>
    )
}