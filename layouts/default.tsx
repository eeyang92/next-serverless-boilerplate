import * as React from 'react'
import Meta from '../components/meta'
import Navbar from '../components/navbar'

export default ({ children, meta }) => (
    <div>
        <Meta { ...meta } />
        <Navbar />
        { children }
    </div>
)
