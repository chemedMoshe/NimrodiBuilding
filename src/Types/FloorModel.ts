export enum Permission {
    NoAccess = "NoAccess",
    Access = "Access"
}
export default interface FloorModel {
    name: string;
   ispermission: boolean;
   permission:Permission
}