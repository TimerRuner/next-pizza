import styles from "../../styles/Order.module.css"
import Image from "next/image"
import axios from "axios"
import dbConnect from "../../util/mongo"
import Order from "../../models/Order"

const OrderPage = ({ order }) => {
    const status = order.status

    const statusClass = (index) => {
        if (index - status < 1) return styles.done
        if (index - status === 1) return styles.inProgress
        if (index - status > 1) return styles.undone
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <span className={styles.id}>{order._id}</span>
                            </td>
                            <td>
                                <span className={styles.name}>
                                    {order.customer}
                                </span>
                            </td>
                            <td>
                                <span className={styles.adress}>
                                    {order.address}
                                </span>
                            </td>

                            <td>
                                <span className={styles.total}>
                                    ${order.total}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <Image
                            src="/img/paid.png"
                            width="30px"
                            height="30px"
                            alt="photo"
                        />
                        <span>Payment</span>
                        <div className={styles.checkedIcon}>
                            <Image
                                src="/img/checked.png"
                                width="20px"
                                height="20px"
                                alt="photo"
                            />
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image
                            src="/img/bake.png"
                            width="30px"
                            height="30px"
                            alt="photo"
                        />
                        <span>Preparing</span>
                        <div className={styles.checkedIcon}>
                            <Image
                                src="/img/checked.png"
                                width="20px"
                                height="20px"
                                alt="photo"
                            />
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image
                            src="/img/bike.png"
                            width="30px"
                            height="30px"
                            alt="photo"
                        />
                        <span>Ob the way</span>
                        <div className={styles.checkedIcon}>
                            <Image
                                src="/img/checked.png"
                                width="20px"
                                height="20px"
                                alt="photo"
                                className={styles.checkedIcon}
                            />
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image
                            src="/img/delivered.png"
                            width="30px"
                            height="30px"
                            alt="photo"
                        />
                        <span>Delivered</span>
                        <div className={styles.checkedIcon}>
                            <Image
                                src="/img/checked.png"
                                width="20px"
                                height="20px"
                                alt="photo"
                                className={styles.checkedIcon}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>$
                        {order.total}
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>$
                        {order.total}
                    </div>
                    <button disabled className={styles.button}>
                        PAID
                    </button>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
    // const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`)
    await dbConnect()
    const res = await Order.findById(params.id)
    const resj = JSON.parse(JSON.stringify(res))
    return {
        props: { order: resj },
    }
}

export default OrderPage
