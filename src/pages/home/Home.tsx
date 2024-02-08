// Home.js
import './style.css';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Home() {
    const { t, i18n: { changeLanguage, language } } = useTranslation();
    const navigate = useNavigate();


    return (
        <>
            <Container>
                <Row className="mt-4">
                    <Col sm={8}><Image src="../../assets/image.jpg" fluid />;</Col>
                    <Col sm={4}><Card> aa</Card></Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;
