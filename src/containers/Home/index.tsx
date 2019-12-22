import React from 'react';
import {
    Container,
    Row,
    Col,
    Jumbotron,
} from 'react-bootstrap';
import JobItem from '../../components/JobItem';
import { connect } from 'react-redux';
import { fetchJobs, searchJobs } from '../../actions';
import { JobsState } from '../../models/States';
import Job from '../../models/Job';
import LoadingJobs from '../../components/LoadingJobs';
import JumbotronTitle from '../../components/JumbotronTitle';
import JumbotronSubtitle from '../../components/JumbotronSubtitle';
import SearchForm from '../../components/SearchForm';

interface HomePropos {
    jobs: JobsState;
    fetchJobs: Function;
    searchJobs: Function;
    history: any;
}

interface HomeState {
    jobs: JobsState;
}

class Home extends React.Component<HomePropos, {}> {
    componentDidMount() {
        this.props.fetchJobs();
    }

    renderLatestJobs = (jobs: Job[]) => {
        return jobs.map(job => {
            return <JobItem {...job} key={job.id} />;
        })
    }

    render() {
        const { searchJobs, history } = this.props;
        const latestJobs: Job[] = this.props.jobs.jobs;
        const isLoading: boolean = this.props.jobs.pending;
        return (
            <React.Fragment>
                <Jumbotron className="main-jumbotron">
                    <Container>
                        <JumbotronTitle />
                        <JumbotronSubtitle />
                        <SearchForm searchJobs={searchJobs} history={history} />
                    </Container>
                </Jumbotron>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col lg={10} className={(isLoading ? 'text-center' : '')}>
                            {isLoading ? (
                                <LoadingJobs />
                            ) : (
                                this.renderLatestJobs(latestJobs)
                            )}
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

export default connect(mapStateToProps, {fetchJobs, searchJobs})(Home);
