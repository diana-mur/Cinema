import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import BtnSearch from '../buttons/btnSearch'
import BtnEntry from '../buttons/btnEntry'
import Menu from './menu/menu'

export default function HeaderFull() {
    return (
        <>
            <header className="header">
                <img src={logo} alt="" />
                <Menu />
                <div className="commandButtons">
                    <BtnSearch />
                    <BtnEntry />
                </div>
            </header>
        </>
    )
}