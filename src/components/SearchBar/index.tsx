import React from 'react';
import {
    Col,
    Button,
    Form,
    InputGroup
} from 'react-bootstrap';
import Storage from '../../storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBuilding } from '@fortawesome/free-solid-svg-icons';

interface SearchPropos {
    searchJobs: Function;
    history: any;
}

interface SearchState {
    what: string;
    where: string;
}

class SearchBar extends React.Component<SearchPropos, SearchState> {
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
            <div className='search-bar'>
                <Form onSubmit={this.handleSubmit} noValidate>
                    <Form.Row>
                        <Col lg={5} className="search-bar__divider">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text className="search-bar__icon">
                                        <FontAwesomeIcon className="search-bar__icon--color" icon={faSearch}></FontAwesomeIcon>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    className="search-bar__text"
                                    type="text"
                                    placeholder="job title or keyword"
                                    name="what"
                                    defaultValue={keywords ? keywords.what : ''}
                                    onChange={this.handleChange}
                                    size="lg"
                                ></Form.Control>
                            </InputGroup>
                        </Col>
                        <Col lg={5}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text className="search-bar__icon">
                                        <FontAwesomeIcon className="search-bar__icon--color" icon={faBuilding}></FontAwesomeIcon>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    className="search-bar__text"
                                    type="text"
                                    placeholder="location or company"
                                    name="where"
                                    defaultValue={keywords ? keywords.where : ''}
                                    onChange={this.handleChange}
                                    size="lg"
                                ></Form.Control>
                            </InputGroup>
                        </Col>
                        <Col lg={2}>
                            {/* <Button variant="secondary" size='lg' className="btn-space" onClick={this.clearSearch}>Clear</Button> */}
                            <Button
                                className="search-bar__search-btn"
                                variant="primary"
                                size='lg'
                                type="submit"
                                block
                            >Search</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}

export default SearchBar;
