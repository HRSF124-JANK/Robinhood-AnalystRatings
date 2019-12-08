import React from 'react';
import SellSummaryStyle from './styled-components/SellSummary-style';


  class SellSummary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            readMore: false,
        }

        this.readClicked = this.readClicked.bind(this);
        this.pointer = this.pointer.bind(this);
    }

    readClicked(e) {
        this.setState({readMore: !this.state.readMore})
            var collapse = document.getElementById("sell-collapse");
    
            if (collapse.style.maxHeight) {
                collapse.style.maxHeight = null;
                e.target.innerHTML = "Read More"    
            } else {
                collapse.style.maxHeight = collapse.scrollHeight + 'px';
                e.target.innerHTML = "Read Less"
            }                
      }

    pointer(e) {
        e.target.style.cursor = 'pointer';
    }

      read() {
            if(this.props.summary) {
                var info;
                var hiddenInfo = this.props.summary.split('.').splice(2,100).join('.');
                if (this.state.readMore === false) {
                    info = this.props.summary.split('.').splice(0,2).join('.') + '."';
                } else {
                    info = this.props.summary.split('.').splice(0,2).join('.') + '.';
                }
                return(
                    <div>
                    <SellSummaryStyle.RatingSummaryBody>
                        "{info}
                    </SellSummaryStyle.RatingSummaryBody>
                    <SellSummaryStyle.RatingSummaryHiddenBody id="sell-collapse">
                        <br /> {hiddenInfo}"
                    </SellSummaryStyle.RatingSummaryHiddenBody>
                        <SellSummaryStyle.ReadMore onClick={this.readClicked} onMouseOver={this.pointer} style={{color: this.props.color}}>
                           Read More
                    </SellSummaryStyle.ReadMore>
                    <SellSummaryStyle.Source>Morningstar</SellSummaryStyle.Source>
                    </div>
                    
                )
            } else {
                return(
                    null
                )
            }
    }

     

    render() {
        return(
            <div>

          <SellSummaryStyle.SellSpeechBubble style={this.spring}>
          <SellSummaryStyle.RatingSummaryTitle>
              Sell Summary
          </SellSummaryStyle.RatingSummaryTitle>
          {this.read()}
          <SellSummaryStyle.SpeechBubbleArrow />
      </SellSummaryStyle.SellSpeechBubble>   
            </div>
        )
    }
}

export default SellSummary;