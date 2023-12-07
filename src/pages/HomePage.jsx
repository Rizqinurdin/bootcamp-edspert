import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import HeroImage from '../assets/img/imageHero.png';
import { httpService } from '../service/product.service';

const HomePage = () => {
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
            <div className='cardProduct w-100 min-vh-100 mt-5'>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-center fw-bold'>Product Catalog</h1>
                            <p className='text-center'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, eligendi dolorem! Magni explicabo nemo exercitationem.
                            </p>
                        </Col>
                    </Row>
                    {chunkArray(productList, 4).map((row, rowIndex) => (
                        <Row key={rowIndex} className='mb-3'>
                            {row.map((productList, colIndex) => (
                                <Col key={colIndex} md={3}>
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

export default HomePage;
