import React from 'react';
import Category from '../../models/Category';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const CategoryItem: React.FC<Category> = (category: Category) => (
    <Card className="category-item">
        <FontAwesomeIcon className="category-item__icon" icon={category.icon} size="2x"></FontAwesomeIcon>
        <Card.Title className="category-item__title">{category.name}</Card.Title>
        <Card.Text className="category-item__total">
            {category.total > 0 && category.total} {category.total > 1 ? 'jobs' : category.total === 0 ? 'No jobs' : 'job'}
        </Card.Text>
    </Card>
);

export default CategoryItem;
