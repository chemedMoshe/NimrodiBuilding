import roles from "../data/roles.json";
interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
 console.log(activity, role, activities);
const indexRole =roles.findIndex(x => x === role);
return indexRole >= activities.findIndex(x => x === activity);


 

 
};

export default useIsVerified;
