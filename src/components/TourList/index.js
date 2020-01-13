import React, { Component } from 'react'
import Tour from '../Tour';
import './tourlist.scss';
import {tourData} from '../../tourData'

export default class TourList extends Component {

    state= {
        key: tourData
    }

    render() {
        return (
            <div>
                hello From TourList
                <Tour />
            </div>
        )
    }
}
