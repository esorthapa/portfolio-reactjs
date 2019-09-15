import React, {Component} from 'react';

import './Services.css';

class Services extends Component{
    render() {
        return (
            <div className="services">
                <h3>{this.props.title}</h3>
                <h2>{this.props.subTitle}</h2>
                <div className="row">
                    <Icons icon={iconObj[0].icon} title={iconObj[0].title} description={iconObj[0].description} />
                    <Icons icon={iconObj[1].icon} title={iconObj[1].title} description={iconObj[1].description} />
                    <Icons icon={iconObj[2].icon} title={iconObj[2].title} description={iconObj[2].description} />
                    <Icons icon={iconObj[3].icon} title={iconObj[3].title} description={iconObj[3].description} />
                </div>
            </div>
        );
    }
}

const iconObj = [
    {
        icon: <ion-icon name="phone-portrait"></ion-icon>,
        title: 'Responsive',
        description: 'Looks great on any screen size!'
    },
    {
        icon: <ion-icon name="brush"></ion-icon>,
        title: 'Redisigned',
        description: 'Freshly redesigned for Bootstrap '
    },
    {
        icon: <ion-icon name="thumbs-up"></ion-icon>,
        title: 'Favorited',
        description: 'Millions of users ' + <ion-icon name="heart"></ion-icon> + 'Start Bootstrap'
    },
    {
        icon: <ion-icon name="help"></ion-icon>,
        title: 'Questions',
        description: 'Mustache you a question...'
    }
]
class Icons extends Component{
    render() {
        return (
            <div>
                <span>
                    {this.props.icon}
                </span>
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
            </div>
        );
    }
}
export default Services;