import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useMemo, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import TopicList from './Components/TopicList'
import Background from './Components/Background'
import Topic from './Components/Topics/Topic'
import CategoryList from './Components/Topics/CategoryList/CategoryList';
import CategoryData from "./Components/Topics/CategoryList/CategoryData";
import {UserContext} from './Components/Account/User/UserContext'
function RenderHome() {
	return (
		<div>
			<Background />
		</div>
	);
}
function RenderTopic() {
	const id = useParams();
	return (
		<div>
			<Topic id={id} />
		</div>
	);
}

function RenderTopicList(props){
	return(
		<div>
			<TopicList category="1" setMenuOpen={props.setMenuOpen}/>
		</div>
	);
}

function RenderTopicListByCategory(props){
	const cat = useParams();
	return(
		<div>
			<TopicList category={cat.cat} setMenuOpen={props.setMenuOpen}/>
		</div>
	);
}
function App() {

	const [userData,setUserData] = useState({'loggedIn':false})
	
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function setMenuOpen() {
		setIsMenuOpen(!isMenuOpen);
	}

	const categories = CategoryData();
	
	return (

		<div>
			<UserContext.Provider value={{userData,setUserData}}>
			<Router>
				<Container>
					<div className="row no-gutters">

						<div className="col-4">

							<CategoryList show={isMenuOpen} />

							<Switch>
								<Route exact path="/category/:cat">
									<Helmet>
										<title>LIHKG Clone</title>
									</Helmet>
									<RenderTopicListByCategory setMenuOpen={setMenuOpen}/>
								</Route>
								<Route path="/">
									<Helmet>
										<title>LIHKG Clone</title>
									</Helmet>
									<RenderTopicList setMenuOpen={setMenuOpen}/>
								</Route>
							</Switch>
						</div>
						<div className="col-8">
							<Switch>
								<Route path="/topic/:id">
									<RenderTopic />
								</Route>
								<Route path="/">
									<RenderHome />
								</Route>
							</Switch>
						</div>
					</div>
				</Container>

			</Router>
			</UserContext.Provider>
		</div>

	);
}

export default App;
