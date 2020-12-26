import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet'

import Container from 'react-bootstrap/Container'
import TopicList from './Components/TopicList'
import Background from './Components/Background'
import Topic from './Components/Topics/Topic'




function App() {
	const category = "吹水台";
	return (
		<div>
			<Container>
				<div className="row">


					<Helmet>
						<title>{category}|LIHKG</title>
					</Helmet>

					<TopicList category={category}/>
					<Topic />
				</div>
			</Container>
		</div>
	);
}

export default App;
