import React, { FC } from 'react';
import './Loader.scss';

interface LoaderProps {
    width: string;
    height: string;
}

const Loader: FC<LoaderProps> = ({ height, width }) => {
    return <span style={{ width: width, height: height }} className="loader"></span>;
};

export default Loader;
