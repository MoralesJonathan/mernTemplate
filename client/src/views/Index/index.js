import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

function Index() {
    return (
        <Container fluid style={{ height: "100%" }}>
            <Row align="center" style={{ height: "100%" }}>
                <Col lg={12} md={12} sm={12}>
                    <p>Hello world</p>
                </Col>
            </Row>
        </Container>
    )
}
export default Index;