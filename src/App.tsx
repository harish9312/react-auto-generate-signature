import './App.css';

import * as React from 'react';

interface IAutoSignature {
  name?: string;
  width?: string;
  height?: string;
  toDataURL?: (base64: string) => void;
}

class AutoSignature extends React.Component<IAutoSignature, {}> {

  handleSave = () => {
    const canvas = document.getElementById('myCanvas') as any;
    try {
      const dataURL = canvas.toDataURL();
      this.props.toDataURL(dataURL);
    } catch (error) {
      console.error('Something went wrong please try again..!!!');
    }
  }

  componentDidMount() {
    const c = document.getElementById('myCanvas') as any;
    const ctx = c.getContext('2d');
    ctx.textAlign = 'center';
    ctx.font = '30px "Homemade Apple"';
    ctx.fillText(this.props.name || 'Harish', 150, 75);
  }

  render() {
    return (
      <div className="App">
        <canvas id="myCanvas" width="300" height="150" style={{ border: '1px solid #d3d3d3' }} />
        <div><button onClick={this.handleSave} >Save</button></div>
      </div>
    );
  }
}

export default AutoSignature;
