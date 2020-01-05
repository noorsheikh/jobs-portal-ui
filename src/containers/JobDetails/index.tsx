import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { JobState } from '../../models/States';
import { connect } from 'react-redux';
import { fetchJob } from '../../actions';
import { Container, Row, Col } from 'react-bootstrap';
import Loading from '../../components/Loading';
import JobMeta from '../../components/JobMeta';

interface JDProps {
    job: JobState;
    fetchJob: Function;
    match: any;
}

interface JDState {
    job: JobState;
}

class JobDetails extends React.Component<JDProps, {}> {
    componentDidMount() {
        this.props.fetchJob(this.props.match.params.id);
    }

    renderJobMetadata = (metadata: object): any => {
        return Object.entries(metadata).map(([key, value]) => {
            return <JobMeta name={key} value={value} />
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
                            <Container className="job-details">
                                {isLoading ? (
                                    <Loading />
                                ) : (
                                    <React.Fragment>
                                        <Row className="job-details__header">
                                            <Col lg={12}>
                                                <h3>{job.title}</h3>
                                            </Col>
                                            <Col lg={12}>
                                                <h5>{job.company}, {job.location}</h5>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={9} className="job-details__content">
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

const mapStateToProps = (state: JDState) => ({
    job: state.job
})

export default connect(mapStateToProps, {fetchJob})(JobDetails);
