import React from 'react';
import PropType from 'prop-types'
import Interweave from 'interweave';
import { cHTML } from '@helpers/functions';

const SideCardDescContainer = ({ desc }) => {

    return <React.Fragment> { desc ? (
        <div className="side-card__field side-card__field--text">
          <Interweave content={cHTML(desc)} noWrap />
        </div> ) : null }
    </React.Fragment>
}

SideCardDescContainer.propTypes = {
    desc : PropType.string
}

export default SideCardDescContainer