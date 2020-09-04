import React from "react";
import {useRouteMatch} from "react-router-dom";

import Header from './styles';

import logoImg from '../../assets/logo.svg'

interface RepositoryParams {
    repository: string;

}

const Repository: React.FC = () => {
    const {params} = useRouteMatch()

    return (
        <Header></Header>
    )
}

export default Repository