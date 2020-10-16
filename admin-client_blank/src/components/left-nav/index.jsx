import React, {Component} from 'react'
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.png'
import './index.less'
import { Menu, Icon, Button } from 'antd';

const { SubMenu } = Menu;

/**
 * 左侧导航的组件
 */
export default class LeftNav extends Component {
    render() {
        return (
            <div className="left-nav">
                <Link to="/" className="left-nav-header">
                    <img src={logo} alt="{logo}"/>
                    <h1>硅谷后台</h1>
                </Link>

                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"

                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart"/>
                        <span>首页</span>
                    </Menu.Item>

                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail"/>
                                <span>商品</span>
                              </span>
                        }
                    >
                        <Menu.Item key="5">商品管理</Menu.Item>
                        <Menu.Item key="6">品类管理</Menu.Item>
                        {/*<Menu.Item key="7">Option 7</Menu.Item>*/}
                        {/*<Menu.Item key="8">Option 8</Menu.Item>*/}
                    </SubMenu>

                </Menu>
            </div>


        )
    }
}