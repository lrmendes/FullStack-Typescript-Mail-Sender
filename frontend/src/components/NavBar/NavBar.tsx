import React from 'react';
import {Typography} from 'antd';
import './index.css';

interface Props {
    textLeft: string;
    textRight: string;
    title: string;
}

const {Title} = Typography;

const NavBar: React.FC<Props> = ({textLeft, textRight, title}) => {
    return (
        <nav className="navHeader">
            <div className="navLeft">
                <Title level={4}>{textLeft}</Title>
            </div>
            <div className="navTitle">
                <Title level={2}>{title}</Title>
            </div>
            <div className="navRight">
                <Title level={4}>{textRight}</Title>
            </div>
        </nav>
    )
}

export default NavBar;