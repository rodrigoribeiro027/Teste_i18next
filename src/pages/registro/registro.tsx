import './style.css'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <>
                <Card className="p-4 d-flex justify-content-center align-items-center" style={{ width: '24rem', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div className="text-center">
                            <button className="btn btn-primary" name="cadastrarEstacao" onClick={() => navigate(`/Home`)}>Cadastrar</button>
                        </div>
                    </Form>
                </Card>
        </>
    );
}

export default Home;
