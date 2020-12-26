import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet'

import Container from 'react-bootstrap/Container'
import TopicList from './Components/TopicList'
import Background from './Components/Background'




function App() {
	const category = "吹水台|LIHKG";
	return (
		<div>
			<Container>
				<div className="row">


					<Helmet>
						<title>{category}</title>
					</Helmet>

					<TopicList />
					<Background />
				</div>
			</Container>
		</div>
	);
}

export default App;
