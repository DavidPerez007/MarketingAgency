// This file will help to connect react component with Redux global state

import { connect } from "react-redux"; // to connect to redux variables

function Layout({children}){
    return (
        <div>
            {children}
        </div>
    )
} 
const mapStateToProp = state => ({

})
// This inserts state and actions into Layout
export default connect(mapStateToProp, {

}) (Layout)