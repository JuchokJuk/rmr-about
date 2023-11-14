import React from 'react';
import Loader from '@assets/Common/loader.svg'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { initArticles } from '@store/cards/cardsAction';
import { initVacancies } from '@store/vacancies/vacanciesAction';
import useDidUpdateEffect from '@helpers/useDidUpdateEffect';
import { setPagination } from '@store/pagination/paginationAction';

const LoadMore = ({type}) => {
    let dispatch = useDispatch()

    const currentPage = useSelector((state) => state.pagination.currentPage)
    //const [nextPage, setPage] = useState(startingPage + 1);
    // let nextPage = startingPage + 1
    
    const selectedFilters = useSelector((state) => state.tags.selectedFilters)
    const selectedId = useSelector((state) => state.tags.activeUrl)
    const ping = useSelector((state) => state.tags.selectedFiltersPing)
    //const myPage = useSelector((state) => state.pagination.currentPage)
    const filtersIds = selectedFilters.map(tag => tag._id)

    const total = useSelector((state) => state.cards.totalItems)
    const recieved = useSelector((state) => state.cards.itemsRecieved)
    const isLoading = useSelector((state) => state.cards.isPending)

    useDidUpdateEffect(() => {
        //setPage(2)
        dispatch(setPagination(1))
    }, [ping, selectedId])

    const clickFunc = () => {
        const nextPage = currentPage + 1
        history.pushState({ page: nextPage }, "title " + nextPage, "?page=" + nextPage)
        switch (type) {
            case 'tag':
                dispatch(initArticles(selectedId, filtersIds, nextPage))
                break;

            case 'vacancy':
                dispatch(initVacancies(filtersIds, nextPage))
                break;

            case 'subtag':
                dispatch(initArticles([], filtersIds, nextPage))
                break;
        
            default:
                break;
        }
        dispatch(setPagination(nextPage))
        //setPage(nextPage + 1)
    }

    const showLoad = recieved < total
    return (
        <React.Fragment>
            {
                showLoad ? <div className="grid-container">
                    <div className="grid-row">
                        <div className="grid-col-6">
                            <div className="loadmore__container">
                                {/* <Link href={{ pathname: routeToPaginate, query: { page: nextPage } }} scroll={false} shallow={true}> */}
                                    <div className='load-more' onClick={clickFunc}>
                                        <span>Загрузить ещё</span>
                                        <Loader className={`loader-svg ${isLoading ? 'loading' : ''}`} />
                                    </div>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </div> : ''
            }
        </React.Fragment>
    )
}


LoadMore.propTypes = {
    routeToPaginate: PropTypes.string,
    type: PropTypes.oneOf([
        'main',
        'tag',
        'vacancy',
        'subtag',
    ]),
}

export default LoadMore