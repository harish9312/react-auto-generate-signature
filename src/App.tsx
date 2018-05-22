import './App.css';

import * as React from 'react';
import Select from 'react-select';
import { SelectOptionComponent } from './SelectOptionComponent';

const html2canvas = require('html2canvas');

interface IAutoSignature {
  name?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  toDataURL?: (base64: string) => void;
}

interface IAutoSignatureState {
  selectedOption: string;
}

export class AutoSignature extends React.Component<IAutoSignature, IAutoSignatureState> {

  constructor(props) {
    super(props);
    this.state = { selectedOption: props.name || 'Font1' };
  }

  handleSave = () => {
    const self = this;
    html2canvas(document.getElementById('signature'), { logging: false }).then(canvas => {
      try {
        const dataURL = canvas.toDataURL();
        self.props.toDataURL(dataURL);
      } catch (error) {
        console.error(error);
      }
    });
  }

  handleChange = (obj) => {
    this.setState({
      selectedOption: obj.value
    });
  }

  render() {
    return (
      <div className="App">
        <div
          className="signature-container"
          id="signature"
          style={{
            width: `${this.props.width || '300px'}`,
            height: `${this.props.height || '150px'}`,
            fontSize: `${this.props.fontSize || '30px'}`,
            border: '1px solid #d3d3d3',
            fontFamily: this.state.selectedOption
          }}>
          {this.props.name || 'Demo'}
        </div>
        <div className="footer-container" style={{
          width: `${this.props.width || '300px'}`,
        }} >
          <div><button className="react-signature-button" onClick={this.handleSave} >Save</button></div>
          <Select
            name="form-field-name"
            value={this.state.selectedOption}
            onChange={this.handleChange}
            options={[
              { value: 'Font1', label: (this.props.name || 'Demo') },
              { value: 'Font2', label: (this.props.name || 'Demo') },
              { value: 'Font3', label: (this.props.name || 'Demo') },
              { value: 'Font4', label: (this.props.name || 'Demo') },
              { value: 'Font5', label: (this.props.name || 'Demo') },
            ]}
            valueComponent={CustomOptionComponent}
            optionComponent={SelectOptionComponent}
          />
        </div>
      </div >
    );
  }
}

const CustomOptionComponent = ({ value, option, children }) => {
  return (
    <div className="Select-value" style={{ paddingRight: '30px' }}>
      <span className="Select-value-label">
        <div style={{ fontFamily: value ? value.value : '' }}>
          {children || 'NA'}
        </div>
      </span>
    </div >
  );
};

export default AutoSignature;
