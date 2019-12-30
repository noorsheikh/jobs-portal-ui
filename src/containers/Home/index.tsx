import React from 'react';
import {
    Container,
    Row,
    Col,
    Jumbotron,
} from 'react-bootstrap';
import JobItem from '../../components/JobItem';
import { connect } from 'react-redux';
import { fetchJobs, searchJobs, fetchCategories } from '../../actions';
import { JobsState, CategoriesState } from '../../models/States';
import Job from '../../models/Job';
import Loading from '../../components/Loading';
import JumbotronTitle from '../../components/JumbotronTitle';
import JumbotronSubtitle from '../../components/JumbotronSubtitle';
import SearchBar from '../../components/SearchBar';
import Category from '../../models/Category';

interface HomePropos {
    jobs: JobsState;
    fetchJobs: Function;
    searchJobs: Function;
    fetchCategories: Function;
    categories: CategoriesState;
    history: any;
}

interface HomeState {
    jobs: JobsState;
    categories: CategoriesState;
}

class Home extends React.Component<HomePropos, {}> {
    componentDidMount() {
        this.props.fetchJobs();
        this.props.fetchCategories();
    }

    renderCategories = (categories: Category[]) => {
        console.log(categories);
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
        const categories: Category[] = this.props.categories.categories;
        return (
            <React.Fragment>
                <Jumbotron className="main-jumbotron">
                    <Container>
                        <JumbotronTitle />
                        <JumbotronSubtitle />
                        <SearchBar searchJobs={searchJobs} history={history} />
                    </Container>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col lg={12} className={(isLoading ? 'text-center' : '')}>
                            {isLoading ? (
                                <Loading />
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
    jobs: state.jobs,
    categories: state.categories
})

export default connect(mapStateToProps, {fetchJobs, searchJobs, fetchCategories})(Home);
