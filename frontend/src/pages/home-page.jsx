import React from 'react'
import { SearchBox } from '../cmps/search-box'

export function HomePage() {


    return (
        <section>
            <div>
            <h2>Find the right <span>freelance</span></h2>
            <h2><span>service</span>, right away</h2>
            <SearchBox placeholder={'Search for any service...'}/>
            <section>popular:
                <button>Graphic & Design</button>
                <button>Digital Marketing</button>
                <button>Business</button>
                <button>AI Services</button>
            </section>
            </div>
        </section >
    )
}