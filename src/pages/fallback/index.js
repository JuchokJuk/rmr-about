import TagsMenu from '@components/TagsMenu';
import Head from 'next/head';
import React from 'react';
import Pokerface from '@assets/pokerface.svg'
import './fallback.less'
import { useSelector } from 'react-redux';
import { initSidebar } from '@store/sidebar/sidebarAction';
import { initTags, setSelectedUrl } from '@store/tags/tagsAction';
import { storeWrapper } from '@store/store';
import { setOnline } from '@store/checks/checksAction';

const Fallback = () => {
    let breakpoint = useSelector(state => state.breakpoint.breakpoint)
    let isOnline = useSelector(state => state.checks.isOnline)

    return (
        <React.Fragment>
            <Head>
                <title>Упс, мы оффлайн :(</title>
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
                    </div> : null
                }

                <div className="mainPage">
                    <div className="grid-container">
                        <div className="grid-col-6">
                            <div className="errorPage">
                                <div className="errorPage__title">
                                    {
                                        isOnline ? "Ура! Соединение установлено!" : "Потерялось соединение со спутником :("
                                    }
                                </div>
                                <div className="errorPage__text">
                                    {
                                        isOnline ? <span className="errorPage__text__click" onClick={() => { window.location.reload() }}>
                                            Обновить страницу
                                        </span> : `Связи нет, но вы держитесь!`
                                    }
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

export const getServerSideProps = storeWrapper.getServerSideProps(async ({ store }) => {
    store.dispatch(setSelectedUrl('fallback'))
    // эта страница должна падать только в оффлайн режиме
    store.dispatch(setOnline(false))

    await Promise.allSettled([
        store.dispatch(initSidebar()),
        store.dispatch(initTags()),
    ])
})

export default Fallback