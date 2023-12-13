import { useSelector } from 'react-redux';

function App() {
	const { user } = useSelector(state => state);
	return <div />;
}

export default App;
