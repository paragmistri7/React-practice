import { connect } from "react-redux";

import Homer from "../components/home";
import { addtocart } from "../service/actions/actions";

const mapStateToProps = state => ({
    carddata  : state
})

const mapDispatchToPrpos = dispatch => ({
    addtocarthandler : data => dispatch (addtocart(data))
})

export default connect(mapStateToProps ,mapDispatchToPrpos ) (Homer)

// export default Homer