import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import HeroImage from '../assets/img/imageHero.png';
import { httpService } from '../service/product.service';

const ProductCatalog = () => {
    const [productList, setProductList] = useState([]);

    const fetchProducts = async () => {
        const response = await httpService.get("/product");
        console.log("response", response);
        setProductList(response.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div className='homepage'>
            <header className='w-100 min-vh-50 overflow-hidden'>
                <Container>
                    <Row className='header-box d-flex align-items-center pt-lg-5'>
                        <Col lg='6'>
                            <h1>Jadi Expert bersama Edspert.id</h1>
                            <p>
                                Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.
                            </p>
                        </Col>
                        <Col className='hero-image' lg='6'>
                            <img src={HeroImage} alt='imageLandingPage' />
                        </Col>
                    </Row>
                </Container>
            </header>
            <div className='catalog-product w-100 min-vh-100 mt-5'>
                <Container>
                    <Row>
                        <Col md={4}>
                            <ListGroup variant="flush">
                                <ListGroup.Item action>
                                    <h5 className="mb-0">Bidang Ilmu</h5>
                                </ListGroup.Item>
                                <ListGroup.Item action>Digital Marketing</ListGroup.Item>
                                <ListGroup.Item action>Product Management</ListGroup.Item>
                                <ListGroup.Item action>Data Analysis</ListGroup.Item>
                                <ListGroup.Item action>Front End Developer</ListGroup.Item>
                                <ListGroup.Item action>Back End Developer</ListGroup.Item>
                            </ListGroup>
                            <ListGroup variant="flush" className='mt-5'>
                                <ListGroup.Item action>
                                    <h5 className="mb-0">Jenis Program</h5>
                                </ListGroup.Item>
                                <ListGroup.Item action>Bootcamp</ListGroup.Item>
                                <ListGroup.Item action>Mini Bootcamp</ListGroup.Item>
                                <ListGroup.Item action>Online Course</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={8}>
                            {/* Bagian Kanan */}
                            {chunkArray(productList, 3).map((row, rowIndex) => (
                                <Row key={rowIndex} className='mb-3'>
                                    {row.map((productList, colIndex) => (
                                        <Col key={colIndex} md={4}>
                                            {/* Kolom Produk di Kanan */}
                                            <Card>
                                                <Card.Img
                                                    variant='top'
                                                    src={productList.image || User}
                                                    alt={`product-${colIndex}`}
                                                    className='card-img w-100'
                                                />
                                                <Card.Body>
                                                    <Card.Title>{productList.title}</Card.Title>
                                                    <Card.Text>{productList.description}</Card.Text>
                                                    <Card.Text>{productList.price}</Card.Text>
                                                    <Button variant='primary'>Buy Now</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

// Fungsi untuk membagi array menjadi sub-array dengan jumlah elemen tertentu
function chunkArray(array, size) {
    return array.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / size);
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
    }, []);
}

export default ProductCatalog