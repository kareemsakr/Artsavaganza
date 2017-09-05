import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Dropzone from 'react-dropzone'
import {Button, Form, FormGroup, Label, Row, Col, Input, FormFeedback} from 'reactstrap';


let NewPostForm = props => {
   const { handleSubmit } = props

   const required = value => (value ? undefined : 'Required')

  return (
    <Form onSubmit={ handleSubmit }>
        <Field name="title" component={renderField} type="text" className="form-control" label="Post Title" />
        <Field name="description" component={renderField} type="textarea" className="form-control" label="Description" />
        <Field name="tags" component={renderField} type="text" className="form-control" label="Tags" />
        <Field
        className="form-control"
        name="images"
        component={renderDropzoneInput}
        />
      <Button type="submit">Submit</Button>
    </Form>
  )
}

function validate(values){
    const errors = {}
    if(!values.title) errors.title = 'Required';
    if(!values.description) errors.description = 'Required';
    if(!values.tags) errors.tags = 'Required';
    if(!values.images || values.images === {}) errors.images = 'Required';

    return errors;
}

NewPostForm = reduxForm({
  // a unique name for the form
  form: 'new_Post',
  validate
})(NewPostForm)

export default NewPostForm;






const renderDropzoneInput = (field) => {
  const files = field.input.value;
  const {error, touched} = field.meta; 
  return (
      <FormGroup color={error&&touched?"danger":''}>
        <Label htmlFor="images">Files</Label>
    <div>
      <Dropzone
        name={field.name}
        onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
        style={dropzoneStyle}
      >
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
      {field.meta.touched &&
        field.meta.error &&
        <FormFeedback>{field.meta.error}</FormFeedback>}
      {files && Array.isArray(files) && (
        <Row>
          { files.map((file, i) => <Col xs="2" key={i}><img src={file.preview}  className="thumbnail"/></Col> ) }
        </Row>
      )}
    </div>
    </FormGroup>
  );
}

const dropzoneStyle = {
    width  : "80%",
    height : "30%",
    border : "2px dashed black",
    borderRadius : "25px",
    "padding": "20px" ,
    margin : "0px 0px 20px 0px",
    "marginLeft":"auto",
    "marginRight":"auto" ,
    display:"block"
    
};

const imgPrevStyle = {
    "margin-left":"auto",
    "margin-right":"auto" ,
    display:"block"
}


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) =>
  <FormGroup color={error&&touched?"danger":''}>
    <Label>
      {label}
    </Label>
    <div >
      <Input {...input} placeholder={label} type={type} className="form-control" />
      <FormFeedback>
      {touched &&
        ((error &&
          <span>
            {error}
          </span>) ||
          (warning &&
            <span>
              {warning}
            </span>))}
        </FormFeedback>
    </div>
  </FormGroup>


