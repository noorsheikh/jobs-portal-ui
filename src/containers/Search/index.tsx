import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import JobItem from '../../components/JobItem';
import Job from '../../models/Job';
import { JobsState } from '../../models/States';
import LoadingJobs from '../../components/LoadingJobs';

interface SearchProps {
    jobsSearchResult: JobsState;
}

interface SearchState {
    jobsSearchResult: JobsState;
}

class Search extends React.Component<SearchProps, SearchState> {
    renderJobsSearchResult = (jobs: Job[]) => {
        return jobs.map(job => <JobItem {...job} key={job.id} />);
    }

    noJobsFound = () => {
        return <h2 className="text-center">No Jobs Found!</h2>;
    }

    render() {
        const jobsSearchResult = this.props.jobsSearchResult.jobs;
        console.log(jobsSearchResult);
        const isLoading: boolean = this.props.jobsSearchResult.pending;
        return(
            <React.Fragment>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col lg={10} className={(isLoading ? 'text-center' : '')}>
                            {isLoading ? (
                                <LoadingJobs />
                            ) : (
                                jobsSearchResult.length > 0 ? this.renderJobsSearchResult(jobsSearchResult)
                                    : this.noJobsFound()
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

export default connect(mapStateToProps)(Search);
