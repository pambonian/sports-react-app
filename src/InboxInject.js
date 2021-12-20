import React, { Component } from "react";

class InboxInject extends Component {
    constructor(props) {
      super(props);
    }
    render() {

        return (
        <div>
        <div className="post" key={this.props.index} />
        <div className="inbox-messages" id="inbox-messages">
                <div v-for="(msg, index) in messages" className="card">
                    <div className="card-content">
                        <div className="msg-header">
                            <span className="msg-from"><small>{this.props.name}From: Name Here {this.props.name}</small></span>
                            <span className="msg-timestamp"></span>
                            <span className="msg-attachment"><i className="fa fa-paperclip"></i></span>
                        </div>
                        <div className="msg-subject">
                            <span className="msg-subject"><strong id="fake-subject-1">{}</strong></span>
                        </div>
                        <div className="msg-snippet">
                            <p id="fake-snippet-1">{this.props.message}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        );
      }
    }
   
    export default InboxInject;