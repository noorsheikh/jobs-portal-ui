import React from 'react';
import { JobState } from '../../models/States';
import { connect } from 'react-redux';
import { fetchJob } from '../../actions';
import { Container, Row, Col } from 'react-bootstrap';
import Loading from '../../components/Loading';

interface JobPostProps {
    job: JobState;
    fetchJob: Function;
    match: any;
}

interface JobPostState {
    job: JobState;
}

class JobPost extends React.Component<JobPostProps, {}> {
    componentDidMount() {
        this.props.fetchJob(this.props.match.params.id);
    }

    render() {
        const { job } = this.props.job;
        const isLoading = this.props.job.pending;
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={10} className={(isLoading ? 'text-center' : 'bg-white')}>
                        {isLoading ? (
                            <Loading />
                        ) : (
                            <React.Fragment>
                                <Row>
                                    <Col lg={12}>
                                        <h3>{job.title}</h3>
                                    </Col>
                                    <Col lg={12}>
                                        <h5>{job.company}, {job.location}</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        Skills: {job.skills && job.skills.join(', ')}
                                    </Col>
                                    <Col lg={12}>
                                        Type: {job.type}
                                    </Col>
                                    <Col lg={12}>
                                        Salary: {job.salary ? job.salary : '-'}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <h3>About {job.company}</h3>
                                        <p>{job.description}</p>
                                    </Col>
                                </Row>
                            </React.Fragment>
                        )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state: JobPostState) => ({
    job: state.job
})

export default connect(mapStateToProps, {fetchJob})(JobPost);
