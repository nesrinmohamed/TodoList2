import React, { Component } from 'react'
import './App.css'
import CourseForm from './components/CourseForm'
import CourseList from './components/CourseList'
 class App extends Component {

     state ={
        courses:[
            {name:"Html"},
            {name:"css"},
            {name:"js"},
        ],
        current: ''
     }

// update course 
updateCourse = (e) =>{;
  this.setState({
      current: e.target.value
  })
}

// add course 
addCourse = (e) =>{
    e.preventDefault();
    let {current} = this.state;
    let courses = this.state.courses
    courses.push({name:current})
    this.setState({
        courses,
        current: ''
    })

}

//deletECourse
deleteCourse = (index) =>{
    let {courses} = this.state;
    courses.splice(index , 1);
    this.setState(
        {courses}
    )
}

//editCourse
editCourse =(index , value) =>{
    let {courses} = this.state;
    let course = courses[index];
    course['name'] = value;
    this.setState({
        courses
    })
}

render(){
   
  const {courses} = this.state;
  const courseList = courses.map((course , index)=>{
      return <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
  }) 
    return(
        <section className='App'>
            <h2>Add Courses</h2>
         <CourseForm updateCourse={this.updateCourse}   addCourse={this.addCourse} current={this.state.current}  />
        <ul>{courseList}</ul>
        </section>
    )
}

}
export default App
