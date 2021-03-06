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
        
        this.resetForm = this.resetForm.bind(this);
        this.copyUrlToclipboard = this.copyUrlToclipboard.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateURL = this.validateURL.bind(this);
    }
    
    resetForm(e) {

        e.preventDefault();

        this.setState({
            url: '',
            submitted: false,            
        });

        this.props.dispatch(urlActions.resetForm());
    }

    copyUrlToclipboard() {
        const el = document.createElement('textarea');
        el.value = document.querySelector("a[name='newUrlLink']").href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);        
        alert("Copiada la URL al portapapeles");
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    validateURL(i) {
        const regex = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

        return i.match(regex);
    }

    handleSubmit(e) {
        
        e.preventDefault();

        const { url } = this.state;
        const isValidUrl = this.validateURL(url);

        this.setState({ 
            submitted: true, 
            validUrl: isValidUrl
        });
        
        if (url && isValidUrl) {
            this.props.dispatch(urlActions.add(url));
        }
        
    }

    

    render() {

        const { creating, urls } = this.props;
        const { url, submitted, validUrl } = this.state;
        
        return (
            <div class="row align-items-center justify-content-center">
                <div class="col-8 col-offset-2 text-center">
                    <form name="addUrlForm" id="addUrlForm" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                                    <label htmlFor="name">Introduce una URL larga para acortarla:</label>
                                    <input type="text" className={'form-control' + (submitted && !validUrl ? ' input-error' : '')} name="url" value={url} onChange={this.handleChange} />
                                    {submitted && !url &&
                                        <div className="error-block">El valor de la URL es obligatorio</div>
                                    }
                                    {submitted && url && !validUrl &&
                                        <div className="error-block">El formato de la URL es incorrecto</div>
                                    }
                        </div>
                        { urls.error && 
                            <div className="alert alert-danger" role="alert">
                                {urls.error.message}
                            </div>
                            
                        }

                        { !urls.error &&   urls.shortedUrl && 
                            <div className="alert alert-success" role="alert">
                                Tu nueva URL: <a href={urlConstants.URL + urls.shortedUrl.shortedUrl} target="_blank" name="newUrlLink">{urlConstants.URL}{urls.shortedUrl.shortedUrl}</a>
                                &nbsp;&nbsp;<ion-icon name="clipboard" onClick={this.copyUrlToclipboard}>Copiar</ion-icon>
                            </div>
                            
                        }
                    
                        <div className="form-group">
                                    <button className="btn btn-primary">Acortar</button>
                                    { !urls.error &&   urls.shortedUrl && 
                                    <button className="btn btn-primary" onClick={this.resetForm}>Resetear</button>
                                    }
                                    {creating &&
                                        <img 
                                    alt="loading"  src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                </div>  

                    </form>
                </div>
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