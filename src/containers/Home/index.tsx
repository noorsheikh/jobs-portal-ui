import React from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import JobItem from '../../components/JobItem';
import SearchArea from '../../components/SearchArea';
import { connect } from 'react-redux';
import { fetchJobs } from '../../actions';
import { JobsState } from '../../models/States';

interface HomePropos {
    jobs: JobsState;
    fetchJobs: Function;
}

interface HomeState {
    jobs: JobsState
}

class Home extends React.Component<HomePropos, {}> {
    componentDidMount() {
        this.props.fetchJobs();
    }

    render() {
        const { jobs } = this.props.jobs;
        return (
            <React.Fragment>
                <SearchArea />
                <Container>
                    <Row className="justify-content-md-center">
                        <Col lg={10}>
                            {jobs && jobs.map(job => {
                                return <JobItem {...job} key={job.id} />
                            })}
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: HomeState) => ({
    jobs: state.jobs
})

export default connect(mapStateToProps, {fetchJobs})(Home);
