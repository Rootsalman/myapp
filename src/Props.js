import React from 'react'

function Welcome(props) {
    return (
        <div>
            <h1>Welcome {props.name}<br></br>
                {props.collage}<br></br>
                {props.Branch}<br></br>
                {props.Usn}<br></br></h1>
        </div>
    );
}

function Props() {
    return (
        <div>
            < Welcome name="salman" collage=" collage:MITK" Branch="Branch:CSE" Usn="Usn:4MK19CS046" />
        </div>
    );
}
export default Props