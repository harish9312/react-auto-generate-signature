# `react-auto-generate-signature`

## Introduction

This plugin uses `html2canvas ` and react select to generate signatures using different `Font-Families`.
It returns the `base64` representation of the generated signature image

## Code Samples

    import AutoGenerateSignature from 'react-auto-generate-signature';
    import * as React from 'react';
    
    class Demo extends React.Component {
    
      handleSaveSignature = (base64String) => {
        console.log('Singature:', baseString)
      }
    
      render() {
        return [
          <AutoGenerateSignature toDataURL={this.handleSaveSignature} name="Harish" />
        ]
      }
    }

## Installation

`npm install react-auto-generate-signature --save`