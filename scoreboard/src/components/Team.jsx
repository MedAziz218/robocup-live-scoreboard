import React from "react";
import { Pressable } from "react-zoomable-ui";

const SimpleTapCountingButton = React.memo(() => {
  const [tapCount, setTapCount] = React.useState(0);
  const [message, setMessage] = React.useState("TAP ME");
  return (
    <Pressable
      style={{
        fontSize: "small",
        color: "white",
        backgroundColor: "darkorchid",
        height: "10px",
      }}
      potentialTapStyle={{ backgroundColor: "blue" }}
      potentialLongTapStyle={{ backgroundColor: "darkblue" }}
      hoverStyle={{ backgroundColor: "orchid" }}
      onTap={() => {
        setTapCount(tapCount + 1);
        setMessage(tapCount + 1);
      }}
      onLongTap={() => {
        setMessage("LONG TAPPED!");
      }}
    >
      {message}
    </Pressable>
  );
});

const Team = ({ team_name , robot_name,index=null}) => {
  const neutral_color = "bg-AREbeige"
  const win_color = "bg-green-400"
  const loose_color = "bg-red-400"
  const [winState,setWinState] = React.useState(0)
  
  const onTap = () => {
    setWinState(winState==0 ? 1: winState==1? 2: 0 )
  }
  const color = winState==1 ? win_color: winState==2? loose_color: neutral_color 
  const opacity = winState==1 ? 'opacity-90': winState==2? 'opacity-20': 'opacity-90' 
  return (
    <div className={`bg-AREyellow text-black w-64 border-2 border-gray-800 flex justify-between ${opacity}`}>
     {index&& <p className="flex justify-center items-center bg-AREbeige w-8 font-bold">{index}</p>}
      
      { team_name&&robot_name ?<p className="w-60 flex justify-left items-center pl-2 font-bold">{`[${team_name}] ${robot_name}`}</p>:
      <p className="w-60 flex justify-left items-center pl-2 font-bold"></p>}
      {/* <SimpleTapCountingButton/> */}
      <Pressable
        className={color}
        // hoverStyle={{ backgroundColor: "orchid" }}
        style={{
            // backgroundColor:color
        }}
        hoverStyle={{cursor:'pointer'}}
        onTap={() => {
          // console.log("holll");
        //   setWinState(! winState);
        onTap()
        }}
      >
        <p className="flex justify-center items-center  w-8 "></p>
      </Pressable>
    </div>
  );
};

export default Team;
