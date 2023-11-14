import React from 'react';
import PropTypes from 'prop-types'
import Link from 'next/link';
import PixelArrow from '@assets/pixelArrow.svg'
import Heading from '../Heading';
import Tags from '../Tags';

const VacancyCard = ({card}) => {

    const hRef =  {
        pathname: '/career/[vacancy]',
        query: {
            vacancy: card.url
        },
    }

    return (
        <div className={'vacancy-card'}>
            <Link href={hRef} as={`/career/${card.url}`} passHref>
                <a>
                    <div className={'vacancy-card__content'}>
                        <div className={'vacancy-card__header'}>
                            <Heading.H3medium>
                                {card.title}
                            </Heading.H3medium>
                        </div>

                        <div className={'vacancy-card__footer'}>
                            <Tags tags={card.tags} noOutline />
                        </div>
                    </div>
                    <div className={'vacancy-card__arrow'}>
                        <PixelArrow />
                    </div>
                </a>
            </Link>
        </div>
    )
}

VacancyCard.propTypes = {
    card: PropTypes.object,
}

export default VacancyCard;