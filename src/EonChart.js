import React from 'react';
import eon from 'eon-chart';

class EonChart extends React.Component{

  componentDidMount(){
    eon({
      pubnub: this.props.pubnub,
      channels: this.props.channels,
      history: true,
      generate: {
        bindto: '#chart',
        data: {
          labels: this.props.labels || true,
          type: this.props.type || 'line'
        }
      }
    });
    
  }

  render(){
    return(
      <div id="chart"> </div>
    );
  }
}

export default EonChart;