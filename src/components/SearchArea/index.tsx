import React from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';

interface SearchPropos {
    searchJobs: Function;
}

interface SearchState {
    what: string;
    where: string;
}

class SearchArea extends React.Component<SearchPropos, SearchState> {
    handleChange = (e: any) => {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value} as SearchState, () => {
            console.log(this.state);
        });
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const { what, where } = this.state;
        console.log(this.state);
        this.props.searchJobs(what, where);
        e.preventDefault();
    }

    render() {
        return (
            <Jumbotron className="jumbotron">
                <Container>
                        <h1 className="jumbotron__title">Are you looking for <br /> your dream <span className="text-primary">job</span> ?</h1>
                        <h2 className="jumbotron__sub-title">We can help you with that!</h2>
                        <Form onSubmit={this.handleSubmit} noValidate>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>What</Form.Label>
                                <Form.Text>job title, or keywords</Form.Text>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="e.g. Programming, or Software Engineer"
                                    name="what"
                                    onChange={this.handleChange}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Where</Form.Label>
                                <Form.Text>city, or organization</Form.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="e.g. Kabul, Herat, or Tetra Tech"
                                    name="where"
                                    onChange={this.handleChange}
                                ></Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Row className="text-right">
                            <Col>
                                <Button variant="primary" type="submit">Find Jobs</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Jumbotron>
        )
    }
}

export default SearchArea;
