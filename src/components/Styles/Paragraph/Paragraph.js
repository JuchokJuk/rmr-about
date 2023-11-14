import React from 'react';
import PropTypes from 'prop-types';

import P1 from './Items/P1'
import P2 from './Items/P2'
import P3 from './Items/P3'
import P4 from './Items/P4'
import P5 from './Items/P5'
import P6 from './Items/P6'
import P1Long from './Items/P1Long'
import P1short from './Items/P1short'

const Paragraph = ({ children }) => {
    return (
        <div className="paragraph-block"> 
            { children }
        </div>
    );
}

Paragraph.propTypes = {
    children: PropTypes.node
}

Paragraph.P1 = P1
Paragraph.P2 = P2
Paragraph.P3 = P3
Paragraph.P4 = P4
Paragraph.P5 = P5
Paragraph.P6 = P6
Paragraph.P1Long = P1Long
Paragraph.P1short = P1short

export default Paragraph