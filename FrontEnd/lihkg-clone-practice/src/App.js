import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import TopicList from './Components/TopicList'
import Background from './Components/Background'
import Topic from './Components/Topics/Topic'
import CategoryList from './Components/Topics/CategoryList/CategoryList';

const category = "吹水台";

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

function App() {

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function setMenuOpen() {
		setIsMenuOpen(!isMenuOpen);
	}
	return (
		<div>
			<Router>
				<Switch>
					<Container>
						<div className="row no-gutters">
							<Helmet>
								<title>{category}|LIHKG</title>
							</Helmet>
							<div className="col-4">

								<CategoryList show={isMenuOpen} />
								<TopicList category={category} setMenuOpen={setMenuOpen} />
							</div>
							<div className="col-8">

								<Route path="/topic/:id">
									<RenderTopic />
								</Route>
								<Route path="/">
									<RenderHome />
								</Route>

							</div>
						</div>
					</Container>
				</Switch>
			</Router>
		</div >

	);
}

export default App;
