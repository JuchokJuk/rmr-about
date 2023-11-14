import React from 'react';
import PropTypes from 'prop-types';

import {useSelector} from "react-redux";
import Tags from '@components/Styles/Tags';
import Link from 'next/link';

const DropList = ({isOpen}) => {

    const tagsByUrl = useSelector((state) => state.tags.allTags.byUrl)
    const cards = useSelector((state) => state.search.dropList.cards)
    const tags = useSelector((state) => state.search.dropList.tags)
    const cardsTotal = useSelector((state) => state.search.dropList.cardsTotal)
    const tagsTotal = useSelector((state) => state.search.dropList.tagsTotal)

    const getCardHref = (urlX) => {
        return ({
            pathname: '/[tag]/[slug]',
            query: {
                tag: urlX.tag,
                slug: urlX.slug
            }
        })
    }

    return (
        <div className={`droplist ${isOpen ? 'droplist--open' : ''}`}>
            {
                cardsTotal ?
                    <div className={"droplist__list"}>
                        <div className={"droplist__list__title"}>
                            Лучшие совпадения
                        </div>

                        {
                            cards.map((card) => {
                                return (
                                    <div className={"droplist__list__item"} key={card.id}>
                                        <Link href={getCardHref(card.urlX)} as={`/${card.url}`} passHref>
                                            <a>
                                                {card.heading}
                                            </a>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div> 
                : null
            }

            {
                tagsTotal ?
                    <div className={"droplist__tags"}>
                        <Tags tags={tags} size={'search'} tagsByUrl={tagsByUrl} />
                    </div>
                : null
            }
        </div>
    )
}

DropList.propTypes = {
    isOpen: PropTypes.bool,
}

export default DropList;