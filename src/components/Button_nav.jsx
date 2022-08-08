import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
const Button_nav = ({}) => {
      return(
      <>
            <div className="Button">
                  <div className="Pagehead">Button</div>
                  <div className="ButtonGroupType1">
                        <div className="ButtonGroup1">
                              <p>{"<Button/>"}</p>
                              <Button style={{"backgroundColor" : "#E0E0E0" , "color": "#000"}}>Default</Button>
                        </div>
                        <div className="ButtonGroup1">
                              <p>{"&:hover, &:focus"}</p>
                              <Button style={{"backgroundColor" : "#AEAEAE" , "color": "#000"}}>Default</Button>
                        </div>
                        <div className="ButtonGroup1">
                              <p>{`<Button variant = "outline"/>`}</p>
                              <Button variant="outlined">Default</Button>
                        </div>
                        <div className="ButtonGroup1">
                              <p>{"&:hover, &:focus"}</p>
                              <Button variant="outlined" style={{"backgroundColor" : "#EAEFFF"}}>Default</Button>
                        </div>
                        <div className="ButtonGroup1">
                              <p>{`<Button variant="text">`}</p>
                              <Button variant="text">Default</Button>
                        </div>
                        <div className="ButtonGroup1">
                              <p>{"&:hover, &:focus"}</p>
                              <Button variant="text"style={{"backgroundColor" : "#EAEFFF"}}>Default</Button>
                        </div>
                  </div>
                  <div className="ButtonGroup2">
                        <p>{`<Button disableShadow/>`}</p>
                        <Button variant="contained">Default</Button>
                  </div>
                  <div className="ButtonType2">
                        <div className="ButtonGroup1">
                              <p>{`<Button disabled/>`}</p>
                              <Button variant="contained" disabled>Default</Button>
                        </div>
                        <div className="ButtonGroup1">
                              <p>{`<Button variant="text" disabled/>`}</p>
                              <Button variant="text"disabled>Default</Button>
                        </div>
                  </div>
                  <div className="ButtonType2">
                        <div className="ButtonGroup1">
                              <p>{`<Button startIcon={<AddShoppingCartIcon/>}/>`}</p>
                              <Button variant="contained"startIcon={<AddShoppingCartIcon/>}>Default</Button>
                        </div>
                        <div className="ButtonGroup1">
                              <p>{`<Button endIcon = {<AddShoppingCartIcon/>}/>`}</p>
                              <Button variant="contained" endIcon = {<AddShoppingCartIcon/>}>Default</Button>
                        </div>
                  </div>
                  <div className="ButtonType3">
                        <div className="ButtonGroup1">
                                    <p>{`<Button size="sm"/>`}</p>
                                    <Button variant="contained" size="small">Default</Button>
                        </div>
                        <div className="ButtonGroup1">
                                    <p>{`<Button size="md"/>`}</p>
                                    <Button variant="contained" size="medium">Default</Button>
                        </div>
                        <div className="ButtonGroup1">
                                    <p>{`<Button size="lg"/>`}</p>
                                    <Button variant="contained" size="large">Default</Button>
                        </div>
                  </div>
                  <div className="ButtonType4">
                        <div className="ButtonGroup1">
                                    <p>{`<Button color="default"/>`}</p>
                                    <Button variant="contained" style={{"backgroundColor" : "#E0E0E0" , "color": "#535353"}}>Default</Button>
                        </div>
                        <div className="ButtonGroup1">
                                    <p>{`<Button color="primary"/>`}</p>
                                    <Button variant="contained">Default</Button>
                        </div>
                        <div className="ButtonGroup1">
                                    <p>{`<Button color="Secondary"/>`}</p>
                                    <Button variant="contained" style={{"backgroundColor" : "rgb(69, 90, 100)" , "color": "#fff"}}>Secondary</Button>
                        </div>
                        <div className="ButtonGroup1">
                                    <p>{`<Button color="danger"/>`}</p>
                                    <Button variant="contained" style={{"backgroundColor" : "#D32F2F" , "color": "#fff"}}>Danger</Button>
                        </div>
                  </div>
                  <div className="ButtonType4">
                        <div className="ButtonGroup1">
                                    <p>{`&:hover, &:focus`}</p>
                                    <Button variant="contained" style={{"backgroundColor" : "#AEAEAE" , "color": "#535353"}}>Default</Button>
                        </div>
                        <div className="ButtonGroup1">
                                    <Button variant="contained"style={{"backgroundColor" : "#0039CB" , "color": "#fff"}}>Default</Button>
                        </div>
                        <div className="ButtonGroup1">
                                    
                                    <Button variant="contained" style={{"backgroundColor" : "#1C313A" , "color": "#fff"}}>Secondary</Button>
                        </div>
                        <div className="ButtonGroup1">
                                    
                                    <Button variant="contained" style={{"backgroundColor" : "#9A0007" , "color": "#fff"}}>Danger</Button>
                        </div>
                  </div>
                  <div className="footer add">Created by Sayo1305-DevChallenges.io</div>
            </div>
            </>
      );
}

export default Button_nav;