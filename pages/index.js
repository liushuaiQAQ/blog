import React, { useState } from 'react';
import Head from 'next/head';
import { Button } from 'antd';

const Home = () => {
	const [ val, setVal ] = useState('liu');
	return (
		<div>
			<Head>
				<title>Home</title>
			</Head>
			<input value={val} onChange={(e) => changeVal(e)} />
			{/* <Button onClick={fuckme()}>按钮8</Button> */}
		</div>
	);

	function changeVal(e){
		console.log(e.target.value)
		setVal(e.target.value);
	}
}



export default Home;
