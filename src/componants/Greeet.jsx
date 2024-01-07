import React ,{Component} from 'react';
class Greeet extends Component{
    render(){
        var myStyle={
            fontsize:500
            
        }
        return(
            <div>
            <p style={myStyle}>hello my name is</p>
            
            </div>
        );
    }
}
export default Greeet