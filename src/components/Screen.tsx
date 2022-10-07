import React, { SetStateAction } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

type propsType = {
  classNScreen: string;
}

export default function Screen({classNScreen}: propsType){

  const screen = useSelector((st: RootState) => st.screenReducer.screen)

  return(
    <div className={`screen ${classNScreen}`}>
      <h2>{screen}</h2>
    </div>
  )
}