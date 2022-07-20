
import React from 'react';
import { Button } from 'antd';
import {Upload} from 'antd';
import "antd/dist/antd.css";
export default function Uploa() {

  return (
    <>
    <div  

    style={
      {
       
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    Height:"1000vh",
  }
}
    >
  <Upload.Dragger multiple={true} listType="picture" action={"http://localhost:3000/"} accept=".pdf"
  //  defaultFileList={[{
  //   uid:"abc",
  //   name:"existing.File.pdf",
  //   http:"https://www.google.com",
  // },]}
  // iconRender={()=>{
  //   return <Spin></Spin>;
  // }
  // }
  >
    Drag Your Books Here -
    <Button>Upload</Button>
  </Upload.Dragger>
  </div> 
  </>
  )
}