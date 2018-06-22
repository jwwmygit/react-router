import React ,{Component} from 'react';
import MyNavLink from '../components/my-nav-link'
import News from './news';
import Messa from './news';
export default class News extends Component{
    render(){
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li><MyNavLink to=''>news</MyNavLink></li>
                        <li><MyNavLink to=''>Message</MyNavLink></li>
                    </ul>

                </div>
            </div>
        )
    }
}