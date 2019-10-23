import React from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import JobItem from '../../components/JobItem';
import SearchArea from '../../components/SearchArea';
import { connect } from 'react-redux';
import { fetchJobs, searchJobs } from '../../actions';
import { JobsState } from '../../models/States';
import Job from '../../models/Job';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface HomePropos {
    jobs: JobsState;
    jobsSearchResult: JobsState;
    fetchJobs: Function;
    searchJobs: Function;
}

interface HomeState {
    jobs: JobsState;
    jobsSearchResult: JobsState;
}

class Home extends React.Component<HomePropos, {}> {
    componentDidMount() {
        this.props.fetchJobs();
    }

    renderJobsSearchResult = (jobs: Job[]) => {
        return jobs.map(job => <JobItem {...job} key={job.id} />);
    }

    renderLatestJobs = (jobs: Job[]) => {
        return jobs.map(job => {
            return <JobItem {...job} key={job.id} />
        })
    }

    loadingJobs = (isLoading: boolean) => (<FontAwesomeIcon style={{textAlign: "center"}} icon={faSpinner} pulse />)

    render() {
        const { searchJobs } = this.props;
        const jobsSearchResult = this.props.jobsSearchResult.jobs;
        const latestJobs = this.props.jobs.jobs;
        const isLoading: boolean = this.props.jobsSearchResult.pending || this.props.jobs.pending;
        return (
            <React.Fragment>
                <SearchArea searchJobs={searchJobs} />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col lg={10} className={(isLoading ? 'text-center' : '')}>
                            {isLoading ? (
                                this.loadingJobs(isLoading)
                            ) : (
                                jobsSearchResult.length > 0 ? this.renderJobsSearchResult(jobsSearchResult)
                                    : this.renderLatestJobs(latestJobs)
                            )}
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: HomeState) => ({
    jobs: state.jobs,
    jobsSearchResult: state.jobsSearchResult
})

export default connect(mapStateToProps, {fetchJobs, searchJobs})(Home);
