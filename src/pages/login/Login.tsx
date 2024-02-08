import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Login() {
    const { t, i18n: { changeLanguage, language } } = useTranslation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const botaoVisualizarSenha = () => {
        setShowPassword(!showPassword);
    };

    return (
            <div className="d-flex justify-content-center align-items-center " style={{ minHeight: '70vh' }} >
                <Card className="p-4" style={{ width: '24rem', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>{t('email')}</Form.Label>
                            <Form.Control type="email" placeholder={t('email')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>{t('password')}</Form.Label>
                            <div className="input-group">
                                <Form.Control
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder={t('password')}
                                />
                                <Button variant="outline-secondary" onClick={botaoVisualizarSenha}>
                                    {showPassword ? t('hide') : t('show')}
                                </Button>
                            </div>
                        </Form.Group>
                        <div className="text-center">
                            <button className="btn btn-primary" name="cadastrarEstacao" onClick={() => navigate(`/Registro`)}>{t('login')}</button>
                        </div>
                    </Form>
                </Card>
            </div>
    );
}

export default Login;
