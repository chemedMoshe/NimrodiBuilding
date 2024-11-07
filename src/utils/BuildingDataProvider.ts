import { useState, useEffect } from 'react';
import lostRole from '../data/roles.json';
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

  setBuildingData(lostRole as unknown as Floor[]);


  const getFloorByIndex = (floorIndex: number): Floor | undefined => {
    return lostRole[floorIndex] as unknown as Floor
  }
  const getListOfActivities = (): string[] => {
    //FILL HERE
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
