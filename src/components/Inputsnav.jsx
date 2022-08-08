import React, { useState } from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import Input from '@mui/material/Input';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
const Inputsnav = ({})=>{
      const [Isfocus , Setisfocus] = useState(true);
      const [TextInput , SetTextInput] = useState("text");
      const [TextInput1 , SetTextInput1] = useState("text");
      const handle_focus = ()=>{
            Isfocus === true ? (
                  document.querySelector('.sp').classList.add("focus")
            ):
            (
                  document.querySelector('.sp').classList.remove("focus")
            );
            Setisfocus(!Isfocus);
      }
      const handle_change = (e)=>{
            SetTextInput(e.target.value);
      }
      const handle_change1 = (e)=>{
            SetTextInput1(e.target.value);
      }
      return(
            <>
            <div className="inputs">
                  <div className='Pagehead'>Inputs</div>
                  <div className="InputGroup1">
                        <div className="Inputs_Box"> 
                              <p>{`<Input/>`}</p>
                              <label>label</label>
                              <input placeholder="Placeholder" className="InputTag"></input>
                        </div>
                        <div className="Inputs_Box"> 
                              <p>{`&:hover`}</p>
                              <label>label</label>
                              <input placeholder="Placeholder" className="InputTag"></input>
                        </div>
                        <div className="Inputs_Box"> 
                              <p>{`&:focus`}</p>
                              <label style={{"color": "blue"}}>label</label>
                              <input placeholder="Placeholder" className="InputTag sp" onMouseEnter={handle_focus} onMouseLeave={handle_focus}></input>
                        </div>
                  </div>
                  <div className="InputGroup1">
                        <div className="Inputs_Box"> 
                              <p>{`<Input error/>`}</p>
                              <label style={{"color": "rgb(195, 3, 3) "}}>label</label>
                              <input error placeholder="Placeholder" className="InputTag error"></input>
                        </div>
                        <div className="Inputs_Box"> 
                              <p>{`&:hover`}</p>
                              <label style={{"color": "rgb(195, 3, 3) "}}>label</label>
                              <input placeholder="Placeholder" className="InputTag error"></input>
                        </div>
                        <div className="Inputs_Box"> 
                              <p>{`&:focus`}</p>
                              <label style={{"color": "rgb(195, 3, 3) "}}>label</label>
                              <input placeholder="Placeholder" className="InputTag error"></input>
                        </div>
                  </div>
                  <div className="InputGroup1">
                        <div className="Inputs_Box"> 
                              <p>{`<Input disabled/>`}</p>
                              <label>label</label>
                              <input disabled placeholder="Placeholder" className="InputTag mouseerror"></input>
                        </div>
                  </div>
                  <div className="InputGroup1">
                        <div className="Inputs_Box"> 
                              <p>{`<Input helperText="Some interesting text" />`}</p>
                              <label>label</label>
                              <input  placeholder="Placeholder"   className="InputTag " ></input>
                              <div className="helpertext">Some interesting text</div>
                        </div>
                        <div className="Inputs_Box"> 
                              <p>{`<Input helperText="Some interesting text" />`}</p>
                              <label style={{"color": "rgb(195, 3, 3) "}}>label</label>
                              <input  placeholder="Placeholder" className="InputTag error" ></input>
                              <div className="helpertext" style={{"color": "rgb(195, 3, 3) "}}>Some interesting text</div>
                        </div>
                  </div>
                  <div className="InputGroup1">
                        <div className="Inputs_Box"> 
                              <p>{`<Input StartIcon />`}</p>
                              <label>label</label>
                              <Input  className="InputTag"
                              startAdornment={
                              <InputAdornment position="start">
                                    <PhoneIcon />
                              </InputAdornment>}/>
                        </div>
                        <div className="Inputs_Box"> 
                              <p>{`<Input endIcon />`}</p>
                              <label>label</label>
                              <Input  className="InputTag"
                              endAdornment={
                              <InputAdornment position="end">
                                    <LockIcon />
                              </InputAdornment>}/>
                        </div>
                  </div>
                  <div className="InputGroup1">
                        <div className="Inputs_Box"> 
                              <p>{`<Input value="text" />`}</p>
                              <label>label</label>
                              <input value={TextInput} onChange={handle_change} placeholder="Placeholder"   className="InputTag " ></input>
                        </div>
                  </div>
                  <div className="InputGroup1">
                        <div className="Inputs_Box"> 
                              <p>{`<Input size="sm" />`}</p>
                              <label>label</label>
                              <input  placeholder="Placeholder"   className="InputTag small " ></input>
                        </div>
                        <div className="Inputs_Box"> 
                              <p>{`<Input size="md" />`}</p>
                              <label>label</label>
                              <input  placeholder="Placeholder" className="InputTag" ></input>
                        </div>
                  </div>
                  <div className="InputGroup1">
                        <div className="Inputs_Box"> 
                              <p>{`<Input fullWidth />`}</p>
                              <label>label</label>
                              <input placeholder="Placeholder" value={TextInput1} onChange={handle_change1}  className="InputTag full " ></input>
                        </div>
                  </div>
                  <div className="InputGroup1">
                        <div className="Inputs_Box"> 
                              <p>{`<Input multiline row="4" />`}</p>
                              <label>label</label>
                              <textarea placeholder="Placeholder" className="InputTag large"></textarea>
                        </div>
                  </div>
                  <div className="footer">Created by Sayo1305-DevChallenges.io</div>
            </div>
            </>
      );
}

export default Inputsnav;