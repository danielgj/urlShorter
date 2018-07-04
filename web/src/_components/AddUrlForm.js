import React from 'react';
import { connect } from 'react-redux';

import { urlActions } from '../_actions';
import { urlConstants } from '../_constants';


class AddUrlForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            url: '',
            submitted: false        
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        
        e.preventDefault();

        this.setState({ submitted: true });
        const { url } = this.state;
        const { dispatch } = this.props;
        
        if (url) {
            dispatch(urlActions.add(url));
        }
        
    }

    render() {

        const { creating, urls } = this.props;
        const { url, submitted } = this.state;
        
        return (
            <div>
                <form name="addUrlForm" id="addUrlForm" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !url ? ' has-error' : '')}>
                                <label htmlFor="name">Introduce una URL larga para acortarla:</label>
                                <input type="text" className="form-control" name="url" value={url} onChange={this.handleChange} />
                                {submitted && !url &&
                                    <div className="help-block">El valor de la URL es obligatorio</div>
                                }
                    </div>
                    { urls.error && 
                        <div className="alert alert-danger" role="alert">
                            {urls.error.message}
                        </div>
                        
                    }

                    { !urls.error &&   urls.shortedUrl && 
                        <div className="alert alert-success" role="alert">
                            Tu nueva URL: <a href={urlConstants.URL + urls.shortedUrl._id} target="_blank">{urlConstants.URL}{urls.shortedUrl._id}</a>
                        </div>
                        
                    }
                
                    <div className="form-group">
                                <button className="btn btn-primary">Acortar</button>
                                {creating &&
                                    <img 
                                   alt="loading"  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                            </div>  

                </form>
            </div>
            
        )
    }

}

function mapStateToProps(state) {
    const { creating, urls } = state;
    return {
        creating,
        urls
    };
}

const connectedAddUrlFormComponent = connect(mapStateToProps)(AddUrlForm);
export { connectedAddUrlFormComponent as AddUrlForm };