import { useState, useEffect } from 'react';
import lostRole from '../data/building.json';
import { set } from 'mongoose';
interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity: string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);
 useEffect(() => {
   
   setBuildingData(lostRole as unknown as Floor[]);
 },[])

 
  const getFloorByIndex = (floorIndex: number): Floor | undefined => {
    return lostRole[floorIndex] as unknown as Floor
  }
  const getListOfActivities = (): string[] => {
    return lostRole.map(x => x.activity)
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
