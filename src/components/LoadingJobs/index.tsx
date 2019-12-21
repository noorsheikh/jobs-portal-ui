import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingJobs: React.FC = () => (<FontAwesomeIcon style={{textAlign: "center"}} icon={faSpinner} pulse />);

export default LoadingJobs;
