import React from 'react'
import { Routes, Route } from 'react-router'

import routes from './routes'

import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { UserDetails } from './pages/user-details'
import { GigDetails } from './pages/gig-details'
import { UserDashBoard } from './pages/user-dashboard'


export function RootCmp() {

    return (
        <section className="app main-layout">
            <AppHeader />
            <main className='main-app main-layout full'>
                <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                    <Route path="user/:id" element={<UserDetails />} />
                    <Route path="user/:id/dashboard" element={<UserDashBoard />} />
                    <Route path="gig/:id" element={<GigDetails />} />
                </Routes>
            </main>
            <AppFooter />
        </section>
    )
}


