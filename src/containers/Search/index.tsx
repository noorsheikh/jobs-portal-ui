import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import { JobsState } from '../../models/States';
import Loading from '../../components/Loading';
import SearchBar from '../../components/SearchBar';
import { searchJobs } from '../../actions';
import NoJobsFound from '../../components/NoJobsFound';
import JobsView from '../../components/JobsView';

interface SearchProps {
    jobsSearchResult: JobsState;
    searchJobs: Function;
    history: any;
}

interface SearchState {
    jobsSearchResult: JobsState;
}

class Search extends React.Component<SearchProps, SearchState> {
    render() {
        const jobsSearchResult = this.props.jobsSearchResult.jobs;
        const { searchJobs, history } = this.props;
        const isLoading: boolean = this.props.jobsSearchResult.pending;
        return(
            <React.Fragment>
                <Jumbotron className="search-jumbotron">
                    <Container>
                        <SearchBar searchJobs={searchJobs} history={history} />
                    </Container>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col className={`search-result ${isLoading ? 'text-center' : ''}`}>
                            {isLoading ? (
                                <Loading />
                            ) : (
                                jobsSearchResult.length > 0 ? <JobsView jobs={jobsSearchResult} isListView={true} />
                                    : <NoJobsFound />
                            )}
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: SearchState) => ({
    jobsSearchResult: state.jobsSearchResult
})

export default connect(mapStateToProps, {searchJobs})(Search);
