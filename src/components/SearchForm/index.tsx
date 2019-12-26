import React from 'react';
import {
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';
import Storage from '../../storage';

interface SearchPropos {
    searchJobs: Function;
    history: any;
}

interface SearchState {
    what: string;
    where: string;
}

class SearchForm extends React.Component<SearchPropos, SearchState> {
    storage = new Storage();
    keywords = this.storage.getSearchKeywords();
    state: SearchState = {
        what: this.keywords ? this.keywords.what : '',
        where: this.keywords ? this.keywords.where : ''
    }

    componentDidMount() {
        this.props.searchJobs();
    }

    handleChange = (e: any) => {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value} as SearchState, () => {});
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const storage = new Storage();
        storage.addSearchKeyword(this.state);
        this.props.searchJobs();
        e.preventDefault();

        if (this.props.history.location.pathname !== '/search') {
            this.props.history.push('/search');
        }
    }

    clearSearch = (): void => {
        const storage = new Storage();
        storage.clearSearchKeywords();
        window.location.reload(false);
    }

    render() {
        const storage = new Storage();
        const keywords = storage.getSearchKeywords();
        return (
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
                        defaultValue={keywords ? keywords.what : ''}
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
                        defaultValue={keywords ? keywords.where : ''}
                        onChange={this.handleChange}
                    ></Form.Control>
                </Form.Group>
            </Form.Row>
            <Row className="text-right">
                <Col>
                <Button variant="secondary" className="btn-space" onClick={this.clearSearch}>Clear Search</Button>
                <Button variant="primary" type="submit">Find Jobs</Button>
                </Col>
            </Row>
        </Form>
        )
    }
}

export default SearchForm;
