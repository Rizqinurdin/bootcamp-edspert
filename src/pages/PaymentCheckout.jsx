import React, { useState } from 'react'
import { Container, Row, Col, Accordion, Button } from "react-bootstrap"
import Mandiri from "../assets/img/image/mandiri.png"
import BCA from "../assets/img/image/bca.png"
import User from "../assets/img/image/icon1.png"
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'bootstrap-icons-react';

const PaymentCheckout = () => {


    let navigate = useNavigate();

    const [selectedMenu, setSelectedMenu] = useState('Checkout');
    const handleMenuClick = (menu) => {
        setSelectedMenu(menu)
    };

    const [selectedPembayaran, setSelectedPembayaran] = useState('ATM');
    const handlePembayaranClick = (pembayaran) => {
        setSelectedPembayaran(pembayaran)
    };

    return (
        <div className="payment-checkout mt-5" style={{ background: 'white' }}>
            <Container>
                <Col className='d-flex align-items-center'>
                    <h5
                        onClick={() => handleMenuClick('Checkout')}
                        className={`checkout ${selectedMenu === 'Checkout' ? 'active' : ''}`}
                        style={{ cursor: 'pointer' }}
                    >
                        Checkout
                        {selectedMenu === 'Checkout' && <ArrowRight className="ms-2" />}
                    </h5>

                    <h5
                        onClick={() => handleMenuClick('Instruksi')}
                        className={`checkout ${selectedMenu === 'Instruksi' ? 'active' : ''}`}
                        style={{ cursor: 'pointer', marginLeft: '10px' }}
                    >
                        {selectedMenu === 'Instruksi' && <ArrowRight className="ms-2" />}
                        <span className='ms-3'>Instruksi Pembayaran</span>

                    </h5>
                </Col>
                <Row className='mt-5'>
                    {selectedMenu === 'Checkout' && (
                        <>
                            <Col md={6}>
                                <div className="metode-pembayaran-card">
                                    <h5>Pilih Metode Pembayaran</h5>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Bank Transfer (Verifikasi Manual)</Accordion.Header>
                                            <Accordion.Body>
                                                <p>Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode bayar ini memerlukan verifikasi pembayaran manual melalui Whatsapp</p>
                                                <hr />
                                                <Row className="bank-transfer shadow-box">
                                                    <Col xs={12} className='d-flex align-items-center mt-2'>
                                                        <img src={Mandiri} alt="mandiri" style={{ width: '50px' }} />
                                                        <h5 className='ms-4 mb-0' style={{ fontSize: '18px' }}>Bank Transfer ke Rek Mandiri</h5>
                                                        <div className="payment-option">
                                                            <input type="radio" id="mandiri" name="paymentMethod" />
                                                            <label htmlFor="mandiri"></label>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={12} className='d-flex align-items-center mt-5'>
                                                        <img src={BCA} alt="bca" style={{ width: '50px' }} />
                                                        <h5 className='ms-4 mb-0' style={{ fontSize: '18px' }}>Bank Transfer ke Rek BCA</h5>
                                                        <div className="payment-option">
                                                            <input type="radio" id="bca" name="paymentMethod" />
                                                            <label htmlFor="bca"></label>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Virtual Account (Verifikasi Otomatis)</Accordion.Header>
                                            <Accordion.Body>
                                                <p>Pembayaran melalui virtual account berbagai bank. Metode bayar ini akan diverifikasi secara otomatis.</p>
                                                <hr />
                                                <Row className="bank-transfer shadow-box">
                                                    <Col xs={12} className='d-flex align-items-center mt-2'>
                                                        <img src={Mandiri} alt="mandiri" style={{ width: '50px' }} />
                                                        <h5 className='ms-4 mb-0' style={{ fontSize: '18px' }}>Virtual Account Mandiri</h5>
                                                        <div className="payment-option">
                                                            <input type="radio" id="mandiri" name="paymentMethod" />
                                                            <label htmlFor="mandiri"></label>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={12} className='d-flex align-items-center mt-5'>
                                                        <img src={BCA} alt="bca" style={{ width: '50px' }} />
                                                        <h5 className='ms-4 mb-0' style={{ fontSize: '18px' }}>Virtual Account BCA</h5>
                                                        <div className="payment-option">
                                                            <input type="radio" id="bca" name="paymentMethod" />
                                                            <label htmlFor="bca"></label>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="ringkasan-pembayaran-card">
                                    <h5>Ringkasan Pesanan</h5>
                                    <div className="main-content">
                                        <div className="flex-container">
                                            <div className="image-box">
                                                <img src={User} alt="user" className='user' />
                                            </div>
                                            <div className="text-content mt-2">
                                                <h4>Programming Laravel</h4>
                                                <h4>Getting Started with Laravel 9</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="batch">
                                        <p>Batch   : September 2022</p>
                                        <p>Mentor  : Muhammad Farizqi Nurdin</p>
                                    </div>
                                    <div className="code-promo-container">
                                        <div className="code-promo">
                                            <h5>Kode Promo</h5>
                                            <p>Masukkan kode promo Anda di sini</p>
                                            <Button className='btn btn-sm btn-primary'>Coba Promo!</Button>
                                        </div>
                                    </div>
                                    <div className="metode-pembayaran mt-4">
                                        <h5>Metode Pembayaran</h5>
                                        <p>Bank Transfer (verifikasi manual)-Mandiri</p>
                                    </div>
                                    <div className="ringkasan-pembayaran">
                                        <h5>Ringkasan Pembayaran</h5>
                                        <p>
                                            Harga Kelas <span className="price">Rp.700.000</span>
                                        </p>
                                        <p>
                                            Potongan <span className="potongan">Rp.200.000</span>
                                        </p>
                                        <p>
                                            Promo <span className="promo">-</span>
                                        </p>
                                        <p>
                                            Kode Unik <span className="kode-unik">Rp.100.000</span>
                                        </p>
                                        <hr />
                                        <p> <span className='fw-bold'>Total Pembayaran</span><span className='total'>Rp.400.000</span></p>
                                        <p>Dengan menekan tombol <span className='fw-bold'>Bayar</span> kamu telah menyetujui syarat dan ketentuan yang berlaku, silahkan baca kembali <ins >Syarat & ketentuan</ins> yang berlaku.</p>
                                        <Button className='btn btn-sm btn-primary'>Bayar Sekarang!</Button>

                                    </div>

                                </div>
                            </Col>
                        </>
                    )}
                </Row>
                <Row className=''>
                    {selectedMenu === 'Instruksi' && (
                        <>
                            <Col md={6}>
                                <h5>Instruksi Bayar</h5>
                                <div className='instruksi'>
                                    <div className="main-content mt-3">
                                        <div className="flex-container">
                                            <div className="image-box">
                                                <img src={User} alt="user" className='user' />
                                            </div>
                                            <div className="text-content mt-2">
                                                <h4>Programming Laravel</h4>
                                                <h4>Getting Started with Laravel 9</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="batch">
                                        <p>Batch   : September 2022</p>
                                        <p>Mentor  : Muhammad Farizqi Nurdin</p>
                                    </div>
                                    <div className="metode-payment">
                                        <h5>Metode Pembayaran</h5>
                                        <p>Bank Transfer (verifikasi manual)-Mandiri</p>
                                        <div className="bank-transfer shadow-box">
                                            <Col xs={12} className='d-flex align-items-center mt-2'>
                                                <img src={Mandiri} alt="mandiri" style={{ width: '50px' }} />
                                                <p className='ms-4 mb-0' style={{ fontSize: '18px' }}>No Rek. 137000299089 <br /> a.n. PT Widya Kreasi Bangsa</p>
                                            </Col>
                                            <Col>
                                                <p className='ms-4 mb-0 mt-4' style={{ fontSize: '18px' }}>Nominal yang harus dibayar <br /> <span className='fw-bold'>Rp.400.000</span></p>
                                            </Col>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <h5>Instruksi Pembayaran</h5>
                                <div className='instruksi-pembayaran'>
                                    <Row>
                                        <Col className='d-flex align-items-center'>
                                            <p
                                                onClick={() => handlePembayaranClick('ATM')}
                                                className={`inst-payment ${selectedPembayaran === 'ATM' ? 'active' : ''}`}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                ATM
                                            </p>
                                            <p
                                                onClick={() => handlePembayaranClick('InternetBanking')}
                                                className={`inst-payment ms-2 ${selectedPembayaran === 'InternetBanking' ? 'active' : ''}`}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                Internet Banking
                                            </p>
                                            <p
                                                onClick={() => handlePembayaranClick('Mbanking')}
                                                className={`inst-payment ms-2 ${selectedPembayaran === 'Mbanking' ? 'active' : ''}`}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                Internet Banking
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        {selectedPembayaran === 'ATM' && (
                                            <>
                                                <p>1. Masukan kartu ke mesin ATM Mandiri <br />2. Pilih Bahasa <br />3. Masukan PIN ATM <br />4. Pilih menu transaksi lainnya <br />5. Pilih menu "Transfer", lalu pilih rek Mandiri <br />6. Masukan No Rekening <br />7. Masukkan nominal jumlah uang yang akan di transfer <br />8. Layar ATM akan menampilkan data transaksi anda, jika data sudah benar pilih “YA”. <br />9. Selesai, struk akan keluar dari mesin ATM.</p>
                                            </>
                                        )}
                                    </Row>
                                </div>
                            </Col>
                        </>
                    )}
                </Row>
            </Container>
        </div >
    )
}

export default PaymentCheckout