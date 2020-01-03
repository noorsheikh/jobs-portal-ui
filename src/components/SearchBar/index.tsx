import React from 'react';
import {
    Col,
    Button,
    Form
} from 'react-bootstrap';
import SBInput from '../SBInput';
import Storage from '../../storage';
import { faSearch, faBuilding } from '@fortawesome/free-solid-svg-icons';

interface SPropos {
    searchJobs: Function;
    history: any;
}

interface SState {
    what: string;
    where: string;
}

class SearchBar extends React.Component<SPropos, SState> {
    storage = new Storage();
    keywords = this.storage.getSearchKeywords();
    state: SState = {
        what: this.keywords ? this.keywords.what : '',
        where: this.keywords ? this.keywords.where : ''
    }

    componentDidMount() {
        this.props.searchJobs();
    }

    handleChange = (e: any) => {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value} as SState, () => {});
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        this.storage.addSearchKeyword(this.state);
        this.props.searchJobs();
        e.preventDefault();

        if (this.props.history.location.pathname !== '/jobs') {
            this.props.history.push('/jobs');
        }
    }

    clearSearch = (): void => {
        this.storage.clearSearchKeywords();
        window.location.reload(false);
    }

    render() {
        const keywords = this.storage.getSearchKeywords();
        return (
            <div className='search-bar'>
                <Form onSubmit={this.handleSubmit} noValidate>
                    <Form.Row>
                        <SBInput
                            colSize={5}
                            isDivider={true}
                            icon={faSearch}
                            placeholder='Job title or keyword'
                            name='what'
                            defaultValue={keywords ? keywords.what : ''}
                            onChangeFunc={this.handleChange}
                            inputSize='lg'
                        />
                        <SBInput
                            colSize={5}
                            icon={faBuilding}
                            placeholder='Location or company'
                            name='where'
                            defaultValue={keywords ? keywords.where : ''}
                            onChangeFunc={this.handleChange}
                            inputSize='lg'
                        />
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
