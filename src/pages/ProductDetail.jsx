import { useState } from "react";
import React from 'react';
import imageProduct from "../assets/img/imageDetail.png";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";

const ProductDetail = () => {

    const [activeMenu, setActiveMenu] = useState('materi');

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        const element = document.getElementById(menu);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='product-detail'>
            <header className='w-100 overflow-hidden'>
                <Container>
                    <Row className='header-box d-flex align-items-center pt-lg-5'>
                        <Col md={6}>
                            <div>
                                <h1>Programming Laravel</h1>
                                <h5>Getting Started with Laravel 9</h5>
                            </div>
                            <div className='mentor-details mt-5'>
                                <Row>
                                    <Col>
                                        <p>Mentor <br /> <span className='fw-bold'>William Hartono</span> <br /> Developer at Widya Edu</p>
                                    </Col>
                                    <Col>
                                        <p> Mentor <br /><span className='fw-bold'>Muhammad Farizqi Nurdin</span> <br /> Front End at Widya Edu</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={6} className='image-product'>
                            <img src={imageProduct} alt='Product' className='img-fluid py-5 mt-5' />
                        </Col>
                    </Row>
                </Container>
            </header>
            <div className='min-vh-100 list-item'>
                <Container>
                    <Row>
                        <Col md={4}>
                            <Card style={{ width: '18rem' }} className='mt-5 shadow-card'>
                                <ListGroup variant="flush">
                                    <ListGroup.Item
                                        active={activeMenu === 'materi'}
                                        onClick={() => handleMenuClick('materi')}
                                        className={`cursor-pointer ${activeMenu === 'materi' ? 'active-menu' : ''}`}
                                    >
                                        Materi
                                    </ListGroup.Item>

                                    <ListGroup.Item
                                        active={activeMenu === 'fasilitas'}
                                        onClick={() => handleMenuClick('fasilitas')}
                                        className={`cursor-pointer ${activeMenu === 'fasilitas' ? 'active-menu' : ''}`}
                                    >
                                        Fasilitas
                                    </ListGroup.Item>

                                    <ListGroup.Item

                                    >
                                        <span><p className='fw-light text-decoration-line-through'>Rp 125.000</p></span>
                                        <p className='text-danger fw-bold'>Rp 99.000</p>
                                        <div className="button-wrapper">
                                            <Button className="custom-button">Daftar Sekarang!</Button>
                                        </div>
                                    </ListGroup.Item>

                                </ListGroup>
                            </Card>
                        </Col>
                        <Col md={8} className="mt-5">
                            <div id="materi" className="content-section" style={{ display: activeMenu === 'materi' ? 'block' : 'none', }}>
                                <Card className="materi">
                                    <Card.Header>Materi</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Pengenalan Programming Laravel</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequuntur distinctio necessitatibus reiciendis totam ea eveniet nisi dolores atque! Tempora.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Body>
                                        <Card.Title>Pengenalan Programming Laravel</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequuntur distinctio necessitatibus reiciendis totam ea eveniet nisi dolores atque! Tempora.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Body>
                                        <Card.Title>Pengenalan Programming Laravel</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequuntur distinctio necessitatibus reiciendis totam ea eveniet nisi dolores atque! Tempora.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="fasilitas mt-5">
                                    <Card.Header>Fasilitas</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Pengenalan Programming Laravel</Card.Title>
                                        <Card.Text className="mt-3">
                                            E-Sertifikat
                                        </Card.Text>
                                        <Card.Text>
                                            Portofolio
                                        </Card.Text>
                                        <Card.Text>
                                            Job Connector
                                        </Card.Text>
                                        <Card.Text>
                                            Career Development
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div id="fasilitas" className="content-section" style={{ display: activeMenu === 'fasilitas' ? 'block' : 'none' }}>
                                <Card className="fasilitas">
                                    <Card.Header>Fasilitas</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Pengenalan Programming Laravel</Card.Title>
                                        <Card.Text className="mt-3">
                                            E-Sertifikat
                                        </Card.Text>
                                        <Card.Text>
                                            Portofolio
                                        </Card.Text>
                                        <Card.Text>
                                            Job Connector
                                        </Card.Text>
                                        <Card.Text>
                                            Career Development
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Card className="content text-center mt-5" style={{ backgroundColor: '#212529', height: '250px' }}>
                <Card.Body className="d-flex flex-column justify-content-center">
                    <Card.Title className="mt-5" style={{ color: 'white' }}>Sudah siap bergabung?</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Button className="btn btn-danger align-self-center">Daftar Kelas</Button>
                </Card.Body>
            </Card>



        </div>
    );
};

export default ProductDetail;
