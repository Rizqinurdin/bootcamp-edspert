import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"


const FooterComponent = () => {
    return (
        <div className="footer py-5" style={{ backgroundColor: '#f8f9fa' }}>
            <Container>
                <Row className="d-flex justify-content-between">
                    <Col lg="5">
                        <p className="desc mt-4">TAGLINE Edspert Disini! <br /> <span>Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581</span></p>
                        <div className="no mb-2 mt-4">
                            <Link className="text-decoration-none">
                                <p className="m-0">+6221 22455773</p>
                            </Link>
                        </div>
                        <div className="mail">
                            <Link className="text-decoration-none">
                                <p className="m-0">info@indivaragroup.com</p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
                        <h5 className="fw-bold">Program</h5>
                        <Link to="">Online Course</Link>
                        <Link to="product">Mini Bootcamp</Link>
                        <Link to="promo">Bootcamp</Link>
                    </Col>
                    <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
                        <h5 className="fw-bold">Bidang Ilmu</h5>
                        <Link to="">Digital Marketing</Link>
                        <Link to="product">Produk Management</Link>
                        <Link to="promo">English</Link>
                        <Link to="priceList">Programming</Link>
                    </Col>
                    <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
                        <h5 className="fw-bold">Tentang Edspert</h5>
                        <Link to="">Bantuan</Link>
                        <Link to="product">Kontak Kami</Link>
                        <Link to="promo">Media Sosial</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="text-center px-md-0 px-3 mt-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">PT Indivara Group</span>, All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterComponent