import React from 'react';
import Container from '../Container';

const Layout = () => {
    return (
        <>
            <Container>
                <div style={{ padding: '1em' }}><span>Logo is Right here</span></div>
            </Container>
            <div style={{ backgroundColor: 'rgb(51, 76, 130)', height: "3em" }}></div>
            <div style={{ backgroundColor: 'rgb(210, 76, 88)', height: "3em" }}></div>
            <div></div>
        </>
    );
}

export default Layout;