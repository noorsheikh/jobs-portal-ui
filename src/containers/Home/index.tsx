import React from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import JobItem from '../../components/JobItem';
import SearchArea from '../../components/SearchArea';
import Job from '../../models/Job';

interface HomePropos {
    jobs: Job[]
}

class Home extends React.Component<HomePropos, {}> {
    render() {
        const { jobs } = this.props;
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

export default Home;
