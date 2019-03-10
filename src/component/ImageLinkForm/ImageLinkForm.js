import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3'>
			{`This Magic Brain wil detect faces in your pictures. Git it a try.`}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input placeholder='copy your url here!' id='imageInput' className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-red'
					onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
		);
}

export default ImageLinkForm;