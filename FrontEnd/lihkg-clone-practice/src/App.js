import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {useParams} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import TopicList from './Components/TopicList'
import Background from './Components/Background'
import Topic from './Components/Topics/Topic'

const category = "吹水台";

function RenderHome(){
	return (
		<div>
			<Container>
				<div className="row">


					<Helmet>
						<title>{category}|LIHKG</title>
					</Helmet>

					<TopicList category={category} />
					<Background />
				</div>
			</Container>
		</div>
	);
}
function RenderTopic() {
	const id = useParams();
	return (
		<div>
			<Container>
				<div className="row">
					<Helmet>
						<title>{category}|LIHKG</title>
					</Helmet>

					<TopicList category={category} />
					<Topic id={id}/>
				</div>
			</Container>
		</div>
	);
}

function App() {
	
	return (
		<Router>
			<Switch>
				<Route path="/topic/:id">
					<RenderTopic />
				</Route>
				<Route path="/">
					<RenderHome />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
