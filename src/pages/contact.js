import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"



const contactPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact" />
                <h1>Contact page:</h1>
                <ul>
                    <li>Mobile: 07939865429</li>
                    <li>Email: S.O.IBRAHIM95@HOTMAIL.COM</li>
                </ul>
                <Link to="/about">About me</Link>
                <br></br>
                <Link to="/">Home</Link>
            </Layout>
        </div>
    )
}

export default contactPage