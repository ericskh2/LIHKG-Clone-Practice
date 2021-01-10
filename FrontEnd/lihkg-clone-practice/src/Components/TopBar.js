import favicon from '../Image/favicon.png'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import CategoryData from "./Topics/CategoryList/CategoryData";

import CreateTopic from './Topics/Edit/CreateTopic'
function TopBar(props) {

    const [showCreateTopic,setShowCreateTopic] = useState(false);

    const categories = CategoryData();
      
    return (
        <div className=" col-12">

            <CreateTopic setShow={{showCreateTopic,setShowCreateTopic}}/>

            <div className="row border-bottom border-grey">
                <div className="col-3">
                    <button className="navbar-toggler" onClick={props.setMenuOpen}>
                        <span className="navbar-toggler-icon"><img src={favicon} alt="navbutton" className="img-fluid"></img></span>
                    </button>
                </div>
                <div className="col-5 ">
                    <div className="text-center">
                        <span className="">{categories[props.category]}</span>
                    </div>

                </div>
                <div className="col-4">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light d-inline" onClick={()=>window.location.reload()}>
                            <FontAwesomeIcon icon={faSyncAlt} />
                        </button>
                        <button type="button" className="btn btn-light d-inline" onClick={() => setShowCreateTopic(true)}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TopBar