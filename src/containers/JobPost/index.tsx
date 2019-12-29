import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { JobState } from '../../models/States';
import { connect } from 'react-redux';
import { fetchJob } from '../../actions';
import { Container, Row, Col } from 'react-bootstrap';
import Loading from '../../components/Loading';
import JobMetadata from '../../components/JobMetadata';

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

    renderJobMetadata = (metadata: object): any => {
        return Object.entries(metadata).map(([key, value]) => {
            return <JobMetadata name={key} value={value} />
        })
    }

    render() {
        const { job } = this.props.job;
        const isLoading = this.props.job.pending;
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col lg={12} className={(isLoading ? 'text-center' : '')}>
                            <Container className="job-post">
                                {isLoading ? (
                                    <Loading />
                                ) : (
                                    <React.Fragment>
                                        <Row className="job-post__header">
                                            <Col lg={12}>
                                                <h3>{job.title}</h3>
                                            </Col>
                                            <Col lg={12}>
                                                <h5>{job.company}, {job.location}</h5>
                                            </Col>
                                        </Row>
                                        <Row className="job-post__content">
                                            <Col lg={9}>
                                                <p>{ ReactHtmlParser(eval('`' + job.description + '`')) }</p>
                                            </Col>
                                            <Col lg={3}>
                                                {this.renderJobMetadata(job.metadata)}
                                            </Col>
                                        </Row>
                                    </React.Fragment>
                                )}
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state: JobPostState) => ({
    job: state.job
})

export default connect(mapStateToProps, {fetchJob})(JobPost);
