import React from 'react';
import {
    Container,
    Row,
    Col,
    Jumbotron,
    CardGroup,
    CardColumns,
    Button,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchJobs, searchJobs, fetchCategories } from '../../actions';
import { JobsState, CategoriesState } from '../../models/States';
import Job from '../../models/Job';
import Loading from '../../components/Loading';
import JumbotronTitle from '../../components/JumbotronTitle';
import JumbotronSubtitle from '../../components/JumbotronSubtitle';
import SearchBar from '../../components/SearchBar';
import Category from '../../models/Category';
import CategoryItem from '../../components/CategoryItem';
import JobCard from '../../components/JobCard';

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
        return categories.map(category => {
            return <CategoryItem {...category} key={category.id} />
        })
    }

    renderLatestJobs = (jobs: Job[]) => {
        return jobs.map(job => {
            return <JobCard {...job} key={job.id} />;
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
                        <Col lg={12} className="section-header">
                            <h1 className="section-header__title">
                                Explore<br />by <span className="text-primary"><u>category</u></span>
                            </h1>
                        </Col>
                        <Col lg={12}>
                            <CardGroup>
                                {this.renderCategories(categories)}
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col lg={12}  className="section-header">
                            <Row>
                                <Col lg={10}>
                                    <h1 className="section-header__title">
                                        Latest<br /><span className="text-primary"><u>jobs</u></span> Listings
                                    </h1>
                                </Col>
                                <Col lg={2}>
                                    <Button className="section-header__button" size="lg">List all jobs</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={12} className={(isLoading ? 'text-center' : '')}>
                            <CardColumns>
                                {isLoading ? (
                                    <Loading />
                                ) : (
                                    this.renderLatestJobs(latestJobs)
                                )}
                            </CardColumns>
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
