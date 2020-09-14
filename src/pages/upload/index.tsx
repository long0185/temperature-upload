import React, { ReactElement } from 'react'
import Home from "../home"

interface Props {

}

export default function index({ }: Props): ReactElement {
    return (
        <>
            <header style={{ textAlign: "center", marginTop: 5, fontSize: 16 }}><h2>员工体温上传系统</h2></header>
            <Home></Home>
        </>
    )
}
