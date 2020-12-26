import favicon from '../Image/favicon.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

function TopBar() {
    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <button className="navbar-toggler">
                        <span class="navbar-toggler-icon"><img src={favicon} alt="navbutton"></img></span>
                    </button>
                </div>
                <div className="col-5 text-center">
                    <span className="pt-2 h3">吹水台</span>
                </div>
                <div className="col-4">
                    <button type="button" className="btn btn-light">
                        <FontAwesomeIcon icon={faSyncAlt} />
                    </button>
                    <button type="button" className="btn btn-light">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TopBar