import TagsMenu from '@components/TagsMenu';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Pokerface from '@assets/pokerface.svg'
import './404.less'
import { useDispatch, useSelector } from 'react-redux';
import { initSidebar } from '@store/sidebar/sidebarAction';
import { initTags } from '@store/tags/tagsAction';

const Custom404 = () => {
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(initSidebar())
        dispatch(initTags())
    }, [])
    

    let breakpoint = useSelector(state => state.breakpoint.breakpoint);

    return (
        <React.Fragment>
            <Head>
                <title>Ooops!</title>
            </Head>

            <div className="page-wrap">
                {
                    breakpoint < 3 ? <div className="mainPage">
                        <div className="grid-container">
                            <div className="grid-row">
                                <div className="grid-col-6">
                                    <TagsMenu />
                                </div>
                            </div>
                        </div>
                    </div> : ''
                }


                <div className="mainPage">
                    <div className="grid-container">
                        <div className="grid-col-6">
                            <div className="errorPage">
                                <div className="errorPage__title">
                                    Ошибка 404
                                </div>
                                <div className="errorPage__text">
                                    Такой страницы нет, но у нас есть <Link href="/"><a>много других</a></Link>
                                </div>
                                <Pokerface className="errorPage__face" />
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        </React.Fragment>
    )
}

export default Custom404