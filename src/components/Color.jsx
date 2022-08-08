import React from 'react';
import { red , pink , purple } from './ColorDatabases'; 
import ColorTable from './ColorTable';
const Color = ({props}) => {
      return (
            <div className='Color'>
                  <div className='Pagehead'>Color</div>
                  <div className='ColorGrid'>
                        <div>
                              <div className='ColorElementHead'>
                                    Red
                              </div>
                              <div className='ColorSub'>
                              {
                                    red.map( r=>(
                                          <ColorTable color={r}></ColorTable>
                                    ))
                              }
                              </div>
                        </div>
                        <div>
                              <div className='ColorElementHead' style={{"backgroundColor": "Pink"}}>
                                    Pink
                              </div>
                              <div className='ColorSub'>
                              {
                                    pink.map( r=>(
                                          <ColorTable color={r}></ColorTable>
                                    ))
                              }
                              </div>
                        </div>
                        <div>
                              <div className='ColorElementHead' style={{"backgroundColor": "#9c27b0"}}>
                                    purple
                              </div>
                              <div className='ColorSub'>
                              {
                                    purple.map( r=>(
                                          <ColorTable color={r}></ColorTable>
                                    ))
                              }
                              </div>
                        </div>
                  </div>
                  <div className="footer add">Created by Sayo1305-DevChallenges.io</div>
            </div>
      );
};



export default Color;