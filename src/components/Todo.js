import React from 'react'
import { add, toggle, del, update } from "../redux/actions"
import { connect } from 'react-redux'
import { TextField, Grid, Fab} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: ''
        }
    }
    changeHandler = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }
    addItem=()=>{
        if(this.state.inputText!=''){
            let date=new Date()
            let obj={
                itemName:this.state.inputText,
                id:date.getTime(),
                completed:false
            }
            this.props.add(obj)
            this.setState({
                inputText:''
            })
        }
    }
    updatingElement=(e)=>{
        var entry = prompt("Update the entry:",e.itemName);
        if (entry == null || entry == "") {
            console.log("User cancelled the prompt.")
        } else {
            this.props.update({...e,itemName:entry})
        }
    }
    render() {
        return (
            <div>
                <div>
                    <Grid container >
                        <Grid item className='ml-5' xs={6}>
                            <TextField onChange={this.changeHandler} fullWidth label="+ Add a task..." variant="outlined" defaultValue={this.state.inputText} />
                        </Grid>
                            <Grid item xs={2}>
                                <Fab color="secondary" aria-label="add">
                                   <AddIcon onClick={this.addItem} />
                                </Fab>
                            </Grid>
                    </Grid>
                </div>
                <div className='d-flex flex-column my-5 text-center'>
                    <div>
                        <h3 className='text-left mx-5' style={{fontFamily:'Righteous'}}>Tasks To-do</h3>
                            {this.props.value.map(e => e.completed === false ?
                            <div key={e.itemName} className='d-flex ml-2 ml-sm-5'>
                                <div className='btn' onClick={() => this.props.toggle(e.itemName)}><i className="material-icons mx-2">check_circle</i></div>
                                <p className='col-6 col-sm-4' style={{fontFamily:'Acme'}}>{e.itemName}</p>
                                <div onClick={()=>this.updatingElement(e)} className='btn'>
                                    <i className="material-icons mx-2">edit</i>
                                </div>
                                <div className='btn' onClick={() => this.props.del(e.itemName)}><i className="material-icons">delete</i></div>
                            </div>
                            :
                            <p key={e.itemName}></p>
                        )}
                    </div>
                    <div>
                        <h3 className='text-left mx-5' style={{fontFamily:'Righteous'}}>Tasks Completed</h3>
                        {this.props.value.map(e => e.completed === true ?
                            <div key={e.itemName} className='d-flex ml-2 ml-sm-5'>
                                <div className='btn' onClick={() => this.props.toggle(e.itemName)}><i className="material-icons mx-2">settings_backup_restore</i></div>
                                <p className='col-6 col-sm-4 text-danger'><s>{e.itemName}</s></p>
                                <div className='btn' onClick={() => this.props.del(e.itemName)}><i className="material-icons">delete</i></div>
                            </div>
                            :
                            <p key={e.itemName}></p>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { value: state.todoList }
}
const mapDispatchToProps = dispatch => {
    return {
        add: (a) => dispatch(add(a)),
        toggle: (b) => dispatch(toggle(b)),
        del: (c) => dispatch(del(c)),
        update: (d) => dispatch(update(d))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)