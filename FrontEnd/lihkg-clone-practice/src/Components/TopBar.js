import favicon from '../Image/favicon.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

function TopBar(props) {
    return (
        <div className="position-absolute col-12">
            <div className="row border-bottom border-grey">
                <div className="col-3">
                    <button className="navbar-toggler">
                        <span class="navbar-toggler-icon"><img src={favicon} alt="navbutton" className="img-fluid"></img></span>
                    </button>
                </div>
                <div className="col-5 ">
                    <div className="text-center">
                        <span className="">{props.category}</span>
                    </div>

                </div>
                <div className="col-4">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light d-inline">
                            <FontAwesomeIcon icon={faSyncAlt} />
                        </button>
                        <button type="button" className="btn btn-light d-inline">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TopBar