import axios from "axios"
import Head from "next/head"
import Image from "next/image"
import Add from "../component/Add"
import AddButton from "../component/AddButton"
import Featured from "../component/Featured"
import PizzaList from "../component/PizzaList"
import styles from "../styles/Home.module.css"
import { useState } from "react"
import dbConnect from "../util/mongo"
import Product from "../models/Product"

const Index = ({ pizzaList = [], admin }) => {
    const [close, setClose] = useState(true)

    return (
        <div className={styles.container}>
            <Head>
                <title>Pizza Restaurant in NewYork</title>
                <meta name="description" content="Best pizza shop in town" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Featured />
            {admin && <AddButton setClose={setClose} />}
            <PizzaList pizzaList={pizzaList} />
            {!close && <Add setClose={setClose} />}
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || ""
    let admin = false
    if (myCookie.token === process.env.TOKEN) {
        admin = true
    }

    // const res = await axios.get(`http://localhost:3000/api/products`)
    dbConnect()
    const res = await Product.find()
    const resj = JSON.parse(JSON.stringify(res))
    return {
        props: {
            pizzaList: resj, //res
            admin,
        },
    }
}

export default Index
