import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"


const aboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About" />
                <h1>About me:</h1>
                <p>Despite always being passionate about coding and anything tech related, I only started coding seriously and decided to start my journey into this industry in late 2020. <br></br>I started with a Web Development boot camp I found on Udemy, absorbing all the content I found on there and implementing it daily. <br></br>A fire lit inside me, one that no other type of work incited, and I have been coding every day since then.<br></br> Although there were a few challenges and hiccups along the way, I am thoroughly enjoying the process.</p>
                <p><Link to="/contact">Want to work with me? Reach out!</Link></p>
                <br></br>
                <Link to="/">Home</Link>
            </Layout>
        </div>

    )
}

export default aboutPage