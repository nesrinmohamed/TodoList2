import React, { Component } from 'react'

class CourseList extends Component {
    state ={
        isEdit: false
    }
// render course
renderCourse = () =>{
    return(
        <li>
        <span>{this.props.details.name}</span>
        <button onClick={() =>{this.toggleState()}}>Edit</button>
        <button onClick={() =>{this.props.deleteCourse(this.props.index)}}>Delete course</button>
        </li>
    )
 
}
// togllecourse
toggleState = () =>{
let {isEdit} = this.state
this.setState({
    isEdit: !isEdit
})
}
updateCourse = (e) =>{
e.preventDefault();
this.props.editCourse(this.props.index , this.input.value);
this.toggleState();
}

//render updateForm
 renderUpdateForm =() =>{
    return (
      <form onSubmit={this.updateCourse} >
          <input type="text"  ref={(v)=>{this.input = v}} defaultValue={this.props.details.name} />
          <button >Update Course</button>
      </form>
        )
}

render (){
    let {isEdit} = this.state;
return(
<>
{ isEdit ? this.renderUpdateForm () : this.renderCourse() }
</>
)
}
}

export default CourseList