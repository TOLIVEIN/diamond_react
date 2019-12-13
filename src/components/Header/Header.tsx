import React, { FC } from "react";
import { Breadcrumb, Icon } from "antd";

const Header: FC = () => {

    return (
        <header>
            <h1>S · C · Q</h1>
            <Breadcrumb>
                <Breadcrumb.Item href="">
                <Icon type="home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                <Icon type="user" />
                <span>Application List</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Application</Breadcrumb.Item>
            </Breadcrumb>
        </header>
    )

}

export default Header;