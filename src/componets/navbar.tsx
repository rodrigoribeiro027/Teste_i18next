import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const navigate = useNavigate();
    const { t, i18n: { changeLanguage, language } } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('pt');


    const handleChangelanguage = () => {
        const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
        changeLanguage(newLanguage);
        setCurrentLanguage(newLanguage);
    };

    return (
        <>
            <BootstrapNavbar expand="lg" className="bg-light">
                <Container>
                    <BootstrapNavbar.Brand>Product Max</BootstrapNavbar.Brand>
                    <Nav>
                        <Nav.Link onClick={handleChangelanguage}>
                            {currentLanguage === 'pt' ? 'PT-BR' : 'EN'}
                        </Nav.Link>
                        <Nav.Link  onClick={() => navigate('/Login')}>{t('Login')}</Nav.Link>
                    </Nav>
                </Container>
            </BootstrapNavbar>
        </>
    );
}

export default Navbar;
